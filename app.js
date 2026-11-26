(function () {
  "use strict";

  document.title = STARTUP.name + " — fitness that meets you where you are";
  document.getElementById("brand-name").textContent = STARTUP.name;
  document.getElementById("tagline").textContent = STARTUP.tagline;
  document.getElementById("pitch").textContent = STARTUP.pitch;

  const grid = document.getElementById("trainer-grid");
  const searchBox = document.getElementById("search-box");
  const specialtyFilter = document.getElementById("specialty-filter");
  const maxPriceFilter = document.getElementById("max-price-filter");
  const maxPriceValue = document.getElementById("max-price-value");
  const emptyMessage = document.getElementById("empty-message");
  const bookingConfirmation = document.getElementById("booking-confirmation");
  const confirmationSummary = document.getElementById("confirmation-summary");
  const confirmBookingButton = document.getElementById("confirm-booking-button");
  const cancelBookingButton = document.getElementById("cancel-booking-button");
  const bookingConfirmationHeading = document.getElementById("booking-confirmation-heading");
  const myBookingsList = document.getElementById("my-bookings-list");
  const myBookingsEmpty = document.getElementById("my-bookings-empty");
  const bookingStorageMessage = document.getElementById("booking-storage-message");
  const planForm = document.getElementById("plan-quiz");
  const buildPlanButton = document.getElementById("build-plan-button");
  const planResults = document.getElementById("plan-results");
  const resultsHeading = document.getElementById("results-heading");
  const resultsSummary = document.getElementById("results-summary");
  const weeklyPlan = document.getElementById("weekly-plan");
  const nutritionTips = document.getElementById("nutrition-tips");
  const trainerCountSlider = document.getElementById("trainer-count-slider");
  const userCountSlider = document.getElementById("user-count-slider");

  const BOOKINGS_STORAGE_KEY = "newrep-demo-bookings";
  let bookingStorageError = "";
  let selectedBooking = null;

  function isSavedBooking(booking) {
    return booking && typeof booking.trainerId === "string" &&
      typeof booking.trainerName === "string" &&
      typeof booking.specialty === "string" &&
      typeof booking.slotIso === "string" &&
      typeof booking.slotLabel === "string" &&
      typeof booking.price === "number";
  }

  function loadBookings() {
    try {
      const saved = window.localStorage.getItem(BOOKINGS_STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed) || !parsed.every(isSavedBooking)) {
        throw new Error("The saved booking data is not in the expected format.");
      }
      return parsed;
    } catch (error) {
      bookingStorageError = "Saved bookings couldn't be loaded from this browser. You can still browse trainer profiles.";
      return [];
    }
  }

  let bookings = loadBookings();

  function renderBookings() {
    myBookingsList.replaceChildren.apply(myBookingsList, bookings.map(function (booking) {
      const card = document.createElement("article");
      card.className = "my-booking-card";
      const trainer = document.createElement("h3");
      trainer.textContent = booking.trainerName;
      const specialty = document.createElement("p");
      specialty.className = "my-booking-specialty";
      specialty.textContent = booking.specialty;
      const time = document.createElement("p");
      time.textContent = booking.slotLabel;
      const price = document.createElement("p");
      price.className = "my-booking-price";
      price.textContent = "$" + booking.price + " · no payment taken";
      card.append(trainer, specialty, time, price);
      return card;
    }));
    myBookingsEmpty.hidden = bookings.length > 0;
    bookingStorageMessage.textContent = bookingStorageError;
    bookingStorageMessage.hidden = !bookingStorageError;
  }

  function makeThisWeekSlots(trainerId) {
    const now = new Date();
    const lastDayOffset = 6 - now.getDay();
    const times = [[10, 0], [17, 30]];
    const slots = [];

    for (let offset = 0; offset <= lastDayOffset; offset += 1) {
      times.forEach(function (time) {
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset, time[0], time[1]);
        const slotIso = date.toISOString();
        const alreadyBooked = bookings.some(function (booking) {
          return booking.trainerId === trainerId && booking.slotIso === slotIso;
        });
        if (date > now && !alreadyBooked) {
          slots.push({
            iso: slotIso,
            label: new Intl.DateTimeFormat(undefined, {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit"
            }).format(date)
          });
        }
      });
    }
    return slots;
  }

  function updateGrowthMetrics() {
    const trainerCount = Number(trainerCountSlider.value);
    const userCount = Number(userCountSlider.value);
    const trainerScale = (trainerCount - 5) / (500 - 5);
    const specialtyCount = Math.round(3 + trainerScale * 21);
    const averageWait = Math.round(7 - trainerScale * 6);
    const averagePrice = Math.round(30 - trainerScale * 15);
    const usersPerTrainer = userCount / trainerCount;
    const scheduleFullness = Math.round(
      5 + 95 * usersPerTrainer / (usersPerTrainer + 20)
    );
    const earnings = Math.round(scheduleFullness / 100 * 30 * averagePrice);

    document.getElementById("trainer-count-output").textContent = trainerCount.toLocaleString();
    document.getElementById("user-count-output").textContent = userCount.toLocaleString();
    document.getElementById("specialties-metric").textContent = specialtyCount + " specialties";
    document.getElementById("wait-metric").textContent = averageWait + (averageWait === 1 ? " day" : " days");
    document.getElementById("price-metric").textContent = "$" + averagePrice;
    document.getElementById("fullness-metric").textContent = scheduleFullness + "%";
    document.getElementById("earnings-metric").textContent = "$" + earnings.toLocaleString() + " / month";

    document.getElementById("specialties-bar").style.width = (specialtyCount / 24 * 100) + "%";
    document.getElementById("wait-bar").style.width = ((8 - averageWait) / 7 * 100) + "%";
    document.getElementById("price-bar").style.width = ((31 - averagePrice) / 16 * 100) + "%";
    document.getElementById("fullness-bar").style.width = scheduleFullness + "%";
    document.getElementById("earnings-bar").style.width = (earnings / 900 * 100) + "%";
  }

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
    rate.textContent = "$" + trainer.price + " / check-in";
    const session = document.createElement("span");
    session.textContent = "15-minute video";
    price.append(rate, session);

    const stats = document.createElement("div");
    stats.className = "trainer-stats";
    const experience = document.createElement("span");
    experience.textContent = trainer.yearsExperience + " years experience";
    const rating = document.createElement("span");
    rating.className = "trainer-rating";
    const star = document.createElement("span");
    star.setAttribute("aria-hidden", "true");
    star.textContent = "★";
    const ratingText = document.createElement("span");
    ratingText.textContent = trainer.rating.toFixed(1) + " · " + trainer.reviewCount + " reviews";
    rating.append(star, ratingText);
    stats.append(experience, rating);

    const profile = document.createElement("div");
    profile.className = "trainer-profile-details";
    profile.id = "trainer-profile-" + trainer.id;
    profile.hidden = true;

    const profileBio = document.createElement("p");
    profileBio.className = "trainer-profile-bio";
    profileBio.textContent = trainer.profileDetails;
    const specialties = document.createElement("div");
    specialties.className = "profile-specialties";
    const specialtiesHeading = document.createElement("h4");
    specialtiesHeading.textContent = "Specialties";
    const specialtyTags = document.createElement("div");
    specialtyTags.className = "specialty-tags";
    trainer.specialties.forEach(function (item) {
      const tag = document.createElement("span");
      tag.textContent = item;
      specialtyTags.append(tag);
    });
    specialties.append(specialtiesHeading, specialtyTags);

    const reviews = document.createElement("div");
    reviews.className = "profile-reviews";
    const reviewsHeading = document.createElement("h4");
    reviewsHeading.textContent = "A few kind words";
    const reviewList = document.createElement("ul");
    trainer.reviews.forEach(function (reviewText) {
      const review = document.createElement("li");
      review.textContent = "“" + reviewText + "”";
      reviewList.append(review);
    });
    reviews.append(reviewsHeading, reviewList);

    const availability = document.createElement("fieldset");
    availability.className = "profile-availability";
    const availabilityLegend = document.createElement("legend");
    availabilityLegend.textContent = "Available this week";
    availability.append(availabilityLegend);
    const slots = makeThisWeekSlots(trainer.id);
    if (slots.length === 0) {
      const noSlots = document.createElement("p");
      noSlots.className = "no-slots";
      noSlots.textContent = "No more demo slots available this week.";
      availability.append(noSlots);
    } else {
      slots.forEach(function (slot, index) {
        const label = document.createElement("label");
        label.className = "availability-slot";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "slot-" + trainer.id;
        input.value = slot.iso;
        input.dataset.slotLabel = slot.label;
        input.addEventListener("change", function () {
          bookButton.disabled = false;
        });
        const slotText = document.createElement("span");
        slotText.textContent = slot.label;
        label.append(input, slotText);
        availability.append(label);
      });
    }

    const bookButton = document.createElement("button");
    bookButton.className = "button button-primary profile-book-button";
    bookButton.type = "button";
    bookButton.textContent = "Book check-in";
    bookButton.disabled = true;
    bookButton.addEventListener("click", function () {
      const selectedSlot = availability.querySelector('input[name="slot-' + trainer.id + '"]:checked');
      if (!selectedSlot) return;
      selectedBooking = {
        trainerId: trainer.id,
        trainerName: trainer.name,
        specialty: trainer.specialty,
        slotIso: selectedSlot.value,
        slotLabel: selectedSlot.dataset.slotLabel,
        price: trainer.price
      };
      showBookingConfirmation();
    });
    profile.append(profileBio, specialties, reviews, availability, bookButton);

    const profileButton = document.createElement("button");
    profileButton.className = "trainer-profile-toggle";
    profileButton.type = "button";
    profileButton.textContent = "View profile";
    profileButton.setAttribute("aria-expanded", "false");
    profileButton.setAttribute("aria-controls", profile.id);
    profileButton.addEventListener("click", function () {
      const isExpanded = profileButton.getAttribute("aria-expanded") === "true";
      profileButton.setAttribute("aria-expanded", String(!isExpanded));
      profileButton.textContent = isExpanded ? "View profile" : "Hide profile";
      profile.hidden = isExpanded;
    });

    card.append(top, specialty, stats, bio, profile, price, profileButton);
    return card;
  }

  function renderTrainers() {
    const query = searchBox.value.trim().toLowerCase();
    const selectedSpecialty = specialtyFilter.value;
    const maxPrice = Number(maxPriceFilter.value);
    maxPriceValue.textContent = "$" + maxPrice;
    const matches = TRAINERS.filter(function (trainer) {
      const searchable = [
        trainer.name,
        trainer.credential,
        trainer.specialty,
        trainer.description
      ].join(" ").toLowerCase();
      return searchable.indexOf(query) !== -1 &&
        (selectedSpecialty === "all" || trainer.specialty === selectedSpecialty) &&
        trainer.price <= maxPrice;
    });

    grid.replaceChildren.apply(grid, matches.map(makeTrainerCard));
    emptyMessage.hidden = matches.length > 0;
  }

  function showBookingConfirmation() {
    if (!selectedBooking) return;
    const summaryItems = [
      ["Trainer", selectedBooking.trainerName],
      ["Time", selectedBooking.slotLabel],
      ["Price", "$" + selectedBooking.price + " per 15-minute check-in"]
    ];
    confirmationSummary.replaceChildren.apply(confirmationSummary, summaryItems.reduce(function (items, pair) {
      const term = document.createElement("dt");
      term.textContent = pair[0];
      const detail = document.createElement("dd");
      detail.textContent = pair[1];
      items.push(term, detail);
      return items;
    }, []));
    bookingConfirmation.hidden = false;
    bookingConfirmation.scrollIntoView({ behavior: "smooth", block: "start" });
    bookingConfirmationHeading.focus();
  }

  function confirmBooking() {
    if (!selectedBooking) return;
    const updatedBookings = bookings.concat(selectedBooking);
    try {
      window.localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(updatedBookings));
    } catch (error) {
      bookingStorageError = "This browser couldn't save your demo booking. Check your browser's local storage settings and try again.";
      renderBookings();
      return;
    }
    bookings = updatedBookings;
    bookingStorageError = "";
    selectedBooking = null;
    bookingConfirmation.hidden = true;
    renderBookings();
    renderTrainers();
    document.getElementById("my-bookings").scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("my-bookings-heading").focus();
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

  function buildPlan() {
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
  specialtyFilter.addEventListener("change", renderTrainers);
  maxPriceFilter.addEventListener("input", renderTrainers);
  confirmBookingButton.addEventListener("click", confirmBooking);
  cancelBookingButton.addEventListener("click", function () {
    bookingConfirmation.hidden = true;
    selectedBooking = null;
    document.getElementById("trainers").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  buildPlanButton.addEventListener("click", buildPlan);
  trainerCountSlider.addEventListener("input", updateGrowthMetrics);
  userCountSlider.addEventListener("input", updateGrowthMetrics);
  renderTrainers();
  renderBookings();
  updateGrowthMetrics();
})();
