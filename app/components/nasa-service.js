import Image from "../models/Image.js"

export default class NasaService {

  getImage(drawImage, drawError, date) {
    let url = `
    https://api.nasa.gov/planetary/apod?api_key=oWomeufaZEO03kfcTJoOqqglSA3fYjg3MpOFbswL&date=${date}
    `
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let image = new Image(data)
        console.log(image)
        drawImage(image)
      })
      .catch(drawError)
  }
  test() {
    console.log("service here")
  }

}