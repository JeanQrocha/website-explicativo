
function mostrarAlerta() {
  document.getElementById("alertResult").innerText = "Exibindo alerta...";
  alert("Olá, mundo!");
  document.getElementById("alertResult").innerText = "Alerta exibido com sucesso!";
}


function mostrarConsole() {
  console.log("Mensagem no console!");
  document.getElementById("consoleResult").innerText = "Mensagem registrada no console.";
}


function mostrarVariaveis() {
  let variavelLet = "let é uma variavel que pode ser reatribuido";
  const variavelConst = "const é uma variavel que nao pode ser reatribuido";
  document.getElementById("variaveisResult").innerText = `Let: ${variavelLet},  Const: ${variavelConst}`;
}


function mostrarTipos() {
  let texto = "Olá";
  let numero = 10;
  let booleano = true;
  document.getElementById("tiposResult").innerText =
    `Texto: "${texto}" (${typeof texto}), Número: ${numero} (${typeof numero}), Booleano: ${booleano} (${typeof booleano})`;
}


function verificarIdade() {
  let idade = 18;
  let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
  document.getElementById("condicionalResult").innerText = resultado;
}


function mostrarLoop() {
  let resultado = "";
  for (let i = 1; i <= 5; i++) {
    resultado += i + " ";
  }
  document.getElementById("loopResult").innerText = resultado.trim();
}

function executarFuncao() {
  function saudacao(nome) {
    return "Olá, " + nome + "!";
  }
  let texto = saudacao("Jean");
  document.getElementById("funcaoResult").innerText = texto;
}


function alterarTexto() {
  document.getElementById("exemplo").innerText = "Texto alterado com JavaScript!";
  document.getElementById("domResult").innerText = "Elemento HTML modificado com sucesso!";
}


document.getElementById("eventoBtn").addEventListener("click", () => {
  document.getElementById("eventoResult").innerText = "Você clicou no botão!";
});
