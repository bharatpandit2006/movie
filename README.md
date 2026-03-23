# 🎬 Movie Explorer Web App

## 📌 Project Overview

The Movie Explorer Web App is a dynamic web application that allows users to search and explore movies using real-time data from the OMDb API. The application demonstrates core JavaScript concepts such as API integration, array higher-order functions, and interactive UI design.

This project is developed as part of a web development assignment to showcase skills in frontend development, responsiveness, and clean coding practices.

---

## 🎯 Objectives

* To integrate a public API using JavaScript `fetch`
* To display dynamic data on a web page
* To implement search, filtering, and sorting using array higher-order functions
* To design a responsive and user-friendly interface
* To enhance user experience with interactive features

---

## 🔗 API Used

**OMDb API (Open Movie Database)**
🌐 http://www.omdbapi.com/

The OMDb API provides movie data such as:

* Title
* Year
* Poster
* Type (movie, series, episode)

Example API Request:

```
https://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY
```

---

## 🚀 Features

### 🔍 Search Functionality

* Users can search for movies by entering keywords
* Results update dynamically based on input

### 🎯 Filtering

* Filter movies by type:

  * Movie
  * Series
  * Episode

### 🔃 Sorting

* Sort results based on:

  * Year (ascending/descending)
  * Title (A-Z)

### ❤️ Favorites System

* Users can mark movies as favorites
* Favorites are stored using Local Storage
* Persistent data even after page reload

### 🌙 Dark Mode / Light Mode

* Toggle between dark and light themes
* Enhances user experience

### 📱 Responsive Design

* Fully responsive layout
* Works on:

  * Mobile devices
  * Tablets
  * Desktop screens

### ⏳ Loading Indicator

* Displays loading message or spinner during API calls

---

## 🛠️ Technologies Used

* **HTML5** → Structure of the application
* **CSS3 / Tailwind CSS (optional)** → Styling and layout
* **JavaScript (ES6)** → Functionality and logic
* **Fetch API** → API calls
* **Local Storage** → Data persistence

---

## 📂 Project Structure

```
movie-explorer-app/
│
├── index.html        # Main HTML file
├── style.css         # Styling file
├── script.js         # JavaScript logic
├── README.md         # Project documentation
└── assets/           # Images or icons (optional)
```

---

## ⚙️ How It Works

1. User enters a movie name in the search bar
2. Application sends a request to the OMDb API
3. API returns movie data in JSON format
4. Data is displayed dynamically as movie cards
5. Users can:

   * Search results
   * Filter by type
   * Sort results
   * Add to favorites

---

## ▶️ How to Run the Project

1. Clone the repository:

```
git clone https://github.com/your-username/movie-explorer-app.git
```

2. Navigate to the project folder:

```
cd movie-explorer-app
```

3. Open `index.html` in your browser

4. Add your OMDb API key in `script.js`:

```js
const API_KEY = "YOUR_API_KEY";
```

---

## 📊 Milestones Covered

### ✅ Milestone 1

* Project idea finalized
* GitHub repository created
* README file added

### 🔄 Milestone 2

* API integration using fetch
* Display of dynamic data
* Responsive UI implemented

### 🔄 Milestone 3

* Search functionality
* Filtering and sorting using array HOFs
* Favorites feature
* Dark mode toggle

### 🔄 Milestone 4

* Code refactoring
* Final documentation
* Deployment

---

## ⭐ Bonus Features (Optional)

* Debouncing search input
* Pagination for results
* Infinite scrolling
* Progressive Web App (PWA)
* Advanced animations

---

## ✅ Best Practices Followed

* Clean and readable code
* Modular JavaScript functions
* Use of array higher-order functions (`map`, `filter`, `sort`)
* Error handling for API calls
* Responsive design principles

---

## ⚠️ Limitations

* Requires internet connection for API calls
* Limited results based on API restrictions

---

## 🔮 Future Improvements

* Add detailed movie page
* Integrate multiple APIs
* Improve UI with animations
* Add user authentication

---

## 👨‍💻 Author

**Bharat Sharma**

---

## 📅 Submission Details

* Final Submission Deadline: **10th April**

---

## 💪 Final Note

This project is a great opportunity to practice real-world web development skills, including API integration, UI design, and JavaScript fundamentals. Continuous improvement and experimentation are encouraged throughout the development process.

---
