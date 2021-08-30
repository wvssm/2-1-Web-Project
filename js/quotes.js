const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ]; //명언 10개 나열

  const quote = document.querySelector("#quote span:first-child"); //첫번째 span을 가져온다.
  const author = document.querySelector("#quote span:last-child"); //두번째 span을 가져온다.

  const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; //random모듈, 반올림모듈을 이용해 난수를 발생 시킨다.

  quote.innerText = todaysQuote.quote; //span 내부에 넣는다.
  author.innerText = todaysQuote.author;