const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("active"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const requestForm = document.getElementById("requestForm");

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(requestForm);
  const name = formData.get("name");
  const contact = formData.get("contact");
  const message = formData.get("message");

  const email = "artwood@example.com";
  const subject = encodeURIComponent("Заявка с сайта Artwood");
  const body = encodeURIComponent(
    `Имя: ${name}\nКонтакт: ${contact}\n\nОписание проекта:\n${message}`
  );

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
