let altura_maior = 0;
let altura_menor = 0;
let soma_altura_homem = 0;
let qtd_mulheres = 0;

for (let i = 0; i < 15; i++) {
    let altura = parseFloat(prompt(`Digite a altura em metros da pessoa ${i + 1}:`));
    let genero = prompt(`Digite o gênero da pessoa ${i + 1} (M/F):`).toUpperCase();

    if (i === 0) {
        altura_maior = altura;
        altura_menor = altura;
    } else {
        if (altura > altura_maior) {
            altura_maior = altura;
        }
        if (altura < altura_menor) {
            altura_menor = altura;
        }
    }

    if (genero === 'M') {
        soma_altura_homem += altura;
    } else if (genero === 'F') {
        qtd_mulheres++;
    }
}

let media_altura_homens = soma_altura_homem / (15 - qtd_mulheres);

console.log(`Maior altura informada: ${altura_maior.toFixed(2)} metros`);
console.log(`Menor altura informada: ${altura_menor.toFixed(2)} metros`);
console.log(`Média de altura dos homens: ${media_altura_homens.toFixed(2)} metros`);
console.log(`Quantidade de mulheres: ${qtd_mulheres}`);
    notas.push(nota);


// Calcula a média das notas
var media = calcularMedia(notas);

// Verifica o status do aluno
var status = verificarStatus(media);
console.log(status);

// Se o aluno estiver em recuperação, solicita a nota da recuperação
if (status === "Aluno em recuperação") {
    var notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação: "));
    
    // Calcula a média entre a média anterior e a nota da recuperação
    var mediaFinal = calcularMedia([media, notaRecuperacao]);
    
    // Verifica o status após a recuperação
    var statusRecuperacao = verificarStatus(mediaFinal);
    console.log(statusRecuperacao);
}