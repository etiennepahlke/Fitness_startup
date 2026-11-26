(function () {
  "use strict";

  document.title = STARTUP.name + " — fitness that meets you where you are";
  document.getElementById("brand-name").textContent = STARTUP.name;
  document.getElementById("tagline").textContent = STARTUP.tagline;
  document.getElementById("pitch").textContent = STARTUP.pitch;

  const grid = document.getElementById("trainer-grid");
  const searchBox = document.getElementById("search-box");
  const emptyMessage = document.getElementById("empty-message");

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

  searchBox.addEventListener("input", renderTrainers);
  renderTrainers();
})();
