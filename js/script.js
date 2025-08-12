let toggler = document.querySelector(".toggle")
let nav = document.querySelector(".toggle-menu")
let close = document.querySelector(".close");
toggler.onclick = function () {
  toggler.classList.remove("fa-bars");
  nav.classList.add("toggle-down");
};
close.onclick = function () {
  nav.classList.remove("toggle-down");
  toggler.classList.add("fa-bars");

};

// Show the loader
function showLoader() {
  document.querySelector('.loader-container').style.display = 'flex';
}

// Hide the loader
function hideLoader() {
  document.querySelector('.loader-container').style.display = 'none';
}

// Example usage
showLoader();
setTimeout(() => {
  hideLoader();
}, 1500);