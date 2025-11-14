// Função universal de gerar resultados (0=Player azul, 1=Banker vermelho, 2=Empate)
function gerar() {
    let r = Math.random();

    if (r < 0.45) return "PLAYER (Azul)";
    if (r < 0.90) return "BANKER (Vermelho)";
    return "TIE (Amarelo)";
}

// Geradores separados (cassino / meu gerador)
let ultimoCassino = null;
let meuUltimo = null;

function gerarCassino() {
    ultimoCassino = gerar();
    document.getElementById("cassinoResult").innerText = ultimoCassino;
}

function gerarMeu() {
    meuUltimo = gerar();
    document.getElementById("meuResult").innerText = meuUltimo;
}

// Comparação
function comparar() {
    if (!ultimoCassino || !meuUltimo) {
        document.getElementById("comparacao").innerText = "Gera ambos os lados primeiro";
        return;
    }

    if (ultimoCassino === meuUltimo) {
        document.getElementById("comparacao").innerText = "COINCIDÊNCIA! 🔥";
        document.getElementById("roboMsg").innerText =
            "👉 O robô recomenda apostar novamente em: " + meuUltimo;
    } else {
        document.getElementById("comparacao").innerText = "Sem coincidência";
        document.getElementById("roboMsg").innerText =
            "👉 Baixa probabilidade. Aposta conservadora: BANKER";
    }
}
