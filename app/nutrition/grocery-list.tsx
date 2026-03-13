/**
 * Grocery List — add, check-off, and manage grocery items by category.
 */

import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Alert,
  SectionList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GlassCard } from '../../src/components/GlassCard';
import { GradientButton } from '../../src/components/GradientButton';
import {
  Colors,
  Spacing,
  FontSizes,
  BorderRadius,
} from '../../src/constants/theme';
import { useGroceryStore } from '../../src/store/useGroceryStore';
import type { GroceryCategory, GroceryItem } from '../../src/types/fitness';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CATEGORIES: { key: GroceryCategory; label: string; icon: string }[] = [
  { key: 'produce', label: 'Produce', icon: 'leaf-outline' },
  { key: 'protein', label: 'Protein', icon: 'fish-outline' },
  { key: 'dairy', label: 'Dairy', icon: 'water-outline' },
  { key: 'grains', label: 'Grains', icon: 'nutrition-outline' },
  { key: 'supplements', label: 'Supplements', icon: 'flask-outline' },
  { key: 'other', label: 'Other', icon: 'basket-outline' },
];

const CATEGORY_COLORS: Record<GroceryCategory, string> = {
  produce: Colors.success,
  protein: Colors.rose,
  dairy: Colors.powder,
  grains: Colors.warning,
  supplements: Colors.pepTeal,
  other: Colors.darkTextSecondary,
};

// ---------------------------------------------------------------------------
// Category Picker
// ---------------------------------------------------------------------------

function CategoryPicker({
  selected,
  onSelect,
}: {
  selected: GroceryCategory;
  onSelect: (cat: GroceryCategory) => void;
}) {
  return (
    <View style={styles.catRow}>
      {CATEGORIES.map((c) => (
        <TouchableOpacity
          key={c.key}
          style={[
            styles.catChip,
            selected === c.key && {
              backgroundColor: CATEGORY_COLORS[c.key] + '30',
              borderColor: CATEGORY_COLORS[c.key],
            },
          ]}
          onPress={() => onSelect(c.key)}
        >
          <Ionicons
            name={c.icon as any}
            size={14}
            color={
              selected === c.key
                ? CATEGORY_COLORS[c.key]
                : Colors.darkTextSecondary
            }
          />
          <Text
            style={[
              styles.catChipText,
              selected === c.key && { color: CATEGORY_COLORS[c.key] },
            ]}
          >
            {c.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Grocery Item Row
// ---------------------------------------------------------------------------

function GroceryRow({
  item,
  onToggle,
  onDelete,
}: {
  item: GroceryItem;
  onToggle: () => void;
  onDelete: () => void;
}) {
  return (
    <View style={styles.itemRow}>
      <TouchableOpacity onPress={onToggle} style={styles.checkArea}>
        <Ionicons
          name={item.checked ? 'checkbox' : 'square-outline'}
          size={22}
          color={item.checked ? Colors.success : Colors.darkTextSecondary}
        />
      </TouchableOpacity>
      <View style={styles.itemInfo}>
        <Text
          style={[
            styles.itemName,
            item.checked && styles.itemNameChecked,
          ]}
        >
          {item.name}
        </Text>
        {item.addedFrom ? (
          <Text style={styles.itemSource}>from {item.addedFrom}</Text>
        ) : null}
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
        <Ionicons name="trash-outline" size={18} color={Colors.error} />
      </TouchableOpacity>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Main Screen
// ---------------------------------------------------------------------------

export default function GroceryListScreen() {
  const router = useRouter();
  const { items, addItem, removeItem, toggleItem, clearChecked, clearAll } =
    useGroceryStore();
  const [newName, setNewName] = useState('');
  const [category, setCategory] = useState<GroceryCategory>('produce');

  // Group items by category
  const sections = useMemo(() => {
    const grouped: Record<string, GroceryItem[]> = {};
    for (const item of items) {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    }
    return CATEGORIES.filter((c) => grouped[c.key]?.length)
      .map((c) => ({
        title: c.label,
        icon: c.icon,
        color: CATEGORY_COLORS[c.key],
        data: grouped[c.key],
      }));
  }, [items]);

  const checkedCount = items.filter((i) => i.checked).length;

  const handleAdd = () => {
    const name = newName.trim();
    if (!name) return;
    addItem(name, category);
    setNewName('');
  };

  const handleDelete = (id: string) => {
    Alert.alert('Remove Item', 'Delete this from your list?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => removeItem(id) },
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={Colors.darkText} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Grocery List</Text>
        <View style={styles.backBtn} />
      </View>

      {/* Add Item Input */}
      <View style={styles.addSection}>
        <GlassCard>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
              placeholder="Add an item..."
              placeholderTextColor={Colors.darkTextSecondary}
              onSubmitEditing={handleAdd}
              returnKeyType="done"
            />
            <TouchableOpacity
              style={[
                styles.addBtn,
                !newName.trim() && styles.addBtnDisabled,
              ]}
              onPress={handleAdd}
              disabled={!newName.trim()}
            >
              <Ionicons name="add" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
          <CategoryPicker selected={category} onSelect={setCategory} />
        </GlassCard>
      </View>

      {/* List */}
      {items.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons
            name="cart-outline"
            size={64}
            color={Colors.darkTextSecondary}
          />
          <Text style={styles.emptyTitle}>Your list is empty</Text>
          <Text style={styles.emptyDesc}>
            Add items above to start building your grocery list
          </Text>
        </View>
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Ionicons
                name={(section as any).icon as any}
                size={16}
                color={(section as any).color}
              />
              <Text
                style={[
                  styles.sectionTitle,
                  { color: (section as any).color },
                ]}
              >
                {section.title}
              </Text>
              <Text style={styles.sectionCount}>{section.data.length}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <GroceryRow
              item={item}
              onToggle={() => toggleItem(item.id)}
              onDelete={() => handleDelete(item.id)}
            />
          )}
          stickySectionHeadersEnabled={false}
        />
      )}

      {/* Bottom actions */}
      {checkedCount > 0 && (
        <View style={styles.bottomBar}>
          <GradientButton
            label={`Clear Completed (${checkedCount})`}
            onPress={() =>
              Alert.alert(
                'Clear Completed',
                `Remove ${checkedCount} checked item${checkedCount > 1 ? 's' : ''}?`,
                [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Clear', onPress: clearChecked },
                ],
              )
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.darkBg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: Colors.darkText,
  },

  // Add section
  addSection: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    paddingHorizontal: 14,
    height: 44,
    fontSize: FontSizes.md,
    color: Colors.darkText,
  },
  addBtn: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.pepTeal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnDisabled: {
    opacity: 0.35,
  },

  // Category chips
  catRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  catChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  catChipText: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    fontWeight: '500',
  },

  // List
  listContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: 120,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  sectionTitle: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  sectionCount: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    fontWeight: '500',
  },

  // Item row
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    padding: 12,
    marginBottom: 6,
    gap: 10,
  },
  checkArea: {
    padding: 2,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: FontSizes.md,
    color: Colors.darkText,
    fontWeight: '500',
  },
  itemNameChecked: {
    textDecorationLine: 'line-through',
    color: Colors.darkTextSecondary,
  },
  itemSource: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    marginTop: 2,
  },
  deleteBtn: {
    padding: 6,
  },

  // Empty state
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
    gap: 12,
  },
  emptyTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.darkText,
  },
  emptyDesc: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },

  // Bottom bar
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    paddingBottom: Spacing.xl,
    backgroundColor: Colors.darkBg,
    borderTopWidth: 1,
    borderTopColor: Colors.glassBorder,
  },
});
