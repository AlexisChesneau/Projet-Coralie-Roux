const slideout = new Slideout({
  panel: document.getElementById("panel"),
  menu: document.getElementById("menu"),
  padding: 250,
  tolerance: 50,
  side: "right",
});

document.getElementById("menu-button").addEventListener("click", () => {
  slideout.toggle();
});

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    slideout.close();
  });
});