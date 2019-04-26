let quote = document.getElementById('quote');
let author = document.getElementById('author');

function breakingBadQuote() {
  fetch(`https://breaking-bad-quotes.herokuapp.com/v1/quotes/`)
    .then(res => res.json())
    .then(res => {
      quote.innerHTML = `${res[0].quote}`;
      author.innerHTML = `(${res[0].author})`;
    });
}
