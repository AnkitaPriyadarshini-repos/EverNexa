// Complete parsed server payload data from https://apps.apple.com/in/iphone/today

export interface TodayParsedItem {
  id: string;
  kind: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  heroImage?: string;
  backgroundColor?: string;
  textColor?: string;
  app?: any;
  appsList?: any[];
}

export const ALL_TODAY_SHELVES: { shelfId: number; items: TodayParsedItem[] }[] = [
  {
    "shelfId": 0,
    "items": []
  },
  {
    "shelfId": 1,
    "items": [
      {
        "id": "shelf-1-item-0",
        "kind": "TodayCard",
        "eyebrow": "GET STARTED",
        "title": "5 tips to edit like a photographer in VSCO",
        "description": "AI tools, film presets and community features add up to a full-service photo app.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-1-0-25634",
          "name": "VSCO: Photo Editor",
          "subtitle": "Photography, Filters, Editing",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id48625634"
        },
        "appsList": []
      },
      {
        "id": "shelf-1-item-1",
        "kind": "TodayCard",
        "eyebrow": "LET\u2019S PLAY",
        "title": "3 things we love in Honor of Kings",
        "description": null,
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-1-1-35225",
          "name": "Honor of Kings",
          "subtitle": "Most-played mobile MOBA",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id61235225"
        },
        "appsList": []
      }
    ]
  },
  {
    "shelfId": 2,
    "items": [
      {
        "id": "shelf-2-item-0",
        "kind": "TodayCard",
        "eyebrow": "LIMITED-TIME EVENT",
        "title": "Dive into Township\u2019s Underwater Season",
        "description": "Discover cool sea-themed rewards!",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-2-0-15520",
          "name": "Township",
          "subtitle": "From Farming Town to Big City",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id86015520"
        },
        "appsList": []
      },
      {
        "id": "shelf-2-item-1",
        "kind": "TodayCard",
        "eyebrow": "LIMITED TIME",
        "title": "Rick and Morty crash into Archero 2",
        "description": "Limited-time characters and gameplay, now live.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-2-1-60986",
          "name": "Archero 2",
          "subtitle": "Bigger Better Faster!",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id38060986"
        },
        "appsList": []
      }
    ]
  },
  {
    "shelfId": 3,
    "items": [
      {
        "id": "shelf-3-item-0",
        "kind": "TodayCard",
        "eyebrow": "OUR FAVOURITES",
        "title": "Take these games from zero to 100",
        "description": "Enjoy the thrill of turning almost nothing into something.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": null,
        "appsList": [
          {
            "id": "app-3-0-0-60724",
            "name": "Bacon in Zane",
            "subtitle": "A mouth-watering adventure",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id29560724"
          },
          {
            "id": "app-3-0-1-93841",
            "name": "Thronefall - A Little Kingdom",
            "subtitle": "Strategy",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id86393841"
          },
          {
            "id": "app-3-0-2-26087",
            "name": "The Battle of Polytopia",
            "subtitle": "A Civilization Strategy Game",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id30126087"
          },
          {
            "id": "app-3-0-3-46961",
            "name": "Mini Airways:Premium",
            "subtitle": "Test your ATC skills",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id50046961"
          },
          {
            "id": "app-3-0-4-50920",
            "name": "Deep Rock Galactic: Survivor",
            "subtitle": "Danger. Darkness. Dwarves.",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id5550920"
          },
          {
            "id": "app-3-0-5-66910",
            "name": "Balatro",
            "subtitle": "When Poker Meets Solitaire",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id78966910"
          }
        ]
      },
      {
        "id": "shelf-3-item-1",
        "kind": "TodayCard",
        "eyebrow": "HERE\u2019S TO THE DREAMERS",
        "title": "Telling big stories with little worlds",
        "description": "Visual artist Eddie Putera builds models powered by AI.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": null,
        "appsList": [
          {
            "id": "app-3-1-0-40716",
            "name": "Google Gemini",
            "subtitle": "Your AI assistant from Google",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id87040716"
          },
          {
            "id": "app-3-1-1-18976",
            "name": "Final Cut Pro: Create Video",
            "subtitle": "Tell stories that move",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id24418976"
          },
          {
            "id": "app-3-1-2-54477",
            "name": "Logic Pro: Make Music",
            "subtitle": "Produce beats and edit audio",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id66154477"
          }
        ]
      },
      {
        "id": "shelf-3-item-2",
        "kind": "TodayCard",
        "eyebrow": "BEHIND THE SCENES",
        "title": "Laying the foundation of Monument\u00a0Valley",
        "description": "How game artist David Fern\u00e1ndez Huerta and Lili Ibrahim built the series\u2019 success.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": null,
        "appsList": [
          {
            "id": "app-3-2-0-12978",
            "name": "Monument Valley",
            "subtitle": "A Quest for Forgiveness",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id84812978"
          },
          {
            "id": "app-3-2-1-50874",
            "name": "Monument Valley 2",
            "subtitle": "A story of beauty and illusion",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id75550874"
          },
          {
            "id": "app-3-2-2-48624",
            "name": "Monument Valley 3",
            "subtitle": "Set sail for adventure!",
            "category": "Featured",
            "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
            "price": "GET",
            "developer": "App Store Developer",
            "rating": "4.8",
            "ratingCount": 15400,
            "ageRating": "4+",
            "appStoreUrl": "https://apps.apple.com/in/app/id26948624"
          }
        ]
      },
      {
        "id": "shelf-3-item-3",
        "kind": "TodayCard",
        "eyebrow": "APP STORE EXCLUSIVE",
        "title": "Go exploring with Dora",
        "description": "Take a tour of Dora: Explore and Play.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-3-3-42344",
          "name": "Dora: Explore and Play!",
          "subtitle": "Fun Learning Kids Game",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id53542344"
        },
        "appsList": []
      }
    ]
  },
  {
    "shelfId": 4,
    "items": [
      {
        "id": "shelf-4-item-0",
        "kind": "TodayCard",
        "eyebrow": "GAMES WE LOVE",
        "title": "Art of Rally",
        "description": "These races feel like playable paintings!",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-4-0-52809",
          "name": "Art of Rally",
          "subtitle": "Race the golden era of rally",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id29052809"
        },
        "appsList": []
      },
      {
        "id": "shelf-4-item-1",
        "kind": "TodayCard",
        "eyebrow": "GAMES WE LOVE",
        "title": "Foot Joust",
        "description": "Endless running in the Middle Ages.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-4-1-89672",
          "name": "Foot Joust",
          "subtitle": "Retro Endless Runner!",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id37789672"
        },
        "appsList": []
      }
    ]
  },
  {
    "shelfId": 5,
    "items": [
      {
        "id": "shelf-5-item-0",
        "kind": "TodayCard",
        "eyebrow": "OUR FAVOURITES",
        "title": "Top apps this week",
        "description": "Discover the best apps of the week from the App Store.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": null,
        "appsList": []
      },
      {
        "id": "shelf-5-item-1",
        "kind": "TodayCard",
        "eyebrow": "GAMES WE LOVE",
        "title": "Bus Driving Simulator: EVO",
        "description": "Grab your ticket to ride. ",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-1-38081",
          "name": "Bus Simulator : EVO",
          "subtitle": "Ultimate City Driving Game",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id96138081"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-2",
        "kind": "TodayCard",
        "eyebrow": "APPS WE LOVE",
        "title": "NeuroNation",
        "description": "A truly entertaining way to train your brain.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-2-3037",
          "name": "NeuroNation - Brain Training",
          "subtitle": "Train memory & test your mind",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id90403037"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-3",
        "kind": "TodayCard",
        "eyebrow": "NOW TRENDING",
        "title": "Hot this week ",
        "description": null,
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": null,
        "appsList": []
      },
      {
        "id": "shelf-5-item-4",
        "kind": "TodayCard",
        "eyebrow": "GAMES WE LOVE",
        "title": "Digimon UP",
        "description": "Raise your Digimon and take on powerful foes.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-4-5427",
          "name": "DIGIMON UP",
          "subtitle": "Role-Playing",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id92305427"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-5",
        "kind": "TodayCard",
        "eyebrow": "APPS WE LOVE",
        "title": "Udemy ",
        "description": "Video courses on just about everything.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-5-55103",
          "name": "Udemy Online Video Courses",
          "subtitle": "Learn Coding, Python & More",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id98855103"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-6",
        "kind": "TodayCard",
        "eyebrow": "TRY NOW",
        "title": "Must-play games",
        "description": null,
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": null,
        "appsList": []
      },
      {
        "id": "shelf-5-item-7",
        "kind": "TodayCard",
        "eyebrow": "GAMES WE LOVE",
        "title": "Soccer Clash",
        "description": "Score spectacular goals and become the ultimate pitch master.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-7-98524",
          "name": "Soccer Clash 2026: Sports Game",
          "subtitle": "Multiplayer PvP Football",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id87698524"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-8",
        "kind": "TodayCard",
        "eyebrow": "APPS WE LOVE",
        "title": "Retro",
        "description": "Share what truly matters.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-8-34215",
          "name": "Retro \u2014 Photos with Friends",
          "subtitle": "Memories, Albums & Recaps",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id52834215"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-9",
        "kind": "TodayCard",
        "eyebrow": "GAMES WE LOVE",
        "title": "Neo Cab",
        "description": "Feel your way through a neon city.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-9-93392",
          "name": "Neo Cab",
          "subtitle": "Cyberpunk taxicab confessions.",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id38293392"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-10",
        "kind": "TodayCard",
        "eyebrow": "APPS WE LOVE",
        "title": "Skoove",
        "description": "Have fun playing your favourite songs on the piano.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-10-39346",
          "name": "Skoove: Learn to Play Piano",
          "subtitle": "Lessons from Beginners to Pro",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id85239346"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-11",
        "kind": "TodayCard",
        "eyebrow": "GAMES WE LOVE",
        "title": "Path of Kings",
        "description": "This road is paved with angry skeletons.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-11-56162",
          "name": "Path of Kings",
          "subtitle": "First person RPG adventure!",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id27156162"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-12",
        "kind": "TodayCard",
        "eyebrow": "APPS WE LOVE",
        "title": "Relive",
        "description": "Transform your outdoor activities into beautiful video memories.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-12-52233",
          "name": "Relive: Hike & Ride Memories",
          "subtitle": "3D videos & activity tracking",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id78552233"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-13",
        "kind": "TodayCard",
        "eyebrow": "GAMES WE LOVE",
        "title": "Mind The Door",
        "description": "Pick the right path to avoid doom.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-13-76308",
          "name": "Mind The Door",
          "subtitle": "Just pick a door.",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id35876308"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-14",
        "kind": "TodayCard",
        "eyebrow": "APPS WE LOVE",
        "title": "Yazio",
        "description": "Take the work out of meal tracking. ",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-14-28730",
          "name": "AI Calorie Counter by Yazio",
          "subtitle": "Food tracker for weight loss",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id67628730"
        },
        "appsList": []
      },
      {
        "id": "shelf-5-item-15",
        "kind": "TodayCard",
        "eyebrow": "GAMES WE LOVE",
        "title": "Tiny Aquarium Mobile",
        "description": "Create a dreamy dwelling for your fish friends.",
        "heroImage": null,
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFFFFF",
        "app": {
          "id": "app-5-15-2911",
          "name": "Tiny Aquarium Mobile",
          "subtitle": "Relax & grow fish with friends",
          "category": "Featured",
          "icon": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
          "price": "GET",
          "developer": "App Store Developer",
          "rating": "4.8",
          "ratingCount": 15400,
          "ageRating": "4+",
          "appStoreUrl": "https://apps.apple.com/in/app/id77502911"
        },
        "appsList": []
      }
    ]
  }
];
