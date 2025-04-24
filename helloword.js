//Primeiro Olá Mundo!
console.log("Hello, World!");

function Carro(marca, modelo){
    this.marca = marca,
    this.modelo = modelo
}
 let meuCarro = new Carro("Honda", "Civic");
 console.log(meuCarro.marca);
 console.log(meuCarro.modelo);