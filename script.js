const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = 
        {
  "enunciado": "Qual é o seu animal de estimação preferido?",
  "alternativas": [
    {
      "texto": "Cachorro",
      "afirmacao": [
        "Você gosta de lealdade e companheirismo.",
        "Continue dedicando tempo e carinho ao seu amigo canino."
      ]
    },
    {
      "texto": "Gato",
      "afirmacao": [
        "Você aprecia a independência e o charme dos felinos.",
        "Continue proporcionando um ambiente seguro e confortável."
      ]
    },
    {
      "texto": "Outro",
      "afirmacao": [
        "Você gosta de animais diferentes e únicos.",
        "Continue aprendendo sobre as necessidades específicas do seu pet."
      ]
    }
  ]
}

{
  "enunciado;Com que frequência você leva seu pet ao veterinário?"
  "alternativas"; [
    {
      "texto": "Raramente",
      "afirmacao": [
        "Visitas regulares ao veterinário são importantes para a saúde do animal.",
        "Tente estabelecer um cronograma anual de consultas."
      ]
    },
    {
      "texto": "Às vezes",
      "afirmacao": [
        "Você já se preocupa com a saúde do seu pet.",
        "Aumente a frequência para prevenir problemas."
      ]
    },
    {
      "texto": "Regularmente",
      "afirmacao": [
        "Parabéns! Você está cuidando bem da saúde do seu animal.",
        "Continue assim para garantir uma vida longa e saudável."
      ]
    }
  ]
}
 
{
  "enunciado"; "Qual é a sua atividade preferida com seu animal?",
  "alternativas"; [
    {
      "texto": "Passear",
      "afirmacao": [
        "Ótimo para o bem-estar físico e mental do pet.",
        "Continue proporcionando momentos ao ar livre."
      ]
    },
    {
      "texto": "Brincar em casa",
      "afirmacao": [
        "Ajuda a fortalecer o vínculo e manter o animal ativo.",
        "Varie os brinquedos para evitar o tédio."
      ]
    },
    {
      "texto": "Treinar truques",
      "afirmacao": [
        "Estimula a inteligência e a obediência do pet.",
        "Continue usando reforços positivos no aprendizado."
      ]
    }
  ]
}

{
  "enunciado"; "Qual tipo de animal mais desperta seu interesse?",
  "alternativas"; [
    {
      "texto": "Domésticos",
      "afirmacao": [
        "Você gosta de animais que convivem no dia a dia.",
        "Continue aprendendo sobre cuidados e alimentação adequada."
      ]
    },
    {
      "texto": "Selvagens",
      "afirmacao": [
        "Você tem curiosidade por espécies livres na natureza.",
        "Continue conhecendo sobre a preservação e proteção desses animais."
      ]
    },
    {
      "texto": "Marinhos",
      "afirmacao": [
        "Você se encanta com a vida no mar.",
        "Continue aprendendo sobre a importância dos oceanos para a fauna."
      ]
    }
  ]
}

{
  "enunciado"; "Como você reage ao encontrar um animal abandonado?",
  "alternativas"; [
    {
      "texto": "Ignoro",
      "afirmacao": [
        "Animais abandonados precisam de ajuda.",
        "Considere acionar ONGs ou abrigos para resgatá-los."
      ]
    },
    {
      "texto": "Ajudo como posso",
      "afirmacao": [
        "Você tem empatia e se preocupa com os animais.",
        "Continue ajudando sempre que possível."
      ]
    },
    {
      "texto": "Levo para casa",
      "afirmacao": [
        "Você tem grande compaixão e acolhe os animais.",
        "Certifique-se de que poderá oferecer todos os cuidados necessários."
      ]
    }
  ]
}


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();