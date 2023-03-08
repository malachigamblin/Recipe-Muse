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
