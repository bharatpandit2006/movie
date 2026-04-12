const API_KEY = "8fca0339";
const BASE_URL = "https://www.omdbapi.com/";

const movieContainer = document.getElementById("movie-container");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const sortSelect = document.getElementById("sort");
const favBtn = document.getElementById("view-fav");
const backBtn = document.getElementById("back-home");
const toggleBtn = document.getElementById("theme-toggle");

let allMovies = [];

let state = {
    search: "",
    filter: "",
    sort: ""
};

// Fetch default movies
async function getMovies() {
    movieContainer.innerHTML = "<h2>Loading...</h2>";
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=avengers`);
    const data = await res.json();
    allMovies = data.Search || [];
    applyFeatures();
}

// Search
async function searchMovies(query) {
    movieContainer.innerHTML = "<h2>Loading...</h2>";
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();

    if (!data.Search) {
        movieContainer.innerHTML = "<h2>No results</h2>";
        return;
    }

    allMovies = data.Search;
    applyFeatures();
}

// Favorites
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

function isFavorite(movie) {
    return getFavorites().some(f => f.imdbID === movie.imdbID);
}

function toggleFavorite(movie) {
    let favs = getFavorites();

    if (isFavorite(movie)) {
        favs = favs.filter(f => f.imdbID !== movie.imdbID);
    } else {
        favs.push(movie);
    }

    localStorage.setItem("favorites", JSON.stringify(favs));

    // Refresh properly
    if (backBtn.style.display === "block") {
        displayMovies(favs);
    } else {
        applyFeatures();
    }
}

// Display
function displayMovies(movies) {
    movieContainer.innerHTML = "";

    if (movies.length === 0) {
        movieContainer.innerHTML = "<h2>No movies found</h2>";
        return;
    }

    movies.forEach(movie => {
        const div = document.createElement("div");
        div.classList.add("movie");

        const isFav = isFavorite(movie);

        div.innerHTML = `
      ${movie.Poster !== "N/A"
                ? `<img src="${movie.Poster}" />`
                : `<div class="no-image">No Image</div>`}

      <button class="fav-btn">${isFav ? "💖" : "🤍"}</button>

      <div class="overlay">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      </div>
    `;

        const btn = div.querySelector(".fav-btn");
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(movie);
        });

        movieContainer.appendChild(div);
    });
}

// Apply features
function applyFeatures() {
    let result = [...allMovies];

    if (state.search) {
        result = result.filter(m =>
            m.Title.toLowerCase().includes(state.search)
        );
    }

    if (state.filter === "old") {
        result = result.filter(m => Number(m.Year) < 2010);
    }

    if (state.filter === "new") {
        result = result.filter(m => Number(m.Year) >= 2010);
    }

    if (state.sort === "year-asc") {
        result.sort((a, b) => a.Year - b.Year);
    }

    if (state.sort === "year-desc") {
        result.sort((a, b) => b.Year - a.Year);
    }

    displayMovies(result);
}

// Debounce
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const debouncedSearch = debounce((val) => {
    state.search = val;
    if (val) searchMovies(val);
    else getMovies();
}, 500);

// Events
searchInput.addEventListener("input", e => {
    debouncedSearch(e.target.value.toLowerCase());
});

filterSelect.addEventListener("change", () => {
    state.filter = filterSelect.value;
    applyFeatures();
});

sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    applyFeatures();
});

// Favorites view
favBtn.addEventListener("click", () => {
    const favs = getFavorites();
    displayMovies(favs);
    backBtn.style.display = "block";
});

// Back
backBtn.addEventListener("click", () => {
    backBtn.style.display = "none";
    applyFeatures();
});

// Theme
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Init
getMovies();