/**
 * Built-in offline food database with USDA-accurate macros per 100g.
 * ~120 common foods organized by category.
 */

export interface BuiltinFood {
  id: string;
  name: string;
  category: 'protein' | 'carbs' | 'fats' | 'dairy' | 'fruits' | 'vegetables' | 'grains' | 'supplements';
  per100g: {
    calories: number;
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
    fiberGrams: number;
  };
  commonServings: { label: string; grams: number }[];
  emoji: string;
}

export const COMMON_FOODS: BuiltinFood[] = [
  // ---------------------------------------------------------------------------
  // PROTEIN
  // ---------------------------------------------------------------------------
  {
    id: 'chicken-breast',
    name: 'Chicken Breast',
    category: 'protein',
    per100g: { calories: 165, proteinGrams: 31, carbsGrams: 0, fatGrams: 3.6, fiberGrams: 0 },
    commonServings: [
      { label: '3 oz (small)', grams: 85 },
      { label: '4 oz', grams: 113 },
      { label: '6 oz (medium)', grams: 170 },
      { label: '8 oz (large)', grams: 227 },
    ],
    emoji: '🍗',
  },
  {
    id: 'salmon-fillet',
    name: 'Salmon (Atlantic, cooked)',
    category: 'protein',
    per100g: { calories: 208, proteinGrams: 20, carbsGrams: 0, fatGrams: 13, fiberGrams: 0 },
    commonServings: [
      { label: '3 oz fillet', grams: 85 },
      { label: '6 oz fillet', grams: 170 },
      { label: '8 oz fillet', grams: 227 },
    ],
    emoji: '🐟',
  },
  {
    id: 'tuna-canned',
    name: 'Tuna (canned in water)',
    category: 'protein',
    per100g: { calories: 116, proteinGrams: 25.5, carbsGrams: 0, fatGrams: 0.8, fiberGrams: 0 },
    commonServings: [
      { label: '1 can (5 oz)', grams: 142 },
      { label: '3 oz', grams: 85 },
      { label: 'Half can', grams: 71 },
    ],
    emoji: '🐟',
  },
  {
    id: 'beef-lean-93',
    name: 'Ground Beef (93% lean)',
    category: 'protein',
    per100g: { calories: 152, proteinGrams: 22, carbsGrams: 0, fatGrams: 7, fiberGrams: 0 },
    commonServings: [
      { label: '3 oz patty', grams: 85 },
      { label: '4 oz patty', grams: 113 },
      { label: '6 oz serving', grams: 170 },
    ],
    emoji: '🥩',
  },
  {
    id: 'pork-loin',
    name: 'Pork Loin (cooked)',
    category: 'protein',
    per100g: { calories: 187, proteinGrams: 26, carbsGrams: 0, fatGrams: 9, fiberGrams: 0 },
    commonServings: [
      { label: '3 oz slice', grams: 85 },
      { label: '4 oz slice', grams: 113 },
      { label: '6 oz serving', grams: 170 },
    ],
    emoji: '🥩',
  },
  {
    id: 'turkey-breast',
    name: 'Turkey Breast (cooked)',
    category: 'protein',
    per100g: { calories: 135, proteinGrams: 29, carbsGrams: 0, fatGrams: 1, fiberGrams: 0 },
    commonServings: [
      { label: '3 oz', grams: 85 },
      { label: '4 oz', grams: 113 },
      { label: '2 deli slices', grams: 56 },
    ],
    emoji: '🦃',
  },
  {
    id: 'shrimp-cooked',
    name: 'Shrimp (cooked)',
    category: 'protein',
    per100g: { calories: 99, proteinGrams: 24, carbsGrams: 0.2, fatGrams: 0.3, fiberGrams: 0 },
    commonServings: [
      { label: '3 oz (about 12 large)', grams: 85 },
      { label: '6 oz', grams: 170 },
      { label: '4 oz', grams: 113 },
    ],
    emoji: '🦐',
  },
  {
    id: 'whole-egg',
    name: 'Egg (whole)',
    category: 'protein',
    per100g: { calories: 143, proteinGrams: 12.6, carbsGrams: 0.7, fatGrams: 9.5, fiberGrams: 0 },
    commonServings: [
      { label: '1 large egg', grams: 50 },
      { label: '2 large eggs', grams: 100 },
      { label: '3 large eggs', grams: 150 },
    ],
    emoji: '🥚',
  },
  {
    id: 'egg-whites',
    name: 'Egg Whites',
    category: 'protein',
    per100g: { calories: 52, proteinGrams: 10.9, carbsGrams: 0.7, fatGrams: 0.2, fiberGrams: 0 },
    commonServings: [
      { label: '1 large egg white', grams: 33 },
      { label: '3 egg whites', grams: 99 },
      { label: '4 egg whites', grams: 132 },
      { label: '½ cup liquid', grams: 122 },
    ],
    emoji: '🥚',
  },
  {
    id: 'greek-yogurt-plain',
    name: 'Greek Yogurt (plain, non-fat)',
    category: 'protein',
    per100g: { calories: 59, proteinGrams: 10, carbsGrams: 3.6, fatGrams: 0.4, fiberGrams: 0 },
    commonServings: [
      { label: '½ cup', grams: 113 },
      { label: '¾ cup', grams: 170 },
      { label: '1 cup', grams: 227 },
      { label: '5.3 oz container', grams: 150 },
    ],
    emoji: '🫙',
  },
  {
    id: 'cottage-cheese',
    name: 'Cottage Cheese (low-fat)',
    category: 'protein',
    per100g: { calories: 72, proteinGrams: 12, carbsGrams: 2.7, fatGrams: 1, fiberGrams: 0 },
    commonServings: [
      { label: '½ cup', grams: 113 },
      { label: '1 cup', grams: 226 },
    ],
    emoji: '🫙',
  },
  {
    id: 'whey-protein',
    name: 'Whey Protein Powder',
    category: 'protein',
    per100g: { calories: 375, proteinGrams: 75, carbsGrams: 8, fatGrams: 3, fiberGrams: 0 },
    commonServings: [
      { label: '1 scoop (~30g)', grams: 30 },
      { label: '2 scoops', grams: 60 },
    ],
    emoji: '🥛',
  },
  {
    id: 'tofu-firm',
    name: 'Tofu (firm)',
    category: 'protein',
    per100g: { calories: 76, proteinGrams: 8, carbsGrams: 1.9, fatGrams: 4.8, fiberGrams: 0.3 },
    commonServings: [
      { label: '½ cup cubed', grams: 124 },
      { label: '1 cup cubed', grams: 248 },
      { label: '3 oz slab', grams: 85 },
    ],
    emoji: '⬜',
  },
  {
    id: 'edamame',
    name: 'Edamame (shelled)',
    category: 'protein',
    per100g: { calories: 122, proteinGrams: 11, carbsGrams: 9, fatGrams: 5, fiberGrams: 5 },
    commonServings: [
      { label: '½ cup', grams: 78 },
      { label: '1 cup', grams: 155 },
    ],
    emoji: '🫘',
  },

  // ---------------------------------------------------------------------------
  // GRAINS
  // ---------------------------------------------------------------------------
  {
    id: 'white-rice-cooked',
    name: 'White Rice (cooked)',
    category: 'grains',
    per100g: { calories: 130, proteinGrams: 2.7, carbsGrams: 28, fatGrams: 0.3, fiberGrams: 0.4 },
    commonServings: [
      { label: '¼ cup dry (~½ cup cooked)', grams: 90 },
      { label: '½ cup cooked', grams: 93 },
      { label: '1 cup cooked', grams: 186 },
    ],
    emoji: '🍚',
  },
  {
    id: 'brown-rice-cooked',
    name: 'Brown Rice (cooked)',
    category: 'grains',
    per100g: { calories: 123, proteinGrams: 2.6, carbsGrams: 26, fatGrams: 1, fiberGrams: 1.8 },
    commonServings: [
      { label: '½ cup cooked', grams: 98 },
      { label: '1 cup cooked', grams: 195 },
    ],
    emoji: '🍚',
  },
  {
    id: 'oats-dry',
    name: 'Oats (rolled, dry)',
    category: 'grains',
    per100g: { calories: 389, proteinGrams: 17, carbsGrams: 66, fatGrams: 7, fiberGrams: 10.6 },
    commonServings: [
      { label: '¼ cup dry', grams: 20 },
      { label: '½ cup dry (1 serving)', grams: 40 },
      { label: '¾ cup dry', grams: 60 },
    ],
    emoji: '🌾',
  },
  {
    id: 'quinoa-cooked',
    name: 'Quinoa (cooked)',
    category: 'grains',
    per100g: { calories: 120, proteinGrams: 4.4, carbsGrams: 21.3, fatGrams: 1.9, fiberGrams: 2.8 },
    commonServings: [
      { label: '½ cup cooked', grams: 93 },
      { label: '1 cup cooked', grams: 185 },
    ],
    emoji: '🌾',
  },
  {
    id: 'sweet-potato',
    name: 'Sweet Potato (baked)',
    category: 'grains',
    per100g: { calories: 90, proteinGrams: 2, carbsGrams: 21, fatGrams: 0.1, fiberGrams: 3.3 },
    commonServings: [
      { label: '1 small (4 oz)', grams: 113 },
      { label: '1 medium (6 oz)', grams: 170 },
      { label: '1 large (8 oz)', grams: 227 },
    ],
    emoji: '🍠',
  },
  {
    id: 'white-potato',
    name: 'White Potato (baked)',
    category: 'grains',
    per100g: { calories: 93, proteinGrams: 2.5, carbsGrams: 21, fatGrams: 0.1, fiberGrams: 2.2 },
    commonServings: [
      { label: '1 small (5 oz)', grams: 142 },
      { label: '1 medium (7 oz)', grams: 199 },
      { label: '1 large (10 oz)', grams: 284 },
    ],
    emoji: '🥔',
  },
  {
    id: 'pasta-cooked',
    name: 'Pasta (cooked)',
    category: 'grains',
    per100g: { calories: 158, proteinGrams: 5.8, carbsGrams: 31, fatGrams: 0.9, fiberGrams: 1.8 },
    commonServings: [
      { label: '½ cup cooked', grams: 70 },
      { label: '1 cup cooked', grams: 140 },
      { label: '2 oz dry', grams: 56 },
    ],
    emoji: '🍝',
  },
  {
    id: 'bread-white',
    name: 'White Bread',
    category: 'grains',
    per100g: { calories: 265, proteinGrams: 9, carbsGrams: 49, fatGrams: 3.2, fiberGrams: 2.7 },
    commonServings: [
      { label: '1 slice (~1 oz)', grams: 28 },
      { label: '2 slices', grams: 56 },
    ],
    emoji: '🍞',
  },
  {
    id: 'bread-wheat',
    name: 'Whole Wheat Bread',
    category: 'grains',
    per100g: { calories: 247, proteinGrams: 12, carbsGrams: 41, fatGrams: 3.4, fiberGrams: 7 },
    commonServings: [
      { label: '1 slice (~1.3 oz)', grams: 37 },
      { label: '2 slices', grams: 74 },
    ],
    emoji: '🍞',
  },
  {
    id: 'tortilla-flour',
    name: 'Flour Tortilla (medium)',
    category: 'grains',
    per100g: { calories: 312, proteinGrams: 8, carbsGrams: 54, fatGrams: 7.3, fiberGrams: 2.3 },
    commonServings: [
      { label: '1 small (6-inch)', grams: 35 },
      { label: '1 medium (8-inch)', grams: 45 },
      { label: '1 large (10-inch)', grams: 72 },
    ],
    emoji: '🫓',
  },
  {
    id: 'bagel-plain',
    name: 'Bagel (plain)',
    category: 'grains',
    per100g: { calories: 270, proteinGrams: 10.5, carbsGrams: 53, fatGrams: 1.7, fiberGrams: 2.3 },
    commonServings: [
      { label: 'Mini bagel (1 oz)', grams: 28 },
      { label: 'Regular bagel (3.5 oz)', grams: 99 },
      { label: 'Large bagel (5 oz)', grams: 142 },
    ],
    emoji: '🥯',
  },

  // ---------------------------------------------------------------------------
  // VEGETABLES
  // ---------------------------------------------------------------------------
  {
    id: 'broccoli',
    name: 'Broccoli (raw)',
    category: 'vegetables',
    per100g: { calories: 34, proteinGrams: 2.8, carbsGrams: 7, fatGrams: 0.4, fiberGrams: 2.6 },
    commonServings: [
      { label: '1 cup chopped', grams: 91 },
      { label: '1 floret', grams: 11 },
      { label: '2 cups', grams: 182 },
    ],
    emoji: '🥦',
  },
  {
    id: 'spinach-raw',
    name: 'Spinach (raw)',
    category: 'vegetables',
    per100g: { calories: 23, proteinGrams: 2.9, carbsGrams: 3.6, fatGrams: 0.4, fiberGrams: 2.2 },
    commonServings: [
      { label: '1 cup baby spinach', grams: 30 },
      { label: '2 cups (large salad base)', grams: 60 },
      { label: '4 oz bag', grams: 113 },
    ],
    emoji: '🥬',
  },
  {
    id: 'kale-raw',
    name: 'Kale (raw)',
    category: 'vegetables',
    per100g: { calories: 49, proteinGrams: 4.3, carbsGrams: 8.8, fatGrams: 0.9, fiberGrams: 3.6 },
    commonServings: [
      { label: '1 cup chopped', grams: 67 },
      { label: '2 cups', grams: 134 },
    ],
    emoji: '🥬',
  },
  {
    id: 'cucumber',
    name: 'Cucumber (raw)',
    category: 'vegetables',
    per100g: { calories: 15, proteinGrams: 0.7, carbsGrams: 3.6, fatGrams: 0.1, fiberGrams: 0.5 },
    commonServings: [
      { label: '½ cup sliced', grams: 52 },
      { label: '1 cup sliced', grams: 104 },
      { label: '½ medium cucumber', grams: 150 },
    ],
    emoji: '🥒',
  },
  {
    id: 'bell-pepper',
    name: 'Bell Pepper (raw)',
    category: 'vegetables',
    per100g: { calories: 31, proteinGrams: 1, carbsGrams: 6, fatGrams: 0.3, fiberGrams: 2.1 },
    commonServings: [
      { label: '1 small pepper', grams: 74 },
      { label: '1 medium pepper', grams: 119 },
      { label: '1 cup sliced', grams: 92 },
    ],
    emoji: '🫑',
  },
  {
    id: 'tomato',
    name: 'Tomato (raw)',
    category: 'vegetables',
    per100g: { calories: 18, proteinGrams: 0.9, carbsGrams: 3.9, fatGrams: 0.2, fiberGrams: 1.2 },
    commonServings: [
      { label: '1 small tomato', grams: 91 },
      { label: '1 medium tomato', grams: 123 },
      { label: '1 large tomato', grams: 182 },
    ],
    emoji: '🍅',
  },
  {
    id: 'asparagus',
    name: 'Asparagus (cooked)',
    category: 'vegetables',
    per100g: { calories: 22, proteinGrams: 2.4, carbsGrams: 4.1, fatGrams: 0.2, fiberGrams: 2.1 },
    commonServings: [
      { label: '5 medium spears', grams: 60 },
      { label: '½ cup pieces', grams: 90 },
      { label: '1 cup', grams: 180 },
    ],
    emoji: '🌿',
  },
  {
    id: 'green-beans',
    name: 'Green Beans (cooked)',
    category: 'vegetables',
    per100g: { calories: 35, proteinGrams: 1.9, carbsGrams: 7.9, fatGrams: 0.1, fiberGrams: 3.4 },
    commonServings: [
      { label: '½ cup', grams: 62.5 },
      { label: '1 cup', grams: 125 },
    ],
    emoji: '🫘',
  },
  {
    id: 'zucchini',
    name: 'Zucchini (raw)',
    category: 'vegetables',
    per100g: { calories: 17, proteinGrams: 1.2, carbsGrams: 3.1, fatGrams: 0.3, fiberGrams: 1 },
    commonServings: [
      { label: '1 cup sliced', grams: 113 },
      { label: '1 small zucchini', grams: 196 },
      { label: '½ medium zucchini', grams: 130 },
    ],
    emoji: '🥒',
  },
  {
    id: 'mushrooms',
    name: 'Mushrooms (white, raw)',
    category: 'vegetables',
    per100g: { calories: 22, proteinGrams: 3.1, carbsGrams: 3.3, fatGrams: 0.3, fiberGrams: 1 },
    commonServings: [
      { label: '1 cup sliced', grams: 70 },
      { label: '5 whole mushrooms', grams: 85 },
    ],
    emoji: '🍄',
  },
  {
    id: 'onion',
    name: 'Onion (raw)',
    category: 'vegetables',
    per100g: { calories: 40, proteinGrams: 1.1, carbsGrams: 9.3, fatGrams: 0.1, fiberGrams: 1.7 },
    commonServings: [
      { label: '¼ cup chopped', grams: 40 },
      { label: '½ cup chopped', grams: 80 },
      { label: '1 medium onion', grams: 110 },
    ],
    emoji: '🧅',
  },
  {
    id: 'garlic',
    name: 'Garlic (raw)',
    category: 'vegetables',
    per100g: { calories: 149, proteinGrams: 6.4, carbsGrams: 33, fatGrams: 0.5, fiberGrams: 2.1 },
    commonServings: [
      { label: '1 clove', grams: 3 },
      { label: '2 cloves', grams: 6 },
      { label: '1 tsp minced', grams: 5 },
    ],
    emoji: '🧄',
  },
  {
    id: 'celery',
    name: 'Celery (raw)',
    category: 'vegetables',
    per100g: { calories: 16, proteinGrams: 0.7, carbsGrams: 3, fatGrams: 0.2, fiberGrams: 1.6 },
    commonServings: [
      { label: '1 stalk', grams: 40 },
      { label: '1 cup chopped', grams: 101 },
    ],
    emoji: '🌿',
  },
  {
    id: 'carrot',
    name: 'Carrot (raw)',
    category: 'vegetables',
    per100g: { calories: 41, proteinGrams: 0.9, carbsGrams: 10, fatGrams: 0.2, fiberGrams: 2.8 },
    commonServings: [
      { label: '1 medium carrot', grams: 61 },
      { label: '½ cup chopped', grams: 64 },
      { label: '1 cup chopped', grams: 128 },
    ],
    emoji: '🥕',
  },

  // ---------------------------------------------------------------------------
  // FRUITS
  // ---------------------------------------------------------------------------
  {
    id: 'banana',
    name: 'Banana',
    category: 'fruits',
    per100g: { calories: 89, proteinGrams: 1.1, carbsGrams: 23, fatGrams: 0.3, fiberGrams: 2.6 },
    commonServings: [
      { label: '1 small banana', grams: 81 },
      { label: '1 medium banana', grams: 118 },
      { label: '1 large banana', grams: 136 },
    ],
    emoji: '🍌',
  },
  {
    id: 'apple',
    name: 'Apple (medium, with skin)',
    category: 'fruits',
    per100g: { calories: 52, proteinGrams: 0.3, carbsGrams: 14, fatGrams: 0.2, fiberGrams: 2.4 },
    commonServings: [
      { label: '1 small apple', grams: 149 },
      { label: '1 medium apple', grams: 182 },
      { label: '1 large apple', grams: 223 },
    ],
    emoji: '🍎',
  },
  {
    id: 'blueberries',
    name: 'Blueberries (fresh)',
    category: 'fruits',
    per100g: { calories: 57, proteinGrams: 0.7, carbsGrams: 14.5, fatGrams: 0.3, fiberGrams: 2.4 },
    commonServings: [
      { label: '¼ cup', grams: 37 },
      { label: '½ cup', grams: 74 },
      { label: '1 cup', grams: 148 },
    ],
    emoji: '🫐',
  },
  {
    id: 'strawberries',
    name: 'Strawberries (fresh)',
    category: 'fruits',
    per100g: { calories: 32, proteinGrams: 0.7, carbsGrams: 7.7, fatGrams: 0.3, fiberGrams: 2 },
    commonServings: [
      { label: '1 cup whole', grams: 152 },
      { label: '1 cup sliced', grams: 166 },
      { label: '5 large berries', grams: 100 },
    ],
    emoji: '🍓',
  },
  {
    id: 'orange',
    name: 'Orange (navel)',
    category: 'fruits',
    per100g: { calories: 47, proteinGrams: 0.9, carbsGrams: 12, fatGrams: 0.1, fiberGrams: 2.4 },
    commonServings: [
      { label: '1 small orange', grams: 96 },
      { label: '1 medium orange', grams: 131 },
      { label: '1 large orange', grams: 184 },
    ],
    emoji: '🍊',
  },
  {
    id: 'mango',
    name: 'Mango (fresh)',
    category: 'fruits',
    per100g: { calories: 60, proteinGrams: 0.8, carbsGrams: 15, fatGrams: 0.4, fiberGrams: 1.6 },
    commonServings: [
      { label: '½ cup diced', grams: 83 },
      { label: '1 cup diced', grams: 165 },
      { label: '1 mango', grams: 207 },
    ],
    emoji: '🥭',
  },
  {
    id: 'avocado',
    name: 'Avocado (fresh)',
    category: 'fruits',
    per100g: { calories: 160, proteinGrams: 2, carbsGrams: 9, fatGrams: 15, fiberGrams: 6.7 },
    commonServings: [
      { label: '¼ avocado', grams: 50 },
      { label: '½ avocado', grams: 100 },
      { label: '1 whole avocado', grams: 200 },
      { label: '2 tbsp (as spread)', grams: 30 },
    ],
    emoji: '🥑',
  },
  {
    id: 'grapes',
    name: 'Grapes (red or green)',
    category: 'fruits',
    per100g: { calories: 67, proteinGrams: 0.6, carbsGrams: 17.2, fatGrams: 0.4, fiberGrams: 0.9 },
    commonServings: [
      { label: '½ cup', grams: 76 },
      { label: '1 cup (about 32 grapes)', grams: 151 },
    ],
    emoji: '🍇',
  },
  {
    id: 'pineapple',
    name: 'Pineapple (fresh)',
    category: 'fruits',
    per100g: { calories: 50, proteinGrams: 0.5, carbsGrams: 13.1, fatGrams: 0.1, fiberGrams: 1.4 },
    commonServings: [
      { label: '½ cup chunks', grams: 83 },
      { label: '1 cup chunks', grams: 165 },
    ],
    emoji: '🍍',
  },

  // ---------------------------------------------------------------------------
  // FATS
  // ---------------------------------------------------------------------------
  {
    id: 'olive-oil',
    name: 'Olive Oil',
    category: 'fats',
    per100g: { calories: 884, proteinGrams: 0, carbsGrams: 0, fatGrams: 100, fiberGrams: 0 },
    commonServings: [
      { label: '1 tsp', grams: 4.5 },
      { label: '1 tbsp', grams: 13.5 },
      { label: '2 tbsp', grams: 27 },
    ],
    emoji: '🫒',
  },
  {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    category: 'fats',
    per100g: { calories: 892, proteinGrams: 0, carbsGrams: 0, fatGrams: 99, fiberGrams: 0 },
    commonServings: [
      { label: '1 tsp', grams: 4.5 },
      { label: '1 tbsp', grams: 13.5 },
    ],
    emoji: '🥥',
  },
  {
    id: 'butter',
    name: 'Butter (unsalted)',
    category: 'fats',
    per100g: { calories: 717, proteinGrams: 0.9, carbsGrams: 0.1, fatGrams: 81, fiberGrams: 0 },
    commonServings: [
      { label: '1 tsp', grams: 4.7 },
      { label: '1 tbsp', grams: 14 },
      { label: '2 tbsp', grams: 28 },
    ],
    emoji: '🧈',
  },
  {
    id: 'almonds',
    name: 'Almonds (raw)',
    category: 'fats',
    per100g: { calories: 579, proteinGrams: 21, carbsGrams: 22, fatGrams: 50, fiberGrams: 12.5 },
    commonServings: [
      { label: '1 oz (23 almonds)', grams: 28 },
      { label: '¼ cup', grams: 35 },
      { label: '½ cup', grams: 70 },
    ],
    emoji: '🌰',
  },
  {
    id: 'peanut-butter',
    name: 'Peanut Butter (creamy)',
    category: 'fats',
    per100g: { calories: 588, proteinGrams: 25, carbsGrams: 20, fatGrams: 50, fiberGrams: 6 },
    commonServings: [
      { label: '1 tbsp', grams: 16 },
      { label: '2 tbsp', grams: 32 },
      { label: '3 tbsp', grams: 48 },
    ],
    emoji: '🥜',
  },
  {
    id: 'almond-butter',
    name: 'Almond Butter',
    category: 'fats',
    per100g: { calories: 614, proteinGrams: 21, carbsGrams: 19, fatGrams: 56, fiberGrams: 10.3 },
    commonServings: [
      { label: '1 tbsp', grams: 16 },
      { label: '2 tbsp', grams: 32 },
    ],
    emoji: '🌰',
  },
  {
    id: 'walnuts',
    name: 'Walnuts',
    category: 'fats',
    per100g: { calories: 654, proteinGrams: 15, carbsGrams: 14, fatGrams: 65, fiberGrams: 6.7 },
    commonServings: [
      { label: '1 oz (14 halves)', grams: 28 },
      { label: '¼ cup pieces', grams: 30 },
    ],
    emoji: '🌰',
  },
  {
    id: 'cashews',
    name: 'Cashews (raw)',
    category: 'fats',
    per100g: { calories: 553, proteinGrams: 18, carbsGrams: 30, fatGrams: 44, fiberGrams: 3.3 },
    commonServings: [
      { label: '1 oz (18 cashews)', grams: 28 },
      { label: '¼ cup', grams: 34 },
    ],
    emoji: '🌰',
  },
  {
    id: 'chia-seeds',
    name: 'Chia Seeds',
    category: 'fats',
    per100g: { calories: 486, proteinGrams: 17, carbsGrams: 42, fatGrams: 31, fiberGrams: 34.4 },
    commonServings: [
      { label: '1 tbsp', grams: 10 },
      { label: '2 tbsp', grams: 20 },
      { label: '3 tbsp', grams: 30 },
    ],
    emoji: '🌱',
  },

  // ---------------------------------------------------------------------------
  // DAIRY
  // ---------------------------------------------------------------------------
  {
    id: 'whole-milk',
    name: 'Whole Milk',
    category: 'dairy',
    per100g: { calories: 61, proteinGrams: 3.2, carbsGrams: 4.8, fatGrams: 3.3, fiberGrams: 0 },
    commonServings: [
      { label: '½ cup (4 fl oz)', grams: 122 },
      { label: '1 cup (8 fl oz)', grams: 244 },
      { label: '1 glass (12 fl oz)', grams: 366 },
    ],
    emoji: '🥛',
  },
  {
    id: 'skim-milk',
    name: 'Skim Milk (non-fat)',
    category: 'dairy',
    per100g: { calories: 34, proteinGrams: 3.4, carbsGrams: 5, fatGrams: 0.2, fiberGrams: 0 },
    commonServings: [
      { label: '½ cup', grams: 122 },
      { label: '1 cup', grams: 244 },
    ],
    emoji: '🥛',
  },
  {
    id: 'cheddar-cheese',
    name: 'Cheddar Cheese',
    category: 'dairy',
    per100g: { calories: 402, proteinGrams: 25, carbsGrams: 1.3, fatGrams: 33, fiberGrams: 0 },
    commonServings: [
      { label: '1 oz slice', grams: 28 },
      { label: '¼ cup shredded', grams: 28 },
      { label: '½ cup shredded', grams: 56 },
    ],
    emoji: '🧀',
  },
  {
    id: 'mozzarella',
    name: 'Mozzarella (part-skim)',
    category: 'dairy',
    per100g: { calories: 254, proteinGrams: 24, carbsGrams: 2.8, fatGrams: 15.9, fiberGrams: 0 },
    commonServings: [
      { label: '1 oz slice', grams: 28 },
      { label: '¼ cup shredded', grams: 28 },
      { label: '1 oz ball', grams: 28 },
    ],
    emoji: '🧀',
  },
  {
    id: 'cream-cheese',
    name: 'Cream Cheese (regular)',
    category: 'dairy',
    per100g: { calories: 342, proteinGrams: 6, carbsGrams: 4.1, fatGrams: 34, fiberGrams: 0 },
    commonServings: [
      { label: '1 tbsp', grams: 14.5 },
      { label: '2 tbsp', grams: 29 },
    ],
    emoji: '🧀',
  },

  // ---------------------------------------------------------------------------
  // CARBS (quick-burn, high-glycemic)
  // ---------------------------------------------------------------------------
  {
    id: 'honey',
    name: 'Honey',
    category: 'carbs',
    per100g: { calories: 304, proteinGrams: 0.3, carbsGrams: 82, fatGrams: 0, fiberGrams: 0.2 },
    commonServings: [
      { label: '1 tsp', grams: 7 },
      { label: '1 tbsp', grams: 21 },
    ],
    emoji: '🍯',
  },
  {
    id: 'black-beans-cooked',
    name: 'Black Beans (cooked)',
    category: 'carbs',
    per100g: { calories: 132, proteinGrams: 8.9, carbsGrams: 24, fatGrams: 0.5, fiberGrams: 8.7 },
    commonServings: [
      { label: '½ cup', grams: 86 },
      { label: '1 cup', grams: 172 },
    ],
    emoji: '🫘',
  },
  {
    id: 'lentils-cooked',
    name: 'Lentils (cooked)',
    category: 'carbs',
    per100g: { calories: 116, proteinGrams: 9, carbsGrams: 20, fatGrams: 0.4, fiberGrams: 7.9 },
    commonServings: [
      { label: '½ cup', grams: 99 },
      { label: '1 cup', grams: 198 },
    ],
    emoji: '🫘',
  },
  {
    id: 'granola',
    name: 'Granola (plain)',
    category: 'carbs',
    per100g: { calories: 471, proteinGrams: 10, carbsGrams: 64, fatGrams: 20, fiberGrams: 5.3 },
    commonServings: [
      { label: '¼ cup', grams: 29 },
      { label: '½ cup', grams: 58 },
    ],
    emoji: '🌾',
  },

  // ---------------------------------------------------------------------------
  // SUPPLEMENTS
  // ---------------------------------------------------------------------------
  {
    id: 'creatine-monohydrate',
    name: 'Creatine Monohydrate',
    category: 'supplements',
    per100g: { calories: 0, proteinGrams: 0, carbsGrams: 0, fatGrams: 0, fiberGrams: 0 },
    commonServings: [
      { label: '1 tsp (5g)', grams: 5 },
    ],
    emoji: '💊',
  },
  {
    id: 'bcaa-powder',
    name: 'BCAA Powder',
    category: 'supplements',
    per100g: { calories: 400, proteinGrams: 100, carbsGrams: 0, fatGrams: 0, fiberGrams: 0 },
    commonServings: [
      { label: '1 scoop (~7g)', grams: 7 },
      { label: '2 scoops', grams: 14 },
    ],
    emoji: '💊',
  },
  {
    id: 'collagen-powder',
    name: 'Collagen Peptides Powder',
    category: 'supplements',
    per100g: { calories: 350, proteinGrams: 90, carbsGrams: 0, fatGrams: 0, fiberGrams: 0 },
    commonServings: [
      { label: '1 scoop (~10g)', grams: 10 },
      { label: '2 scoops', grams: 20 },
    ],
    emoji: '💊',
  },
  {
    id: 'protein-bar-generic',
    name: 'Protein Bar (generic)',
    category: 'supplements',
    per100g: { calories: 380, proteinGrams: 25, carbsGrams: 42, fatGrams: 12, fiberGrams: 4 },
    commonServings: [
      { label: '1 bar (1.8 oz)', grams: 51 },
      { label: '1 bar (2.2 oz)', grams: 62 },
    ],
    emoji: '🍫',
  },
  {
    id: 'fish-oil-softgel',
    name: 'Fish Oil (softgel)',
    category: 'supplements',
    per100g: { calories: 884, proteinGrams: 0, carbsGrams: 0, fatGrams: 100, fiberGrams: 0 },
    commonServings: [
      { label: '1 softgel (1g)', grams: 1 },
      { label: '2 softgels', grams: 2 },
    ],
    emoji: '🐟',
  },
];

// ---------------------------------------------------------------------------
// Utility helpers
// ---------------------------------------------------------------------------

/** Return foods filtered by category. Pass undefined to return all. */
export function getFoodsByCategory(category?: BuiltinFood['category']): BuiltinFood[] {
  if (!category) return COMMON_FOODS;
  return COMMON_FOODS.filter((f) => f.category === category);
}

/** Search foods by name (case-insensitive substring match). */
export function searchFoods(query: string): BuiltinFood[] {
  const q = query.toLowerCase().trim();
  if (!q) return COMMON_FOODS;
  return COMMON_FOODS.filter((f) => f.name.toLowerCase().includes(q));
}

/** Calculate macros for a given food at a specific gram amount. */
export function calcMacros(
  food: BuiltinFood,
  grams: number,
): {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams: number;
} {
  const ratio = grams / 100;
  return {
    calories: Math.round(food.per100g.calories * ratio),
    proteinGrams: Math.round(food.per100g.proteinGrams * ratio * 10) / 10,
    carbsGrams: Math.round(food.per100g.carbsGrams * ratio * 10) / 10,
    fatGrams: Math.round(food.per100g.fatGrams * ratio * 10) / 10,
    fiberGrams: Math.round(food.per100g.fiberGrams * ratio * 10) / 10,
  };
}

export const FOOD_CATEGORIES: { key: BuiltinFood['category']; label: string; emoji: string }[] = [
  { key: 'protein',      label: 'Protein',     emoji: '🍗' },
  { key: 'grains',       label: 'Grains',      emoji: '🌾' },
  { key: 'vegetables',   label: 'Vegetables',  emoji: '🥦' },
  { key: 'fruits',       label: 'Fruits',      emoji: '🍓' },
  { key: 'fats',         label: 'Fats',        emoji: '🥑' },
  { key: 'dairy',        label: 'Dairy',       emoji: '🧀' },
  { key: 'carbs',        label: 'Carbs',       emoji: '🍠' },
  { key: 'supplements',  label: 'Supplements', emoji: '💊' },
];

export default COMMON_FOODS;
