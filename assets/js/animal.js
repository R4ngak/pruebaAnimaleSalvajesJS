export class Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }
    get nombre() {
        return this._nombre
    }
    get edad() {
        return this._edad
    }
    get img() {
        return this._img
    }
    get comentarios() {
        return this._comentarios
    }
    get sonido() {
        return this._sonido
    }

    set nombre(value){
        this._nombre = value
    }
    set edad(value){
        this._edad = value
    }
    set img(value){
        this._img = value
    }
    set comentarios(value){
        this._comentarios = value
    }
    set sonido(value){
        this._sonido = value
    }
}
