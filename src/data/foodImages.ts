/**
 * Static food image map — curated stock photos from Pexels.
 * No API calls at runtime. Images are matched by keyword from food names.
 *
 * License: Pexels — free for commercial use, no attribution required.
 */

const FOOD_IMAGES: Record<string, string> = {
  // Protein
  'chicken breast': 'https://images.pexels.com/photos/9219086/pexels-photo-9219086.jpeg?auto=compress&cs=tinysrgb&h=130',
  'chicken': 'https://images.pexels.com/photos/9219086/pexels-photo-9219086.jpeg?auto=compress&cs=tinysrgb&h=130',
  'salmon': 'https://images.pexels.com/photos/29748127/pexels-photo-29748127.jpeg?auto=compress&cs=tinysrgb&h=130',
  'tuna': 'https://images.pexels.com/photos/20141098/pexels-photo-20141098.jpeg?auto=compress&cs=tinysrgb&h=130',
  'ground beef': 'https://images.pexels.com/photos/4929692/pexels-photo-4929692.jpeg?auto=compress&cs=tinysrgb&h=130',
  'beef': 'https://images.pexels.com/photos/4929692/pexels-photo-4929692.jpeg?auto=compress&cs=tinysrgb&h=130',
  'steak': 'https://images.pexels.com/photos/10401292/pexels-photo-10401292.jpeg?auto=compress&cs=tinysrgb&h=130',
  'pork': 'https://images.pexels.com/photos/19362399/pexels-photo-19362399.jpeg?auto=compress&cs=tinysrgb&h=130',
  'turkey': 'https://images.pexels.com/photos/9219086/pexels-photo-9219086.jpeg?auto=compress&cs=tinysrgb&h=130',
  'shrimp': 'https://images.pexels.com/photos/8697543/pexels-photo-8697543.jpeg?auto=compress&cs=tinysrgb&h=130',
  'tilapia': 'https://images.pexels.com/photos/36850044/pexels-photo-36850044.jpeg?auto=compress&cs=tinysrgb&h=130',
  'cod': 'https://images.pexels.com/photos/8696562/pexels-photo-8696562.jpeg?auto=compress&cs=tinysrgb&h=130',
  'fish': 'https://images.pexels.com/photos/8696562/pexels-photo-8696562.jpeg?auto=compress&cs=tinysrgb&h=130',
  'lamb': 'https://images.pexels.com/photos/36691281/pexels-photo-36691281.jpeg?auto=compress&cs=tinysrgb&h=130',
  'bison': 'https://images.pexels.com/photos/10401292/pexels-photo-10401292.jpeg?auto=compress&cs=tinysrgb&h=130',
  'tofu': 'https://images.pexels.com/photos/33356138/pexels-photo-33356138.jpeg?auto=compress&cs=tinysrgb&h=130',
  'tempeh': 'https://images.pexels.com/photos/5056823/pexels-photo-5056823.jpeg?auto=compress&cs=tinysrgb&h=130',
  'egg': 'https://images.pexels.com/photos/32986480/pexels-photo-32986480.jpeg?auto=compress&cs=tinysrgb&h=130',

  // Grains & Carbs
  'rice': 'https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg?auto=compress&cs=tinysrgb&h=130',
  'quinoa': 'https://images.pexels.com/photos/9893191/pexels-photo-9893191.jpeg?auto=compress&cs=tinysrgb&h=130',
  'oatmeal': 'https://images.pexels.com/photos/101669/pexels-photo-101669.jpeg?auto=compress&cs=tinysrgb&h=130',
  'oat': 'https://images.pexels.com/photos/101669/pexels-photo-101669.jpeg?auto=compress&cs=tinysrgb&h=130',
  'bread': 'https://images.pexels.com/photos/31744871/pexels-photo-31744871.jpeg?auto=compress&cs=tinysrgb&h=130',
  'sweet potato': 'https://images.pexels.com/photos/9219092/pexels-photo-9219092.jpeg?auto=compress&cs=tinysrgb&h=130',
  'potato': 'https://images.pexels.com/photos/8839625/pexels-photo-8839625.jpeg?auto=compress&cs=tinysrgb&h=130',
  'pasta': 'https://images.pexels.com/photos/15597774/pexels-photo-15597774.jpeg?auto=compress&cs=tinysrgb&h=130',
  'noodle': 'https://images.pexels.com/photos/15597774/pexels-photo-15597774.jpeg?auto=compress&cs=tinysrgb&h=130',
  'tortilla': 'https://images.pexels.com/photos/23106702/pexels-photo-23106702.jpeg?auto=compress&cs=tinysrgb&h=130',
  'corn': 'https://images.pexels.com/photos/24031437/pexels-photo-24031437.jpeg?auto=compress&cs=tinysrgb&h=130',

  // Fruits
  'banana': 'https://images.pexels.com/photos/16829200/pexels-photo-16829200.jpeg?auto=compress&cs=tinysrgb&h=130',
  'apple': 'https://images.pexels.com/photos/914911/pexels-photo-914911.jpeg?auto=compress&cs=tinysrgb&h=130',
  'blueberr': 'https://images.pexels.com/photos/12755895/pexels-photo-12755895.jpeg?auto=compress&cs=tinysrgb&h=130',
  'strawberr': 'https://images.pexels.com/photos/31956598/pexels-photo-31956598.jpeg?auto=compress&cs=tinysrgb&h=130',
  'orange': 'https://images.pexels.com/photos/28893013/pexels-photo-28893013.jpeg?auto=compress&cs=tinysrgb&h=130',
  'avocado': 'https://images.pexels.com/photos/31833143/pexels-photo-31833143.jpeg?auto=compress&cs=tinysrgb&h=130',
  'mango': 'https://images.pexels.com/photos/29530032/pexels-photo-29530032.jpeg?auto=compress&cs=tinysrgb&h=130',
  'grape': 'https://images.pexels.com/photos/31399032/pexels-photo-31399032.jpeg?auto=compress&cs=tinysrgb&h=130',
  'watermelon': 'https://images.pexels.com/photos/11124445/pexels-photo-11124445.jpeg?auto=compress&cs=tinysrgb&h=130',
  'pineapple': 'https://images.pexels.com/photos/15554361/pexels-photo-15554361.jpeg?auto=compress&cs=tinysrgb&h=130',
  'peach': 'https://images.pexels.com/photos/15554361/pexels-photo-15554361.jpeg?auto=compress&cs=tinysrgb&h=130',
  'berry': 'https://images.pexels.com/photos/12755895/pexels-photo-12755895.jpeg?auto=compress&cs=tinysrgb&h=130',

  // Vegetables
  'broccoli': 'https://images.pexels.com/photos/105588/pexels-photo-105588.jpeg?auto=compress&cs=tinysrgb&h=130',
  'spinach': 'https://images.pexels.com/photos/6083893/pexels-photo-6083893.jpeg?auto=compress&cs=tinysrgb&h=130',
  'kale': 'https://images.pexels.com/photos/6671871/pexels-photo-6671871.png?auto=compress&cs=tinysrgb&h=130',
  'salad': 'https://images.pexels.com/photos/14774995/pexels-photo-14774995.jpeg?auto=compress&cs=tinysrgb&h=130',
  'pepper': 'https://images.pexels.com/photos/220907/pexels-photo-220907.jpeg?auto=compress&cs=tinysrgb&h=130',
  'asparagus': 'https://images.pexels.com/photos/36850059/pexels-photo-36850059.jpeg?auto=compress&cs=tinysrgb&h=130',
  'green bean': 'https://images.pexels.com/photos/3004798/pexels-photo-3004798.jpeg?auto=compress&cs=tinysrgb&h=130',
  'carrot': 'https://images.pexels.com/photos/5855239/pexels-photo-5855239.jpeg?auto=compress&cs=tinysrgb&h=130',
  'cucumber': 'https://images.pexels.com/photos/10887115/pexels-photo-10887115.png?auto=compress&cs=tinysrgb&h=130',
  'tomato': 'https://images.pexels.com/photos/18254763/pexels-photo-18254763.jpeg?auto=compress&cs=tinysrgb&h=130',
  'cauliflower': 'https://images.pexels.com/photos/11663123/pexels-photo-11663123.jpeg?auto=compress&cs=tinysrgb&h=130',
  'zucchini': 'https://images.pexels.com/photos/17290750/pexels-photo-17290750.jpeg?auto=compress&cs=tinysrgb&h=130',
  'mushroom': 'https://images.pexels.com/photos/34323003/pexels-photo-34323003.jpeg?auto=compress&cs=tinysrgb&h=130',
  'onion': 'https://images.pexels.com/photos/36188439/pexels-photo-36188439.jpeg?auto=compress&cs=tinysrgb&h=130',
  'lettuce': 'https://images.pexels.com/photos/14774995/pexels-photo-14774995.jpeg?auto=compress&cs=tinysrgb&h=130',

  // Fats & Nuts
  'almond': 'https://images.pexels.com/photos/11590667/pexels-photo-11590667.jpeg?auto=compress&cs=tinysrgb&h=130',
  'peanut butter': 'https://images.pexels.com/photos/4621606/pexels-photo-4621606.jpeg?auto=compress&cs=tinysrgb&h=130',
  'peanut': 'https://images.pexels.com/photos/4621606/pexels-photo-4621606.jpeg?auto=compress&cs=tinysrgb&h=130',
  'walnut': 'https://images.pexels.com/photos/5869852/pexels-photo-5869852.jpeg?auto=compress&cs=tinysrgb&h=130',
  'cashew': 'https://images.pexels.com/photos/10691260/pexels-photo-10691260.jpeg?auto=compress&cs=tinysrgb&h=130',
  'olive oil': 'https://images.pexels.com/photos/9070120/pexels-photo-9070120.jpeg?auto=compress&cs=tinysrgb&h=130',
  'coconut': 'https://images.pexels.com/photos/16077079/pexels-photo-16077079.jpeg?auto=compress&cs=tinysrgb&h=130',
  'chia': 'https://images.pexels.com/photos/1114205/pexels-photo-1114205.jpeg?auto=compress&cs=tinysrgb&h=130',
  'flax': 'https://images.pexels.com/photos/29956305/pexels-photo-29956305.jpeg?auto=compress&cs=tinysrgb&h=130',
  'seed': 'https://images.pexels.com/photos/1114205/pexels-photo-1114205.jpeg?auto=compress&cs=tinysrgb&h=130',
  'nut': 'https://images.pexels.com/photos/11590667/pexels-photo-11590667.jpeg?auto=compress&cs=tinysrgb&h=130',

  // Dairy
  'yogurt': 'https://images.pexels.com/photos/32214637/pexels-photo-32214637.jpeg?auto=compress&cs=tinysrgb&h=130',
  'cottage cheese': 'https://images.pexels.com/photos/7368035/pexels-photo-7368035.jpeg?auto=compress&cs=tinysrgb&h=130',
  'cheddar': 'https://images.pexels.com/photos/11098743/pexels-photo-11098743.jpeg?auto=compress&cs=tinysrgb&h=130',
  'cheese': 'https://images.pexels.com/photos/11098743/pexels-photo-11098743.jpeg?auto=compress&cs=tinysrgb&h=130',
  'mozzarella': 'https://images.pexels.com/photos/29699537/pexels-photo-29699537.jpeg?auto=compress&cs=tinysrgb&h=130',
  'cream cheese': 'https://images.pexels.com/photos/979310/pexels-photo-979310.jpeg?auto=compress&cs=tinysrgb&h=130',
  'milk': 'https://images.pexels.com/photos/28664618/pexels-photo-28664618.jpeg?auto=compress&cs=tinysrgb&h=130',
  'butter': 'https://images.pexels.com/photos/30660275/pexels-photo-30660275.jpeg?auto=compress&cs=tinysrgb&h=130',

  // Supplements
  'whey': 'https://images.pexels.com/photos/13779116/pexels-photo-13779116.jpeg?auto=compress&cs=tinysrgb&h=130',
  'protein powder': 'https://images.pexels.com/photos/13779116/pexels-photo-13779116.jpeg?auto=compress&cs=tinysrgb&h=130',
  'protein bar': 'https://images.pexels.com/photos/13779103/pexels-photo-13779103.jpeg?auto=compress&cs=tinysrgb&h=130',
  'creatine': 'https://images.pexels.com/photos/13779116/pexels-photo-13779116.jpeg?auto=compress&cs=tinysrgb&h=130',

  // Sweets & Condiments
  'honey': 'https://images.pexels.com/photos/9228574/pexels-photo-9228574.jpeg?auto=compress&cs=tinysrgb&h=130',
  'maple syrup': 'https://images.pexels.com/photos/4929715/pexels-photo-4929715.jpeg?auto=compress&cs=tinysrgb&h=130',
  'chocolate': 'https://images.pexels.com/photos/33662924/pexels-photo-33662924.jpeg?auto=compress&cs=tinysrgb&h=130',

  // Fast Food & Restaurant
  'big mac': 'https://images.pexels.com/photos/28251611/pexels-photo-28251611.jpeg?auto=compress&cs=tinysrgb&h=130',
  'burger': 'https://images.pexels.com/photos/28251611/pexels-photo-28251611.jpeg?auto=compress&cs=tinysrgb&h=130',
  'hamburger': 'https://images.pexels.com/photos/28251611/pexels-photo-28251611.jpeg?auto=compress&cs=tinysrgb&h=130',
  'cheeseburger': 'https://images.pexels.com/photos/28251611/pexels-photo-28251611.jpeg?auto=compress&cs=tinysrgb&h=130',
  'fries': 'https://images.pexels.com/photos/27758755/pexels-photo-27758755.jpeg?auto=compress&cs=tinysrgb&h=130',
  'french fries': 'https://images.pexels.com/photos/27758755/pexels-photo-27758755.jpeg?auto=compress&cs=tinysrgb&h=130',
  'nugget': 'https://images.pexels.com/photos/28251611/pexels-photo-28251611.jpeg?auto=compress&cs=tinysrgb&h=130',
  'chicken sandwich': 'https://images.pexels.com/photos/5446513/pexels-photo-5446513.jpeg?auto=compress&cs=tinysrgb&h=130',
  'sandwich': 'https://images.pexels.com/photos/5446513/pexels-photo-5446513.jpeg?auto=compress&cs=tinysrgb&h=130',
  'waffle fries': 'https://images.pexels.com/photos/31822989/pexels-photo-31822989.jpeg?auto=compress&cs=tinysrgb&h=130',
  'pizza': 'https://images.pexels.com/photos/29699537/pexels-photo-29699537.jpeg?auto=compress&cs=tinysrgb&h=130',
  'taco': 'https://images.pexels.com/photos/28959271/pexels-photo-28959271.jpeg?auto=compress&cs=tinysrgb&h=130',
  'burrito': 'https://images.pexels.com/photos/9258701/pexels-photo-9258701.jpeg?auto=compress&cs=tinysrgb&h=130',
  'wrap': 'https://images.pexels.com/photos/23106702/pexels-photo-23106702.jpeg?auto=compress&cs=tinysrgb&h=130',
  'sushi': 'https://images.pexels.com/photos/14469273/pexels-photo-14469273.jpeg?auto=compress&cs=tinysrgb&h=130',
  'ramen': 'https://images.pexels.com/photos/8992932/pexels-photo-8992932.jpeg?auto=compress&cs=tinysrgb&h=130',
  'hot dog': 'https://images.pexels.com/photos/28251611/pexels-photo-28251611.jpeg?auto=compress&cs=tinysrgb&h=130',
  'quesadilla': 'https://images.pexels.com/photos/23106702/pexels-photo-23106702.jpeg?auto=compress&cs=tinysrgb&h=130',
  'nachos': 'https://images.pexels.com/photos/28959271/pexels-photo-28959271.jpeg?auto=compress&cs=tinysrgb&h=130',
  'chili': 'https://images.pexels.com/photos/8992932/pexels-photo-8992932.jpeg?auto=compress&cs=tinysrgb&h=130',
  'soup': 'https://images.pexels.com/photos/8992932/pexels-photo-8992932.jpeg?auto=compress&cs=tinysrgb&h=130',

  // Breakfast
  'pancake': 'https://images.pexels.com/photos/101669/pexels-photo-101669.jpeg?auto=compress&cs=tinysrgb&h=130',
  'hotcake': 'https://images.pexels.com/photos/101669/pexels-photo-101669.jpeg?auto=compress&cs=tinysrgb&h=130',
  'waffle': 'https://images.pexels.com/photos/101669/pexels-photo-101669.jpeg?auto=compress&cs=tinysrgb&h=130',
  'muffin': 'https://images.pexels.com/photos/31744871/pexels-photo-31744871.jpeg?auto=compress&cs=tinysrgb&h=130',
  'bagel': 'https://images.pexels.com/photos/31744871/pexels-photo-31744871.jpeg?auto=compress&cs=tinysrgb&h=130',
  'croissant': 'https://images.pexels.com/photos/31744871/pexels-photo-31744871.jpeg?auto=compress&cs=tinysrgb&h=130',
  'cereal': 'https://images.pexels.com/photos/101669/pexels-photo-101669.jpeg?auto=compress&cs=tinysrgb&h=130',
  'hash brown': 'https://images.pexels.com/photos/8839625/pexels-photo-8839625.jpeg?auto=compress&cs=tinysrgb&h=130',
  'biscuit': 'https://images.pexels.com/photos/31744871/pexels-photo-31744871.jpeg?auto=compress&cs=tinysrgb&h=130',

  // Drinks
  'coffee': 'https://images.pexels.com/photos/28664618/pexels-photo-28664618.jpeg?auto=compress&cs=tinysrgb&h=130',
  'tea': 'https://images.pexels.com/photos/28664618/pexels-photo-28664618.jpeg?auto=compress&cs=tinysrgb&h=130',
  'smoothie': 'https://images.pexels.com/photos/12755895/pexels-photo-12755895.jpeg?auto=compress&cs=tinysrgb&h=130',
  'juice': 'https://images.pexels.com/photos/28893013/pexels-photo-28893013.jpeg?auto=compress&cs=tinysrgb&h=130',
};

// Sorted by key length descending so longer/more specific matches win
const SORTED_KEYS = Object.keys(FOOD_IMAGES).sort((a, b) => b.length - a.length);

/**
 * Returns a stock food image URL by matching keywords in the food name.
 * More specific matches (e.g., "chicken breast") win over generic ones (e.g., "chicken").
 * Returns undefined if no match.
 */
export function getFoodImage(foodName: string): string | undefined {
  const name = foodName.toLowerCase();
  for (const key of SORTED_KEYS) {
    if (name.includes(key)) {
      return FOOD_IMAGES[key];
    }
  }
  return undefined;
}
