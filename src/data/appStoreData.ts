import { EditorialItem, AppItem, LanguageItem, PlatformItem, NavItem } from '../types/appStore';

export const HERO_CARDS: EditorialItem[] = [
  {
    "id": "hero-1",
    "kind": "TodayCard",
    "eyebrow": "GET STARTED",
    "title": "5 tips to edit like a photographer in VSCO",
    "description": "AI tools, film presets and community features add up to a full-service photo app.",
    "heroImage": "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/ad/97/16/ad97169c-79b9-9c20-10e4-1a50dbeca679/3c3a6b6e-79af-43cc-8757-444918191345.png/1200x675sr.jpg",
    "backgroundColor": "#121824",
    "textColor": "#FFFFFF",
    "app": {
      "id": "vsco",
      "name": "VSCO: Photo Editor",
      "subtitle": "Photography, Filters, Editing",
      "category": "Photo & Video",
      "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4a/12/5c/4a125c1a-2895-ecae-8c9a-aef234b3f545/AppIcon-0-0-1x_U007emarketing-0-85-220-0-4.png/180x180bb.png",
      "price": "GET"
    }
  },
  {
    "id": "hero-2",
    "kind": "TodayCard",
    "eyebrow": "LET\u2019S PLAY",
    "title": "3 things we love in Honor of Kings",
    "description": "The world's most played mobile MOBA brings non-stop strategy and epic hero action.",
    "heroImage": "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/92/c1/09/92c10945-0e45-ec9e-2443-ac31ef247703/23b0872c-415f-4eab-a503-8cf1d9e8c4f0.png/1200x675sr.jpg",
    "backgroundColor": "#1C1428",
    "textColor": "#FFFFFF",
    "app": {
      "id": "hok",
      "name": "Honor of Kings",
      "subtitle": "Most-played mobile MOBA",
      "category": "Games",
      "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/71/3b/b9/713bb93e-257a-9a99-b1d8-04f76ca0cfdf/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220-0.png/180x180bb.png",
      "price": "GET"
    }
  }
];

export const EVENT_CARDS: EditorialItem[] = [
  {
    "id": "event-1",
    "kind": "TodayCard",
    "eyebrow": "LIMITED-TIME EVENT",
    "title": "Dive into Township\u2019s Underwater Season",
    "description": "Discover cool sea-themed rewards and build your dream marine resort!",
    "heroImage": "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/21/3c/1d/213c1df2-d65e-2a70-ac33-0e97ac335a3e/OBJECT_PROXYfb402768-4155-40a7-aa10-ae3f4ea9b21c_KEY_FRAME_OUTPUT_2736_OBJECT_PROXYfb402768-4155-40a7-aa10-ae3f4ea9b21c.png/1000x562sr.jpg",
    "backgroundColor": "#0A243A",
    "textColor": "#FFFFFF",
    "app": {
      "id": "township",
      "name": "Township",
      "subtitle": "From Farming Town to Big City",
      "category": "Games",
      "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bb/f8/f0/bbf8f096-7d6f-2bbf-bc9e-648b788647bf/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
      "price": "GET"
    }
  },
  {
    "id": "event-2",
    "kind": "TodayCard",
    "eyebrow": "LIMITED TIME",
    "title": "Rick and Morty crash into Archero 2",
    "description": "Limited-time characters, dimensional portals and gameplay, now live.",
    "heroImage": "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/04/3a/e4/043ae4b5-1d5c-4a76-6012-c9ccdc8408a8/71b5a910-4723-48a9-9eeb-56e580763597.png/1000x562sr.jpg",
    "backgroundColor": "#1E0F2B",
    "textColor": "#FFFFFF",
    "app": {
      "id": "archero2",
      "name": "Archero 2",
      "subtitle": "Bigger Better Faster!",
      "category": "Games",
      "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e5/2d/47/e52d47d4-0691-23a5-bc28-eb75cbbe1c21/AppIcon-0-0-1x_U007emarketing-0-85-220-0-4.png/180x180bb.png",
      "price": "GET"
    }
  }
];

export const DISCOVER_CARDS: EditorialItem[] = [
  {
    "id": "disc-1",
    "kind": "TodayCard",
    "eyebrow": "OUR FAVOURITES",
    "title": "Take these games from zero to 100",
    "description": "Enjoy the thrill of turning almost nothing into something with these gripping strategy and indie simulation hits.",
    "heroImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    "backgroundColor": "#121A28",
    "textColor": "#FFFFFF",
    "appsList": [
      {
        "id": "bacon",
        "name": "Bacon in Zane",
        "subtitle": "A mouth-watering adventure",
        "category": "Games",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/12/34/56/12345678-abcd-ef01-2345-6789abcdef01/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "GET"
      },
      {
        "id": "thronefall",
        "name": "Thronefall - A Little Kingdom",
        "subtitle": "Build and defend your realm",
        "category": "Strategy",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/98/76/54/98765432-abcd-ef01-2345-6789abcdef01/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "\u20b9499"
      },
      {
        "id": "polytopia",
        "name": "The Battle of Polytopia",
        "subtitle": "A Civilization Strategy Game",
        "category": "Strategy",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/11/22/33/11223344-abcd-ef01-2345-6789abcdef01/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "GET"
      },
      {
        "id": "airways",
        "name": "Mini Airways: Premium",
        "subtitle": "Test your ATC skills",
        "category": "Simulation",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/44/55/66/44556677-abcd-ef01-2345-6789abcdef01/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "\u20b9399"
      },
      {
        "id": "deeprock",
        "name": "Deep Rock Galactic: Survivor",
        "subtitle": "Danger. Darkness. Dwarves.",
        "category": "Action",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/77/88/99/77889900-abcd-ef01-2345-6789abcdef01/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "\u20b9499"
      },
      {
        "id": "balatro",
        "name": "Balatro",
        "subtitle": "When Poker Meets Solitaire",
        "category": "Card",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/aa/bb/cc/aabbccdd-abcd-ef01-2345-6789abcdef01/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "\u20b9899"
      }
    ]
  },
  {
    "id": "disc-2",
    "kind": "TodayCard",
    "eyebrow": "HERE\u2019S TO THE DREAMERS",
    "title": "Telling big stories with little worlds",
    "description": "Visual artist Eddie Putera builds miniature models powered by AI and video tools.",
    "heroImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "backgroundColor": "#1A1A1A",
    "textColor": "#FFFFFF",
    "appsList": [
      {
        "id": "gemini",
        "name": "Google Gemini",
        "subtitle": "Your AI assistant from Google",
        "category": "Productivity",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/be/89/3e/be893e3d-6b58-bb12-8700-112233445566/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "GET"
      },
      {
        "id": "fcpx",
        "name": "Final Cut Pro: Create Video",
        "subtitle": "Tell stories that move",
        "category": "Video",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ff/ee/dd/ffee0011-2233-4455-6677-8899aabbccdd/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "GET"
      },
      {
        "id": "logic",
        "name": "Logic Pro: Make Music",
        "subtitle": "Produce beats and edit audio",
        "category": "Music",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/99/88/77/99887766-5544-3322-1100-aabbccdd0011/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "GET"
      }
    ]
  },
  {
    "id": "disc-3",
    "kind": "TodayCard",
    "eyebrow": "BEHIND THE SCENES",
    "title": "Laying the foundation of Monument Valley",
    "description": "How game artists David Fern\u00e1ndez Huerta and Lili Ibrahim built the architectural puzzle marvel.",
    "heroImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    "backgroundColor": "#0F1F2C",
    "textColor": "#FFFFFF",
    "appsList": [
      {
        "id": "mv1",
        "name": "Monument Valley",
        "subtitle": "A Quest for Forgiveness",
        "category": "Puzzles",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/11/11/11/11111111-2222-3333-4444-555555555555/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "\u20b9399"
      },
      {
        "id": "mv2",
        "name": "Monument Valley 2",
        "subtitle": "A story of beauty and illusion",
        "category": "Puzzles",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/22/22/22/22222222-3333-4444-5555-666666666666/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "\u20b9499"
      },
      {
        "id": "mv3",
        "name": "Monument Valley 3",
        "subtitle": "Set sail for adventure!",
        "category": "Puzzles",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/33/33/33/33333333-4444-5555-6666-777777777777/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
        "price": "Arcade"
      }
    ]
  },
  {
    "id": "disc-4",
    "kind": "TodayCard",
    "eyebrow": "APP STORE EXCLUSIVE",
    "title": "Go exploring with Dora",
    "description": "Take an interactive educational tour in Dora: Explore and Play!",
    "heroImage": "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=1200&q=80",
    "backgroundColor": "#3B1B10",
    "textColor": "#FFFFFF",
    "app": {
      "id": "dora",
      "name": "Dora: Explore and Play!",
      "subtitle": "Fun Learning Kids Game",
      "category": "Education",
      "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/44/44/44/44444444-5555-6666-7777-888888888888/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
      "price": "GET"
    }
  }
];

export const INDIE_CARDS: EditorialItem[] = [
  {
    "id": "indie-1",
    "kind": "TodayCard",
    "eyebrow": "GAMES WE LOVE",
    "title": "Art of Rally",
    "description": "These stylized racing courses feel like playable paintings on mobile!",
    "heroImage": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    "backgroundColor": "#23180D",
    "textColor": "#FFFFFF",
    "app": {
      "id": "artofrally",
      "name": "Art of Rally",
      "subtitle": "Race the golden era of rally",
      "category": "Racing",
      "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/55/55/55/55555555-6666-7777-8888-999999999999/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
      "price": "\u20b9699"
    }
  },
  {
    "id": "indie-2",
    "kind": "TodayCard",
    "eyebrow": "GAMES WE LOVE",
    "title": "Foot Joust",
    "description": "Endless retro running and medieval jousting fun with minimalist pixel aesthetics.",
    "heroImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    "backgroundColor": "#171F1A",
    "textColor": "#FFFFFF",
    "app": {
      "id": "footjoust",
      "name": "Foot Joust",
      "subtitle": "Retro Endless Runner!",
      "category": "Action",
      "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/66/66/66/66666666-7777-8888-9999-aaaaaaaaaaaa/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
      "price": "GET"
    }
  }
];

export const TOP_APPS_WEEK: AppItem[] = [
  {
    "id": "yt",
    "name": "YouTube",
    "subtitle": "Videos, Music and Live Streams",
    "category": "Photo & Video",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/eb/03/85/eb0385bf-5e7e-3c2d-948c-309f3e498c8c/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "hotstar",
    "name": "JioHotstar",
    "subtitle": "Cricket, Movies and Shows",
    "category": "Entertainment",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/71/34/00/713400a1-8d2b-5b5f-9e5c-001122334455/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "subtitle": "Your everyday AI assistant",
    "category": "Productivity",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/91/91/91/91919191-9191-9191-9191-919191919191/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "truecaller",
    "name": "Truecaller",
    "subtitle": "Scam shield: Block spam calls",
    "category": "Utilities",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/82/82/82/82828282-8282-8282-8282-828282828282/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "prime",
    "name": "Amazon Prime Video",
    "subtitle": "Originals, movies, TV, sports",
    "category": "Entertainment",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/73/73/73/73737373-7373-7373-7373-737373737373/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "linkedin",
    "name": "LinkedIn",
    "subtitle": "Build Professional Connections",
    "category": "Business",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/64/64/64/64646464-6464-6464-6464-646464646464/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "hinge",
    "name": "Hinge",
    "subtitle": "Chat Online & Meet New Singles",
    "category": "Lifestyle",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/55/55/55/55555555-5555-5555-5555-555555555555/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "tinder",
    "name": "Tinder",
    "subtitle": "Match & Meet New Single People",
    "category": "Lifestyle",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/46/46/46/46464646-4646-4646-4646-464646464646/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "zee5",
    "name": "Zee5",
    "subtitle": "Bold Stories Live Here",
    "category": "Entertainment",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/37/37/37/37373737-3737-3737-3737-373737373737/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "bumble",
    "name": "Bumble",
    "subtitle": "Meet Single People & Date",
    "category": "Lifestyle",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/28/28/28/28282828-2828-2828-2828-282828282828/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "inshot",
    "name": "InShot",
    "subtitle": "AI Video Editor & Photo Maker",
    "category": "Photo & Video",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/19/19/19/19191919-1919-1919-1919-191919191919/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "canva",
    "name": "Canva",
    "subtitle": "AI Video & Photo Editor",
    "category": "Graphics & Design",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/00/00/00/00000000-0000-0000-0000-000000000000/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "claude",
    "name": "Claude by Anthropic",
    "subtitle": "AI assistant for life and work",
    "category": "Productivity",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ab/ab/ab/abababab-abab-abab-abab-abababababab/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "picsart",
    "name": "Picsart AI Photo Editor",
    "subtitle": "Background Remover & Retouch",
    "category": "Photo & Video",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/bc/bc/bc/bcbcbcbc-bcbc-bcbc-bcbc-bcbcbcbcbcbc/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "sonyliv",
    "name": "Sony LIV",
    "subtitle": "Originals, Sports & TV Shows",
    "category": "Entertainment",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/cd/cd/cdcdcdcd-cdcd-cdcd-cdcd-cdcdcdcdcdcd/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "ytmusic",
    "name": "YouTube Music",
    "subtitle": "Music world dedicated to you",
    "category": "Music",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/de/de/de/dedededede-dede-dede-dede-dededededede/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "terabox",
    "name": "TeraBox: 1TB Cloud & AI",
    "subtitle": "Data Backup & Smart AI Tools",
    "category": "Utilities",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/ef/ef/efefefef-efef-efef-efef-efefefefefef/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "remini",
    "name": "Remini - AI Photo Enhancer",
    "subtitle": "Enhance, unblur and restore!",
    "category": "Photo & Video",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f0/f0/f0/f0f0f0f0-f0f0-f0f0-f0f0-f0f0f0f0f0f0/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  }
];

export const HOT_APPS_WEEK: AppItem[] = [
  {
    "id": "candycrush",
    "name": "Candy Crush Soda Saga",
    "subtitle": "Sugary Match 3 Puzzle Games!",
    "category": "Games",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/11/aa/bb/11aabbcc-11aa-bbcc-11aa-bbcc11aabbcc/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "genshin",
    "name": "Genshin Impact",
    "subtitle": "Explore a World of Adventure",
    "category": "Games",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/22/bb/cc/22bbccdd-22bb-ccdd-22bb-ccdd22bbccdd/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "lionsgate",
    "name": "Lionsgate Play",
    "subtitle": "Movies, TV Shows & Web Series",
    "category": "Entertainment",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/33/cc/dd/33ccddee-33cc-ddee-33cc-ddee33ccddee/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "coursera",
    "name": "Coursera",
    "subtitle": "Grow your career with courses",
    "category": "Education",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/44/dd/ee/44ddeeff-44dd-eeff-44dd-eeff44ddeeff/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "lingokids",
    "name": "Lingokids: Games & Shows",
    "subtitle": "Everything kids love!",
    "category": "Education",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/55/ee/ff/55eeff00-55ee-ff00-55ee-ff0055eeff00/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "kingshot",
    "name": "Kingshot",
    "subtitle": "Tactical Archery Strategy",
    "category": "Games",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/66/ff/00/66ff0011-66ff-0011-66ff-001166ff0011/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "tastytravels",
    "name": "Tasty Travels",
    "subtitle": "Merge and Explore the World",
    "category": "Games",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/77/00/11/77001122-7700-1122-7700-112277001122/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "traveltown",
    "name": "Travel Town",
    "subtitle": "Merge & Discover Secrets!",
    "category": "Games",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/88/11/22/88112233-8811-2233-8811-223388112233/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "aisle",
    "name": "Aisle - Indian Dating App",
    "subtitle": "Built for real commitment",
    "category": "Lifestyle",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/99/22/33/99223344-9922-3344-9922-334499223344/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "royalkingdom",
    "name": "Royal Kingdom",
    "subtitle": "King Richard's Match 3 Puzzles",
    "category": "Games",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/aa/33/44/aa334455-aa33-4455-aa33-4455aa334455/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "viki",
    "name": "Viki: Asian Dramas & TV",
    "subtitle": "Watch KDramas & CDramas",
    "category": "Entertainment",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bb/44/55/bb445566-bb44-5566-bb44-5566bb445566/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "homescapes",
    "name": "Homescapes",
    "subtitle": "Match 3 Puzzle & Home Design",
    "category": "Games",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cc/55/66/cc556677-cc55-6677-cc55-6677cc556677/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "googleone",
    "name": "Google One",
    "subtitle": "Cloud storage, backup & more",
    "category": "Utilities",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/dd/66/77/dd667788-dd66-7788-dd66-7788dd667788/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "grok",
    "name": "Grok - AI Assistant",
    "subtitle": "AI chat & video generation",
    "category": "Productivity",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ee/77/88/ee778899-ee77-8899-ee77-8899ee778899/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  },
  {
    "id": "crunchyroll",
    "name": "Crunchyroll",
    "subtitle": "Stream anime shows and movies",
    "category": "Entertainment",
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ff/88/99/ff889900-ff88-9900-ff88-9900ff889900/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/180x180bb.png",
    "price": "GET"
  }
];

export const INDIAN_LANGUAGES: LanguageItem[] = [
  {
    "code": "hi",
    "name": "\u0939\u093f\u0902\u0926\u0940"
  },
  {
    "code": "pa",
    "name": "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"
  },
  {
    "code": "mr",
    "name": "\u092e\u0930\u093e\u0920\u0940"
  },
  {
    "code": "bn",
    "name": "\u09ac\u09be\u0982\u09b2\u09be"
  },
  {
    "code": "or",
    "name": "\u0b13\u0b21\u0b3c\u0b3f\u0b06"
  },
  {
    "code": "ur",
    "name": "\u0627\u0631\u062f\u0648"
  },
  {
    "code": "te",
    "name": "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"
  },
  {
    "code": "ta",
    "name": "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"
  },
  {
    "code": "gu",
    "name": "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"
  },
  {
    "code": "kn",
    "name": "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"
  },
  {
    "code": "ml",
    "name": "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"
  }
];

export const PLATFORMS: PlatformItem[] = [
  {
    "id": "iphone",
    "name": "iPhone",
    "path": "/iphone"
  },
  {
    "id": "ipad",
    "name": "iPad",
    "path": "/ipad"
  },
  {
    "id": "mac",
    "name": "Mac",
    "path": "/mac"
  },
  {
    "id": "watch",
    "name": "Watch",
    "path": "/watch"
  },
  {
    "id": "tv",
    "name": "TV",
    "path": "/tv"
  }
];

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    "id": "today",
    "title": "Today",
    "path": "/today",
    "iconName": "Sparkles"
  },
  {
    "id": "games",
    "title": "Games",
    "path": "/games",
    "iconName": "Gamepad2"
  },
  {
    "id": "apps",
    "title": "Apps",
    "path": "/apps",
    "iconName": "Layers"
  },
  {
    "id": "arcade",
    "title": "Arcade",
    "path": "/arcade",
    "iconName": "Joystick"
  },
  {
    "id": "search",
    "title": "Search",
    "path": "/search",
    "iconName": "Search"
  }
];
