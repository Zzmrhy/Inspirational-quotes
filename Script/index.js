let quotes = [
  {
    img: "./Images/Stephen-Colbert.jpg",
    quote: "An apple a day will keep anyone away, if thrown hard enough",
    name: "-Stephen Colbert",
  },
  {
    img: "./Images/Jimmy-Carr.jpg",
    quote: "Say what you want about the deaf",
    name: "-Jimmy Carr",
  },
  {
    img: "./Images/Jay-Wickre.jpg",
    quote:
      "When your past comes to haunt you, make sure it comes after supper so it doesn't ruin your whole day",
    name: "-Jay Wickre",
  },
  {
    img: "./Images/Unknown.jpg",
    quote: "I'm not lazy, I just have an energy saving mode",
    name: "-Unknown",
  },
  {
    img: "./Images/Unknown(2).jpg",
    quote:
      "Friendship's more important than money, unless someone owes you $100",
    name: "-Unknown",
  },
];
const btn = document.getElementById("Button");
btn.addEventListener("click", changeQuote);

function changeQuote() {
  let rand = Math.floor(Math.random() * 10);
  if (rand > 4) {
    rand = 9 - rand;
  }

  document.querySelector("#swapImg").src = quotes[rand].img;
  document.querySelector("#swapP").innerHTML = quotes[rand].quote;
  document.querySelector("#swapPerson").innerHTML = quotes[rand].name;
}
