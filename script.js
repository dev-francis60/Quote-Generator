const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const XBtn = document.getElementById("X");
const newQuoteBtn = document.getElementById("new-quote");

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
  //Check if Author field is blank and replace it with "Unknown"
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //Check the quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}
newQuote();

// X function
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
XBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);
