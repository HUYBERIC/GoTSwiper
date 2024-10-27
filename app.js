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

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        // Aller au slide correspondant
        swiper.slideTo(index);
        // Mettre à jour les classes des images
        images.forEach(img => {
            img.classList.remove('active');
            img.classList.add('overlay');

            const existingFilterDiv = img.querySelector('.filter');

            if (existingFilterDiv) {
                existingFilterDiv.remove();
            }

            const filterDiv = document.createElement("div");
            filterDiv.classList.add("filter");
            img.appendChild(filterDiv);
        });
        image.classList.add('active');
        image.classList.remove('overlay');
        if (image.classList.contains('active')) {
            const activeFilterDiv = image.querySelector('.filter');
            if (activeFilterDiv) {
                activeFilterDiv.remove();
            }
        }
    });
});

swiper.on('slideChange', () => {
    const currentIndex = swiper.realIndex;
    images.forEach(img => {
        img.classList.remove('active');
        img.classList.add('overlay');
    });
    images[currentIndex].classList.add('active');
    images[currentIndex].classList.remove('overlay');
});