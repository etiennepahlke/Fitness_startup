// Fictional prototype content only. Trainer profiles are not real people.
const STARTUP = {
  name: "Newrep",
  tagline: "Get a free AI-generated fitness plan and affordable 15-minute check-ins with certified personal trainers.",
  pitch: "New to working out? Get a free AI-generated plan, then book a quick 15-minute video check-in with a certified personal trainer for just $20–25."
};

const TRAINERS = [
  {
    id: "maya",
    name: "Maya Chen",
    credential: "Certified Personal Trainer",
    specialty: "Strength for beginners",
    description: "Makes strength training feel approachable, with simple moves you can do at home.",
    price: 20
  },
  {
    id: "jordan",
    name: "Jordan Ellis",
    credential: "Certified Personal Trainer",
    specialty: "Building a routine",
    description: "Helps you find a realistic weekly rhythm and build confidence one session at a time.",
    price: 22
  },
  {
    id: "sam",
    name: "Sam Rivera",
    credential: "Certified Personal Trainer",
    specialty: "Mobility & movement",
    description: "Offers low-pressure guidance on moving comfortably and starting at your own pace.",
    price: 25
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
