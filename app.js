(function () {
  "use strict";

  document.title = STARTUP.name + " — fitness that meets you where you are";
  document.getElementById("brand-name").textContent = STARTUP.name;
  document.getElementById("tagline").textContent = STARTUP.tagline;
  document.getElementById("pitch").textContent = STARTUP.pitch;

  const grid = document.getElementById("trainer-grid");
  const searchBox = document.getElementById("search-box");
  const emptyMessage = document.getElementById("empty-message");
  const planForm = document.getElementById("plan-quiz");
  const planResults = document.getElementById("plan-results");
  const resultsHeading = document.getElementById("results-heading");
  const resultsSummary = document.getElementById("results-summary");
  const weeklyPlan = document.getElementById("weekly-plan");
  const nutritionTips = document.getElementById("nutrition-tips");

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const scheduledDays = {
    1: [2],
    2: [1, 4],
    3: [0, 2, 4],
    4: [0, 2, 4, 6],
    5: [0, 1, 3, 4, 6],
    6: [0, 1, 2, 4, 5, 6],
    7: [0, 1, 2, 3, 5, 6]
  };

  function makeTrainerCard(trainer) {
    const card = document.createElement("article");
    card.className = "trainer-card";

    const top = document.createElement("div");
    top.className = "trainer-card-top";

    const avatar = document.createElement("span");
    avatar.className = "trainer-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = trainer.name.split(" ").map(function (part) {
      return part.charAt(0);
    }).join("");

    const identity = document.createElement("div");
    const name = document.createElement("h3");
    name.className = "trainer-name";
    name.textContent = trainer.name;
    const credential = document.createElement("p");
    credential.className = "trainer-credential";
    credential.textContent = trainer.credential;
    identity.append(name, credential);
    top.append(avatar, identity);

    const specialty = document.createElement("span");
    specialty.className = "trainer-specialty";
    specialty.textContent = trainer.specialty;

    const bio = document.createElement("p");
    bio.className = "trainer-bio";
    bio.textContent = trainer.description;

    const price = document.createElement("div");
    price.className = "trainer-price";
    const rate = document.createElement("strong");
    rate.textContent = "$" + trainer.price + " / 15 min";
    const session = document.createElement("span");
    session.textContent = "Video check-in";
    price.append(rate, session);

    card.append(top, specialty, bio, price);
    return card;
  }

  function renderTrainers() {
    const query = searchBox.value.trim().toLowerCase();
    const matches = TRAINERS.filter(function (trainer) {
      const searchable = [
        trainer.name,
        trainer.credential,
        trainer.specialty,
        trainer.description
      ].join(" ").toLowerCase();
      return searchable.indexOf(query) !== -1;
    });

    grid.replaceChildren.apply(grid, matches.map(makeTrainerCard));
    emptyMessage.hidden = matches.length > 0;
  }

  function makePlanDay(day, activity, experience, equipment) {
    const card = document.createElement("article");
    card.className = "plan-day-card";

    const header = document.createElement("div");
    header.className = "plan-day-header";
    const dayName = document.createElement("span");
    dayName.className = "plan-day-name";
    dayName.textContent = day;
    const kind = document.createElement("span");
    kind.className = "plan-day-kind";
    kind.textContent = activity.type;
    header.append(dayName, kind);

    const title = document.createElement("h3");
    title.textContent = activity.name;
    const description = document.createElement("p");
    description.className = "plan-day-description";
    description.textContent = activity.moves;

    card.append(header, title, description);
    if (activity.type === "Workout") {
      const duration = document.createElement("p");
      duration.className = "plan-day-detail";
      duration.textContent = experience.duration + " · " + equipment;
      const effort = document.createElement("p");
      effort.className = "plan-day-effort";
      effort.textContent = experience.effort;
      card.append(duration, effort);
    }
    return card;
  }

  function buildPlan(event) {
    event.preventDefault();

    const goal = PLAN_PRESETS.goals[planForm.elements.goal.value];
    const experience = PLAN_PRESETS.experience[planForm.elements.experience.value];
    const daysPerWeek = Number(planForm.elements.daysPerWeek.value);
    const equipment = PLAN_PRESETS.equipment[planForm.elements.equipment.value];
    const workoutDays = scheduledDays[daysPerWeek];
    let workoutCount = 0;

    resultsSummary.textContent = goal.focus + " " + experience.label + " · " +
      daysPerWeek + " days available · " + equipment + ".";

    const days = weekdays.map(function (day, index) {
      const slot = workoutDays.indexOf(index);
      if (slot === -1) {
        return makePlanDay(day, {
          type: "Rest",
          name: PLAN_PRESETS.rest.name,
          moves: PLAN_PRESETS.rest.moves
        });
      }

      if (daysPerWeek >= 5 && slot % 3 === 2) {
        return makePlanDay(day, {
          type: "Recovery",
          name: PLAN_PRESETS.recovery.name,
          moves: PLAN_PRESETS.recovery.moves
        });
      }

      const workout = goal.workouts[workoutCount % goal.workouts.length];
      workoutCount += 1;
      return makePlanDay(day, {
        type: "Workout",
        name: workout.name,
        moves: workout.moves[planForm.elements.equipment.value]
      }, experience, equipment);
    });

    weeklyPlan.replaceChildren.apply(weeklyPlan, days);
    nutritionTips.replaceChildren.apply(nutritionTips, goal.nutrition.map(function (tip) {
      const item = document.createElement("li");
      item.textContent = tip;
      return item;
    }));
    planResults.hidden = false;
    resultsHeading.focus();
  }

  searchBox.addEventListener("input", renderTrainers);
  planForm.addEventListener("submit", buildPlan);
  renderTrainers();
})();
