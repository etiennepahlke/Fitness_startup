// Fictional prototype content only. Trainer profiles are not real people.
const STARTUP = {
  name: "Newrep",
  tagline: "Get a free AI-generated fitness plan and affordable 15-minute check-ins with certified personal trainers.",
  pitch: "New to working out? Get a free AI-generated plan, then book a quick 15-minute video check-in with a certified personal trainer for just $20–25."
};

const TRAINERS = [
  {
    id: "maya",
    name: "Maya C.",
    credential: "Certified Personal Trainer",
    specialty: "Strength",
    specialties: ["Strength training", "Beginner-friendly workouts", "At-home movement"],
    description: "Makes strength training feel approachable, with simple moves you can do at home.",
    profileDetails: "Maya helps new lifters build confidence with practical, at-home strength sessions and steady progress.",
    reviews: [
      "I finally feel comfortable picking up weights.",
      "Maya explained everything without making it feel complicated.",
      "A kind, encouraging check-in that gave me a clear next step."
    ],
    yearsExperience: 8,
    price: 25,
    rating: 4.9,
    reviewCount: 86
  },
  {
    id: "jordan",
    name: "Jordan E.",
    credential: "Certified Personal Trainer",
    specialty: "Running",
    specialties: ["Running basics", "Pacing", "Recovery"],
    description: "Helps runners find a comfortable pace and make room for recovery.",
    profileDetails: "Jordan works with new and returning runners on pacing, consistency, and enjoying the miles.",
    reviews: [
      "Jordan helped me slow down and enjoy my runs again.",
      "Great tips that fit my busy week.",
      "Supportive, practical, and easy to talk to."
    ],
    yearsExperience: 6,
    price: 22,
    rating: 4.8,
    reviewCount: 64
  },
  {
    id: "sam",
    name: "Sam R.",
    credential: "Certified Personal Trainer",
    specialty: "Mobility",
    specialties: ["Mobility", "Gentle movement", "Balance"],
    description: "Offers low-pressure guidance on moving comfortably and starting at your own pace.",
    profileDetails: "Sam's check-ins focus on comfortable mobility basics, gentle movement, and meeting your body where it is.",
    reviews: [
      "I left with a few gentle moves I can actually remember.",
      "Sam made the session feel relaxed and personal.",
      "Helpful ideas for moving more comfortably day to day."
    ],
    yearsExperience: 9,
    price: 26,
    rating: 5.0,
    reviewCount: 73
  },
  {
    id: "casey",
    name: "Casey M.",
    credential: "Certified Personal Trainer",
    specialty: "Weight loss",
    specialties: ["Sustainable routines", "Strength basics", "Everyday movement"],
    description: "Supports sustainable movement habits without strict rules or quick fixes.",
    profileDetails: "Casey takes a non-judgmental approach to movement, focusing on sustainable routines and everyday wins.",
    reviews: [
      "Casey helped me focus on habits instead of quick fixes.",
      "Encouraging advice that felt realistic.",
      "A thoughtful check-in with no pressure."
    ],
    yearsExperience: 7,
    price: 28,
    rating: 4.9,
    reviewCount: 102
  },
  {
    id: "morgan",
    name: "Morgan L.",
    credential: "Certified Personal Trainer",
    specialty: "Beginners",
    specialties: ["Getting started", "Movement confidence", "Simple routines"],
    description: "Makes the first steps feel clear, simple, and completely your own.",
    profileDetails: "Morgan loves helping first-timers get comfortable with the basics and choose a pace that feels manageable.",
    reviews: [
      "I was nervous, but Morgan made it feel easy to start.",
      "Clear answers to all my beginner questions.",
      "I have a plan that finally feels doable."
    ],
    yearsExperience: 4,
    price: 18,
    rating: 4.8,
    reviewCount: 47
  },
  {
    id: "quinn",
    name: "Quinn B.",
    credential: "Certified Personal Trainer",
    specialty: "General fitness",
    specialties: ["Balanced fitness", "Strength", "Cardio"],
    description: "Builds balanced, practical routines around busy schedules.",
    profileDetails: "Quinn helps people combine simple strength and cardio in a flexible routine that fits real life.",
    reviews: [
      "Quinn helped me make a routine around my schedule.",
      "The advice was simple and easy to follow.",
      "I appreciated the balanced approach."
    ],
    yearsExperience: 5,
    price: 20,
    rating: 4.7,
    reviewCount: 39
  },
  {
    id: "jamie",
    name: "Jamie P.",
    credential: "Certified Personal Trainer",
    specialty: "Habit building",
    specialties: ["Routine building", "Goal setting", "Consistency"],
    description: "Turns small, repeatable steps into a routine that sticks.",
    profileDetails: "Jamie helps clients set realistic goals, celebrate consistency, and make movement feel like a natural part of the week.",
    reviews: [
      "Jamie helped me start small and keep going.",
      "A really positive, no-pressure conversation.",
      "My plan now fits the week I actually have."
    ],
    yearsExperience: 3,
    price: 15,
    rating: 4.9,
    reviewCount: 31
  },
  {
    id: "drew",
    name: "Drew K.",
    credential: "Certified Personal Trainer",
    specialty: "Flexibility",
    specialties: ["Flexibility", "Stretching", "Recovery"],
    description: "Shares gentle stretching ideas for everyday comfort and recovery.",
    profileDetails: "Drew offers approachable flexibility sessions with modifications so you can move within a comfortable range.",
    reviews: [
      "Drew showed me comfortable options for every stretch.",
      "I learned a simple routine for after walks.",
      "Patient, clear, and very encouraging."
    ],
    yearsExperience: 8,
    price: 24,
    rating: 4.8,
    reviewCount: 58
  },
  {
    id: "parker",
    name: "Parker T.",
    credential: "Certified Personal Trainer",
    specialty: "Strength",
    specialties: ["Strength training", "Form fundamentals", "Progressive routines"],
    description: "Helps you learn the fundamentals and progress with confidence.",
    profileDetails: "Parker specializes in clear strength fundamentals, form cues, and building a plan one step at a time.",
    reviews: [
      "Parker's form tips made the movements click.",
      "I got clear next steps without feeling overwhelmed.",
      "A great session for building confidence."
    ],
    yearsExperience: 11,
    price: 30,
    rating: 5.0,
    reviewCount: 119
  },
  {
    id: "sky",
    name: "Sky N.",
    credential: "Certified Personal Trainer",
    specialty: "Running",
    specialties: ["Beginner running", "Pacing", "Recovery"],
    description: "Keeps run training approachable with gentle pacing and recovery tips.",
    profileDetails: "Sky works with beginner runners to set comfortable milestones and build a routine without pressure.",
    reviews: [
      "Sky helped me make my first running goal feel possible.",
      "Really useful pacing tips.",
      "Friendly, encouraging, and easy to understand."
    ],
    yearsExperience: 4,
    price: 19,
    rating: 4.7,
    reviewCount: 28
  },
  {
    id: "alex",
    name: "Alex D.",
    credential: "Certified Personal Trainer",
    specialty: "Beginners",
    specialties: ["Beginner fitness", "At-home workouts", "Confidence"],
    description: "Answers beginner questions and helps you find a comfortable starting point.",
    profileDetails: "Alex makes fitness feel less intimidating with straightforward coaching and flexible beginner-friendly options.",
    reviews: [
      "Alex made fitness feel much less intimidating.",
      "I loved having options I could do at home.",
      "A friendly check-in that answered all my questions."
    ],
    yearsExperience: 6,
    price: 23,
    rating: 4.9,
    reviewCount: 77
  },
  {
    id: "rowan",
    name: "Rowan F.",
    credential: "Certified Personal Trainer",
    specialty: "Weight loss",
    specialties: ["Sustainable movement", "Habit building", "Strength basics"],
    description: "Focuses on enjoyable movement and patient, sustainable progress.",
    profileDetails: "Rowan supports clients in finding forms of movement they enjoy and building lasting habits at their own pace.",
    reviews: [
      "Rowan helped me find movement I genuinely enjoy.",
      "The suggestions felt patient and realistic.",
      "I left feeling positive about my next steps."
    ],
    yearsExperience: 5,
    price: 21,
    rating: 4.8,
    reviewCount: 52
  }
];

const PLAN_PRESETS = {
  goals: {
    "lose-fat": {
      label: "Lose fat",
      focus: "A steady mix of strength and enjoyable movement.",
      workouts: [
        {
          name: "Full-body strength",
          moves: {
            none: "Chair squats, wall push-ups, and glute bridges",
            basics: "Dumbbell squats, incline push-ups, and glute bridges",
            gym: "Leg press, chest press, and cable glute kickbacks"
          }
        },
        {
          name: "Easy cardio & core",
          moves: {
            none: "A comfortable-paced walk and standing knee lifts",
            basics: "A brisk walk and a gentle dead bug",
            gym: "Easy cycling and a gentle dead bug"
          }
        },
        {
          name: "Strength & balance",
          moves: {
            none: "Supported reverse lunges, bird dogs, and calf raises",
            basics: "Supported reverse lunges, band rows, and calf raises",
            gym: "Supported split squats, seated rows, and calf raises"
          }
        }
      ],
      nutrition: [
        "Build satisfying meals with a protein food, fruit or vegetables, and a carbohydrate you enjoy.",
        "Regular meals and water can support an everyday routine; no foods need to be banned."
      ]
    },
    "build-muscle": {
      label: "Build muscle",
      focus: "Gradual, full-body strength work with time to recover.",
      workouts: [
        {
          name: "Full-body strength A",
          moves: {
            none: "Chair squats, wall push-ups, and glute bridges",
            basics: "Goblet squats, dumbbell floor press, and glute bridges",
            gym: "Leg press, chest press, and hip bridges"
          }
        },
        {
          name: "Full-body strength B",
          moves: {
            none: "Hip hinges, supported rows, and step-ups",
            basics: "Dumbbell hip hinges, band rows, and step-ups",
            gym: "Light Romanian deadlifts, seated rows, and step-ups"
          }
        },
        {
          name: "Strength & stability",
          moves: {
            none: "Supported split squats, wall push-ups, and bird dogs",
            basics: "Supported split squats, dumbbell shoulder press, and bird dogs",
            gym: "Supported split squats, shoulder press, and cable rows"
          }
        }
      ],
      nutrition: [
        "Include a protein food and a satisfying carbohydrate in meals to support training and recovery.",
        "Eat regularly, drink water, and choose a variety of foods you enjoy."
      ]
    },
    "get-fitter": {
      label: "Get fitter",
      focus: "A comfortable blend of cardio, strength, and recovery.",
      workouts: [
        {
          name: "Easy cardio intervals",
          moves: {
            none: "Alternate a comfortable walk with a slightly quicker walk",
            basics: "Alternate a brisk walk with an easy resistance-band row",
            gym: "Alternate easy cycling with a comfortable treadmill walk"
          }
        },
        {
          name: "Full-body strength",
          moves: {
            none: "Chair squats, wall push-ups, and bird dogs",
            basics: "Dumbbell squats, incline push-ups, and band rows",
            gym: "Leg press, chest press, and seated rows"
          }
        },
        {
          name: "Move & balance",
          moves: {
            none: "A relaxed walk, supported step-ups, and calf raises",
            basics: "A relaxed walk, step-ups, and band pull-aparts",
            gym: "Easy cycling, step-ups, and light cable rows"
          }
        }
      ],
      nutrition: [
        "For steady energy, pair a protein food with fruit or vegetables and a carbohydrate you like.",
        "Keep water handy and choose regular meals that fit your day."
      ]
    },
    "healthy-habits": {
      label: "Build healthy habits",
      focus: "Short, repeatable sessions that are easy to return to.",
      workouts: [
        {
          name: "Gentle full-body movement",
          moves: {
            none: "Sit-to-stands, wall push-ups, and a comfortable walk",
            basics: "Light dumbbell sit-to-stands, wall push-ups, and a walk",
            gym: "Easy leg press, chest press, and a comfortable walk"
          }
        },
        {
          name: "Mobility & balance",
          moves: {
            none: "Comfortable shoulder circles, supported balance, and a gentle walk",
            basics: "Comfortable shoulder circles, supported balance, and a gentle walk",
            gym: "Comfortable shoulder circles, supported balance, and easy cycling"
          }
        },
        {
          name: "Easy strength basics",
          moves: {
            none: "Chair squats, standing wall presses, and glute bridges",
            basics: "Light goblet squats, incline push-ups, and glute bridges",
            gym: "Light leg press, chest press, and hip bridges"
          }
        }
      ],
      nutrition: [
        "Try a balanced plate with a protein food, fruit or vegetables, and a satisfying grain or other carbohydrate.",
        "Small habits count: regular meals, water, and foods you enjoy are a good place to start."
      ]
    }
  },
  experience: {
    new: {
      label: "Brand new",
      duration: "15–20 min",
      effort: "Try 1–2 gentle rounds and rest whenever you need."
    },
    some: {
      label: "Some experience",
      duration: "20–25 min",
      effort: "Try 2 comfortable rounds, taking breaks as needed."
    },
    regular: {
      label: "Regular routine",
      duration: "25–30 min",
      effort: "Try 2–3 steady rounds and keep the effort comfortable."
    }
  },
  equipment: {
    none: "No equipment",
    basics: "Home basics",
    gym: "Full gym"
  },
  recovery: {
    name: "Easy movement & recovery",
    moves: "A gentle walk or relaxed mobility—keep it easy and optional."
  },
  rest: {
    name: "Rest day",
    moves: "Take a rest day or do something you enjoy."
  }
};
