function mostrarFoto(ruta) {
  Swal.fire({
      // title: '',
      // showCloseButton: true,
      showConfirmButton:false,
      // text: '',
      padding: '1em',
      imageUrl: ruta,
      imageWidth: 700,
      imageHeight: 600,
      imageAlt: '',
    })
}