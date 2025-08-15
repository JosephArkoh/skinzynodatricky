// Modal for fish species
function openModal(src, alt) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    modal.style.display = 'block';
    modalImg.src = src;
    captionText.innerHTML = alt;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Gallery slider
const images = [
    'https://cdn.pixabay.com/photo/2015/02/13/13/55/africa-634231_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/16/14/07/ghana-673065_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/23/14/17/ghana-684554_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/07/28/16/50/sardines-2548877_1280.jpg'
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');

function showSlide(index) {
    sliderImage.src = images[index];
    sliderImage.alt = `Gallery image ${index + 1}`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}