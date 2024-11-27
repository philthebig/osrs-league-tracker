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

export const TASKS_VERSION = "1.1.7"; // Increment this when you update tasks
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
    notes: "Must be completed to start the league",
    afterSteps: [
      { type: "NOTE", description: "Complete any random events you get if they are not duplicates" }
    ]
  },
  {
    id: 2,
    description: "Open Leagues Menu & Choose Harpoon LAD",
    points: 20,
    completed: false,
    category: "Tutorial",
    region: "Misthalin",
    recommendedOrder: 2,
    requirements: {
      items: ["Harpoon"]
    },
    beforeSteps: [
      { type: "INSTRUCTION", description: "Drain Prayer to zero with Thick Skin" },
      { type: "INSTRUCTION", description: "Wield Harpoon" }
    ]
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
    recommendedOrder: 4,
    requirements: {
      items: ["25gp"]
    },
    beforeSteps: [
      { type: "INSTRUCTION", description: "Withdraw 25gp" },
      { type: "INSTRUCTION", description: "Go near Duke Horacio" }
    ]
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
    recommendedOrder: 7,
    requirements: {
      skills: {
        "Thieving": 5
      }
    },
    beforeSteps: [
      { type: "INSTRUCTION", description: "Thieve Men to 5 thieving. (If man is dead thieve any Man/Woman you pass)" },
      { type: "INSTRUCTION", description: "Talk to Starter mage for more runes" },
      { type: "INSTRUCTION", description: "An onion spawns upstairs in Lumbridge General Store, check if it is there and take+eat if it is. If not leave it." },
      { type: "INSTRUCTION", description: "Sell Wooden Shield, Bronze Sword, Bronze Dagger (+22gp)" },
      { type: "INSTRUCTION", description: "Buy Shears, Knife, Hammer, Pot (you should have 2 now), 2x Buckets (-13gp)" },
      { type: "INSTRUCTION", description: "Buy 2 beers (-4gp)" }
    ]
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
    location: "Fred's Farm, Lumbridge",
    recommendedOrder: 11,
    notes: "Can do this later",
    afterSteps: [
      { type: "INSTRUCTION", description: "Keep Raw Chicken" }
    ]
  },
  {
    id: 12,
    description: "Bury Bones",
    points: 120,
    completed: false,
    category: "Prayer",
    region: "Misthalin",
    recommendedOrder: 12,
    requirements: {
      items: ["Bones"]
    },
    notes: "Can do this later",
    afterSteps: [
      { type: "INSTRUCTION", description: "Pick 3 Onions (if competitive, leave this)" },
      { type: "INSTRUCTION", description: "Collect an egg (if the spawn isn't there search the coop north)" }
    ]
  },
  {
    id: 13,
    description: "Eat an onion",
    points: 130,
    completed: false,
    category: "Food",
    region: "Misthalin",
    recommendedOrder: 13,
    requirements: {
      items: ["Onion"]
    },
    notes: "If this is competitive, I will rewrite when you can try again in the guide"
  },
  {
    id: 14,
    description: "Milk 2x cow",
    points: 140,
    completed: false,
    category: "Farming",
    region: "Misthalin",
    location: "Lumbridge Cow Field",
    requirements: {
      items: ["Bucket"]
    },
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
    recommendedOrder: 15,
    afterSteps: [
      { type: "INSTRUCTION", description: "Pick 2x Wheat" }
    ]
  },
  {
    id: 16,
    description: "Make 2x Flour",
    points: 180,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    location: "Lumbridge Mill",
    requirements: {
      items: ["Wheat", "Pot"]
    },
    recommendedOrder: 16
  },
  {
    id: 17,
    description: "Search Haystack for needle",
    points: 210,
    completed: false,
    category: "Search",
    region: "Misthalin",
    recommendedOrder: 17,
    afterSteps: [
      { type: "INSTRUCTION", description: "Start Vampyre Slayer and collect 3x Garlic" }
    ]
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
    requirements: {
      skills: {
        "Agility": 10
      }
    },
    recommendedOrder: 19,
    afterSteps: [
      { type: "INSTRUCTION", description: "Continue until 13 Agility" },
      { type: "INSTRUCTION", description: "Drop coins and flour at Aggie" }
    ]
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
    recommendedOrder: 20,
    afterSteps: [
      { type: "INSTRUCTION", description: "Ask Wise old man for a task" },
      { type: "INSTRUCTION", description: "Buy 4 Barley (1 at a time)" },
      { type: "INSTRUCTION", description: "Buy 10x Wine (they are 1gp each doesn't matter)" }
    ],
    beforeSteps: [
      { type: "BANK", description: "BANK ALL" },
      { type: "WITHDRAW", description: "WITHDRAW: Harpoon" },
      { type: "INSTRUCTION", description: "Claim Forestry kit & wield it" }
    ]
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
    recommendedOrder: 25,
    beforeSteps: [
      { type: "BANK", description: "BANK ALL" },
      { type: "WITHDRAW", description: "WITHDRAW: Mind/Air Runes, Raw Chicken, 2x Flour, Empty Bucket, Milk, Egg, 2x Beer, Pickaxe, Invent of raw Shrimps" }
    ]
  },
  {
    id: 26,
    description: "Cast Home Teleport",
    points: 320,
    completed: false,
    category: "Magic",
    region: "Misthalin",
    recommendedOrder: 26,
    afterSteps: [
      { type: "INSTRUCTION", description: "Complete Cooks Assistant" },
      { type: "INSTRUCTION", description: "Fill Bucket with water and use on Flour to make Bread Dough" }
    ]
  },
  {
    id: 27,
    description: "Cook Bread on the range",
    points: 350,
    completed: false,
    category: "Cooking",
    region: "Misthalin",
    location: "Lumbridge Castle Kitchen",
    requirements: {
      items: ["Bread Dough"]
    },
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
    recommendedOrder: 29,
    afterSteps: [
      { type: "INSTRUCTION", description: "Drop or deposit shrimp running to the bank" }
    ],
    beforeSteps: [
      { type: "WITHDRAW", description: "WITHDRAW: 10x Wines, Pickaxe, Strike Runes, Coins, bones, beer" }
    ]
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
    recommendedOrder: 33,
    afterSteps: [
      { type: "INSTRUCTION", description: "Teleport to Stronghold by Count Count" }
    ]
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
    recommendedOrder: 35,
    afterSteps: [
      { type: "INSTRUCTION", description: "Take the Bones & Bronze Spear IF you get it" },
      { type: "INSTRUCTION", description: "Complete all 4 Floors of Stronghold (if you die here yer trash fella. Ankou/ghost max = 9, drink wine on any >0 damage. Spider max 6)" }
    ]
  },
  {
    id: 36,
    description: "Wield Fancy/Fighter boots",
    points: 460,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    recommendedOrder: 37,
    afterSteps: [
      { type: "INSTRUCTION", description: "Perform all 4 emotes for Diary" },
      { type: "INSTRUCTION", description: "Buy a steel helmet" }
    ]
  },
  {
    id: 37,
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
    id: 38,
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
    id: 39,
    description: "Get a kitten and stroke it",
    points: 490,
    completed: false,
    category: "Pets",
    region: "Misthalin",
    recommendedOrder: 40,
    afterSteps: [
      { type: "INSTRUCTION", description: "Mine 3x Clay West Champions guild" }
    ]
  },
  {
    id: 40,
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
    id: 41,
    description: "Pick a cabbage south of Harlow",
    points: 510,
    completed: false,
    category: "Gathering",
    region: "Misthalin",
    location: "South of Harlow",
    recommendedOrder: 42,
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy Iron/Mithril/Adamant Dagger" }
    ]
  },
  {
    id: 42,
    description: "Equip Iron Dagger",
    points: 520,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Iron Dagger"]
    },
    recommendedOrder: 43,
    afterSteps: [
      { type: "INSTRUCTION", description: "Talk to Dr. Harlow and continue Vampire Slayer" },
      { type: "INSTRUCTION", description: "Buy a red cape, brown apron, leather gloves & boots" },
      { type: "INSTRUCTION", description: "Buy hammer/empty bucket" },
      { type: "INSTRUCTION", description: "Start Demon Slayer (1/2/3/4)" }
    ]
  },
  {
    id: 43,
    description: "Pet the Varrock dog whenever you find him",
    points: 530,
    completed: false,
    category: "Pets",
    region: "Misthalin",
    location: "Varrock",
    recommendedOrder: 44,
    afterSteps: [
      { type: "INSTRUCTION", description: "Feed him a bone for Diary" }
    ]
  },
  {
    id: 44,
    description: "Kill a guard with Wind strike",
    points: 540,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "Varrock",
    requirements: {
      items: ["Air runes", "Mind runes"]
    },
    notes: "Whenever one is free at any point in Varrock",
    recommendedOrder: 45
  },
  {
    id: 45,
    description: "Buy an Air Staff and Equip it",
    points: 550,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Coins"]
    },
    recommendedOrder: 46,
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy a Newspaper and drop it" },
      { type: "INSTRUCTION", description: "Buy 200 water runes, 400 mind runes, 100 fire runes, 50 earth runes" },
      { type: "INSTRUCTION", description: "Kill a Mugger if not already" }
    ]
  },
  {
    id: 46,
    description: "Anger the Tramp",
    points: 560,
    completed: false,
    category: "Dialogue",
    region: "Misthalin",
    requirements: {
      items: ["Coins"]
    },
    notes: "You need coins and option 2",
    recommendedOrder: 47,
    afterSteps: [
      { type: "INSTRUCTION", description: "Kill a Mugger if available" }
    ]
  },
  {
    id: 47,
    description: "Teleport to Essence mine",
    points: 570,
    completed: false,
    category: "Magic",
    region: "Misthalin",
    recommendedOrder: 48
  },
  {
    id: 48,
    description: "Mine a Rune Essence",
    points: 580,
    completed: false,
    category: "Mining",
    region: "Misthalin",
    location: "Rune Essence Mine",
    recommendedOrder: 49,
    afterSteps: [
      { type: "INSTRUCTION", description: "Kill a Mugger if available" }
    ]
  },
  {
    id: 49,
    description: "Steal from Varrock Tea Stall",
    points: 590,
    completed: false,
    category: "Thieving",
    region: "Misthalin",
    location: "Varrock",
    recommendedOrder: 50,
    afterSteps: [
      { type: "INSTRUCTION", description: "Keep 1x tea" },
      { type: "INSTRUCTION", description: "Get 15 Thieving" },
      { type: "INSTRUCTION", description: "Buy Wizard Hat at fancy dress shop" }
    ]
  },
  {
    id: 50,
    description: "Use Wizard hat on Hat stand in Old Man Yarlo's crib",
    points: 600,
    completed: false,
    category: "Miscellaneous",
    region: "Misthalin",
    location: "Varrock",
    requirements: {
      items: ["Wizard hat"]
    },
    recommendedOrder: 51
  },
  {
    id: 51,
    description: "Buy a POH",
    points: 620,
    completed: false,
    category: "Construction",
    region: "Misthalin",
    requirements: {
      items: ["Coins"]
    },
    recommendedOrder: 52,
    afterSteps: [
      { type: "INSTRUCTION", description: "Start Daddy's Home & take saw if there (no problem if not)" }
    ]
  },
  {
    id: 52,
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
    id: 53,
    description: "Get a haircut South of Varrock Church",
    points: 640,
    completed: false,
    category: "Customization",
    region: "Misthalin",
    location: "South of Varrock Church",
    recommendedOrder: 54,
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy a rake & 5x Compost" },
      { type: "INSTRUCTION", description: "RAKE PATCH ATLEAST TWICE" },
      { type: "INSTRUCTION", description: "Continue Demon Slayer (Sir Prysin->Captain Rovin)" },
      { type: "INSTRUCTION", description: "Fill water in Kitchen and use on drain" }
    ],
    beforeSteps: [
      { type: "BANK", description: "BANK AT EAST BANK" },
      { type: "WITHDRAW", description: "Withdraw: Pickaxe, Axe, Tinderbox, Coins, Barley Seeds, Rake, 4x Compost, Mind Runes, Shears, Wine, Milk" }
    ]
  },
  {
    id: 54,
    description: "Mine Copper Ore",
    points: 650,
    completed: false,
    category: "Mining",
    region: "Misthalin",
    requirements: {
      items: ["Pickaxe"]
    },
    notes: "KEEP THIS",
    recommendedOrder: 55,
    afterSteps: [
      { type: "INSTRUCTION", description: "Cut logs to 15 Woodcutting & burn them to 15 Firemaking. Keep logs after 15 firemaking while moving around the next steps" }
    ]
  },
  {
    id: 55,
    description: "Mine 5x Tin Ore",
    points: 660,
    completed: false,
    category: "Mining",
    region: "Misthalin",
    requirements: {
      items: ["Pickaxe"]
    },
    notes: "KEEP 1x",
    recommendedOrder: 56,
    afterSteps: [
      { type: "INSTRUCTION", description: "Pick 3x Redberry" }
    ]
  },
  {
    id: 56,
    description: "Kill a Dark Wizard",
    points: 670,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    recommendedOrder: 57
  },
  {
    id: 57,
    description: "Kill a Ram",
    points: 680,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    recommendedOrder: 58,
    afterSteps: [
      { type: "INSTRUCTION", description: "Shear 5x Sheep (can do later)" },
      { type: "INSTRUCTION", description: "Hop Fence" }
    ]
  },
  {
    id: 58,
    description: "Rake a Farming Patch",
    points: 690,
    completed: false,
    category: "Farming",
    region: "Misthalin",
    requirements: {
      items: ["Rake"]
    },
    recommendedOrder: 59,
    afterSteps: [
      { type: "INSTRUCTION", description: "Compost on Patch" },
      { type: "INSTRUCTION", description: "Buy Seed Dibber" },
      { type: "INSTRUCTION", description: "Plant Barley" }
    ]
  },
  {
    id: 59,
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
    location: "Potato field",
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
    recommendedOrder: 62,
    afterSteps: [
      { type: "INSTRUCTION", description: "Kill a chicken if you didn't earlier, take bones and bury + raw chicken" }
    ]
  },
  {
    id: 63,
    description: "Kill a cow in 1 hit",
    points: 730,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "Lumbridge Cow Field",
    recommendedOrder: 63,
    afterSteps: [
      { type: "INSTRUCTION", description: "Take the Cowhide & kill another cow for a second" }
    ]
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
    recommendedOrder: 65,
    afterSteps: [
      { type: "NOTE", description: "UNLOCKD DODGY DEALS. IF YOU MISSED A FEW TASKS YOU ONLY NEED IT BEFORE TAS" },
      { type: "INSTRUCTION", description: "Buy 50 Fishing Bait & Pestle and Mortar from Lumbridge store" },
      { type: "INSTRUCTION", description: "Check Lumbridge shop upstairs for onion spawn (attempt to get more runes?)" },
      { type: "INSTRUCTION", description: "Kill a ram, shear sheep if you haven't already" }
    ]
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
    recommendedOrder: 66,
    afterSteps: [
      { type: "INSTRUCTION", description: "Attempt to loot any onions again" }
    ]
  },
  {
    id: 67,
    description: "Kick a spider outside HAM",
    points: 790,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "Outside HAM hideout",
    recommendedOrder: 67,
    afterSteps: [
      { type: "INSTRUCTION", description: "Kill the Mugger if you can & haven't already" }
    ],
    beforeSteps: [
      { type: "BANK", description: "BANK ALL" },
      { type: "WITHDRAW", description: "WITHDRAW: Coins, Strike Runes, knife, 5x wool" }
    ]
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
    recommendedOrder: 68,
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy a steel axe from Bob" },
      { type: "INSTRUCTION", description: "Collect 5x Small Fishing Nets" }
    ]
  },
  {
    id: 69,
    description: "Kill a Frog",
    points: 810,
    completed: false,
    category: "Combat",
    region: "Misthalin",
    location: "Lumbridge Swamp",
    recommendedOrder: 69,
    afterSteps: [
      { type: "INSTRUCTION", description: "Collect 15 Swamp Tar" }
    ]
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
    recommendedOrder: 70,
    afterSteps: [
      { type: "INSTRUCTION", description: "Kill Unicorn if you see it" },
      { type: "INSTRUCTION", description: "Collect 15x Swamp tar" }
    ]
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
    recommendedOrder: 71,
    afterSteps: [
      { type: "INSTRUCTION", description: "Keep woodcutting until 1000 Arrow Shafts Fletched" }
    ]
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
    location: "HAM Hideout",
    requirements: {
      skills: {
        "Thieving": 15
      }
    },
    notes: "This may get you 28 coin pouches task/clean a guam",
    recommendedOrder: 73,
    beforeSteps: [
      { type: "BANK", description: "BANK AT LUMBRDIGE IF YOU HAVE T2 RELIC" },
      { type: "WITHDRAW", description: "WITHDRAW: Strike Runes" }
    ],
    afterSteps: [
      { type: "INSTRUCTION", description: "Kill a zombie below Jail Guard for Diary" }
    ]
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
    recommendedOrder: 74,
    beforeSteps: [
      { type: "BANK", description: "BANK AT DRAYNOR" },
      { type: "WITHDRAW", description: "WITHDRAW: Coins, Hammer, Stake, Garlic, Strike Runes, Mithril Dagger, Adamant Dagger, 5x Wool, 2x Onion, 3x Redberry, Cape, Harpoon, Bait" }
    ]
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
    recommendedOrder: 76,
    afterSteps: [
      { type: "INSTRUCTION", description: "Use this on a tree?" }
    ]
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
    recommendedOrder: 77,
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy 4x more ropes" }
    ]
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
    recommendedOrder: 79,
    afterSteps: [
      { type: "INSTRUCTION", description: "Train until 30 Agility" }
    ]
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
    recommendedOrder: 83,
    afterSteps: [
      { type: "INSTRUCTION", description: "Waystone to Brimhaven" }
    ]
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
    recommendedOrder: 87,
    afterSteps: [
      { type: "INSTRUCTION", description: "Drop and pick the seaweed by Cart" },
      { type: "INSTRUCTION", description: "Take cart to Shilo Village" }
    ],
    beforeSteps: [
      { type: "BANK", description: "DEPOSIT ALL" },
      { type: "WITHDRAW", description: "WITHDRAW: Coins, Tin Ore, Copper Ore, Soda Ash, Sand" }
    ]
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
    recommendedOrder: 88,
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy Inventory 20x Bronze Bars" }
    ]
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
    recommendedOrder: 90,
    afterSteps: [
      { type: "INSTRUCTION", description: "Craft Molten Glass Toad" }
    ]
  },
  {
    id: 91,
    description: "Get a slayer task",
    points: 1210,
    completed: false,
    category: "Slayer",
    region: "Karamja",
    recommendedOrder: 91,
    notes: "Do this task with Adamant dagger after Vampyre Slayer whenever you are passing the monsters"
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
    recommendedOrder: 92,
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy 200 Feathers" }
    ]
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
    recommendedOrder: 98,
    beforeSteps: [
      { type: "BANK", description: "BANK ALL" },
      { type: "WITHDRAW", description: "WITHDRAW: Harpoon, Dramen Staff, Mind Runes, Water Runes, Earth Runes, Knife, Coins" }
    ],
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy 12x Bronze Bars" },
      { type: "INSTRUCTION", description: "Take Cart and buy 11x Bananas" },
      { type: "INSTRUCTION", description: "Head to Karamja Volcano" },
      { type: "INSTRUCTION", description: "Kill Imp with earth strike if you haven't already" }
    ]
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
    recommendedOrder: 99,
    afterSteps: [
      { type: "INSTRUCTION", description: "Scatter Ashes" },
      { type: "INSTRUCTION", description: "Collect Red Spider eggs (if busy, leave this for now)(get 2 if you can between Lesser Demon kill)" },
      { type: "INSTRUCTION", description: "Open Secret door for Diary" }
    ]
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
    recommendedOrder: 105,
    beforeSteps: [
      { type: "INSTRUCTION", description: "Pick a banana and buy karamja rum + use SLICED banana on it" }
    ],
    afterSteps: [
      { type: "NOTE", description: "UNLOCK YOUR TIER 3 RELIC (I AM CHOOSING CLUE COMPASS)" },
      { type: "INSTRUCTION", description: "HOME TELEPORT TO LUMBRIDGE" },
      { type: "INSTRUCTION", description: "Kill an imp if not done yet" }
    ]
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
    recommendedOrder: 107,
    afterSteps: [
      { type: "INSTRUCTION", description: "Cook remaining Pike" },
      { type: "INSTRUCTION", description: "Cook remaining Tuna" }
    ],
    beforeSteps: [
      { type: "WITHDRAW", description: "WITHDRAW: 100 Lobsters, Hammer, Steel Fullhelmet, Spiny Helmet, Strike Runes" }
    ]
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
    recommendedOrder: 108,
    notes: "IF YOUR SLAYER TASK IS NEARBY. BOP THEM"
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
    recommendedOrder: 109,
    afterSteps: [
      { type: "INSTRUCTION", description: "Rebank these items and withdraw 23x Bronze bars" }
    ]
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
    recommendedOrder: 110,
    afterSteps: [
      { type: "INSTRUCTION", description: "Kill an imp if not done yet" },
      { type: "INSTRUCTION", description: "Sell 100 lobsters 1 at a time" }
    ]
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
    recommendedOrder: 111,
    beforeSteps: [
      { type: "INSTRUCTION", description: "STASH UNIT TO Jail guards" },
      { type: "INSTRUCTION", description: "Smith all Bronze bars at the anvil beneath Jail guards. If Fremmy make 1x bronze nails, rest bronze knives for Scurrius later" }
    ]
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
    recommendedOrder: 112,
    notes: "This will take 2 trips from Draynor bank",
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy Chronicle + 5x Cards" }
    ]
  },
  {
    id: 113,
    description: "Pickpocket Master Farmer until 40 Thieving",
    points: 1690,
    completed: false,
    category: "Thieving",
    region: "Misthalin",
    requirements: {
      skills: {
        "Thieving": 38
      }
    },
    recommendedOrder: 113,
    notes: "Don't stay until the Ranarr seed drop",
    beforeSteps: [
      { type: "BANK", description: "BANK" },
      { type: "WITHDRAW", description: "WITHDRAW: AXE, COINS, STRIKE RUNES" }
    ],
    afterSteps: [
      { type: "INSTRUCTION", description: "WAYSTONE TO BRIMHAVEN" }
    ]
  },
  {
    id: 114,
    description: "Enter Brimhaven Dungeon",
    points: 1720,
    completed: false,
    category: "Exploration",
    region: "Karamja",
    location: "Brimhaven",
    recommendedOrder: 114
  },
  {
    id: 115,
    description: "Kill a Moss Giant",
    points: 1730,
    completed: false,
    category: "Combat",
    region: "Karamja",
    location: "Brimhaven Dungeon",
    recommendedOrder: 115,
    afterSteps: [
      { type: "INSTRUCTION", description: "Combat mastery into Melee" }
    ]
  },
  {
    id: 116,
    description: "Kill a greater demon",
    points: 1760,
    completed: false,
    category: "Combat",
    region: "Karamja",
    location: "Brimhaven Dungeon",
    recommendedOrder: 116,
    afterSteps: [
      { type: "INSTRUCTION", description: "Spread the ashes" },
      { type: "INSTRUCTION", description: "STASH TELEPORT TO GYPSY ARIS" }
    ]
  },
  {
    id: 117,
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
    recommendedOrder: 117,
    notes: "Thieve Guards until 60 thieving upstairs in Varrock Castle. This should cover all coin problems going forward. Look at what regions you plan to go and what your next thieving upgrade is but this will be fast and good XP and is not worth waiting until x12 experience. You can return if you need money."
  },
  {
    id: 118,
    description: "Open 800 coins at once",
    points: 1820,
    completed: false,
    category: "Thieving",
    region: "Misthalin",
    recommendedOrder: 118
  },
  {
    id: 119,
    description: "Open 28 coin pouches at once",
    points: 1850,
    completed: false,
    category: "Thieving",
    region: "Misthalin",
    recommendedOrder: 119,
    notes: "This may have already completed"
  },
  {
    id: 120,
    description: "First level 60",
    points: 1850,
    completed: false,
    category: "Skills",
    region: "Misthalin",
    recommendedOrder: 120,
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy 5 box traps" },
      { type: "INSTRUCTION", description: "Buy 3 Buckets from Varrock General store and fill them with water" }
    ]
  },
  {
    id: 121,
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
    recommendedOrder: 121
  },
  {
    id: 122,
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
    recommendedOrder: 122
  },
  {
    id: 123,
    description: "Complete Natural History Quiz",
    points: 1900,
    completed: false,
    category: "Miscellaneous",
    region: "Misthalin",
    location: "Varrock Museum",
    recommendedOrder: 123,
    afterSteps: [
      { type: "INSTRUCTION", description: "Clean Artefacts until necklace & 5 displays filled" },
      { type: "INSTRUCTION", description: "Talk to Haig Halen for Diary step" },
      { type: "INSTRUCTION", description: "Talk to Information Clerk for 25 Mining" },
      { type: "INSTRUCTION", description: "Continue Daddy's Home" },
      { type: "INSTRUCTION", description: "Make 4x Soft clay" },
      { type: "INSTRUCTION", description: "Withdraw steel axe and cut and make 20 Planks" }
    ]
  },
  {
    id: 124,
    description: "Make 1x Plank at the Sawmill",
    points: 1910,
    completed: false,
    category: "Construction",
    region: "Misthalin",
    location: "Lumber Yard",
    recommendedOrder: 124,
    afterSteps: [
      { type: "INSTRUCTION", description: "Chop the dead tree for Diary" },
      { type: "INSTRUCTION", description: "STASH UNIT TO SHILO TO BANK. RETURN TO LUMBERYARD STASH UNIT" },
      { type: "INSTRUCTION", description: "OPTIONAL: TAKE A FAIRY RING TO BKQ AND GET A MITHRIL/ADDY/RUNE AXE FROM TREE SPIRITS USING YOUR BEST MAGIC SPELL" },
      { type: "INSTRUCTION", description: "Cut and make 40 Oak Planks" },
      { type: "INSTRUCTION", description: "Complete Daddy's Home (24 construction)" }
    ]
  },
  {
    id: 125,
    description: "Wield a Runite Weapon",
    points: 1940,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Runite weapon"]
    },
    recommendedOrder: 125,
    beforeSteps: [
      { type: "WITHDRAW", description: "WITHDRAW: Coins, Pickaxe, Hammer, Saw, 2 oak planks, 50 mithril nails" },
      { type: "INSTRUCTION", description: "Chronicle Teleport" },
      { type: "INSTRUCTION", description: "Buy Runite Mace + Black armour" }
    ]
  },
  {
    id: 126,
    description: "Wear some Black Armour",
    points: 1970,
    completed: false,
    category: "Equipment",
    region: "Misthalin",
    requirements: {
      items: ["Black armour piece"]
    },
    recommendedOrder: 126,
    afterSteps: [
      { type: "INSTRUCTION", description: "Mine 5-8x Iron Ore" }
    ]
  },
  {
    id: 127,
    description: "Smelt an Iron bar",
    points: 1980,
    completed: false,
    category: "Smithing",
    region: "Misthalin",
    requirements: {
      items: ["Iron ore"]
    },
    recommendedOrder: 127,
    beforeSteps: [
      { type: "INSTRUCTION", description: "STASH UNIT TO EDGEVILLE" }
    ],
    afterSteps: [
      { type: "INSTRUCTION", description: "STASH UNIT TO LUMBERYARD" },
      { type: "INSTRUCTION", description: "Enter Tolna Dungeon for Diary" }
    ]
  },
  {
    id: 128,
    description: "Travel to Fossil Island",
    points: 1980,
    completed: false,
    category: "Exploration",
    region: "Misthalin",
    recommendedOrder: 128
  },
  {
    id: 129,
    description: "Pet the Museum Dog",
    points: 1990,
    completed: false,
    category: "Pets",
    region: "Misthalin",
    location: "Varrock Museum",
    recommendedOrder: 129
  },
  {
    id: 130,
    description: "Build the Fossil Island Bank",
    points: 2020,
    completed: false,
    category: "Construction",
    region: "Misthalin",
    location: "Fossil Island",
    recommendedOrder: 130,
    afterSteps: [
      { type: "INSTRUCTION", description: "Build the Fossil Island everything (Should get you 39 Construction)" }
    ]
  },
  {
    id: 131,
    description: "Unlock the Fossil Island teleports",
    points: 2050,
    completed: false,
    category: "Magic",
    region: "Misthalin",
    location: "Fossil Island",
    recommendedOrder: 131,
    beforeSteps: [
      { type: "WITHDRAW", description: "WITHDRAW: Coins, hammer, saw, house tab, pickaxe" }
    ],
    afterSteps: [
      { type: "INSTRUCTION", description: "Mine 1x Volcanic Ash" },
      { type: "INSTRUCTION", description: "Teleport to house" },
      { type: "INSTRUCTION", description: "Buy workshop, Games Room, kitchen" },
      { type: "INSTRUCTION", description: "Make Clockwork bench 2 and tool storage 3" }
    ]
  },
  {
    id: 132,
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
    recommendedOrder: 132,
    afterSteps: [
      { type: "INSTRUCTION", description: "Make Hoop on a stick" }
    ]
  },
  {
    id: 133,
    description: "Throw a hoop on a stick",
    points: 2110,
    completed: false,
    category: "Miscellaneous",
    region: "Misthalin",
    requirements: {
      items: ["Hoop on a stick"]
    },
    recommendedOrder: 133,
    afterSteps: [
      { type: "INSTRUCTION", description: "STASH UNIT TO SHILO" }
    ]
  },
  {
    id: 134,
    description: "Take Shilo River Shortcut",
    points: 2140,
    completed: false,
    category: "Agility",
    region: "Karamja",
    location: "Shilo Village",
    recommendedOrder: 134,
    beforeSteps: [
      { type: "WITHDRAW", description: "WITHDRAW: Hammer, Coins" }
    ],
    afterSteps: [
      { type: "INSTRUCTION", description: "Buy Bronze bars and smith in Tai Bwo Trio until 35 Smithing (USE STASH UNIT TO GET THERE)(Make atleast 800 nails and some knives)" },
      { type: "INSTRUCTION", description: "Buy 300 soda Ash/Sand + glass pipe for 50 crafting" },
      { type: "INSTRUCTION", description: "STASH unit to Karamja, bank at Shilo" },
      { type: "INSTRUCTION", description: "STASH UNIT TO EDGEVILLE TO MAKE THE MOLTEN GLASS" },
      { type: "INSTRUCTION", description: "Blow the best glass item possible" }
    ]
  },
  {
    id: 135,
    description: "Catch Karambwanji",
    points: 2150,
    completed: false,
    category: "Fishing",
    region: "Karamja",
    location: "Karamja",
    notes: "Get at least 20",
    recommendedOrder: 135,
    afterSteps: [
      { type: "INSTRUCTION", description: "Cross to Cairn Isle for Diary" },
      { type: "INSTRUCTION", description: "STASH UNIT TO TAI BWO" },
      { type: "INSTRUCTION", description: "Kill Jogre in Pothole for Diary. Keep the Bones for Tai Bwo Wannai Trio" },
      { type: "INSTRUCTION", description: "STASH UNIT TO GYPSY ARIS" }
    ]
  },
  {
    id: 136,
    description: "Fill a medium stash unit at Edgeville",
    points: 2180,
    completed: false,
    category: "Construction",
    region: "Misthalin",
    location: "Edgeville",
    recommendedOrder: 136,
    beforeSteps: [
      { type: "WITHDRAW", description: "Withdraw: Saw, Hammer, Nails, Planks" },
      { type: "INSTRUCTION", description: "STASH UNIT to all Beginner stash units and construct them (3)" },
      { type: "INSTRUCTION", description: "STASH UNIT to all Easy stash units and construct them (13)" },
      { type: "INSTRUCTION", description: "STASH UNIT to all Medium stash units and construct them (6) Roughly 46 Construction?" },
      { type: "INSTRUCTION", description: "Attempt Tzhaar fight pits while at Tzhaar" }
    ]
  },
  {
    id: 137,
    description: "Complete 1x Easy Clue Scroll",
    points: 2210,
    completed: false,
    category: "Clue Scrolls",
    region: "Misthalin",
    notes: "Get from HAM members",
    recommendedOrder: 137,
    beforeSteps: [
      { type: "BANK", description: "BANK ALL" },
      { type: "INSTRUCTION", description: "STASH UNIT TO ENCHANTED VALLEY" },
      { type: "INSTRUCTION", description: "Take Fairy ring to BJP" },
      { type: "INSTRUCTION", description: "Open the Chest for a Dark key" }
    ]
  },
  {
    id: 138,
    description: "Snare a bird",
    points: 2220,
    completed: false,
    category: "Hunter",
    region: "Misthalin",
    requirements: {
      items: ["Bird snare"]
    },
    notes: "Bird snare from Chest earlier. Birds are on the way to Dark Chest",
    recommendedOrder: 138
  }

];

console.log('Total tasks available:', initialTasks.length);