let information = [
    "Nome completo: Juan Martinez",
    "Data de nascimento: 18/07/1989",
    "Cidade: Bogotá",
    "Profissão: DevOps Engineer",
    "Formação: Engenharia de Computação pela Universidad Nacional de Colombia",
    "Soft Skills: Proatividade, comunicação e pensamento crítico",
    "Hobbies: Impressão 3D, culinária latina e hiking"
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
