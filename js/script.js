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

// adding as per the instructions
const res = await fetch(webhookURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userMsg }),
  mode: "cors",
});

const raw = await res.text();
console.log("HTTP", res.status, res.headers.get("content-type"), raw);

if (!res.ok) throw new Error(`HTTP ${res.status}: ${raw}`);

let data;
try { data = JSON.parse(raw); } catch { data = { reply: raw }; }

const reply = data.reply || "✅ Message sent. No response received.";
