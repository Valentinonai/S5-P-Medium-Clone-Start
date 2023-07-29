const modifica = () => {
  if (window.scrollY > 400) {
    document.getElementById("navBar").classList.add("coloraNav");
    document.getElementById("Bottone").classList.add("coloraButton");
  } else {
    document.getElementById("navBar").classList.remove("coloraNav");
    document.getElementById("Bottone").classList.remove("coloraButton");
  }
  console.log(window.scrollY);
};

window.addEventListener("scroll", modifica);

const svg = document.querySelectorAll("g[opacity='1']");
let timer2;
const hidden = [];
let x;
for (let i = 0; i < 150; i++) {
  x = Math.floor(Math.random() * 817);
  hidden.push(x);
}
const animazione = () => {
  let cont = 0;
  let timer = setInterval(() => {
    clearInterval(timer2);
    svg[hidden[cont]].style.opacity = 0;
    cont++;
    if (cont === 150) {
      clearInterval(timer);
      cont = 0;
      timer2 = setInterval(() => {
        svg[hidden[cont]].style.opacity = 1;
        cont++;
        if (cont === hidden.length) {
          clearInterval(timer);
          animazione();
        }
      }, 50);
    }
  }, 50);
};
animazione();
