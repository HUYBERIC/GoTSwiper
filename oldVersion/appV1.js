const images = document.querySelectorAll(".img");
const bios = document.querySelectorAll(".bio-wrapper .bio");

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        images.forEach(img => img.classList.add("overlay"));
        image.classList.remove("overlay");

        bios.forEach(bio => bio.classList.add("hide"));
        bios[index+1].classList.remove("hide");
    });
});