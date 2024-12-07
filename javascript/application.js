import Mustache from "mustachejs";
const url = "https://www.omdbapi.com/?s=christmas&apikey=adf1f2d7";
const results = document.querySelector("#results");
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // start the iteration over the movies array
    const movies = data.Search;
    // get the template
    const template = document.querySelector("#movieCardTemplate").innerHTML;
    const renderedMovieCards = Mustache.render(template, { movies });
    results.insertAdjacentHTML("beforeend", renderedMovieCards);
  });
