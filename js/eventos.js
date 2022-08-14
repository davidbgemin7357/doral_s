const openModal = document.querySelector(".mostrarFotoProy");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");

const openModal2 = document.querySelector(".mostrarFotoProy2");
const modal2 = document.querySelector(".modal2");
const closeModal2 = document.querySelector(".modal__close2");

openModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
});

openModal2.addEventListener("click", (e) => {
    e.preventDefault();
    modal2.classList.add("modal--show");
});

closeModal2.addEventListener("click", (e) => {
    e.preventDefault();
    modal2.classList.remove("modal--show");
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
