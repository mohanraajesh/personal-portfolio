// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Simplistic contact form handling (just logs to console)
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    let json = {};
    data.forEach((val, key) => json[key] = val);
    console.log("Contact form submitted:", json);
    alert("Thanks for reaching out!");
    form.reset();
  });
}

