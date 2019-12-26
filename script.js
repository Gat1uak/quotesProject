const quotes = [
   {
      "text": "The only people who never fail are those who never try.",
      "from": "Ilka Chase"
   },
   {
      "text": "Failure is just another way to learn how to do something right.",
      "from": "Marian Wright Edelman"
   },
   {
      "text": "I failed my way to success.",
      "from": "Thomas Edison"
   },
   {
      "text": "Every failure brings with it the seed of an equivalent success.",
      "from": "Napoleon Hill"
   },
   {
      "text": "Only those who dare to fail greatly can ever achieve greatly.",
      "from": "John F. Kennedy"
   },
   {
      "text": "It is hard to fail, but it is worse never to have tried to succeed.",
      "from": "Theodore Roosevelt"
   },
   {
      "text": "Imagination is more important than knowledge.",
      "from": "Albert Einstein"
   },
   {
      "text": "Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.",
      "from": "Langston Hughes"
   },
   {
      "text": "The future belongs to those who believe in the beauty of their dreams.",
      "from": "Eleanor Roosevelt"
   },
   {
      "text": "Go confidently in the direction of your dreams. Live the life you have imagined.",
      "from": "Henry David Thoreau"
   },
]

const quoteBtn = document.getElementById('quoteBtn');
const quoteAuthor = document.getElementById('quoteAuthor');
const quote = document.getElementById("quote");

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
   let number = Math.floor(Math.random() * quotes.length);
   quote.innerHTML = quotes[number].text;
   quoteAuthor.innerHTML = quotes[number].from;
}
displayQuote(quotes);