/**
 * Built-in restaurant / fast food database.
 *
 * Nutrition data sourced from official restaurant nutrition PDFs.
 * All values are per-serving (one item as sold).
 */

export interface RestaurantFood {
  id: string;
  name: string;
  brand: string;
  /** Calories per serving */
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams: number;
  /** Serving weight in grams */
  servingGrams: number;
  /** Serving description */
  servingLabel: string;
  category: string;
  sodiumMg?: number;
  sugarGrams?: number;
  /** Additional serving size options beyond the default */
  additionalServings?: { label: string; grams: number }[];
}

export const RESTAURANT_FOODS: RestaurantFood[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // McDONALD'S
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'mcd-big-mac', brand: "McDonald's", name: 'Big Mac', calories: 590, proteinGrams: 25, carbsGrams: 46, fatGrams: 34, fiberGrams: 3, servingGrams: 215, servingLabel: '1 sandwich', category: 'burger', sodiumMg: 1050, sugarGrams: 9 },
  { id: 'mcd-quarter-pounder', brand: "McDonald's", name: 'Quarter Pounder with Cheese', calories: 520, proteinGrams: 30, carbsGrams: 42, fatGrams: 27, fiberGrams: 2, servingGrams: 201, servingLabel: '1 sandwich', category: 'burger', sodiumMg: 1140, sugarGrams: 10 },
  { id: 'mcd-mcdouble', brand: "McDonald's", name: 'McDouble', calories: 400, proteinGrams: 22, carbsGrams: 33, fatGrams: 20, fiberGrams: 2, servingGrams: 155, servingLabel: '1 sandwich', category: 'burger', sodiumMg: 920, sugarGrams: 7 },
  { id: 'mcd-cheeseburger', brand: "McDonald's", name: 'Cheeseburger', calories: 300, proteinGrams: 15, carbsGrams: 33, fatGrams: 13, fiberGrams: 2, servingGrams: 119, servingLabel: '1 sandwich', category: 'burger', sodiumMg: 720, sugarGrams: 7 },
  { id: 'mcd-10pc-nuggets', brand: "McDonald's", name: 'Chicken McNuggets (10 pc)', calories: 410, proteinGrams: 23, carbsGrams: 25, fatGrams: 24, fiberGrams: 1, servingGrams: 162, servingLabel: '10 pieces', category: 'chicken', sodiumMg: 900, sugarGrams: 0, additionalServings: [{ label: '1 nugget', grams: 16.2 }, { label: '4 pieces', grams: 65 }, { label: '20 pieces', grams: 324 }] },
  { id: 'mcd-6pc-nuggets', brand: "McDonald's", name: 'Chicken McNuggets (6 pc)', calories: 250, proteinGrams: 14, carbsGrams: 15, fatGrams: 15, fiberGrams: 1, servingGrams: 97, servingLabel: '6 pieces', category: 'chicken', sodiumMg: 540, sugarGrams: 0, additionalServings: [{ label: '1 nugget', grams: 16.2 }, { label: '4 pieces', grams: 65 }] },
  { id: 'mcd-mcchicken', brand: "McDonald's", name: 'McChicken', calories: 400, proteinGrams: 14, carbsGrams: 40, fatGrams: 21, fiberGrams: 2, servingGrams: 147, servingLabel: '1 sandwich', category: 'chicken', sodiumMg: 780, sugarGrams: 5 },
  { id: 'mcd-fries-medium', brand: "McDonald's", name: 'French Fries (Medium)', calories: 320, proteinGrams: 5, carbsGrams: 43, fatGrams: 15, fiberGrams: 4, servingGrams: 111, servingLabel: '1 medium', category: 'sides', sodiumMg: 260, sugarGrams: 0 },
  { id: 'mcd-fries-large', brand: "McDonald's", name: 'French Fries (Large)', calories: 480, proteinGrams: 7, carbsGrams: 65, fatGrams: 23, fiberGrams: 6, servingGrams: 154, servingLabel: '1 large', category: 'sides', sodiumMg: 400, sugarGrams: 0 },
  { id: 'mcd-egg-mcmuffin', brand: "McDonald's", name: 'Egg McMuffin', calories: 310, proteinGrams: 17, carbsGrams: 30, fatGrams: 13, fiberGrams: 2, servingGrams: 137, servingLabel: '1 sandwich', category: 'breakfast', sodiumMg: 770, sugarGrams: 3 },
  { id: 'mcd-sausage-mcmuffin', brand: "McDonald's", name: 'Sausage McMuffin with Egg', calories: 480, proteinGrams: 21, carbsGrams: 30, fatGrams: 30, fiberGrams: 2, servingGrams: 167, servingLabel: '1 sandwich', category: 'breakfast', sodiumMg: 890, sugarGrams: 2 },
  { id: 'mcd-hash-brown', brand: "McDonald's", name: 'Hash Brown', calories: 140, proteinGrams: 1, carbsGrams: 15, fatGrams: 8, fiberGrams: 2, servingGrams: 56, servingLabel: '1 piece', category: 'breakfast', sodiumMg: 310, sugarGrams: 0 },
  { id: 'mcd-hotcakes', brand: "McDonald's", name: 'Hotcakes', calories: 580, proteinGrams: 9, carbsGrams: 101, fatGrams: 16, fiberGrams: 2, servingGrams: 221, servingLabel: '3 hotcakes', category: 'breakfast', sodiumMg: 600, sugarGrams: 45 },
  { id: 'mcd-filet-o-fish', brand: "McDonald's", name: 'Filet-O-Fish', calories: 390, proteinGrams: 16, carbsGrams: 39, fatGrams: 19, fiberGrams: 2, servingGrams: 142, servingLabel: '1 sandwich', category: 'fish', sodiumMg: 580, sugarGrams: 5 },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHICK-FIL-A
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'cfa-sandwich', brand: 'Chick-fil-A', name: 'Chick-fil-A Chicken Sandwich', calories: 440, proteinGrams: 29, carbsGrams: 40, fatGrams: 19, fiberGrams: 1, servingGrams: 170, servingLabel: '1 sandwich', category: 'chicken', sodiumMg: 1400, sugarGrams: 5 },
  { id: 'cfa-spicy-sandwich', brand: 'Chick-fil-A', name: 'Spicy Chicken Sandwich', calories: 450, proteinGrams: 29, carbsGrams: 42, fatGrams: 19, fiberGrams: 2, servingGrams: 179, servingLabel: '1 sandwich', category: 'chicken', sodiumMg: 1620, sugarGrams: 6 },
  { id: 'cfa-deluxe', brand: 'Chick-fil-A', name: 'Chick-fil-A Deluxe Sandwich', calories: 500, proteinGrams: 30, carbsGrams: 42, fatGrams: 23, fiberGrams: 2, servingGrams: 208, servingLabel: '1 sandwich', category: 'chicken', sodiumMg: 1640, sugarGrams: 7 },
  { id: 'cfa-nuggets-8', brand: 'Chick-fil-A', name: 'Chick-fil-A Nuggets (8 ct)', calories: 250, proteinGrams: 27, carbsGrams: 11, fatGrams: 11, fiberGrams: 0, servingGrams: 113, servingLabel: '8 nuggets', category: 'chicken', sodiumMg: 1030, sugarGrams: 1, additionalServings: [{ label: '1 nugget', grams: 14.1 }, { label: '4 nuggets', grams: 56.5 }, { label: '12 nuggets', grams: 170 }] },
  { id: 'cfa-nuggets-12', brand: 'Chick-fil-A', name: 'Chick-fil-A Nuggets (12 ct)', calories: 380, proteinGrams: 40, carbsGrams: 16, fatGrams: 17, fiberGrams: 0, servingGrams: 170, servingLabel: '12 nuggets', category: 'chicken', sodiumMg: 1540, sugarGrams: 1, additionalServings: [{ label: '1 nugget', grams: 14.2 }] },
  { id: 'cfa-strips-3', brand: 'Chick-fil-A', name: 'Chick-n-Strips (3 ct)', calories: 310, proteinGrams: 28, carbsGrams: 14, fatGrams: 15, fiberGrams: 0, servingGrams: 113, servingLabel: '3 strips', category: 'chicken', sodiumMg: 820, sugarGrams: 3, additionalServings: [{ label: '1 strip', grams: 37.7 }] },
  { id: 'cfa-strips-4', brand: 'Chick-fil-A', name: 'Chick-n-Strips (4 ct)', calories: 410, proteinGrams: 37, carbsGrams: 19, fatGrams: 20, fiberGrams: 0, servingGrams: 150, servingLabel: '4 strips', category: 'chicken', sodiumMg: 1090, sugarGrams: 4, additionalServings: [{ label: '1 strip', grams: 37.5 }] },
  { id: 'cfa-grilled-nuggets-8', brand: 'Chick-fil-A', name: 'Grilled Nuggets (8 ct)', calories: 130, proteinGrams: 25, carbsGrams: 1, fatGrams: 3, fiberGrams: 0, servingGrams: 99, servingLabel: '8 nuggets', category: 'chicken', sodiumMg: 440, sugarGrams: 1, additionalServings: [{ label: '1 nugget', grams: 12.4 }] },
  { id: 'cfa-fries-medium', brand: 'Chick-fil-A', name: 'Waffle Potato Fries (Medium)', calories: 420, proteinGrams: 5, carbsGrams: 45, fatGrams: 24, fiberGrams: 5, servingGrams: 125, servingLabel: '1 medium', category: 'sides', sodiumMg: 240, sugarGrams: 0 },
  { id: 'cfa-mac-cheese', brand: 'Chick-fil-A', name: 'Mac & Cheese (Medium)', calories: 450, proteinGrams: 17, carbsGrams: 42, fatGrams: 24, fiberGrams: 1, servingGrams: 216, servingLabel: '1 medium', category: 'sides', sodiumMg: 1170, sugarGrams: 5 },
  { id: 'cfa-cobb-salad', brand: 'Chick-fil-A', name: 'Cobb Salad', calories: 510, proteinGrams: 40, carbsGrams: 28, fatGrams: 27, fiberGrams: 5, servingGrams: 397, servingLabel: '1 salad', category: 'salad', sodiumMg: 1310, sugarGrams: 6 },
  { id: 'cfa-chicken-biscuit', brand: 'Chick-fil-A', name: 'Chick-fil-A Chicken Biscuit', calories: 450, proteinGrams: 17, carbsGrams: 50, fatGrams: 20, fiberGrams: 2, servingGrams: 163, servingLabel: '1 biscuit', category: 'breakfast', sodiumMg: 1310, sugarGrams: 5 },
  { id: 'cfa-sauce', brand: 'Chick-fil-A', name: 'Chick-fil-A Sauce', calories: 140, proteinGrams: 0, carbsGrams: 7, fatGrams: 13, fiberGrams: 0, servingGrams: 28, servingLabel: '1 packet', category: 'sauce', sodiumMg: 170, sugarGrams: 6 },
  { id: 'cfa-polynesian', brand: 'Chick-fil-A', name: 'Polynesian Sauce', calories: 110, proteinGrams: 0, carbsGrams: 13, fatGrams: 6, fiberGrams: 0, servingGrams: 28, servingLabel: '1 packet', category: 'sauce', sodiumMg: 170, sugarGrams: 12 },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHIPOTLE
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'chip-chicken', brand: 'Chipotle', name: 'Chicken', calories: 180, proteinGrams: 32, carbsGrams: 0, fatGrams: 7, fiberGrams: 0, servingGrams: 113, servingLabel: '1 serving (4oz)', category: 'protein', sodiumMg: 310, sugarGrams: 0 },
  { id: 'chip-steak', brand: 'Chipotle', name: 'Steak', calories: 150, proteinGrams: 21, carbsGrams: 1, fatGrams: 7, fiberGrams: 0, servingGrams: 113, servingLabel: '1 serving (4oz)', category: 'protein', sodiumMg: 290, sugarGrams: 0 },
  { id: 'chip-barbacoa', brand: 'Chipotle', name: 'Barbacoa', calories: 170, proteinGrams: 24, carbsGrams: 2, fatGrams: 7, fiberGrams: 0, servingGrams: 113, servingLabel: '1 serving (4oz)', category: 'protein', sodiumMg: 510, sugarGrams: 1 },
  { id: 'chip-carnitas', brand: 'Chipotle', name: 'Carnitas', calories: 210, proteinGrams: 23, carbsGrams: 0, fatGrams: 12, fiberGrams: 0, servingGrams: 113, servingLabel: '1 serving (4oz)', category: 'protein', sodiumMg: 450, sugarGrams: 0 },
  { id: 'chip-white-rice', brand: 'Chipotle', name: 'White Rice', calories: 210, proteinGrams: 4, carbsGrams: 40, fatGrams: 4, fiberGrams: 0, servingGrams: 130, servingLabel: '1 serving', category: 'sides', sodiumMg: 340, sugarGrams: 0 },
  { id: 'chip-brown-rice', brand: 'Chipotle', name: 'Brown Rice', calories: 210, proteinGrams: 5, carbsGrams: 39, fatGrams: 4, fiberGrams: 2, servingGrams: 130, servingLabel: '1 serving', category: 'sides', sodiumMg: 200, sugarGrams: 0 },
  { id: 'chip-black-beans', brand: 'Chipotle', name: 'Black Beans', calories: 130, proteinGrams: 8, carbsGrams: 22, fatGrams: 1, fiberGrams: 7, servingGrams: 130, servingLabel: '1 serving', category: 'sides', sodiumMg: 210, sugarGrams: 0 },
  { id: 'chip-guac', brand: 'Chipotle', name: 'Guacamole', calories: 230, proteinGrams: 3, carbsGrams: 12, fatGrams: 22, fiberGrams: 7, servingGrams: 100, servingLabel: '1 serving', category: 'sides', sodiumMg: 375, sugarGrams: 1 },
  { id: 'chip-flour-tortilla', brand: 'Chipotle', name: 'Flour Tortilla (Burrito)', calories: 320, proteinGrams: 8, carbsGrams: 50, fatGrams: 10, fiberGrams: 2, servingGrams: 95, servingLabel: '1 tortilla', category: 'wrap', sodiumMg: 600, sugarGrams: 1 },
  { id: 'chip-chips', brand: 'Chipotle', name: 'Chips', calories: 540, proteinGrams: 7, carbsGrams: 68, fatGrams: 26, fiberGrams: 5, servingGrams: 113, servingLabel: '1 bag', category: 'sides', sodiumMg: 420, sugarGrams: 0 },
  { id: 'chip-chips-guac', brand: 'Chipotle', name: 'Chips & Guacamole', calories: 770, proteinGrams: 10, carbsGrams: 80, fatGrams: 48, fiberGrams: 12, servingGrams: 213, servingLabel: '1 order', category: 'sides', sodiumMg: 795, sugarGrams: 1 },

  // ═══════════════════════════════════════════════════════════════════════════
  // TACO BELL
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'tb-crunchy-taco', brand: 'Taco Bell', name: 'Crunchy Taco', calories: 170, proteinGrams: 8, carbsGrams: 13, fatGrams: 10, fiberGrams: 3, servingGrams: 78, servingLabel: '1 taco', category: 'taco', sodiumMg: 310, sugarGrams: 1 },
  { id: 'tb-soft-taco', brand: 'Taco Bell', name: 'Soft Taco', calories: 180, proteinGrams: 9, carbsGrams: 18, fatGrams: 9, fiberGrams: 3, servingGrams: 99, servingLabel: '1 taco', category: 'taco', sodiumMg: 530, sugarGrams: 1 },
  { id: 'tb-crunchwrap', brand: 'Taco Bell', name: 'Crunchwrap Supreme', calories: 530, proteinGrams: 16, carbsGrams: 71, fatGrams: 21, fiberGrams: 4, servingGrams: 254, servingLabel: '1 item', category: 'wrap', sodiumMg: 1170, sugarGrams: 6 },
  { id: 'tb-burrito-supreme', brand: 'Taco Bell', name: 'Burrito Supreme (Beef)', calories: 390, proteinGrams: 16, carbsGrams: 50, fatGrams: 14, fiberGrams: 6, servingGrams: 248, servingLabel: '1 burrito', category: 'burrito', sodiumMg: 1060, sugarGrams: 4 },
  { id: 'tb-quesadilla-chicken', brand: 'Taco Bell', name: 'Chicken Quesadilla', calories: 500, proteinGrams: 27, carbsGrams: 37, fatGrams: 27, fiberGrams: 3, servingGrams: 184, servingLabel: '1 quesadilla', category: 'wrap', sodiumMg: 1190, sugarGrams: 3 },
  { id: 'tb-nachos-bellgrande', brand: 'Taco Bell', name: 'Nachos BellGrande', calories: 740, proteinGrams: 16, carbsGrams: 80, fatGrams: 39, fiberGrams: 8, servingGrams: 308, servingLabel: '1 order', category: 'sides', sodiumMg: 1050, sugarGrams: 3 },
  { id: 'tb-mexican-pizza', brand: 'Taco Bell', name: 'Mexican Pizza', calories: 540, proteinGrams: 20, carbsGrams: 46, fatGrams: 31, fiberGrams: 5, servingGrams: 213, servingLabel: '1 pizza', category: 'other', sodiumMg: 940, sugarGrams: 3 },
  { id: 'tb-cheesy-gordita', brand: 'Taco Bell', name: 'Cheesy Gordita Crunch', calories: 500, proteinGrams: 20, carbsGrams: 40, fatGrams: 28, fiberGrams: 4, servingGrams: 153, servingLabel: '1 item', category: 'taco', sodiumMg: 790, sugarGrams: 4 },

  // ═══════════════════════════════════════════════════════════════════════════
  // WENDY'S
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'wen-daves-single', brand: "Wendy's", name: "Dave's Single", calories: 590, proteinGrams: 29, carbsGrams: 39, fatGrams: 34, fiberGrams: 2, servingGrams: 222, servingLabel: '1 sandwich', category: 'burger', sodiumMg: 1150, sugarGrams: 8 },
  { id: 'wen-daves-double', brand: "Wendy's", name: "Dave's Double", calories: 860, proteinGrams: 48, carbsGrams: 40, fatGrams: 55, fiberGrams: 2, servingGrams: 319, servingLabel: '1 sandwich', category: 'burger', sodiumMg: 1460, sugarGrams: 9 },
  { id: 'wen-jr-cheeseburger', brand: "Wendy's", name: 'Jr. Cheeseburger', calories: 290, proteinGrams: 16, carbsGrams: 26, fatGrams: 14, fiberGrams: 1, servingGrams: 127, servingLabel: '1 sandwich', category: 'burger', sodiumMg: 630, sugarGrams: 5 },
  { id: 'wen-spicy-chicken', brand: "Wendy's", name: 'Spicy Chicken Sandwich', calories: 490, proteinGrams: 29, carbsGrams: 47, fatGrams: 20, fiberGrams: 2, servingGrams: 218, servingLabel: '1 sandwich', category: 'chicken', sodiumMg: 1280, sugarGrams: 6 },
  { id: 'wen-nuggets-10', brand: "Wendy's", name: 'Chicken Nuggets (10 pc)', calories: 450, proteinGrams: 22, carbsGrams: 28, fatGrams: 28, fiberGrams: 2, servingGrams: 155, servingLabel: '10 pieces', category: 'chicken', sodiumMg: 1060, sugarGrams: 0, additionalServings: [{ label: '1 nugget', grams: 15.5 }, { label: '4 pieces', grams: 62 }, { label: '6 pieces', grams: 93 }] },
  { id: 'wen-chili-large', brand: "Wendy's", name: 'Chili (Large)', calories: 330, proteinGrams: 23, carbsGrams: 30, fatGrams: 13, fiberGrams: 7, servingGrams: 340, servingLabel: '1 large', category: 'soup', sodiumMg: 1200, sugarGrams: 7 },
  { id: 'wen-baked-potato', brand: "Wendy's", name: 'Baked Potato (Plain)', calories: 270, proteinGrams: 7, carbsGrams: 63, fatGrams: 0, fiberGrams: 7, servingGrams: 284, servingLabel: '1 potato', category: 'sides', sodiumMg: 25, sugarGrams: 3 },
  { id: 'wen-fries-medium', brand: "Wendy's", name: 'Natural-Cut Fries (Medium)', calories: 420, proteinGrams: 5, carbsGrams: 52, fatGrams: 21, fiberGrams: 5, servingGrams: 142, servingLabel: '1 medium', category: 'sides', sodiumMg: 420, sugarGrams: 0 },

  // ═══════════════════════════════════════════════════════════════════════════
  // SUBWAY
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'sub-turkey-breast-6', brand: 'Subway', name: 'Turkey Breast 6" Sub', calories: 270, proteinGrams: 18, carbsGrams: 40, fatGrams: 4, fiberGrams: 2, servingGrams: 220, servingLabel: '1 6-inch sub', category: 'sandwich', sodiumMg: 720, sugarGrams: 5 },
  { id: 'sub-italian-bmt-6', brand: 'Subway', name: 'Italian B.M.T. 6" Sub', calories: 370, proteinGrams: 17, carbsGrams: 40, fatGrams: 15, fiberGrams: 2, servingGrams: 232, servingLabel: '1 6-inch sub', category: 'sandwich', sodiumMg: 1210, sugarGrams: 5 },
  { id: 'sub-chicken-teriyaki-6', brand: 'Subway', name: 'Sweet Onion Chicken Teriyaki 6"', calories: 330, proteinGrams: 26, carbsGrams: 47, fatGrams: 5, fiberGrams: 2, servingGrams: 277, servingLabel: '1 6-inch sub', category: 'sandwich', sodiumMg: 810, sugarGrams: 13 },
  { id: 'sub-meatball-6', brand: 'Subway', name: 'Meatball Marinara 6" Sub', calories: 480, proteinGrams: 22, carbsGrams: 52, fatGrams: 20, fiberGrams: 4, servingGrams: 308, servingLabel: '1 6-inch sub', category: 'sandwich', sodiumMg: 1160, sugarGrams: 9 },
  { id: 'sub-steak-cheese-6', brand: 'Subway', name: 'Steak & Cheese 6" Sub', calories: 360, proteinGrams: 26, carbsGrams: 42, fatGrams: 10, fiberGrams: 3, servingGrams: 252, servingLabel: '1 6-inch sub', category: 'sandwich', sodiumMg: 890, sugarGrams: 6 },

  // ═══════════════════════════════════════════════════════════════════════════
  // POPEYES
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'pop-chicken-sandwich', brand: 'Popeyes', name: 'Classic Chicken Sandwich', calories: 700, proteinGrams: 28, carbsGrams: 50, fatGrams: 42, fiberGrams: 2, servingGrams: 225, servingLabel: '1 sandwich', category: 'chicken', sodiumMg: 1440, sugarGrams: 6 },
  { id: 'pop-spicy-sandwich', brand: 'Popeyes', name: 'Spicy Chicken Sandwich', calories: 700, proteinGrams: 28, carbsGrams: 50, fatGrams: 42, fiberGrams: 3, servingGrams: 225, servingLabel: '1 sandwich', category: 'chicken', sodiumMg: 1710, sugarGrams: 6 },
  { id: 'pop-3pc-tenders', brand: 'Popeyes', name: 'Chicken Tenders (3 pc)', calories: 340, proteinGrams: 22, carbsGrams: 14, fatGrams: 22, fiberGrams: 1, servingGrams: 113, servingLabel: '3 pieces', category: 'chicken', sodiumMg: 1150, sugarGrams: 0, additionalServings: [{ label: '1 tender', grams: 37.7 }] },
  { id: 'pop-5pc-tenders', brand: 'Popeyes', name: 'Chicken Tenders (5 pc)', calories: 570, proteinGrams: 36, carbsGrams: 23, fatGrams: 37, fiberGrams: 1, servingGrams: 188, servingLabel: '5 pieces', category: 'chicken', sodiumMg: 1920, sugarGrams: 0, additionalServings: [{ label: '1 tender', grams: 37.6 }] },
  { id: 'pop-cajun-fries-reg', brand: 'Popeyes', name: 'Cajun Fries (Regular)', calories: 260, proteinGrams: 3, carbsGrams: 32, fatGrams: 14, fiberGrams: 2, servingGrams: 85, servingLabel: '1 regular', category: 'sides', sodiumMg: 710, sugarGrams: 0 },

  // ═══════════════════════════════════════════════════════════════════════════
  // STARBUCKS (popular food items)
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'sbux-bacon-gouda', brand: 'Starbucks', name: 'Bacon, Gouda & Egg Sandwich', calories: 360, proteinGrams: 18, carbsGrams: 34, fatGrams: 18, fiberGrams: 1, servingGrams: 123, servingLabel: '1 sandwich', category: 'breakfast', sodiumMg: 820, sugarGrams: 3 },
  { id: 'sbux-sausage-egg', brand: 'Starbucks', name: 'Sausage, Cheddar & Egg Sandwich', calories: 480, proteinGrams: 15, carbsGrams: 40, fatGrams: 28, fiberGrams: 1, servingGrams: 145, servingLabel: '1 sandwich', category: 'breakfast', sodiumMg: 880, sugarGrams: 4 },
  { id: 'sbux-protein-box', brand: 'Starbucks', name: 'Cheese & Fruit Protein Box', calories: 470, proteinGrams: 16, carbsGrams: 50, fatGrams: 25, fiberGrams: 4, servingGrams: 184, servingLabel: '1 box', category: 'snack', sodiumMg: 690, sugarGrams: 21 },
  { id: 'sbux-cake-pop', brand: 'Starbucks', name: 'Birthday Cake Pop', calories: 160, proteinGrams: 2, carbsGrams: 18, fatGrams: 9, fiberGrams: 0, servingGrams: 37, servingLabel: '1 cake pop', category: 'dessert', sodiumMg: 110, sugarGrams: 14 },
  { id: 'sbux-croissant', brand: 'Starbucks', name: 'Butter Croissant', calories: 260, proteinGrams: 5, carbsGrams: 32, fatGrams: 12, fiberGrams: 1, servingGrams: 71, servingLabel: '1 croissant', category: 'pastry', sodiumMg: 280, sugarGrams: 5 },

  // ═══════════════════════════════════════════════════════════════════════════
  // PANDA EXPRESS
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'pe-orange-chicken', brand: 'Panda Express', name: 'Orange Chicken', calories: 490, proteinGrams: 25, carbsGrams: 51, fatGrams: 23, fiberGrams: 0, servingGrams: 164, servingLabel: '1 entree', category: 'chicken', sodiumMg: 820, sugarGrams: 19 },
  { id: 'pe-beijing-beef', brand: 'Panda Express', name: 'Beijing Beef', calories: 470, proteinGrams: 14, carbsGrams: 56, fatGrams: 22, fiberGrams: 1, servingGrams: 164, servingLabel: '1 entree', category: 'beef', sodiumMg: 660, sugarGrams: 25 },
  { id: 'pe-broccoli-beef', brand: 'Panda Express', name: 'Broccoli Beef', calories: 150, proteinGrams: 9, carbsGrams: 13, fatGrams: 7, fiberGrams: 2, servingGrams: 164, servingLabel: '1 entree', category: 'beef', sodiumMg: 520, sugarGrams: 7 },
  { id: 'pe-fried-rice', brand: 'Panda Express', name: 'Fried Rice', calories: 520, proteinGrams: 11, carbsGrams: 85, fatGrams: 16, fiberGrams: 1, servingGrams: 275, servingLabel: '1 side', category: 'sides', sodiumMg: 850, sugarGrams: 3 },
  { id: 'pe-chow-mein', brand: 'Panda Express', name: 'Chow Mein', calories: 510, proteinGrams: 13, carbsGrams: 80, fatGrams: 18, fiberGrams: 6, servingGrams: 275, servingLabel: '1 side', category: 'sides', sodiumMg: 860, sugarGrams: 9 },

  // ═══════════════════════════════════════════════════════════════════════════
  // IN-N-OUT BURGER
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'ino-double-double', brand: 'In-N-Out', name: 'Double-Double', calories: 670, proteinGrams: 37, carbsGrams: 39, fatGrams: 41, fiberGrams: 3, servingGrams: 330, servingLabel: '1 burger', category: 'burger', sodiumMg: 1440, sugarGrams: 10 },
  { id: 'ino-cheeseburger', brand: 'In-N-Out', name: 'Cheeseburger', calories: 480, proteinGrams: 22, carbsGrams: 39, fatGrams: 27, fiberGrams: 3, servingGrams: 268, servingLabel: '1 burger', category: 'burger', sodiumMg: 1000, sugarGrams: 10 },
  { id: 'ino-hamburger', brand: 'In-N-Out', name: 'Hamburger', calories: 390, proteinGrams: 16, carbsGrams: 39, fatGrams: 19, fiberGrams: 3, servingGrams: 243, servingLabel: '1 burger', category: 'burger', sodiumMg: 650, sugarGrams: 10 },
  { id: 'ino-fries', brand: 'In-N-Out', name: 'French Fries', calories: 395, proteinGrams: 7, carbsGrams: 54, fatGrams: 18, fiberGrams: 2, servingGrams: 125, servingLabel: '1 order', category: 'sides', sodiumMg: 245, sugarGrams: 0 },
  { id: 'ino-protein-style', brand: 'In-N-Out', name: 'Double-Double Protein Style', calories: 520, proteinGrams: 33, carbsGrams: 11, fatGrams: 39, fiberGrams: 3, servingGrams: 300, servingLabel: '1 burger', category: 'burger', sodiumMg: 1160, sugarGrams: 7 },

  // ═══════════════════════════════════════════════════════════════════════════
  // FIVE GUYS
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'fg-cheeseburger', brand: 'Five Guys', name: 'Cheeseburger', calories: 840, proteinGrams: 47, carbsGrams: 40, fatGrams: 55, fiberGrams: 2, servingGrams: 303, servingLabel: '1 burger', category: 'burger', sodiumMg: 1050, sugarGrams: 8 },
  { id: 'fg-little-cheeseburger', brand: 'Five Guys', name: 'Little Cheeseburger', calories: 550, proteinGrams: 27, carbsGrams: 40, fatGrams: 32, fiberGrams: 2, servingGrams: 209, servingLabel: '1 burger', category: 'burger', sodiumMg: 690, sugarGrams: 8 },
  { id: 'fg-fries-regular', brand: 'Five Guys', name: 'Fries (Regular)', calories: 530, proteinGrams: 8, carbsGrams: 61, fatGrams: 30, fiberGrams: 6, servingGrams: 227, servingLabel: '1 regular', category: 'sides', sodiumMg: 530, sugarGrams: 2 },
  { id: 'fg-hot-dog', brand: 'Five Guys', name: 'Hot Dog', calories: 520, proteinGrams: 18, carbsGrams: 40, fatGrams: 32, fiberGrams: 2, servingGrams: 167, servingLabel: '1 hot dog', category: 'other', sodiumMg: 1130, sugarGrams: 8 },
];

// ---------------------------------------------------------------------------
// Search helper
// ---------------------------------------------------------------------------

export function searchRestaurantFoods(query: string): RestaurantFood[] {
  const q = query.toLowerCase();
  return RESTAURANT_FOODS.filter(
    (f) =>
      f.name.toLowerCase().includes(q) ||
      f.brand.toLowerCase().includes(q) ||
      `${f.brand} ${f.name}`.toLowerCase().includes(q),
  );
}
