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
console.log(svg);
const hidden = [];
let x;
let time = setInterval(() => {
  clearInterval(time);
  x = Math.floor(Math.random() * 817);
  svg[x].style.opacity = 0;
  hidden.push(x);
  if (hidden.length === 20) {
    time = setInterval(() => {
      clearInterval(time);

      svg[x].style.opacity = 1;
      x++;
      if (hidden.length > x) return;
    }, 100);
  }
  console.log(svg[x]);
}, 100);
x = 0;
