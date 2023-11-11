// script.js
document.addEventListener("DOMContentLoaded", function () {
  populateYears();
});

document.addEventListener("DOMContentLoaded", function () {
  populateYears();
  const ratingRange = document.getElementById("rating-range");
  const ratingValue = document.getElementById("rating-value");

  ratingRange.addEventListener("input", function () {
    ratingValue.textContent = ratingRange.value;
  });
});

function populateYears() {
  const yearSelect = document.getElementById("year-select");
  for (let year = 2023; year >= 1920; year--) {
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.getElementById("search-bar");

  searchIcon.addEventListener("click", function () {
    // Expand the search bar
    searchBar.style.width = searchBar.style.width === "150px" ? "0" : "150px";
    searchBar.style.opacity = searchBar.style.opacity === "1" ? "0" : "1";
    searchBar.focus(); // Automatically focus the input
  });
});

// Add event listeners and other interactive functionalities as needed
