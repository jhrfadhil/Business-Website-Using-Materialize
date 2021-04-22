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
