var aluno = {
    id: 10,
    nome: "Camille Pagani",
    altura: 1.71,
    peso: 55
};

var nome_aluno = aluno.nome;
var peso_aluno = aluno.peso;
var altura_aluno = aluno.altura;

var imc_aluno = (peso_aluno / (altura_aluno * altura_aluno)).toFixed(2);

console.log("O IMC do aluno é de: " + imc_aluno);

if ( imc_aluno < 18.5 ) {
    console.log("O aluno " + nome_aluno + " está abaixo do peso");
} else if( imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + nome_aluno + " está com o peso normal");
} else {
    console.log("O aluno " + nome_aluno + " está acima do peso");
}