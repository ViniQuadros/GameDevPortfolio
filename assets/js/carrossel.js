let current = 0;

const track = document.querySelector('.carrosselTrack');
const imgs = track.querySelectorAll('img');
const dotsContainer = document.getElementById('dots');

imgs.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
});

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
    });
}

function goToSlide(index) {
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
}

function moveSlide(direction) {
    current = (current + direction + imgs.length) % imgs.length; // loops around
    goToSlide(current);
}