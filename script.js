let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const url = "https://api.quotable.io/quotes/random?tags=technology,famous-quotes";

//Use fetch API to communicate with an external web API
let getQuote = async () => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    let item = data[0]; 

    quote.innerText = item.content;
    author.innerText = item.author;
  } catch (error) {
    console.error("Error fetching quote:", error);
    quote.innerText = "An error occurred. Please try again later.";
    //author.innerText = "";
  }
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
