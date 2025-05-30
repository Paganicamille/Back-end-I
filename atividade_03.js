//01. Crie a variável apartamento e atribua a ela um objeto literal com as seguintes propriedades:

let apartamento = {
    quartos: 2,
    tipo: 'Apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7
}
console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereco}.`)

//02. Imagine que você está desenvolvendo um sistema para gerenciar produtos em um armazém. 
// Crie uma variável chamada produtoEmbalado que execute as seguintes operações:Atribua um objeto literal à variável com as seguintes propriedades:

let produtoEmbalado = {
    nome: 'Laptop HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preco: 3500.00
}
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso} kg, está à venda por ${produtoEmbalado.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`);

//03. Crie uma classe chamada Imovel com os seguintes atributos:

class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        return `${this.tipo} com ${this.quartos} quartos, localizado na ${this.endereco}.`;
    }
}

const casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
console.log(casa.exibirInformacoes());

const ap = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
console.log(ap.exibirInformacoes());

//04. Crie uma classe chamada Veiculo com os seguintes atributos:
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `Veículo: \n\tMarca: ${this.marca}\n\tModelo: ${this.modelo}\n\tAno: ${this.ano}`;
    }
}
const carro = new Veiculo("Toyota", "Corolla", 2022);
console.log(carro.exibirDetalhes());
const moto = new Veiculo("Honda", "CBR 600RR", 2021);
console.log(moto.exibirDetalhes());