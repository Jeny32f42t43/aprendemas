// Galería de trabajos
let currentSlide = 0;
const slidesToShow = 3; // Número de imágenes visibles a la vez
const totalSlides = 10; // Total de imágenes
const maxSlides = totalSlides - slidesToShow;

function moveGallery(direction) {
  const slider = document.getElementById('gallerySlider');
  const slideWidth = 320; // 300px de ancho + 20px de margen
  
  currentSlide += direction;
  
  // Controlar límites
  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide > maxSlides) {
    currentSlide = maxSlides;
  }
  
  // Aplicar transformación
  const translateX = -currentSlide * slideWidth;
  slider.style.transform = `translateX(${translateX}px)`;
}

// Auto-scroll de la galería (opcional)
function autoScroll() {
  currentSlide++;
  if (currentSlide > maxSlides) {
    currentSlide = 0;
  }
  
  const slider = document.getElementById('gallerySlider');
  const slideWidth = 320;
  const translateX = -currentSlide * slideWidth;
  slider.style.transform = `translateX(${translateX}px)`;
}

// Inicializar auto-scroll cada 5 segundos
setInterval(autoScroll, 5000);

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Responsive gallery adjustments
function adjustGalleryForMobile() {
  const slider = document.getElementById('gallerySlider');
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // En móvil, mostrar solo 1 imagen a la vez
    const slideWidth = 270; // 250px + 20px margen
    const translateX = -currentSlide * slideWidth;
    slider.style.transform = `translateX(${translateX}px)`;
  } else {
    // En desktop, mostrar 3 imágenes
    const slideWidth = 320;
    const translateX = -currentSlide * slideWidth;
    slider.style.transform = `translateX(${translateX}px)`;
  }
}

// Ajustar galería al redimensionar ventana
window.addEventListener('resize', adjustGalleryForMobile);

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  adjustGalleryForMobile();
});