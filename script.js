function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")
  //pegar a img

  const img = document.querySelector("#profile img")

  //susbstituir a img

  if (html.classList.contains("ligth")) {
    //com ligth mode
    img.setAttribute(
      "src",
      "./assets/Imagem do WhatsApp de 2025-03-04 à(s) 15.43.08_d5530add-fotor-20250304154911.png"
    )
  } else {
    //sem ligth mode

    img.setAttribute("src", "./assets/fotor-2025030293733.png")
  }
}
