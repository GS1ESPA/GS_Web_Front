let information = [
    "Nome completo: Kléber Santos",
    "Data de nascimento: 30/11/1988",
    "Cidade: Porto Alegre",
    "Profissão: QA Lead",
    "Formação: Engenharia de Computação pela PUCRS",
    "Soft Skills: Atenção aos detalhes, feedback claro e liderança servidora",
    "Hobbies: Jogos de tabuleiro, corridas de rua e podcasts"
];

let i = 0;
let time = 5000;

function SlideShow() {
    document.getElementById("nome").innerText = information[i];
    i++;
    if (i >= information.length) {
        i = 0;
    }
    setTimeout(SlideShow, time);
}

SlideShow();
