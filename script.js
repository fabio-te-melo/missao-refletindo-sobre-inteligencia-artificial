const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você pensa no seu uso de redes sociais, qual sentimento predomina?",
        alternativas: [
            {
                texto: "Curiosidade e interese por novidades",
                afirmacao: "Você encara as redes sociais como uma fonte de descobertas, onde cada novidade é uma oportunidade de aprender e se atualizar. "
            },
            {
                texto: "Desejo de se manter próximo das pessoas",
                afirmacao: "Para você, o maior valor está na conexão emocional, usando a tecnologia como ponte para manter laços e proximidade"
            }
        ]
    },
    {
        enunciado: "Qual é o seu jeito preferido e interagir online?",
        alternativas: [
            {
                texto: "Compartilhando informações e conteúdo",
                afirmacao: "Compartilhar conteúdos é a forma que você encontra de contribuir para rede, espalhando ideias e informações."
            },
            {
                texto: "Comentando e respondendo diretamente às publícações",
                afirmacao: "Ao interagir diretramente com comentários e respostas, você constroi diálogos e fortalece relações."
            }
        ]
    },
    {
        enunciado: "O que mais chama sua atenção no feed?",
        alternativas: [
            {
                texto: "Notícias, tendencias e atualizações.",
                afirmacao: "Seu olhar é atraido por novidades e tendências, o que te mantém atento(a) ao que acontece no mundo."
            },
            {
                texto: "Fotos e histórias de amigos e familiares.",
                afirmacao: "O que mais te encanta são os registros e histórias pessoais, que aproximam você do dia a dia das pessoas que gosta."
            }
        ]
    },
    {
        enunciado: "Quando algo negativo aparece como você reage?",
        alternativas: [
            {
                texto: "Procura analisar com calma antes de interagir.",
                afirmacao: "Mesmo diante de temas polêmicos, você prefere agir com cautela e analisar antes de opinar."
            },
            {
                texto: "Prefere mudar de assunto e buscar conteúdos positivos.",
                afirmacao: "Sua preferência é direcionar a atenção para coisas positivas, evitando se prender a discussões negativas."
            }
        ]
    },
    {
        enunciado: "O que voce mais gostaria de melhorar no seu uso de redes sociais? ",
        alternativas: [
            {
                texto: "Filtrar melhor o que consome para evitar excesso de informação.",
                afirmacao: "Seu foco para o futuro é filtrar o conteúdo de forma mais consciente, consumindo apenas o que agrega valor."
            },
            {
                texto: "Organizar o tempo para equilibrar com a vida offline .",
                afirmacao: "Voc~e busca organizar melhor o tempo de uso, equilibrando a vida digital com momentos offline. "
            }
        ]
    },
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



