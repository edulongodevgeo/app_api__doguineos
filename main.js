// sintaxe tradicional
// fetch("https://dog.ceo/api/breeds/list/all").then(function(response) {
//   return response.json()
// }).then(function(data) {
//   console.log(data)
// })

// sintaxe moderna (Fetch, Promises & Async Await)
async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
        // console.log(data)
        // O que queremos que ocorra? R: Chamaremos a function createBreedList()
    createBreedList(data.message)
}
start()

// Função que coloca select/option de alternativa e mapeia as opções da outra função
function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
  <select onchange="loadByBreed(this.value)">
        <option>Escolha seu Doguíneo :)</option>
       ${Object.keys(breedList).map(function (breed) {
         return `<option>${breed}</option>`
       }).join('')} 
      </select>
  `
}

async function loadByBreed(breed) {
  if (breed != "Escolha seu Doguíneo!") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    createSlideshow(data.message)
  }
}

function createSlideshow(images) {
  document.getElementById("slideshow").innerHTML = `
  <div class="slide" style="background-image: url('${images[0]}')"></div>
  `
}
