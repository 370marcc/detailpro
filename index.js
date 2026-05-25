document.addEventListener("DOMContentLoaded", () => {

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll("#menu a");


toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("open");
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}
else{
navbar.classList.remove("scrolled");
}

});


menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        toggle.classList.remove("open");
        console.log(menuLinks.length);
    });
});

document.querySelectorAll('[data-slider]').forEach(slider => {
  const beforeWrap = slider.querySelector('.ba-before-wrap');
  const handle = slider.querySelector('.ba-handle');
  let dragging = false;

  function setPosition(x) {
  const rect = slider.getBoundingClientRect();
  let pct = (x - rect.left) / rect.width;
  pct = Math.min(Math.max(pct, 0.02), 0.98);
  beforeWrap.style.width = (pct * 100) + '%';
  handle.style.left = (pct * 100) + '%';
  // keep the image pinned to full slider width
  slider.style.setProperty('--slider-width', rect.width + 'px');
}

// set it once on load too
slider.style.setProperty('--slider-width', slider.offsetWidth + 'px');

  slider.addEventListener('mousedown', e => { dragging = true; setPosition(e.clientX); });
  window.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('mouseup', () => dragging = false);

  slider.addEventListener('touchstart', e => { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchmove', e => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchend', () => dragging = false);
});


});