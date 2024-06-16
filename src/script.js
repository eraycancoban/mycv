let currentIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    // Eğer index sınırları aşıyorsa başa veya sona dön
    if (index >= totalSlides - 4) currentIndex = totalSlides - 5; // son grup
    if (index < 0) currentIndex = 0; // ilk grup

    const newTransformValue = -currentIndex * (100 / 5); // 5 resim gösterilecek
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}

function prevSlide() {
    currentIndex--;
    showSlides(currentIndex);
}

function nextSlide() {
    currentIndex++;
    showSlides(currentIndex);
}

// Başlangıçta ilk beş resmi göster
showSlides(currentIndex);
