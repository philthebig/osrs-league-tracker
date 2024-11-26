import { Task } from '../types/tasks';

export const categories = [
  "Tutorial",
  "Combat",
  "Skills",
  "Exploration",
  "Thieving",
  "Fishing",
  "Cooking",
  "Prayer",
  "Farming",
  "Mining",
  "Woodcutting",
  "Crafting",
  "Construction",
  "Agility",
  "Magic",
  "Fletching",
  "Firemaking",
  "Quests",
  "Equipment",
  "Emotes",
  "Miscellaneous"
];

export const TASKS_VERSION = "1.0.1"; // Increment this when you update tasks
// Rather than splitting into regions, let's keep all tasks in one array for simplicity
export const initialTasks: Task[] = [
  {
    id: 1,
    description: "Complete Leagues Tutorial",
    points: 10,
    completed: false,
    category: "Tutorial",
    region: "Misthalin",
    location: "Tutorial Island",
    recommendedOrder: 1,
    notes: "Must be completed to start the league"
  },
  {
    id: 2,
    description: "Open Leagues Menu & Choose Harpoon LAD",
    points: 20,
    completed: false,
    category: "Tutorial",
    region: "Misthalin",
    requirements: {
      items: ["Harpoon"]
    },
    notes: "Drain Prayer to zero with Thick Skin, Wield Harpoon",
    recommendedOrder: 2
  },
  {
    id: 3,
    description: "Check Age at Hans",
    points: 30,
    completed: false,
    category: "Miscellaneous",
    region: "Misthalin",
    location: "Lumbridge Castle",
    recommendedOrder: 3
  },
  {
    id: 4,
    description: "Use Northern Staircase in Lumbridge Castle",
    points: 40,
    completed: false,
    category: "Exploration",
    region: "Misthalin",
    location: "Lumbridge Castle",
    requirements: {
      items: ["25gp"]
    },
    notes: "Withdraw 25gp, Go near Duke Horacio",
    recommendedOrder: 4
  },
  {
    id: 5,
    description: "Pickpocket a citizen",
    points: 50,
    completed: false,
    category: "Thieving",
    region: "Misthalin",
    location: "Lumbridge",
    recommendedOrder: 5
  },
  {
    id: 6,
    description: "Achieve your first level up",
    points: 60,
    completed: false,
    category: "Skills",
    region: "Misthalin",
    recommendedOrder: 6
  },
  {
    id: 7,
    description: "Achieve your first level 5",
    points: 70,
    completed: false,
    category: "Skills",
    region: "Misthalin",
    requirements: {
      skills: {
        "Thieving": 5
      }
    },
    notes: "Thieve Men to 5 thieving. If man is dead thieve any Man/Woman you pass",
    recommendedOrder: 7
  },
  {
    id: 8,
    description: "Cut 2 logs",
    points: 80,
    completed: false,
    category: "Woodcutting",
    region: "Misthalin",
    requirements: {
      items: ["Axe"]
    },
    recommendedOrder: 8
  },
  {
    id: 9,
    description: "Burn 1x Log",
    points: 90,
    completed: false,
    category: "Firemaking",
    region: "Misthalin",
    requirements: {
      items: ["Tinderbox", "Logs"]
    },
    recommendedOrder: 9
  },
  {
    id: 10,
    description: "Fletch Arrow Shafts",
    points: 100,
    completed: false,
    category: "Fletching",
    region: "Misthalin",
    requirements: {
      items: ["Knife", "Logs"]
    },
    recommendedOrder: 10
  },
  {
    id: 11,
    description: "Kill a chicken by Fred the Farmer",
    points: 110,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "Fred's Farm",
    notes: "Keep Raw Chicken",
    recommendedOrder: 11
  },
  {
    id: 12,
    description: "Bury Bones",
    points: 120,
    completed: false,
    category: "Prayer",
    region: "Misthalin",
    requirements: {
      items: ["Bones"]
    },
    recommendedOrder: 12
  },
  {
    id: 13,
    description: "Eat an onion",
    points: 130,
    completed: false,
    category: "Food",
    region: "Misthalin",
    requirements: {
      items: ["Onion"]
    },
    notes: "If this is competitive, will rewrite when you can try again in the guide",
    recommendedOrder: 13
  },
  {
    id: 14,
    description: "Milk 2x cow",
    points: 140,
    completed: false,
    category: "Farming",
    region: "Misthalin",
    requirements: {
      items: ["Bucket"]
    },
    location: "Lumbridge Cow Field",
    recommendedOrder: 14
  },
  {
    id: 15,
    description: "Cry in the wheatfield",
    points: 150,
    completed: false,
    category: "Emotes",
    region: "Misthalin",
    location: "Fred's Farm Wheat Field",
    recommendedOrder: 15
  },
  {
    id: 16,
    description: "Make 2x Flour",
    points: 180,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    requirements: {
      items: ["Wheat", "Pot"]
    },
    location: "Lumbridge Mill",
    recommendedOrder: 16
  },
  {
    id: 17,
    description: "Search Haystack for needle",
    points: 210,
    completed: false,
    category: "Search",
    region: "Misthalin",
    notes: "Start Vampyre Slayer and collect 3x Garlic",
    recommendedOrder: 17
  },
  {
    id: 18,
    description: "Do a lap of Draynor Course",
    points: 220,
    completed: false,
    category: "Agility",
    region: "Misthalin",
    location: "Draynor Village",
    recommendedOrder: 18
  },
  {
    id: 19,
    description: "Get a mark of Grace",
    points: 250,
    completed: false,
    category: "Agility",
    region: "Misthalin",
    location: "Draynor Agility Course",
    notes: "Continue until 13 Agility",
    requirements: {
      skills: {
        "Agility": 10
      }
    },
    recommendedOrder: 19
  },
  {
    id: 20,
    description: "Insult Aggie the Witch",
    points: 260,
    completed: false,
    category: "Dialogue",
    region: "Misthalin",
    location: "Draynor Village",
    notes: "Use dialogue option 2",
    recommendedOrder: 20
  },
  {
    id: 21,
    description: "Catch a raw Shrimp",
    points: 270,
    completed: false,
    category: "Fishing",
    region: "Misthalin",
    requirements: {
      items: ["Small Fishing Net"]
    },
    recommendedOrder: 21
  },
  {
    id: 22,
    description: "Cook a raw Shrimp",
    points: 280,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    requirements: {
      items: ["Raw Shrimp"]
    },
    notes: "Toggle Cook off after this completes on Harpoon if you took",
    recommendedOrder: 22
  },
  {
    id: 23,
    description: "Reach Level 10 in a skill",
    points: 290,
    completed: false,
    category: "Skills",
    region: "Misthalin",
    recommendedOrder: 23
  },
  {
    id: 24,
    description: "Catch a raw Anchovy",
    points: 300,
    completed: false,
    category: "Fishing",
    region: "Misthalin",
    requirements: {
      items: ["Small Fishing Net"]
    },
    recommendedOrder: 24
  },
  {
    id: 25,
    description: "Reach level 20 in a skill",
    points: 310,
    completed: false,
    category: "Skills",
    region: "Misthalin",
    recommendedOrder: 25
  },
  {
    id: 26,
    description: "Cast Home Teleport",
    points: 320,
    completed: false,
    category: "Magic",
    region: "Misthalin",
    recommendedOrder: 26
  },
  {
    id: 27,
    description: "Cook Bread on the range",
    points: 350,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    requirements: {
      items: ["Bread Dough"]
    },
    location: "Lumbridge Castle Kitchen",
    notes: "Complete Cooks Assistant first",
    recommendedOrder: 27
  },
  {
    id: 28,
    description: "Cook 5 Shrimps",
    points: 360,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    requirements: {
      items: ["Raw Shrimp"]
    },
    recommendedOrder: 28
  },
  {
    id: 29,
    description: "Cook the chicken then burn the chicken",
    points: 370,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    requirements: {
      items: ["Raw Chicken"]
    },
    recommendedOrder: 29
  },
  {
    id: 30,
    description: "Pray in Lumbridge Church",
    points: 380,
    completed: false,
    category: "Prayer",
    region: "Misthalin",
    location: "Lumbridge Church",
    recommendedOrder: 30
  },
  {
    id: 31,
    description: "Ask Bob for a quest",
    points: 390,
    completed: false,
    category: "Quests",
    region: "Misthalin",
    location: "Lumbridge",
    recommendedOrder: 31
  },
  {
    id: 32,
    description: "Dance in Lumbridge Graveyard",
    points: 400,
    completed: false,
    category: "Emotes",
    region: "Misthalin",
    location: "Lumbridge Graveyard",
    recommendedOrder: 32
  },
  {
    id: 33,
    description: "Visit Deaths Domain",
    points: 410,
    completed: false,
    category: "Exploration",
    region: "Misthalin",
    notes: "Teleport to Stronghold by Count Count",
    recommendedOrder: 33
  },
  {
    id: 34,
    description: "Kill a Goblin holding a Spear in Stronghold of Security",
    points: 420,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "Stronghold of Security",
    notes: "Can do this later: By the RAM step or east of Stronghold",
    recommendedOrder: 34
  },
  {
    id: 35,
    description: "Kill a Goblin",
    points: 430,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    notes: "Take the Bones & Bronze Spear IF you get it",
    recommendedOrder: 35
  },
  {
    id: 36,
    description: "Complete all 4 Floors of Stronghold",
    points: 460,
    completed: false,
    category: "Exploration",
    region: "Misthalin",
    location: "Stronghold of Security",
    notes: "If you die here yer trash fella. Ankou/ghost max = 9, drink wine on any >0 damage. Spider max 6",
    recommendedOrder: 36
  },
  {
    id: 37,
    description: "Wield Fancy/Fighter boots",
    points: 460,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    notes: "Perform all 4 emotes for Diary",
    recommendedOrder: 37
  },
  {
    id: 38,
    description: "Drink a beer in Barbarian Village Longhall",
    points: 470,
    completed: false,
    category: "Consumables",
    region: "Misthalin",
    location: "Barbarian Village Longhall",
    requirements: {
      items: ["Beer"]
    },
    recommendedOrder: 38
  },
  {
    id: 39,
    description: "Kill a barbarian",
    points: 480,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "Barbarian Village",
    notes: "This may not work due to Ironman and multi",
    recommendedOrder: 39
  },
  {
    id: 40,
    description: "Get a kitten and stroke it",
    points: 490,
    completed: false,
    category: "Pets",
    region: "Misthalin",
    recommendedOrder: 40
  },
  {
    id: 41,
    description: "Kill a Mugger",
    points: 500,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "West Champions guild/Aubury/West of Lumbridge Castle",
    notes: "Do this whenever you pass a Mugger",
    recommendedOrder: 41
  },
  {
    id: 42,
    description: "Pick a cabbage south of Harlow",
    points: 510,
    completed: false,
    category: "Gathering",
    region: "Misthalin",
    location: "South of Harlow",
    recommendedOrder: 42
  },
  {
    id: 43,
    description: "Equip Iron Dagger",
    points: 520,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Iron Dagger"]
    },
    notes: "Talk to Dr. Harlow and continue Vampire Slayer",
    recommendedOrder: 43
  },
  {
    id: 44,
    description: "Pet the Varrock dog whenever you find him",
    points: 530,
    completed: false,
    category: "Pets",
    region: "Misthalin",
    location: "Varrock",
    notes: "Feed him a bone for Diary",
    recommendedOrder: 44
  },
  {
    id: 45,
    description: "Kill a guard with Wind strike",
    points: 540,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "Varrock",
    requirements: {
      items: ["Air runes", "Mind runes"]
    },
    recommendedOrder: 45
  },
  {
    id: 46,
    description: "Buy an Air Staff and Equip it",
    points: 550,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Coins"]
    },
    notes: "Buy a Newspaper and drop it",
    recommendedOrder: 46
  },
  {
    id: 47,
    description: "Anger the Tramp",
    points: 560,
    completed: false,
    category: "Dialogue",
    region: "Misthalin",
    requirements: {
      items: ["Coins"]
    },
    notes: "You need coins and option 2",
    recommendedOrder: 47
  },
  {
    id: 48,
    description: "Teleport to Essence mine",
    points: 570,
    completed: false,
    category: "Magic",
    region: "Misthalin",
    recommendedOrder: 48
  },
  {
    id: 49,
    description: "Mine a Rune Essence",
    points: 580,
    completed: false,
    category: "Mining",
    region: "Misthalin",
    location: "Rune Essence Mine",
    requirements: {
      items: ["Pickaxe"]
    },
    recommendedOrder: 49
  },
  {
    id: 50,
    description: "Steal from Varrock Tea Stall",
    points: 590,
    completed: false,
    category: "Thieving",
    region: "Misthalin",
    location: "Varrock",
    notes: "Keep 1x tea, Get 15 Thieving",
    recommendedOrder: 50
  },
  {
    id: 51,
    description: "Use Wizard hat on Hat stand in Old Man Yarlo's crib",
    points: 600,
    completed: false,
    category: "Miscellaneous",
    region: "Misthalin",
    requirements: {
      items: ["Wizard hat"]
    },
    location: "Varrock",
    recommendedOrder: 51
  },
  {
    id: 52,
    description: "Buy a POH",
    points: 620,
    completed: false,
    category: "Construction",
    region: "Misthalin",
    requirements: {
      items: ["Coins"]
    },
    notes: "Start Daddy's Home & take saw if there",
    recommendedOrder: 52
  },
  {
    id: 53,
    description: "Give Elsie some tea",
    points: 630,
    completed: false,
    category: "Quests",
    region: "Misthalin",
    location: "Varrock Church",
    requirements: {
      items: ["Tea"]
    },
    notes: "Upstairs Varrock Church",
    recommendedOrder: 53
  },
  {
    id: 54,
    description: "Get a haircut South of Varrock Church",
    points: 640,
    completed: false,
    category: "Customization",
    region: "Misthalin",
    location: "South of Varrock Church",
    recommendedOrder: 54
  },
  {
    id: 55,
    description: "Mine Copper Ore",
    points: 650,
    completed: false,
    category: "Mining",
    region: "Misthalin",
    requirements: {
      items: ["Pickaxe"]
    },
    notes: "KEEP THIS",
    recommendedOrder: 55
  },
  {
    id: 56,
    description: "Mine 5x Tin Ore",
    points: 660,
    completed: false,
    category: "Mining",
    region: "Misthalin",
    requirements: {
      items: ["Pickaxe"]
    },
    notes: "KEEP 1x",
    recommendedOrder: 56
  },
  {
    id: 57,
    description: "Kill a Dark Wizard",
    points: 670,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    recommendedOrder: 57
  },
  {
    id: 58,
    description: "Kill a Ram",
    points: 680,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    recommendedOrder: 58
  },
  {
    id: 59,
    description: "Rake a Farming Patch",
    points: 690,
    completed: false,
    category: "Farming",
    region: "Misthalin",
    requirements: {
      items: ["Rake"]
    },
    notes: "Compost on Patch, Buy Seed Dibber, Plant Barley",
    recommendedOrder: 59
  },
  {
    id: 60,
    description: "Pay for Protection",
    points: 700,
    completed: false,
    category: "Farming",
    region: "Misthalin",
    recommendedOrder: 60
  },
  {
    id: 61,
    description: "Cut the Oak tree in the potato field",
    points: 710,
    completed: false,
    category: "Woodcutting",
    region: "Misthalin",
    requirements: {
      items: ["Axe"]
    },
    recommendedOrder: 61
  },
  {
    id: 62,
    description: "Burn the oak logs",
    points: 720,
    completed: false,
    category: "Firemaking",
    region: "Misthalin",
    requirements: {
      items: ["Tinderbox", "Oak logs"]
    },
    recommendedOrder: 62
  },
  {
    id: 63,
    description: "Kill a cow in 1 hit",
    points: 730,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    notes: "Take the Cowhide & kill another cow for a second",
    recommendedOrder: 63
  },
  {
    id: 64,
    description: "Kill an Imp With Earth strike",
    points: 740,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    requirements: {
      items: ["Earth runes", "Mind runes"]
    },
    notes: "If busy, kill any imp at any point throughout play",
    recommendedOrder: 64
  },
  {
    id: 65,
    description: "Scatter the ashes",
    points: 750,
    completed: false,
    category: "Prayer",
    region: "Misthalin",
    requirements: {
      items: ["Ashes"]
    },
    recommendedOrder: 65
  },
  {
    id: 66,
    description: "Churn Milk into Butter",
    points: 780,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    requirements: {
      items: ["Milk"]
    },
    recommendedOrder: 66
  },
  {
    id: 67,
    description: "Kick a spider outside HAM",
    points: 790,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "Outside HAM hideout",
    recommendedOrder: 67
  },
  {
    id: 68,
    description: "Spin 5x Wool",
    points: 800,
    completed: false,
    category: "Crafting",
    region: "Misthalin",
    requirements: {
      items: ["Wool"]
    },
    recommendedOrder: 68
  },
  {
    id: 69,
    description: "Kill a Frog",
    points: 810,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "Lumbridge Swamp",
    notes: "Collect 15 Swamp Tar",
    recommendedOrder: 69
  },
  {
    id: 70,
    description: "Buy a candle",
    points: 820,
    completed: false,
    category: "Shopping",
    region: "Misthalin",
    requirements: {
      items: ["Coins"]
    },
    recommendedOrder: 70
  },
  {
    id: 71,
    description: "Cut logs with Steel Axe",
    points: 830,
    completed: false,
    category: "Woodcutting",
    region: "Misthalin",
    requirements: {
      items: ["Steel axe"]
    },
    recommendedOrder: 71
  },
  {
    id: 72,
    description: "Fletch 1000 Arrowshafts",
    points: 840,
    completed: false,
    category: "Fletching",
    region: "Misthalin",
    requirements: {
      items: ["Knife", "Logs"]
    },
    notes: "Can cut logs while moving towards Mugger/Imp/Onion spawns to catch up on these tasks",
    recommendedOrder: 72
  },
  {
    id: 73,
    description: "Thieve HAM Members until 38 Thieving",
    points: 870,
    completed: false,
    category: "Thieving",
    region: "Misthalin",
    requirements: {
      skills: {
        "Thieving": 15
      }
    },
    notes: "This may get you 28 coin pouches task/clean a guam",
    recommendedOrder: 73
  },
  {
    id: 74,
    description: "Catch 25 Sardines",
    points: 900,
    completed: false,
    category: "Fishing",
    region: "Misthalin",
    requirements: {
      items: ["Fishing rod", "Fishing bait"]
    },
    recommendedOrder: 74
  },
  {
    id: 75,
    description: "Cook 10 Sardines",
    points: 930,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    requirements: {
      items: ["Raw sardine"]
    },
    recommendedOrder: 75
  },
  {
    id: 76,
    description: "Catch 1 Herring",
    points: 940,
    completed: false,
    category: "Fishing",
    region: "Misthalin",
    requirements: {
      items: ["Fishing rod", "Fishing bait"]
    },
    recommendedOrder: 76
  },
  {
    id: 77,
    description: "Have Ned make you a rope",
    points: 950,
    completed: false,
    category: "Crafting",
    region: "Misthalin",
    location: "Draynor Village",
    requirements: {
      items: ["Coins"]
    },
    notes: "Buy 4x more ropes",
    recommendedOrder: 77
  },
  {
    id: 78,
    description: "Make an orange cape",
    points: 960,
    completed: false,
    category: "Crafting",
    region: "Misthalin",
    recommendedOrder: 78
  },
  {
    id: 79,
    description: "Complete 10x Draynor Agility Rooftops",
    points: 990,
    completed: false,
    category: "Agility",
    region: "Misthalin",
    location: "Draynor Village",
    notes: "Train until 30 Agility",
    recommendedOrder: 79
  },
  {
    id: 80,
    description: "Get chased by a chair in Draynor",
    points: 1000,
    completed: false,
    category: "Events",
    region: "Misthalin",
    location: "Draynor Manor",
    recommendedOrder: 80
  },
  {
    id: 81,
    description: "Complete Vampire Slayer",
    points: 1030,
    completed: false,
    category: "Quests",
    region: "Misthalin",
    requirements: {
      items: ["Stake", "Hammer", "Garlic"]
    },
    recommendedOrder: 81
  },
  {
    id: 82,
    description: "Wield Mithril Dagger",
    points: 1060,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Mithril dagger"]
    },
    recommendedOrder: 82
  },
  {
    id: 83,
    description: "Wield Adamant Dagger",
    points: 1090,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Adamant dagger"]
    },
    recommendedOrder: 83
  },
  {
    id: 84,
    description: "Nab a pineapple",
    points: 1100,
    completed: false,
    category: "Gathering",
    region: "Karamja",
    location: "Brimhaven",
    recommendedOrder: 84
  },
  {
    id: 85,
    description: "Enter POH",
    points: 1110,
    completed: false,
    category: "Construction",
    region: "Karamja",
    requirements: {
      items: ["House teleport"]
    },
    recommendedOrder: 85
  },
  {
    id: 86,
    description: "Build a room in your POH",
    points: 1140,
    completed: false,
    category: "Construction",
    region: "Karamja",
    requirements: {
      items: ["Coins", "Saw", "Hammer"]
    },
    recommendedOrder: 86
  },
  {
    id: 87,
    description: "Buy invent of Banana, 1x Soda Ash, 1x Bucket of Sand, 1x seaweed",
    points: 1150,
    completed: false,
    category: "Shopping",
    region: "Karamja",
    notes: "Drop and pick the seaweed by Cart",
    recommendedOrder: 87
  },
  {
    id: 88,
    description: "Buy a torch and light it",
    points: 1160,
    completed: false,
    category: "Equipment",
    region: "Karamja",
    location: "Shilo Village",
    requirements: {
      items: ["Coins", "Tinderbox"]
    },
    recommendedOrder: 88
  },
  {
    id: 89,
    description: "Buy a nights rest",
    points: 1190,
    completed: false,
    category: "Miscellaneous",
    region: "Karamja",
    location: "Shilo Village",
    requirements: {
      items: ["Coins"]
    },
    recommendedOrder: 89
  },
  {
    id: 90,
    description: "Smelt Bronze bar",
    points: 1200,
    completed: false,
    category: "Smithing",
    region: "Karamja",
    requirements: {
      items: ["Copper ore", "Tin ore"]
    },
    notes: "Craft Molten Glass Toad after",
    recommendedOrder: 90
  },
  {
    id: 91,
    description: "Get a slayer task",
    points: 1210,
    completed: false,
    category: "Slayer",
    region: "Karamja",
    notes: "Do this task with Adamant dagger after Vampyre Slayer whenever you are passing the monsters",
    recommendedOrder: 91
  },
  {
    id: 92,
    description: "Buy an enchanted gem & spiny helmet and check task",
    points: 1220,
    completed: false,
    category: "Slayer",
    region: "Karamja",
    requirements: {
      items: ["Coins"]
    },
    recommendedOrder: 92
  },
  {
    id: 93,
    description: "Catch 10x Pike",
    points: 1250,
    completed: false,
    category: "Fishing",
    region: "Karamja",
    requirements: {
      items: ["Fishing rod", "Fishing bait"]
    },
    recommendedOrder: 93
  },
  {
    id: 94,
    description: "Cook 20x Pike",
    points: 1280,
    completed: false,
    category: "Cooking",
    region: "Karamja",
    requirements: {
      items: ["Raw pike"]
    },
    recommendedOrder: 94
  },
  {
    id: 95,
    description: "Catch a Salmon on Karamja",
    points: 1310,
    completed: false,
    category: "Fishing",
    region: "Karamja",
    requirements: {
      items: ["Fly fishing rod", "Feathers"]
    },
    recommendedOrder: 95
  },
  {
    id: 96,
    description: "Catch and cook 50 Salmon",
    points: 1340,
    completed: false,
    category: "Fishing",
    region: "Karamja",
    requirements: {
      items: ["Fly fishing rod", "Feathers"]
    },
    recommendedOrder: 96
  },
  {
    id: 97,
    description: "Reach level 30",
    points: 1370,
    completed: false,
    category: "Skills",
    region: "Karamja",
    recommendedOrder: 97
  },
  {
    id: 98,
    description: "Reach level 40 Fishing",
    points: 1400,
    completed: false,
    category: "Fishing",
    region: "Karamja",
    requirements: {
      skills: {
        "Fishing": 40
      }
    },
    recommendedOrder: 98
  },
  {
    id: 99,
    description: "Kill Lesser Demon with Water Strike",
    points: 1430,
    completed: false,
    category: "Combat",
    region: "Karamja",
    location: "Karamja Volcano",
    requirements: {
      items: ["Water runes", "Mind runes"]
    },
    notes: "If busy, leave for now but there are more behind the Dragon Slayer door",
    recommendedOrder: 99
  },
  {
    id: 100,
    description: "Combat level 10",
    points: 1440,
    completed: false,
    category: "Combat",
    region: "Karamja",
    requirements: {
      skills: {
        "Combat": 10
      }
    },
    recommendedOrder: 100
  },
  {
    id: 101,
    description: "Kill a snake",
    points: 1450,
    completed: false,
    category: "Combat",
    region: "Karamja",
    recommendedOrder: 101
  },
  {
    id: 102,
    description: "Fish 100 Lobsters",
    points: 1480,
    completed: false,
    category: "Fishing",
    region: "Karamja",
    requirements: {
      items: ["Lobster pot"],
      skills: {
        "Fishing": 40
      }
    },
    recommendedOrder: 102
  },
  {
    id: 103,
    description: "Fish 50 Swordfish",
    points: 1510,
    completed: false,
    category: "Fishing",
    region: "Karamja",
    requirements: {
      items: ["Harpoon"],
      skills: {
        "Fishing": 50
      }
    },
    notes: "Get an extra 20+",
    recommendedOrder: 103
  },
  {
    id: 104,
    description: "First level 50",
    points: 1540,
    completed: false,
    category: "Skills",
    region: "Karamja",
    recommendedOrder: 104
  },
  {
    id: 105,
    description: "Fill a crate with bananas",
    points: 1550,
    completed: false,
    category: "Miscellaneous",
    region: "Karamja",
    notes: "Pick a banana and buy karamja rum + use SLICED banana on it",
    recommendedOrder: 105
  },
  {
    id: 106,
    description: "Cook remaining Lobsters in Lumbridge",
    points: 1580,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    location: "Lumbridge Castle Kitchen",
    requirements: {
      items: ["Raw lobster"]
    },
    recommendedOrder: 106
  },
  {
    id: 107,
    description: "Cook remaining Swordfish in Lumbridge",
    points: 1610,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    location: "Lumbridge Castle Kitchen",
    requirements: {
      items: ["Raw swordfish"]
    },
    recommendedOrder: 107
  },
  {
    id: 108,
    description: "Wield Steel Full Helmet",
    points: 1620,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Steel full helmet"]
    },
    recommendedOrder: 108
  },
  {
    id: 109,
    description: "Wield Spiny Helmet",
    points: 1630,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Spiny helmet"]
    },
    recommendedOrder: 109
  },
  {
    id: 110,
    description: "Kill a duck with Fire Strike",
    points: 1640,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    requirements: {
      items: ["Fire runes", "Mind runes"]
    },
    recommendedOrder: 110
  },
  {
    id: 111,
    description: "Smith a Bronze Full Helmet",
    points: 1650,
    completed: false,
    category: "Smithing",
    region: "Misthalin",
    requirements: {
      items: ["Hammer", "Bronze bars"]
    },
    recommendedOrder: 111
  },
  {
    id: 112,
    description: "Smith a Bronze Plateskirt",
    points: 1660,
    completed: false,
    category: "Smithing",
    region: "Misthalin",
    requirements: {
      items: ["Hammer", "Bronze bars"]
    },
    recommendedOrder: 112
  },
  {
    id: 113,
    description: "Enter Brimhaven Dungeon",
    points: 1720,
    completed: false,
    category: "Exploration",
    region: "Karamja",
    location: "Brimhaven",
    recommendedOrder: 113
  },
  {
    id: 114,
    description: "Kill a Moss Giant",
    points: 1730,
    completed: false,
    category: "Combat",
    region: "Karamja",
    location: "Brimhaven Dungeon",
    recommendedOrder: 114
  },
  {
    id: 115,
    description: "Kill a greater demon",
    points: 1760,
    completed: false,
    category: "Combat",
    region: "Karamja",
    location: "Brimhaven Dungeon",
    notes: "Combat mastery into Melee",
    recommendedOrder: 115
  },
  {
    id: 116,
    description: "Pickpocket a guard",
    points: 1790,
    completed: false,
    category: "Thieving",
    region: "Misthalin",
    location: "Varrock Castle",
    requirements: {
      skills: {
        "Thieving": 40
      }
    },
    recommendedOrder: 116
  },
  {
    id: 117,
    description: "Open 800 coins at once",
    points: 1820,
    completed: false,
    category: "Thieving",
    region: "Misthalin",
    recommendedOrder: 117
  },
  {
    id: 118,
    description: "Open 28 coin pouches at once",
    points: 1850,
    completed: false,
    category: "Thieving",
    region: "Misthalin",
    recommendedOrder: 118
  },
  {
    id: 119,
    description: "First level 60",
    points: 1850,
    completed: false,
    category: "Skills",
    region: "Misthalin",
    recommendedOrder: 119
  },
  {
    id: 120,
    description: "Varrock Agility Course until 40 Agility",
    points: 1860,
    completed: false,
    category: "Agility",
    region: "Misthalin",
    location: "Varrock",
    requirements: {
      skills: {
        "Agility": 30
      }
    },
    recommendedOrder: 120
  },
  {
    id: 121,
    description: "Complete Varrock Agility 10 times",
    points: 1890,
    completed: false,
    category: "Agility",
    region: "Misthalin",
    location: "Varrock",
    requirements: {
      skills: {
        "Agility": 30
      }
    },
    recommendedOrder: 121
  },
  {
    id: 122,
    description: "Complete Natural History Quiz",
    points: 1900,
    completed: false,
    category: "Miscellaneous",
    region: "Misthalin",
    location: "Varrock Museum",
    recommendedOrder: 122
  },
  {
    id: 123,
    description: "Make 1x Plank at the Sawmill",
    points: 1910,
    completed: false,
    category: "Construction",
    region: "Misthalin",
    location: "Lumber Yard",
    requirements: {
      items: ["Logs", "Coins"]
    },
    recommendedOrder: 123
  },
  {
    id: 124,
    description: "Wield a Runite Weapon",
    points: 1940,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Runite weapon"]
    },
    notes: "Buy Runite Mace",
    recommendedOrder: 124
  },
  {
    id: 125,
    description: "Wear some Black Armour",
    points: 1970,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Black armour piece"]
    },
    recommendedOrder: 125
  },
  {
    id: 126,
    description: "Travel to Fossil Island",
    points: 1980,
    completed: false,
    category: "Exploration",
    region: "Misthalin",
    recommendedOrder: 126
  },
  {
    id: 127,
    description: "Pet the Museum Dog",
    points: 1990,
    completed: false,
    category: "Pets",
    region: "Misthalin",
    location: "Varrock Museum",
    recommendedOrder: 127
  },
  {
    id: 128,
    description: "Build the Fossil Island Bank",
    points: 2020,
    completed: false,
    category: "Construction",
    region: "Misthalin",
    location: "Fossil Island",
    recommendedOrder: 128
  },
  {
    id: 129,
    description: "Unlock the Fossil Island teleports",
    points: 2050,
    completed: false,
    category: "Magic",
    region: "Misthalin",
    location: "Fossil Island",
    recommendedOrder: 129
  },
  {
    id: 130,
    description: "Make an Oak Larder",
    points: 2080,
    completed: false,
    category: "Construction",
    region: "Misthalin",
    requirements: {
      items: ["Oak planks", "Hammer", "Saw"],
      skills: {
        "Construction": 33
      }
    },
    recommendedOrder: 130
  },
  {
    id: 131,
    description: "Throw a hoop on a stick",
    points: 2110,
    completed: false,
    category: "Miscellaneous",
    region: "Misthalin",
    requirements: {
      items: ["Hoop on a stick"]
    },
    recommendedOrder: 131
  },
  {
    id: 132,
    description: "Take Shilo River Shortcut",
    points: 2140,
    completed: false,
    category: "Agility",
    region: "Karamja",
    location: "Shilo Village",
    recommendedOrder: 132
  },
  {
    id: 133,
    description: "Catch Karambwanji",
    points: 2150,
    completed: false,
    category: "Fishing",
    region: "Karamja",
    location: "Karamja",
    notes: "Get at least 20",
    recommendedOrder: 133
  },
  {
    id: 134,
    description: "Fill a medium stash unit at Edgeville",
    points: 2180,
    completed: false,
    category: "Construction",
    region: "Misthalin",
    location: "Edgeville",
    recommendedOrder: 134
  },
  {
    id: 135,
    description: "Complete 1x Easy Clue Scroll",
    points: 2210,
    completed: false,
    category: "Clue Scrolls",
    region: "Misthalin",
    notes: "Get from HAM members",
    recommendedOrder: 135
  },
  {
    id: 136,
    description: "Snare a bird",
    points: 2220,
    completed: false,
    category: "Hunter",
    region: "Misthalin",
    requirements: {
      items: ["Bird snare"]
    },
    notes: "Bird snare from Chest earlier. Birds are on the way to Dark Chest",
    recommendedOrder: 136
  },
  {
    id: 137,
    description: "Open the Dark Chest",
    points: 2250,
    completed: false,
    category: "Exploration",
    region: "Misthalin",
    location: "Far North West of Isle of Souls",
    recommendedOrder: 137
  },
  {
    id: 138,
    description: "Cut a Sapphire",
    points: 2260,
    completed: false,
    category: "Crafting",
    region: "Karamja",
    requirements: {
      items: ["Chisel", "Uncut sapphire"],
      skills: {
        "Crafting": 20
      }
    },
    location: "Shilo Village",
    recommendedOrder: 138
  }
];

console.log('Total tasks available:', initialTasks.length);