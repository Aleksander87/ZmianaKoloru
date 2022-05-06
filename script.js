const colors = ["yellow", "blue", "red"]; // tablica z kolorami
const btn = document.getElementById('btn1'); // wyciągamy guzik z pliku html
const color = document.querySelector(".color"); // wyciągamy miejsce na wpisanie (span) tekstu z pliku html

btn.addEventListener('click', function(){         // definiujemy funkcje na klikniecie w guzik
  
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];  
})

function getRandomNumber() {
  return Math.floor(Math.random()*colors.length);
}
