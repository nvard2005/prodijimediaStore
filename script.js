const menu = document.querySelector(".navbar-menu");
const hamburger = document.querySelector(".navbar-menu-toggle");
const closeBtn = document.querySelector(".close-menu-btn");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  hamburger.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show-menu");
  hamburger.classList.remove("active");
});


let selectedApp = null;

  document.getElementById('openTelegram').addEventListener('click', function () {
    selectedApp = 'telegram';
    document.getElementById('chatPopup').style.display = 'block';
  });

  document.getElementById('openWhatsapp').addEventListener('click', function () {
    selectedApp = 'whatsapp';
    document.getElementById('chatPopup').style.display = 'block';
  });

  document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('chatPopup').style.display = 'none';
    selectedApp = null;
  });

  document.getElementById('startChat').addEventListener('click', function () {
    if (selectedApp === 'telegram') {
      window.open('https://t.me/+37441093424', '_blank');
    } else if (selectedApp === 'whatsapp') {
      window.open('https://wa.me/+37441093424', '_blank'); // Note: no "+" in URL
    }
    document.getElementById('chatPopup').style.display = 'none';
    selectedApp = null;
  });

  const partnerCards = document.querySelectorAll('.partner-card');

  function animatePartners() {
    const triggerBottom = window.innerHeight * 0.85;

    partnerCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
}

window.addEventListener('scroll', animatePartners);
window.addEventListener('load', animatePartners);

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slider-dots');

  // Create dots dynamically
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.slider-dots span');

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function goToSlide(index) {
    currentSlide = index;
    showSlide(index);
  }

  setInterval(nextSlide, 5000); // 5 seconds per slide
  const projects = [
    {
        title: "Sony Commercial Shoot",
        description: "High-end product commercial filmed with Sony Cinema Line.",
        tag: "Filmmaking",
        images: [
            "images/projects/sony1.jpg",
            "images/projects/sony2.jpg",
            "images/projects/sony3.jpg"
        ]
    },
    {
        title: "Coca-Cola Winter Campaign",
        description: "Full media package: shooting, editing, color grading.",
        tag: "Advertising",
        images: [
            "images/projects/coke1.jpg",
            "images/projects/coke2.jpg"
        ]
    },
    {
        title: "Fashion Studio Promo",
        description: "Creative short film for an international fashion house.",
        tag: "Creative",
        images: [
            "images/projects/fashion1.jpg",
            "images/projects/fashion2.jpg",
            "images/projects/fashion3.jpg"
        ]
    }
];
const container = document.getElementById('projectsGrid');

projects.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const slider = document.createElement('div');
    slider.className = 'project-slider';

    p.images.forEach((img, i) => {
        const image = document.createElement('img');
        image.src = img;
        if (i === 0) image.classList.add('active');
        slider.appendChild(image);
    });

    // simple image loop animation
    setInterval(() => {
        const active = slider.querySelector('.active');
        let next = active.nextElementSibling || slider.firstElementChild;
        active.classList.remove('active');
        next.classList.add('active');
    }, 3000);

    const info = document.createElement('div');
    info.className = 'project-info';

    info.innerHTML = `
        <h2>${p.title}</h2>
        <p>${p.description}</p>
        <span class="tag">${p.tag}</span>
    `;

    card.appendChild(slider);
    card.appendChild(info);
    container.appendChild(card);
});
