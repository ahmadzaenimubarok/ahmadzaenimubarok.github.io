// countdown

var countDownDate = new Date("February 17, 2024 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// slider

let slideIndex = 0;

function slideCards() {
    const cards = document.querySelectorAll('.slide-item');
    if (slideIndex === cards.length) {
        slideIndex = 0;
    }
    cards.forEach((card, index) => {
        card.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
    slideIndex++;
}

setInterval(slideCards, 3000); // Mengatur interval untuk auto slide setiap 3 detik


