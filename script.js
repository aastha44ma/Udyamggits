document.addEventListener('DOMContentLoaded', () => {
    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const updateCounter = () => {
            const increment = target / 100;
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});

// JavaScript to control the carousel movement
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

const totalItems = document.querySelectorAll('.carousel-item').length;

function updateCarousel() {
    // Move the carousel by changing the transform value based on the index
    carousel.style.transform = `translateX(-${currentIndex * 340}px)`;  // 340px includes item width + margin
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;  // Loop to last item
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;  // Loop to first item
    }
    updateCarousel();
});
