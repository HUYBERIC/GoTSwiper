// I N I T __ S W I P E R

const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// V A R I A B L E S

const images = document.querySelectorAll(".img");

// F O N C T I O N S

function updateImageClasses(activeIndex) {
    images.forEach((img, index) => {

        img.classList.remove('active');
        img.classList.add('overlay');

        let existingFilterDiv = img.querySelector('.filter');
        if (!existingFilterDiv) {
            existingFilterDiv = document.createElement("div");
            existingFilterDiv.classList.add("filter");
            img.appendChild(existingFilterDiv);
        }

        if (index === activeIndex) {
            img.classList.remove('overlay');
            img.classList.add('active');
            if (existingFilterDiv) {
                existingFilterDiv.remove();
            }
        }
    });
}

updateImageClasses(0);

images.forEach((image, index) => {
    image.addEventListener('click', () => {

        swiper.slideTo(index);

        updateImageClasses(index);
    });
});


swiper.on('slideChange', () => {
    const currentIndex = swiper.realIndex;
    updateImageClasses(currentIndex);
});
