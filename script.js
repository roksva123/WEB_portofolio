// AOS
AOS.init();

// Scroll ke bagian "Tentang Saya"
document.getElementById("scrollBtn").onclick = () => {
  document.querySelector("#tentang").scrollIntoView({ behavior: "smooth" });
};

// Navbar transparan → solid saat scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.background = "rgba(255,255,255,0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.6)";
    navbar.style.boxShadow = "none";
  }
});

// Menu toggle mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Formspree status
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      statusMsg.textContent = "✅ Pesan berhasil dikirim!";
      statusMsg.style.color = "green";
      form.reset();
    } else {
      statusMsg.textContent = "❌ Terjadi kesalahan, coba lagi!";
      statusMsg.style.color = "red";
    }
  } catch {
    statusMsg.textContent = "⚠️ Gagal mengirim pesan.";
    statusMsg.style.color = "red";
  }
});
