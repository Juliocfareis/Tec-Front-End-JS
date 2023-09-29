// Questão 1

let populacaoA = 80000;
let taxaCrescimentoA = 0.03;

let populacaoB = 200000;
let taxaCrescimentoB = 0.015;

let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
}

console.log(`Levará ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);

// Questão 2

let numerosPares = 0;
let numerosImpares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i}º número:`));

    if (isNaN(numero)) {
        alert("Por favor, digite um número inteiro válido.");
        i--; 
    } else {
        if (numero % 2 === 0) {
            numerosPares++;
        } else {
            numerosImpares++;
        }
    }
}

console.log(`Quantidade de números pares: ${numerosPares}`);
console.log(`Quantidade de números ímpares: ${numerosImpares}`);

// Questão 3

let n = parseInt(prompt("Quantos números você deseja inserir?"));
let numeros = [];

if (isNaN(n) || n <= 0) {
    alert("Por favor, insira um número válido maior que zero.");
} else {
    for (let i = 0; i < n; i++) {
        let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        
        if (isNaN(numero)) {
            alert("Por favor, insira um número válido.");
            i--; 
        } else {
            numeros.push(numero);
        }
    }

    if (numeros.length > 0) {
        let menorValor = Math.min(...numeros);
        let maiorValor = Math.max(...numeros);
        let soma = numeros.reduce((a, b) => a + b, 0);

        console.log(`Menor valor: ${menorValor}`);
        console.log(`Maior valor: ${maiorValor}`);
        console.log(`Soma dos valores: ${soma}`);
    } else {
        console.log("Nenhum número válido foi inserido.");
    }
}

// Questão 4

let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

if (isNaN(salarioInicial) || salarioInicial < 0) {
    alert("Por favor, insira um valor de salário válido.");
} else {
    const anoAtual = new Date().getFullYear();
    const anoContratacao = 1995;
    const taxaAumentoInicial = 0.015; 
    let salarioAtual = salarioInicial;

    for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
        const taxaAumento = taxaAumentoInicial * 2; 
        salarioAtual += salarioAtual * taxaAumento;
    }

    console.log(`O salário atual do funcionário em ${anoAtual} é R$ ${salarioAtual.toFixed(2)}.`);
}

// Questão 5

function calcularAreaEPerimetroDoCirculo(raio) {
    if (raio <= 0) {
        return "O raio deve ser maior que zero.";
    }

    const pi = 3.14159;
    const area = pi * Math.pow(raio, 2); 
    const perimetro = 2 * pi * raio; 

    return {
        area: area.toFixed(2), 
        perimetro: perimetro.toFixed(2) 
    };
}

const raioDoCirculo = 5;
const resultado = calcularAreaEPerimetroDoCirculo(raioDoCirculo);

console.log(`Área do círculo: ${resultado.area}`);
console.log(`Perímetro do círculo: ${resultado.perimetro}`);

// Questão 6

function calcularMontanteInvestimento(capitalInicial, taxaJuros, tempoMeses) {
    if (capitalInicial <= 0 || taxaJuros < 0 || tempoMeses < 0) {
        return "Valores inválidos. Certifique-se de que o capital inicial seja maior que zero, a taxa de juros seja não negativa e o tempo em meses seja não negativo.";
    }

    taxaJuros = taxaJuros / 100;

    const montante = capitalInicial * Math.pow(1 + taxaJuros, tempoMeses);

    const montanteArredondado = montante.toFixed(2);

    return `O montante do investimento após ${tempoMeses} meses será de R$ ${montanteArredondado}`;
}

const capitalInicial = parseFloat(prompt("Digite o capital inicial (em reais):"));
const taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (em percentual):"));
const tempoMeses = parseInt(prompt("Digite o tempo do investimento (em meses):"));

const resultado = calcularMontanteInvestimento(capitalInicial, taxaJuros, tempoMeses);

console.log(resultado);

// Questão 7

function imprimirAlunosAprovados(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];
        const nome = aluno.nome;
        const notas = aluno.notas;
        const curso = aluno.curso;
        
        const media = notas.reduce((a, b) => a + b, 0) / notas.length;

        if (media >= 7) {
            console.log(`Nome: ${nome}`);
            console.log(`Média Aritmética: ${media.toFixed(2)}`);
            console.log(`Curso: ${curso}`);
            console.log("------------------");
        }
    }
}

var alunos = [
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
];

imprimirAlunosAprovados(alunos);