let information = [
    "Nome completo: Clóvis Lima",
    "Data de nascimento: 22/01/1982",
    "Cidade: Belo Horizonte",
    "Profissão: Consultor de TI",
    "Formação: MBA em Governança de TI pela FDC",
    "Soft Skills: Visão sistêmica, mentoria e negociação",
    "Hobbies: Trilhas, cafés especiais e xadrez"
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
