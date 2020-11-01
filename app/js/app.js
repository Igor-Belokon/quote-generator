document.addEventListener("DOMContentLoaded", function() {
  // this function runs when the DOM is ready, i.e. when the document has been parsed

  const loader = document.getElementById("loader");
  const quoteContainer = document.getElementById("container");
  const quoteTextBlock = document.getElementById("quote-text");
  const newQuoteButton = document.getElementById("new-quote");
  const tweetQuoteButton = document.getElementById("tweet-quote");


  let quoteText="";
  let quoteAuthor="";

  newQuoteButton.onclick =  () =>{
    newQuoteButton.disabled = true;
    tweetQuoteButton.disabled = true;
    quoteContainer.hidden = true;
    loader.hidden = false;

    getQuote();
}

  const quoteBlock = document.createElement('div');
  quoteTextBlock.appendChild(quoteBlock)

  const author = document.createElement('div');
  author.className="quote_author";
  quoteContainer.appendChild(author);

let getQuote =()=>{
  fetch('https://stormy-waters-81463.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
  .then(response => response.json())
  .then(quote => {
    console.log("my quote", quote)
    quoteBlock.innerText = quote.quoteText;
     author.innerText = quote.quoteAuthor.length ? quote.quoteAuthor : "Unknown author";

      newQuoteButton.disabled = false;
      tweetQuoteButton.disabled = false;
      quoteContainer.hidden = false;
      loader.hidden = true;
  })
  .catch(err => {
      console.log("Error Reading data " + err);
      setTimeout(getQuote, 100);
  })
}
getQuote()  // all js code should go below this line
});
