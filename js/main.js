const nav = document.querySelector ("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

document.addEventListener("click", (event) => {
    const target = event.target;
    if (!nav.contains(target) && !abrir.contains(target)) {
        nav.classList.remove("visible");
    }
});

const boxImgList = document.querySelectorAll(".box-img");
boxImgList.forEach((boxImg) => {
  boxImg.addEventListener("click", (event) => {
    if (!nav.classList.contains("visible")) {
    }
});
});

const slider = document.querySelector('.slider ul');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let counter = 1;
const size = slider.children.length;

prev.addEventListener('click', () => {
  counter--;
  if (counter < 1) {
    counter = size;
  }
  updateSlider();
});

next.addEventListener('click', () => {
  counter++;
  if (counter > size) {
    counter = 1;
  }
  updateSlider();
});

function updateSlider() {
  slider.style.transition = 'margin-left 0.3s';
  slider.style.marginLeft = `-${counter * 100}%`;

  // Reiniciar el slider después de que termine la transición
  setTimeout(() => {
    if (counter === size) {
      slider.style.transition = 'none';
      slider.style.marginLeft = '0';
      counter = 1;
    }
  }, 300);
}