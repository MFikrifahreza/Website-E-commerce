// Menangani navigasi
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

// Cek status login saat halaman dimuat
window.onload = function() {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn && window.location.pathname !== '/login.html') {
    window.location.href = "login.html"; // Arahkan ke login jika belum login
  }
};

// Menangani pengiriman form login
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Mencegah pengiriman form secara default
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Validasi login sederhana
      if (username === "user" && password === "password") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html"; // Arahkan ke halaman utama setelah login
      } else {
        document.getElementById("error-message").textContent =
          "Username atau password salah!";
      }
    });
  }
});

function logout() {
    console.log("Logging out..."); // Debugging
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html"; // Arahkan ke halaman login setelah logout
}


