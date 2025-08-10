const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o seu nível de prática de atividades físicas atualmente?",
        alternativas: [
            {
               texto: "Baixo",
                afirmacao: "Você está começando sua jornada no mundo das atividades físicas."
            },
            {
                texto: "Médio",
                afirmacao: "Você pratica exercícios com alguma frequência e já sente os benefícios."
            },
            {
                texto: "Alto",
                afirmacao: "Você mantém uma rotina intensa e disciplinada de treinos."
            }
        ]
    },
    {
        enunciado: "Qual tipo de atividade física você prefere?",
        alternativas: [ 
            {
                 texto: "Esportes coletivos",
                afirmacao: "Você gosta de trabalho em equipe e da energia de jogar com outras pessoas."
            },
            {
                texto: "Esportes individuais",
                afirmacao: "Você aprecia desafios pessoais e o foco em seu próprio desempenho."
            },
            {
                texto: "Atividades ao ar livre",
                afirmacao: "Você valoriza contato com a natureza enquanto se exercita."
            }
        ]
    },
    {
        enunciado: "Qual é o seu principal objetivo ao praticar exercícios?",
        alternativas: [
            {
                 texto: "Saúde e bem-estar",
                afirmacao: "Você vê o exercício como uma ferramenta para manter corpo e mente saudáveis."
            },
            {
                texto:"Desempenho e competição",
                afirmacao:  "Você busca superar limites e se destacar no esporte."
            },
            {
                texto: "Socialização",
                afirmacao: "Você usa o esporte como forma de criar laços e conhecer pessoas."
               }
        ]
    },
    {
        enunciado: "Com que frequência você se exercita?",
        alternativas: [
            {
                texto: "1 a 2 vezes por semana",
                afirmacao:  "Você já incorporou alguma atividade física na rotina, mas ainda pode evoluir."
            },
            {
                texto: "3 a 5 vezes por semana",
                afirmacao: "Você tem uma boa regularidade nos treinos e colhe bons resultados."
            },
            {
                texto: "Todos os dias",
                afirmacao: "Você mantém um compromisso diário com a atividade física."
            }
        ]
    },
{
         enunciado: "Você mantém um compromisso diário com a atividade física?",
         alternativas: [
            {
                texto:  "Manhã",
                afirmacao:  "Você gosta de começar o dia com energia e disposição."
            },
            {
                texto: "Tarde",
                afirmacao: "Tarde",
            },
            {
                texto:  "Noite",
                afirmacao: "Você gosta de encerrar o dia com um treino relaxante ou intenso."
            }
        ]
    }
        ];


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