const sliderImages = [
    "images/pic00.jpg",
    "images/pic01.jpg",
    "images/pic02.jpg",
];

const sliderHeadings = [
    "Короче",
    "Мне надо",
    "Картинки",
];

const sliderTexts = [
    "Гена",
    "Чтобы",
    "Были одинакового размера для слайдера, иначе вон как пляшут",
];

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const image = document.querySelector(".slider-container img");
const heading = document.querySelector(".slider-container h3");
const text = document.querySelector(".slider-container p");

let currentIndex = 0;


function updateSlider() {
    image.style.opacity = 0;


    setTimeout(function () {
        image.src = sliderImages[currentIndex];
        heading.textContent = sliderHeadings[currentIndex];
        text.textContent = sliderTexts[currentIndex];


        image.style.opacity = 1;
    }, 500);
}


nextButton.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = sliderImages.length - 1;
    }
    updateSlider();
});


prevButton.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= sliderImages.length) {
        currentIndex = 0;
    }
    updateSlider();
});


const slideInterval = 10000;


function autoAdvanceSlider() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = sliderImages.length - 1;
    }
    updateSlider();
}


let slideTimer = setInterval(autoAdvanceSlider, slideInterval);


function stopSlideTimer() {
    clearInterval(slideTimer);
}


nextButton.addEventListener("click", function () {
    stopSlideTimer();
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = sliderImages.length - 1;
    }
    updateSlider();
    slideTimer = setInterval(autoAdvanceSlider, slideInterval);
});


prevButton.addEventListener("click", function () {
    stopSlideTimer();
    currentIndex++;
    if (currentIndex >= sliderImages.length) {
        currentIndex = 0;
    }
    updateSlider();
    slideTimer = setInterval(autoAdvanceSlider, slideInterval);
});

updateSlider();