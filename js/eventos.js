// eventos del carrusel (pendiente)

const indIma = [
  "http://i2.cdn.turner.com/money/dam/assets/130423094442-tesla-model-s-620xa.jpg",
  "https://cnnespanol.cnn.com/wp-content/uploads/2021/11/oso-Bart.jpg?quality=100&strip=info&w=940&h=530&crop=1",
  "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/Purina%C2%AE%20Como%20disciplinar%20a%20tu%20gato.jpg?itok=Nxydhxbv",
  "https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg",
  "https://imagenes.elpais.com/resizer/RJqQIHBxgS3ZfDJrVSRkmhGAX9g=/980x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/2KZAO67QVMMA2FCPSL3XR3DABM.jpg",
  "https://www.treehugger.com/thmb/MEcPnD73YGv980Zz3FAW_ymketA=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1043597638-49acd69677d7442588c1d8930d298a59.jpg",
  "https://files.worldwildlife.org/wwfcmsprod/images/African_Elephant_Walking/story_carousel/3arzfzjsw0_Medium_WW1113482.jpg"
]

for (let i=0; i<) {
    const openModal = document.querySelectorAll(".mostrarModal");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".modal__close");

    let divImage = document.querySelector(".swiper-wrapper");
    const image = document.createElement("img");

    openModal[property].addEventListener("click", (e) => {
        image.src = `${indIma[property]}`;
            
        image.classList.add("swiper-slide");
        divImage.append(image);
        e.preventDefault();
        modal.classList.add("modal--show");
    });

    closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("modal--show");
    });
}