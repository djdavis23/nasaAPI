import NasaService from "./nasa-service.js";

const nasaService = new NasaService()
const imageDiv = document.getElementById("image-frame")
const input = document.getElementById("input")

function drawImage(image) {
  console.log("drawing image")
  imageDiv.style.backgroundImage = `url('${image.url}')`
  imageDiv.style.backgroundSize = "cover";
  imageDiv.style.minHeight = "100vh"

  let imageTemplate = `
    <h2>${image.date}</h2>
    <h5>${image.title}</h5>
    <p>${image.explanation}</p>
    <p>&copy${image.copyright}</p>
  `
  imageDiv.innerHTML = imageTemplate
}

function drawError(error) {
  document.getElementById("error").innerText = error.message
}




export default class NasaController {

  constructor() {
    input.addEventListener('submit', this.getImage)
  }


  getImage(e) {
    e.preventDefault();
    let date = e.target[0].value;
    console.log(date)
    nasaService.getImage(drawImage, drawError, date)
  }




  test() {
    console.log("controller here")
    nasaService.test();
  }
}