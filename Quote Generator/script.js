const api_url = "https://api.quotable.io/random";
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.new-quote');
const tweetBtn =document.querySelector('.tweet');

async function getQuote (url)  {
  const response = await fetch(url);
  let data = await response.json();
  quote.textContent = data.content;
  author.textContent = data.author;
};


button.addEventListener('click', ()=> getQuote(api_url));

tweetBtn.addEventListener('click', () => {
    window.open( "https://twitter.com/intent/tweet?text=" +quote.textContent + "---- by " + author.textContent, "Tweet Window", "width = 600 height = 300", )
})








