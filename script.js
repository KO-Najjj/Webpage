const searchInput = document.getElementById("location-search");
const searchButton = document.getElementById("search-btn");
const searchStatus = document.getElementById("search-status");
const gymSections = document.querySelectorAll(".gym-section");

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getMatchScore(card, query) {
  if (!query) {
    return 0;
  }

  const city = normalize(card.dataset.city || "");
  const area = normalize(card.dataset.area || "");
  const zip = normalize(card.dataset.zip || "");

  if (zip === query) {
    return 0;
  }

  if (city === query || area === query) {
    return 1;
  }

  if (city.includes(query) || query.includes(city)) {
    return 2;
  }

  if (area.includes(query) || query.includes(area)) {
    return 3;
  }

  if (query.includes("san") && city.includes("san francisco")) {
    return 4;
  }

  if (query.includes("oak") && city.includes("oakland")) {
    return 4;
  }

  return 99;
}

function filterGyms() {
  const query = normalize(searchInput.value);
  let visibleCount = 0;

  gymSections.forEach((section) => {
    const list = section.querySelector("ul");
    const cards = Array.from(section.querySelectorAll(".gym-card"));
    const visibleCards = cards.filter((card) => {
      const score = getMatchScore(card, query);
      card.dataset.matchScore = score;
      return score < 99;
    });

    visibleCards.sort((a, b) => {
      const scoreDifference =
        Number(a.dataset.matchScore) - Number(b.dataset.matchScore);
      if (scoreDifference !== 0) {
        return scoreDifference;
      }
      return Number(a.dataset.price) - Number(b.dataset.price);
    });

    cards.forEach((card) => {
      card.style.display = "none";
    });

    visibleCards.forEach((card) => {
      card.style.display = "flex";
      list.appendChild(card);
    });

    visibleCount += visibleCards.length;
  });

  if (query) {
    searchStatus.textContent = `Showing ${visibleCount} nearby gym(s) sorted by price for "${searchInput.value.trim()}".`;
  } else {
    searchStatus.textContent =
      "Showing the cheapest gyms near your search area.";
  }
}

searchInput.addEventListener("input", filterGyms);
searchButton.addEventListener("click", filterGyms);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    filterGyms();
  }
});

filterGyms();
