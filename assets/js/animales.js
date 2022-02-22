import { Animal } from "./animal.js";

class Leon extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    rugir(){
        console.log("roaaar")
        // player.src = `./assets/sounds/${this._sonido}`
        src=`assets/sounds/${this._sonido}`
        // player.load();
        // player.play();
    }
}
class Lobo extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    Aullar(){
        console.log("auuuu")
        // player.src = `./assets/sounds/${this._sonido}`
        // player.load();
        // player.play();
    }
}
class Oso extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    gruñir(){
        console.log("grr")
        // player.src = `./assets/sounds/${this._sonido}`
        // player.load();
        // player.play();
    }
}
class Serpiente extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    sisear(){
        console.log("sssss")
        // player.src = `./assets/sounds/${this._sonido}`
        // player.load();
        // player.play();
    }
}
class Aguila extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    chillar(){
        console.log("chiii")
        // player.src = `./assets/sounds/${this._sonido}`
        // player.load();
        // player.play();
    }
}
class Coipo extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }
    chillar(){
        console.log("chiii")
        // player.src = `./assets/sounds/${this._sonido}`
        // player.load();
        // player.play();
    }
}

export{
    Leon,Lobo,Oso,Serpiente,Aguila,Coipo
}
const leon1 = new Leon ("Leoncio", "3 años","fotito","melena larga","ruge");
// leon1.rugir();