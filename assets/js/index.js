import { Leon, Lobo, Oso, Serpiente, Aguila, Coipo } from "./animales.js";

let animalesObjeto = {};
let animalesCards = [];

(async() => {
    try{
        const res = await fetch("animales.json");
        const { animales } = await res.json();

        animales.forEach((item)=> {
            animalesObjeto[item.name] = item;
        }) 

    } catch (error) {
        console.log(error);
    }
})();


const Animales = document.getElementById("Animales")
const animal = document.getElementById("animal")
const edad = document.getElementById("edad")
const comentarios = document.getElementById("comentarios")
const preview = document.getElementById("preview")
const formulario = document.getElementById("formulario")

animal.addEventListener("change", (e) => {
    console.log(e.target.value);
    preview.innerHTML = `
    <img src="assets/imgs/${animalesObjeto[e.target.value].imagen}" alt="animales" class="img-fluid rounded mx-auto d-block">
    `
});

const pintaCards = ()=>{
    Animales.innerHTML ="";
    animalesCards.forEach(item =>{
    Animales.innerHTML +=`
    <article>
          <div class="card" style="width: 18rem;">
            <img src="assets/imgs/${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.nombre}</h5>
              <p class="card-text">${item.edad}</p>
              <p class="card-text">${item.comentarios}</p>
              <a id="sonidoAnimal" href="#" class=" btn btn-primary">
                Escuchar 📣
                <audio style="width: 200px;" height="32" controls>
                <source src="assets/sounds/Chillido.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
              </audio></a>
            </div>
          </div>
        </article>
        `
        console.log(item)
})

}
formulario.addEventListener("submit", event => {
    event.preventDefault();
    console.log(animal.value);
  
    if(animal.value === "Leon"){
        const Leon01 = new Leon (animal.value, edad.value, animalesObjeto[animal.value].imagen, comentarios.value,"ruge");
        animalesCards.push(Leon01)
    }
    if(animal.value === "Lobo"){
        const Lobo01 = new Lobo (animal.value, edad.value, animalesObjeto[animal.value].imagen, comentarios.value,"ruge");
        animalesCards.push(Lobo01)
    }
    if(animal.value === "Oso"){
        const Oso01 = new Oso (animal.value, edad.value, animalesObjeto[animal.value].imagen, comentarios.value,"ruge");
        animalesCards.push(Oso01)
    }
    if(animal.value === "Serpiente"){
        const Serpiente01 = new Serpiente (animal.value, edad.value, animalesObjeto[animal.value].imagen, comentarios.value,"ruge");
        animalesCards.push(Serpiente01)
    }
    if(animal.value === "Aguila"){
        const Aguila01 = new Aguila (animal.value, edad.value, animalesObjeto[animal.value].imagen, comentarios.value,"ruge");
        animalesCards.push(Aguila01)
    }
    if(animal.value === "Coipo"){
        const Coipo01 = new Coipo (animal.value, edad.value, animalesObjeto[animal.value].imagen, comentarios.value,"ruge");
        animalesCards.push(Coipo01)
    }
    console.log(animalesCards);
    pintaCards();
    
});

console.log(animalesObjeto);

