// Utilizando .trim() - Questões da DevMedia

let cpf_cadastrado = "  111.222.333-44  "
let cpf_acesso = "111.222.333-44"

if(cpf_cadastrado.trim() == cpf_acesso.trim()){
    console.log("Os Cpf's são iguais");
} else{
    console.log("Cpf's diferentes");
}

// ---------------------

// Utilizando PadStart() - PadEnd()

let estudante = "Aluno";
let estudante_nome = "Carlos";

let estudante_grau = "Grau de Escolaridade";
let valor_grau = "Ensino Médio Completo";

console.log(estudante.padStart(20, " ")+ ": "+estudante_nome)

console.log(estudante_grau.padStart(25, " ")+ ": "+valor_grau)

// -----------------------------------

let email = "Email: ";
let email_valor = "contato@email.com"

console.log(email.padEnd(20, ' ')+email_valor)

// --------------------------------------

let label = "Nome:"
let label_valor = "Jorge Luiz"

console.log(label.padEnd(6, ' ')+label_valor)

// --------------------
// Utilizando Replace()

let texto = "A Linguagem PHP é muito poderosa"

let resultado = texto.replace("PHP", "Javascript")
console.log(resultado)
 // ---------------------------------
// Utilizando Substring()

 let frase = "Estou aprendendo Javascript na DevMedia"

 let frase_result = frase.substring(17,27);
 console.log(frase_result)

 //-------------

 let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if( tamanho > 100 ){

    resumo = conteudo.substring(0, 97);
    resumo += "...";

} else {

    resumo = conteudo;

}

console.log(resumo);

// ------------------------------------
// Utilizando indexOf()

let brasil = "O Brasil é um País Maravilhoso"

let brasil_resultado = brasil.indexOf("Brasil");

console.log(brasil_resultado);

// -------------------

let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

// ----------------------

// Utilizando split()

let paises = "Brasil, Irlanda, França, Suíça, Argentina"

let paises_array = paises.split(",")
console.log(paises_array)

// ---------------

let nome_completo = "Arthur Henrique Nascimento Silva Costa";

let primeiro_nome = nome_completo.split(" ");

let nome = primeiro_nome[0];

console.log("Olá " + nome + ", seja bem vindo(a)");

// -----------------------------
