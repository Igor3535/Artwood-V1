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
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.gallery-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    lightbox.style.display = 'flex';
    lightboxImg.src = this.href;
  });
});

lightbox.addEventListener('click', function() {
  lightbox.style.display = 'none';
});
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');
const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

let currentImageIndex = 0;

function openLightbox(index) {
  currentImageIndex = index;
  lightboxImg.src = galleryImages[currentImageIndex].src;
  lightbox.classList.add('active');
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentImageIndex].src;
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentImageIndex].src;
}

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('active')) return;

  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowRight') showNextImage();
  if (event.key === 'ArrowLeft') showPrevImage();
});