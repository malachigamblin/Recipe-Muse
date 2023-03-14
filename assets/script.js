var quotes = $("#quotes");

var jokes = [
  { joke: "Why did the tomato turn red? Because it saw the salad dressing!" },
  {
    joke: "I ordered a chicken and an egg online. I will let you know what comes first.",
  },
  { joke: "Why do melons have weddings? Because they cantaloupe." },
  { joke: "Why did the little strawberry cry? His mom was in a jam." },
  { joke: "What did the hamburger name its baby? Patty." },
  {
    joke: "Why are fish so easy to weigh? Because they have their own set of scales.",
  },
  {
    joke: "What did the pepperoni say walking out of the hospital? I am cured!",
  },
  { joke: "Why did the Oreo go to the dentist? It lost its filling." },
  { joke: "What do you call a cow with no legs? Ground beef." },
  {
    joke: "I used to run a dating service for chickens, but I was struggling to make hens meet.",
  },
  { joke: "Where do you learn to make ice cream? Sundae school." },
  {
    joke: "I always knock on the fridge door before opening it, just in case there's a salad dressing.",
  },
  { joke: "Did you hear about the hungry clock. It went back four seconds." },
  { joke: "What kind of cereal do leprechauns eat? Lucky Charms." },
  {
    joke: "“My extra winter weight is finally gone. Now, I have spring rolls.”",
  },
];

//dad jokes
var limit = 16;
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit,
  headers: { "X-Api-Key": "vFc1kaCffP+HlWD3XavOzg==WOFRYozRDfjYV7zT" },
  contentType: "application/json",
  success: function (result) {
    console.log(result);
    var randomIndex;
    if (result.jokes && result.jokes.length > 0) {
      randomIndex = Math.floor(Math.random() * result.jokes.length);
      quotes.text(result.jokes[randomIndex].joke);
    } else {
      randomIndex = Math.floor(Math.random() * jokes.length);
      quotes.text(jokes[randomIndex].joke);
    }
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});

const outputDiv = document.getElementById("output");

function getsource(id) {
  $.ajax({
    url:
      "https://api.spoonacular.com/recipes/" +
      id +
      "/information?apiKey=483c3bf2db9040a797f611438a378565",
    success: function (res) {
      let meal = document.createElement("a");
      meal.id = "meal" + id;
      meal.innerHTML = res.sourceUrl;
      meal.href = res.sourceUrl;
      let resultDiv = document.getElementById(id);
      resultDiv.appendChild(meal);
    },
  });
}
var searchHistory = '';
if (localStorage.getItem("search")) {searchHistory = localStorage.getItem("search");}
var searchList = document.getElementById("search-list");

function displaySearchHistory(history) {
<<<<<<< HEAD
   for (var i=0; i<=history.length-1; i++) {
    var searchElement = document.createElement("a");
    searchElement.textContent = history[i];
    searchList.append(searchElement);
   }
=======
  searchList.innerHTML = ""; 
  var uniqueHistory = Array.from(new Set(history)); 
  for (var i=0; i < uniqueHistory.length; i++) {
   var searchElement = document.createElement("button");
   searchElement.textContent = uniqueHistory[i];
   searchElement.addEventListener("click", function() {
     getmeal(this.textContent);
   });
   searchList.appendChild(searchElement);
  }
>>>>>>> 24af22c4d792f3ffd5f757ece2c824b12b80e3e5
}

function getmeal(q) {
  searchHistory = searchHistory + q + ",";
  localStorage.setItem("search", searchHistory);
  searchHistory = localStorage.getItem("search");
<<<<<<< HEAD
  searchHistory = searchHistory.split();
 // console.log(searchHistory);
=======
  searchHistory = searchHistory.split(',');
>>>>>>> 24af22c4d792f3ffd5f757ece2c824b12b80e3e5
  displaySearchHistory(searchHistory);
  $.ajax({
    url:
      "https://api.spoonacular.com/recipes/search?apiKey=483c3bf2db9040a797f611438a378565&number=5&query=" +
      q,
    success: function (res) {
      outputDiv.innerHTML = "";
      const resultsContainer = document.createElement("div");
      resultsContainer.classList.add("results-container");
      outputDiv.appendChild(resultsContainer);

      for (var i = 0; i < 4; i++) {
        let resultDiv = document.createElement("div");
        resultDiv.id = res.results[i].id;
        resultDiv.classList.add("result-item");
        resultDiv.innerHTML +=
          "<div class='image-container'><img src='" +
          res.baseUri +
          res.results[i].image +
          "' class='result-image' /></div>" +
          "<div class='text-container'>" +
          "<h3>" +
          res.results[i].title +
          "</h3><p>Ready in " +
          res.results[i].readyInMinutes +
          " minutes</p>" +
          "<a href='" +
          res.results[i].sourceUrl +
          "' target='_blank'>View Recipe</a>" +
          "</div>";
        resultsContainer.appendChild(resultDiv);
      }
    },
  });
}

