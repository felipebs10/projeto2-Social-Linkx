function toggleMode() {
  const html = document.documentElement
  //Função resumida acima nessa função abaixo para trocar o fundo.
  html.classList.toggle("light")
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
  //Pegar a imagem
  const img = document.querySelector("#profile img")
  //Substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //Se tiver sem light, mode manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
