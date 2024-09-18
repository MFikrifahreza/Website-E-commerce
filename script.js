document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html";
    } else {
      document.getElementById("error-message").textContent =
        "Username atau password salah!";
    }
  });

window.onload = function() {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn) {
    window.location.href = "login.html"; // Arahkan ke login jika belum login
  }
};


const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html"; // Ganti dengan URL halaman login Anda
}
