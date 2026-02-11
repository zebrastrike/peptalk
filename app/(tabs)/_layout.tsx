import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

type TabIconName = React.ComponentProps<typeof Ionicons>['name'];

interface TabConfig {
  name: string;
  title: string;
  icon: TabIconName;
  activeIcon: TabIconName;
}

const TAB_CONFIG: TabConfig[] = [
  {
    name: 'index',
    title: 'Library',
    icon: 'library-outline',
    activeIcon: 'library',
  },
  {
    name: 'stack-builder',
    title: 'Stack Builder',
    icon: 'flask-outline',
    activeIcon: 'flask',
  },
  {
    name: 'my-stacks',
    title: 'My Stacks',
    icon: 'layers-outline',
    activeIcon: 'layers',
  },
  {
    name: 'feed',
    title: 'Feed',
    icon: 'newspaper-outline',
    activeIcon: 'newspaper',
  },
  {
    name: 'profile',
    title: 'Profile',
    icon: 'person-outline',
    activeIcon: 'person',
  },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e3a7a1',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      {TAB_CONFIG.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? tab.activeIcon : tab.icon}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0f1720',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    paddingBottom: 4,
    paddingTop: 4,
    height: 60,
    elevation: 0,
    shadowOpacity: 0,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
