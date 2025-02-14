// Smooth Scroll to Form Section
document.querySelector('.hero-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#FormSection').scrollIntoView({ behavior: 'smooth' });
});

// Product Slider Logic
const slider = document.querySelector('.product-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;
const slideWidth = document.querySelector('.product-card').offsetWidth + 20; // Card width + margin

nextBtn.addEventListener('click', () => {
    slider.scrollTo({
        left: (scrollAmount += slideWidth),
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    slider.scrollTo({
        left: (scrollAmount -= slideWidth),
        behavior: 'smooth'
    });
});


// FAQ Accordion Functionality
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle active class on clicked item
        item.classList.toggle('active');

        // Find the answer and toggle visibility
        let answer = item.querySelector('.faq-answer');
        let icon = item.querySelector('.toggle-icon');

        if (item.classList.contains('active')) {
            answer.style.display = "block";
            icon.textContent = "−"; // Change "+" to "−"
        } else {
            answer.style.display = "none";
            icon.textContent = "+"; // Change back to "+"
        }
    });
});

