export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in PKR
  category: string;
  image: string;
  tags?: string[];
  popular?: boolean;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  googleMaps: string;
  services: string[];
  instagram?: string;
  orderOnline?: string;
  coworkingMaps?: string;
}

export interface AmbianceCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface MoodCard {
  id: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  action: string; // "order" | "book" | "branches"
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: string;
}

export const CAFE_METADATA = {
  name: "ZED's Kitchen",
  tagline: "Good Coffee. Great Food. Better Moments.",
  heroSubheading: "A cozy space to work, meet, relax and enjoy your favorite flavors.",
  aboutShort: "ZED's Kitchen Café is more than just a café. It's a place where great food, cozy ambiance and real conversations come together. Whether you're here for a quick coffee, a long work session, or a memorable evening — you're home.",
  aboutLong: "ZED's Kitchen Café is more than just a place that sells coffee. Located in the heart of Karachi, we designed it to feel like an extension of your own living room or workspace. Whether you are looking for a quiet corner to focus with fast Wi-Fi, a spacious table for a team meeting, or a warm setting for an evening date, ZED's Kitchen has a spot tailored for you. Our menu features premium specialty coffee alongside fresh, comforting meals made to order.",
  socials: {
    instagram: "https://www.instagram.com/zeds.khi/",
    facebook: "https://facebook.com/zhousecafe",
    whatsappDefault: "+923001234567",
    bankDetails: {
      bankName: "Meezan Bank Ltd",
      accountTitle: "ZED's Kitchen Cafe",
      accountNumber: "0234-010203040-5",
      iban: "PK79MEZN0002340102030405"
    }
  }
};

export const BRANCHES: Branch[] = [
  {
    id: "clifton-block-5",
    name: "Zed's Kitchen & Café",
    address: "G5, Mansoor Tower, Block 8, Clifton, Karachi",
    phone: "0326-2220888",
    whatsapp: "+923262220888",
    hours: "9:00 AM - 12:00 AM",
    googleMaps: "https://www.google.com/search?kgmid=/g/11y19h6z5d&q=Zed%27s+Kitchen+%26+Caf%C3%A9",
    services: ["Dine-in", "Takeaway", "Delivery", "Meeting Rooms", "Wi-Fi Available", "Cozy Garden"],
    instagram: "https://www.instagram.com/zeds.khi/",
    orderOnline: "https://order.zedskitchen.com/",
    coworkingMaps: "https://www.google.com/search?kgmid=/g/11rxqc4n8n&q=Z+house"
  }
];

export const AMBIANCE_CARDS: AmbianceCard[] = [
  {
    id: "cozy-corners",
    title: "Cozy Corners",
    description: "Designed for focused work, quiet reading, or intimate chat.",
    image: "/images/ambiance_cozy_corner.png"
  },
  {
    id: "coffee-bar",
    title: "Coffee Bar",
    description: "Watch our baristas craft your favorite espresso drinks live.",
    image: "/images/ambiance_coffee_bar.png"
  },
  {
    id: "group-tables",
    title: "Group Tables",
    description: "Spacious seating ideal for work teams, projects, and friends.",
    image: "/images/ambiance_group_table.png"
  },
  {
    id: "dessert-display",
    title: "Dessert Display",
    description: "Freshly baked cakes, croissants, and pastries daily.",
    image: "/images/ambiance_dessert_display.png"
  },
  {
    id: "evening-vibe",
    title: "Evening Ambiance",
    description: "Warm glowing lights, ambient music, and a relaxed dining mood.",
    image: "/images/ambiance_evening.png"
  }
];

export const MOOD_CARDS: MoodCard[] = [
  {
    id: "quick-coffee",
    title: "Quick Coffee",
    description: "Grab & go",
    tagline: "Grab & go",
    image: "/images/mood_quick_coffee.png",
    action: "order"
  },
  {
    id: "work-session",
    title: "Work Session",
    description: "Focus & productivity",
    tagline: "Focus & productivity",
    image: "/images/mood_work.png",
    action: "book"
  },
  {
    id: "friends-hangout",
    title: "Friends Hangout",
    description: "Good food, good times",
    tagline: "Good food, good times",
    image: "/images/mood_friends.png",
    action: "branches"
  },
  {
    id: "meeting-table",
    title: "Meeting Table",
    description: "Meet & discuss",
    tagline: "Meet & discuss",
    image: "/images/mood_meeting.png",
    action: "book"
  },
  {
    id: "date-evening",
    title: "Date / Evening",
    description: "Cozy & relaxing",
    tagline: "Cozy & relaxing",
    image: "/images/mood_date.png",
    action: "book"
  },
  {
    id: "order-home",
    title: "Order at Home",
    description: "We deliver to you",
    tagline: "We deliver to you",
    image: "/images/mood_delivery.png",
    action: "order"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE (Hot Brews)
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Classic double shot espresso topped with thick velvety milk foam",
    price: 630,
    category: "Coffee",
    image: "/images/menu_americano.png",
    tags: ["Hot"]
  },
  {
    id: "classic-cafe-latte",
    name: "Classic Café Latte",
    description: "Espresso with steamed milk and a light layer of foam",
    price: 630,
    category: "Coffee",
    image: "/images/menu_signature_latte.png",
    tags: ["Hot"]
  },
  {
    id: "french-vanilla-latte",
    name: "French Vanilla Latte",
    description: "Steamed milk and espresso flavored with sweet French vanilla",
    price: 740,
    category: "Coffee",
    image: "/images/menu_flat_white.png",
    tags: ["Hot"]
  },
  {
    id: "mocha-latte",
    name: "Mocha Latte",
    description: "Rich espresso combined with bittersweet chocolate and steamed milk",
    price: 740,
    category: "Coffee",
    image: "/images/menu_flat_white.png",
    tags: ["Hot"]
  },
  {
    id: "americano",
    name: "Caffè Americano",
    description: "Double shot of espresso diluted with hot water, presenting a clean, robust coffee body.",
    price: 690,
    category: "Coffee",
    image: "/images/menu_americano.png",
    tags: ["Hot"]
  },
  {
    id: "cortado",
    name: "Cortado",
    description: "Espresso cut with an equal amount of warm milk to reduce acidity",
    price: 525,
    category: "Coffee",
    image: "/images/menu_americano.png",
    tags: ["Hot"]
  },
  {
    id: "caramel-latte",
    name: "Caramel Latte",
    description: "Espresso with steamed milk and a rich buttery caramel sauce",
    price: 740,
    category: "Coffee",
    image: "/images/menu_signature_latte.png",
    tags: ["Hot"]
  },
  {
    id: "lotus-latte",
    name: "Lotus Latte",
    description: "Specialty latte infused with Lotus Biscoff flavor and biscuit crumble",
    price: 840,
    category: "Coffee",
    image: "/images/menu_signature_latte.png",
    tags: ["Sweet", "New"]
  },
  {
    id: "spanish-latte",
    name: "Spanish Latte",
    description: "Espresso with steamed milk and sweet condensed milk",
    price: 740,
    category: "Coffee",
    image: "/images/menu_signature_latte.png",
    tags: ["Hot"]
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    description: "Stone-ground green tea leaves whisked with steamed milk",
    price: 740,
    category: "Coffee",
    image: "/images/menu_matcha_latte.png",
    tags: ["Healthy", "Hot"]
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    description: "Rich, creamy hot cocoa made with premium chocolate blend",
    price: 715,
    category: "Coffee",
    image: "/images/menu_chocolate_cake.png",
    tags: ["Hot", "Sweet"]
  },
  {
    id: "v60-pour-over-hot",
    name: "V60 Pour-over (Hot)",
    description: "Clean and vibrant single-origin coffee hand-brewed using the V60 method",
    price: 780,
    category: "Coffee",
    image: "/images/menu_americano.png",
    tags: ["Hot", "Strong"]
  },

  // COLD DRINKS (Cold Brews / Signature Sips)
  {
    id: "iced-spanish-latte",
    name: "Iced Spanish Latte",
    description: "Double espresso poured over cold milk and sweet condensed milk with ice",
    price: 690,
    category: "Cold Drinks",
    image: "/images/menu_spanish_latte.png",
    tags: ["Best Seller"],
    popular: true
  },
  {
    id: "iced-matcha-latte",
    name: "Iced Matcha Latte",
    description: "Vibrant green stone-ground matcha over cold milk and ice cubes",
    price: 740,
    category: "Cold Drinks",
    image: "/images/menu_matcha_latte.png",
    tags: ["Popular", "New"],
    popular: true
  },
  {
    id: "strawberry-oreo-frappe",
    name: "Strawberry Oreo Frappe",
    description: "Blended ice drink with fresh strawberries, Oreo cookies, milk, and whipped cream",
    price: 945,
    category: "Cold Drinks",
    image: "/images/menu_peach_tea.png",
    tags: ["Sweet"]
  },
  {
    id: "cookie-crush-frappe",
    name: "Cookie Crush Frappe",
    description: "Blended cookies and ice cream frappe topped with crushed cookies",
    price: 790,
    category: "Cold Drinks",
    image: "/images/menu_peach_tea.png",
    tags: ["Sweet"]
  },
  {
    id: "lotus-frappe",
    name: "Lotus Frappe",
    description: "Decadent blended frappe with Lotus Biscoff spread and biscuit crumbles",
    price: 945,
    category: "Cold Drinks",
    image: "/images/menu_peach_tea.png",
    tags: ["Sweet", "New"]
  },
  {
    id: "mint-lemonade",
    name: "Mint Lemonade",
    description: "Freshly squeezed lemon juice, blended mint leaves, crushed ice, and raw syrup",
    price: 420,
    category: "Cold Drinks",
    image: "/images/menu_mint_lemonade.png",
    tags: ["Refreshing"]
  },
  {
    id: "blueberry-cooler",
    name: "Blueberry Cooler",
    description: "Refreshing summer cooler with fresh blueberries, sparkling soda, and mint leaves",
    price: 525,
    category: "Cold Drinks",
    image: "/images/menu_mint_lemonade.png",
    tags: ["Refreshing"]
  },
  {
    id: "fresh-lime-soda",
    name: "Fresh Lime Soda",
    description: "Crisp and bubbly fresh lime juice topped with sparkling soda",
    price: 420,
    category: "Cold Drinks",
    image: "/images/menu_mint_lemonade.png",
    tags: ["Refreshing"]
  },
  {
    id: "raspberry-iced-tea",
    name: "Raspberry Iced Tea",
    description: "Premium black tea shaken with sweet raspberry syrup and ice",
    price: 525,
    category: "Cold Drinks",
    image: "/images/menu_peach_tea.png",
    tags: ["Refreshing"]
  },

  // BREAKFAST
  {
    id: "mediterranean-omelet",
    name: "Mediterranean Omelet",
    description: "Herbed omelet filled with feta cheese, olives, cherry tomatoes, and bell peppers, served with toast",
    price: 1315,
    category: "Breakfast",
    image: "/images/menu_shakshuka.png",
    tags: ["Signature"]
  },
  {
    id: "eggs-and-steak",
    name: "Eggs and Steak",
    description: "Char-grilled tenderloin steak served with two farm-fresh eggs, golden potato wedges, and herb butter",
    price: 1785,
    category: "Breakfast",
    image: "/images/menu_shakshuka.png",
    tags: ["Premium", "New"]
  },
  {
    id: "mushroom-cheese-omelet",
    name: "Mushroom & Cheese Omelet",
    description: "Fluffy omelette stuffed with fresh sautéed mushrooms and sharp white cheddar cheese",
    price: 1315,
    category: "Breakfast",
    image: "/images/menu_shakshuka.png",
    tags: ["Vegetarian"]
  },
  {
    id: "scrambled-egg-croissant",
    name: "Scrambled Egg in Croissant",
    description: "Creamy, buttery scrambled eggs served inside a warm, flaky freshly baked butter croissant",
    price: 1315,
    category: "Breakfast",
    image: "/images/menu_croissant.png",
    tags: ["Popular"]
  },
  {
    id: "poached-egg-benedict",
    name: "Poached Egg Benedict",
    description: "Soft, runny poached eggs with crispy turkey bacon over toast, finished with rich hollandaise sauce",
    price: 1555,
    category: "Breakfast",
    image: "/images/menu_shakshuka.png",
    tags: ["Signature"]
  },
  {
    id: "pakistani-omelette",
    name: "Pakistani Omelette",
    description: "Traditional local omelette packed with fresh coriander, diced onions, tomatoes, green chillies, and spices",
    price: 1155,
    category: "Breakfast",
    image: "/images/menu_shakshuka.png",
    tags: ["Spicy"]
  },
  {
    id: "french-toast",
    name: "French Toast",
    description: "Thick brioche loaf slices soaked in sweet custard, griddled golden, and served with maple syrup and fresh fruits",
    price: 1155,
    category: "Breakfast",
    image: "/images/menu_french_toast.png",
    tags: ["Sweet", "Best Seller"],
    popular: true
  },
  {
    id: "chia-seeds-pudding",
    name: "Chia Seeds Pudding",
    description: "Healthy chia seeds soaked in coconut milk, topped with a mix of fresh seasonal fruits and crunchy granola",
    price: 1360,
    category: "Breakfast",
    image: "/images/menu_avocado_toast.png",
    tags: ["Healthy"]
  },

  // PIZZA
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    description: "Classic tomato sauce, premium mozzarella cheese, and fresh basil leaves on a hand-stretched stone-baked crust",
    price: 1365,
    category: "Pizza",
    image: "/images/menu_alfredo.png",
    tags: ["Vegetarian"]
  },
  {
    id: "paprika-chicken-pizza",
    name: "Paprika Chicken Pizza",
    description: "Classic marinara base, smoked paprika chicken chunks, roasted bell peppers, and mozzarella",
    price: 1675,
    category: "Pizza",
    image: "/images/menu_alfredo.png",
    tags: ["Spicy"]
  },
  {
    id: "steak-chilli-pizza",
    name: "Steak and Chilli Pizza",
    description: "Premium tenderloin beef strips, cherry tomatoes, red pepper flakes, fresh arugula, and hot chilli oil drizzle",
    price: 2095,
    category: "Pizza",
    image: "/images/menu_alfredo.png",
    tags: ["Premium", "Spicy"]
  },
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    description: "Classic marinara base, loaded with premium beef pepperoni slices and bubbly melted mozzarella cheese",
    price: 1675,
    category: "Pizza",
    image: "/images/menu_pepperoni_pizza.png",
    tags: ["Popular", "Best Seller"],
    popular: true
  },

  // PASTA
  {
    id: "spaghetti-bolognese",
    name: "Spaghetti Bolognese",
    description: "Traditional slow-cooked minced meat and tomato sauce tossed in spaghetti, finished with parmesan and cherry tomatoes",
    price: 1575,
    category: "Pasta",
    image: "/images/menu_alfredo.png",
    tags: ["Classic"]
  },
  {
    id: "fettuccine-alfredo",
    name: "Fettuccine Alfredo",
    description: "Flat fettuccine ribbons tossed in a rich, velvety parmesan butter sauce, topped with juicy grilled chicken fillet",
    price: 1575,
    category: "Pasta",
    image: "/images/menu_alfredo.png",
    tags: ["Creamy", "Popular"]
  },
  {
    id: "prawn-linguini",
    name: "Prawn Linguini",
    description: "Succulent prawns cooked to perfection in a zesty lime chilli butter sauce with linguini pasta",
    price: 1660,
    category: "Pasta",
    image: "/images/menu_alfredo.png",
    tags: ["Seafood", "New"]
  },

  // BURGERS
  {
    id: "classic-cheeseburger",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty topped with melted cheddar cheese, pickles, raw onions, and signature house burger sauce",
    price: 1315,
    category: "Burgers",
    image: "/images/menu_smashed_burger.png",
    tags: ["Classic"]
  },
  {
    id: "signature-burger",
    name: "Signature Burger",
    description: "Juicy beef patty topped with sharp cheddar, spicy jalapeño poppers, and a kick of Dijon mustard",
    price: 1365,
    category: "Burgers",
    image: "/images/menu_smashed_burger.png",
    tags: ["Spicy", "Signature"]
  },
  {
    id: "fried-chicken-burger",
    name: "Fried Chicken Burger",
    description: "Crispy buttermilk fried chicken breast, sriracha mayonnaise, lettuce, and sliced cheese in a soft bun",
    price: 1155,
    category: "Burgers",
    image: "/images/menu_smashed_burger.png",
    tags: ["Crispy", "Popular"]
  },

  // SANDWICHES
  {
    id: "steak-sandwich",
    name: "Steak Sandwich",
    description: "Juicy sautéed tenderloin steak strips on a toasted baguette, topped with melted provolone and caramelized onions",
    price: 1840,
    category: "Sandwiches",
    image: "/images/menu_club_sandwich.png",
    tags: ["Premium", "New"]
  },
  {
    id: "grilled-chicken-sandwich",
    name: "Grilled Chicken Sandwich",
    description: "Tender seasoned chicken breast with fresh lettuce, pickles, and melted cheese in a croissant or baguette",
    price: 1450,
    category: "Sandwiches",
    image: "/images/menu_chicken_panini.png",
    tags: ["Popular"]
  },
  {
    id: "club-sandwich",
    name: "Club Sandwich",
    description: "Triple-decker toasted bread filled with grilled chicken, sriracha mayo, fried egg, lettuce, and sliced cheese",
    price: 1570,
    category: "Sandwiches",
    image: "/images/menu_club_sandwich.png",
    tags: ["Classic"]
  },

  // MAINS
  {
    id: "fish-and-chips",
    name: "Fish and Chips",
    description: "Crispy batter-fried fish fillets served with golden French fries and a side of creamy tartar/pickle mayo",
    price: 1630,
    category: "Mains",
    image: "/images/menu_loaded_fries.png",
    tags: ["Crispy", "Classic"]
  },
  {
    id: "grilled-chicken-fillet",
    name: "Grilled Chicken Fillet",
    description: "Herb-marinated grilled chicken breast served with smooth mashed potatoes, roasted vegetables, and artichoke sauce",
    price: 1660,
    category: "Mains",
    image: "/images/menu_chicken_panini.png",
    tags: ["Healthy"]
  },
  {
    id: "beef-steak",
    name: "Beef Steak",
    description: "Premium tenderloin steak tossed in green chillies, garlic, and butter, served with steamed vegetables and mashed potatoes",
    price: 2600,
    category: "Mains",
    image: "/images/menu_smashed_burger.png",
    tags: ["Premium", "Strong"]
  },

  // SNACKS
  {
    id: "popcorn-chicken",
    name: "Popcorn Chicken",
    description: "Bite-sized batter fried chicken pieces seasoned to perfection and served with a side of spicy mayo dipping sauce",
    price: 1345,
    category: "Snacks",
    image: "/images/menu_popcorn_chicken.png",
    tags: ["Crispy", "Best Seller"],
    popular: true
  },
  {
    id: "mozzarella-sticks",
    name: "Mozzarella Sticks",
    description: "Crispy crumb-coated mozzarella sticks fried golden and served with warm marinara dipping sauce",
    price: 1030,
    category: "Snacks",
    image: "/images/menu_loaded_fries.png",
    tags: ["Crispy", "Vegetarian"]
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    description: "Golden French fries topped with shredded chicken, house special sauce, sliced black olives, jalapeños, and cheese sauce",
    price: 1240,
    category: "Snacks",
    image: "/images/menu_loaded_fries.png",
    tags: ["Best Seller"]
  },
  {
    id: "french-fries",
    name: "French Fries",
    description: "Classic crispy golden fries served with garlic mayo or tomato ketchup",
    price: 630,
    category: "Snacks",
    image: "/images/menu_loaded_fries.png",
    tags: ["Classic"]
  },

  // DESSERTS
  {
    id: "banana-bread",
    name: "Banana Bread",
    description: "Moist and fragrant freshly baked banana bread slice served warm",
    price: 500,
    category: "Desserts",
    image: "/images/menu_croissant.png",
    tags: ["Freshly Baked"]
  },
  {
    id: "brownie",
    name: "Brownie",
    description: "Rich, dense chocolate brownie with a fudgy center and crackly top",
    price: 450,
    category: "Desserts",
    image: "/images/menu_chocolate_cake.png",
    tags: ["Sweet"]
  },
  {
    id: "chocolate-tart",
    name: "Chocolate Tart",
    description: "Decadent dark chocolate ganache filled in a buttery chocolate pastry shell",
    price: 600,
    category: "Desserts",
    image: "/images/menu_chocolate_cake.png",
    tags: ["Sweet", "New"]
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "Classic New York-style creamy cheesecake with a buttery graham cracker crust",
    price: 675,
    category: "Desserts",
    image: "/images/menu_chocolate_cake.png",
    tags: ["Popular"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Ali Raza",
    rating: 5,
    text: "Amazing ambiance, great coffee and super friendly staff. My favorite place to work and unwind!",
    source: "Google Reviews"
  },
  {
    id: "2",
    name: "Ayesha Khan",
    rating: 5,
    text: "Absolutely love the vibe at ZED's Kitchen. The Wi-Fi is super fast, and the Signature Latte is the best I've had in Karachi. Perfect place for remote work.",
    source: "Google Reviews"
  },
  {
    id: "3",
    name: "Fatima Lodhi",
    rating: 5,
    text: "Great atmosphere at the Clifton branch. Love the outdoor garden seating. Smashed beef burger is amazing!",
    source: "Google Reviews"
  }
];

export const GALLERY_ITEMS = [
  { id: "g1", image: "/images/gallery_int_1.png", category: "Interior" },
  { id: "g2", image: "/images/gallery_int_2.png", category: "Interior" },
  { id: "g3", image: "/images/gallery_food_1.png", category: "Food" },
  { id: "g4", image: "/images/gallery_food_2.png", category: "Food" },
  { id: "g5", image: "/images/gallery_coffee_1.png", category: "Coffee" },
  { id: "g6", image: "/images/gallery_coffee_2.png", category: "Coffee" },
  { id: "g7", image: "/images/gallery_work_1.png", category: "Workspace" },
  { id: "g8", image: "/images/gallery_work_2.png", category: "Workspace" }
];
