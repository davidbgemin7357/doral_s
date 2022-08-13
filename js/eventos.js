const openModal = document.querySelectorAll(".mostrarFotoProy");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const imagenes = document.querySelectorAll(".swiper-slide");

let i = Object.keys(openModal);

const pictures = [
    "../assets/img/FOTO11_Mantenimiento de instalaciones de FCR.jpeg",
    "../assets/img/FOTO11_Instalacion panel led en FCR.jpeg",
    "../assets/img/FOTO 9_levantamiento de información en tableros electricos para  diagramas unif.jpg",
    "../assets/img/FOTO 10_llenado de check list de diagnostico para lev de info tableros.jpeg",
    "../assets/img/subestacion-1.jpg",
    "../assets/img/FOTO 1_Mantenimiento de tableros electricos.jpg",
    "../assets/img/FOTO 2_mantenimiento de tableros electricos.jpg",
    "../assets/img/FOTO 5_picado para malla de SPAT.jpg",
    "../assets/img/FOTO 6_nuevo pozo a tierra.jpg",
    "../assets/img/FOTO11_Mantenimiento de instalaciones de FCR.jpeg",
    "../assets/img/FOTO11_Instalacion panel led en FCR.jpeg",
    "../assets/img/FOTO12_Mantenimiento Y Soporte RED.jpeg",
    "../assets/img/FOTO13_Mant y soporte RED.jpeg",
];

const mostrar = async(indice, p1, p2) => {
    const pics = await openModal[indice].addEventListener("click", (e) => {
        imagenes[0].src = `${p1}`;
        imagenes[1].src = `${p2}`;
        e.preventDefault();
        modal.classList.add("modal--show");
    });
    return pics
};

mostrar(0, pictures[0], pictures[1]);
mostrar(1, pictures[2], pictures[3]);
mostrar(2, pictures[4], pictures[4]);
mostrar(3, pictures[5], pictures[6]);
mostrar(4, pictures[7], pictures[8]);
mostrar(5, pictures[9], pictures[10]);
mostrar(6, pictures[11], pictures[12]);

closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
