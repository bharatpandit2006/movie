const API_KEY = "a5f8f988";
const BASE_URL = "https://www.omdbapi.com/";

const movieContainer = document.getElementById("movie-container");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const sortSelect = document.getElementById("sort");

let allMovies = [];

// Combined state
let state = {
    search: "",
    filter: "",
    sort: ""
};

// Fetch movies
async function getMovies() {
    movieContainer.innerHTML = "<h2>Loading...</h2>";

    try {
        const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=avengers`);
        const data = await res.json();

        allMovies = data.Search || [];
        applyFeatures();

    } catch (error) {
        movieContainer.innerHTML = "<h2>Error loading data</h2>";
    }
}

// Display movies
function displayMovies(movies) {
    movieContainer.innerHTML = "";

    if (movies.length === 0) {
        movieContainer.innerHTML = "<h2>No movies found</h2>";
        return;
    }

    movies.map(movie => {
        const div = document.createElement("div");
        div.classList.add("movie");

        // Poster logic (custom design)
        const poster = movie.Poster !== "N/A"
            ? `<img src="${movie.Poster}" />`
            : `<div class="no-image">No Image</div>`;

        div.innerHTML = `
      ${poster}
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

        movieContainer.appendChild(div);
    });
}

// Apply combined features
function applyFeatures() {
    let result = [...allMovies];

    // Search
    if (state.search) {
        result = result.filter(movie =>
            movie.Title.toLowerCase().includes(state.search)
        );
    }

    // Filter
    if (state.filter === "old") {
        result = result.filter(movie => Number(movie.Year) < 2010);
    } else if (state.filter === "new") {
        result = result.filter(movie => Number(movie.Year) >= 2010);
    }

    // Sort
    if (state.sort === "year-asc") {
        result.sort((a, b) => Number(a.Year) - Number(b.Year));
    } else if (state.sort === "year-desc") {
        result.sort((a, b) => Number(b.Year) - Number(a.Year));
    }

    displayMovies(result);
}

// Event Listeners
searchInput.addEventListener("input", () => {
    state.search = searchInput.value.toLowerCase();
    applyFeatures();
});

filterSelect.addEventListener("change", () => {
    state.filter = filterSelect.value;
    applyFeatures();
});

sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    applyFeatures();
});

// Initial load
getMovies();