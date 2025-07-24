const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
const boxes = document.querySelectorAll('.contain');

window.addEventListener('scroll', () => {
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (boxTop < viewportHeight) {
      box.classList.add('show');
    }
  });
});
const html = document.querySelectorAll('.htmls');

window.addEventListener('scroll', () => {
  html.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (boxTop < viewportHeight) {
      box.classList.add('show');
    }
  });
});



const p= document.querySelectorAll('.p');

window.addEventListener('scroll', () => {
   p.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (boxTop < viewportHeight) {
      box.classList.add('show');
    }
  });
});
const cont= document.querySelectorAll('.container');

window.addEventListener('scroll', () => {
   cont.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (boxTop < viewportHeight) {
      box.classList.add('show');
    }
  });
});
const content= document.querySelectorAll('.content');

window.addEventListener('scroll', () => {
   content.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (boxTop < viewportHeight) {
      box.classList.add('show');
    }
  });
});
const plusmonthcontainer= document.querySelectorAll('.plusmonthcontainer');

window.addEventListener('scroll', () => {
  plusmonthcontainer.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (boxTop < viewportHeight) {
      box.classList.add('show');
    }
  });
});
