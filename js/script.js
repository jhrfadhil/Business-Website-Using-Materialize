// Side nav
const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

// Slider
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 600,
  transition: 600,
  interval: 3000,
});

// Parralax
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

// Materialboxed
const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);

// Scrollspy
const scroll = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scroll, {
  scrollOffset: 65,
});
