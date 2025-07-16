document.getElementById("scroll-down-btn").addEventListener("click", smoothScroll);

function smoothScroll() {
  const element = document.querySelector("main");
  element.scrollIntoView({ behavior: 'smooth' });
}

function showMenu() {
  document.querySelector('.nav-list-container').classList.add("open");
}
  
function closeMenu() {
  document.querySelector('.nav-list-container').classList.remove("open");
}
