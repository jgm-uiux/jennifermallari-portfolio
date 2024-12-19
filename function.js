document.getElementById("scroll-down-btn").addEventListener("click", smoothScroll);

function smoothScroll() {
  const element = document.getElementById("next-section");
  element.scrollIntoView({ behavior: 'smooth' });
}

function showMenu() {
  document.querySelector('.nav-list-container').classList.add("open");
}
  
function closeMenu() {
  document.querySelector('.nav-list-container').classList.remove("open");
}

document.getElementById("glucofit-page-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default navigation behavior

  // Prompt the user for a password
  const password = prompt("Enter the password to view the project:");

  // Replace 'yourpassword' with the actual password
  if (password === "yourpassword") {
      // Redirect to the protected page
      window.location.href = "../projects/glucofit.html";
  } else if (password !== null) { // Null means the user canceled the prompt
      alert("Incorrect password. Please try again.");
  }
});
  