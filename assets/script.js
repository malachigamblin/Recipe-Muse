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
];

//dad jokes
var limit = 8;
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

function getmeal(q) {
  $.ajax({
    url:
      "https://api.spoonacular.com/recipes/search?apiKey=483c3bf2db9040a797f611438a378565&number=5&query=" +
      q,
    success: function (res) {
      outputDiv.innerHTML = '';
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
