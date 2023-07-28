const modifica = () => {
  if (window.scrollY > 400) {
    document.getElementById("navBar").classList.add("navCambiacolore");
    document.getElementById("navBar").classList.remove("colore");
    document.getElementById("Bottone").classList.add("buttonchange");
    document.getElementById("Bottone").classList.remove("buttonBase");
  } else {
    document.getElementById("navBar").classList.add("colore");
    document.getElementById("navBar").classList.remove("navCambiacolore");
    document.getElementById("Bottone").classList.add("buttonBase");
    document.getElementById("Bottone").classList.remove("buttonChange");
  }
  console.log(window.scrollY);
};

window.addEventListener("scroll", modifica);

const svg = document.getElementById("svg");
console.log(svg);
