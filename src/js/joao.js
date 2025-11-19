let information = [
    "Nome completo: João Silva",
    "Data de nascimento: 04/03/1995",
    "Cidade: Recife",
    "Profissão: Desenvolvedor Front-end",
    "Formação: Bacharel em Sistemas de Informação pela UFPE",
    "Soft Skills: Criatividade, empatia e curiosidade",
    "Hobbies: Design de interfaces, guitarra e beach tennis"
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
