// ===== MAIN IMAGE & THUMBNAILS =====
const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnail img');
const mainArrowLeft = document.querySelector('.main-arrow-left');
const mainArrowRight = document.querySelector('.main-arrow-right');

let currentIndex = 0;

// Update main image function
function updateMainImage(index) {
    currentIndex = index;
    mainImage.src = thumbnails[index].src;
    thumbnails.forEach((thumb, i) => {
        thumb.parentElement.classList.toggle('active-thumb', i === index);
    });
}

// Click on thumbnail
thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
        updateMainImage(i);
    });
});

// Navigate with main arrows
mainArrowLeft.addEventListener('click', () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = thumbnails.length - 1;
    updateMainImage(newIndex);
});

mainArrowRight.addEventListener('click', () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= thumbnails.length) newIndex = 0;
    updateMainImage(newIndex);
});

// ===== THUMBNAILS SCROLL =====
const thumbContainer = document.querySelector('.thumbnails-container');
const thumbArrowLeft = document.querySelector('.thumb-arrow-left');
const thumbArrowRight = document.querySelector('.thumb-arrow-right');

const thumbScrollAmount = 120; // px per click

thumbArrowLeft.addEventListener('click', () => {
    thumbContainer.scrollBy({ left: -thumbScrollAmount, behavior: 'smooth' });
});

thumbArrowRight.addEventListener('click', () => {
    thumbContainer.scrollBy({ left: thumbScrollAmount, behavior: 'smooth' });
});

// ===== VARIATIONS (COLOR & STORAGE) =====
const variationGroups = document.querySelectorAll('.variation-group');

variationGroups.forEach(group => {
    const optionsContainer = group.querySelector('.variation-options');
    const options = group.querySelectorAll('.variation-option');
    const leftArrow = group.querySelector('.variation-arrow-left');
    const rightArrow = group.querySelector('.variation-arrow-right');
    const scrollAmount = 100; // px per click

    // Handle option click (active highlight)
    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Scroll variation options
    leftArrow.addEventListener('click', () => {
        optionsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        optionsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});

// ===== INITIAL SETUP =====
updateMainImage(0); // Show first thumbnail initially
