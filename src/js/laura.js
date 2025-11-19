let information = [
    "Nome completo: Laura Gómez",
    "Data de nascimento: 25/04/1993",
    "Cidade: Buenos Aires",
    "Profissão: UX/UI Designer",
    "Formação: Design Digital pela Universidad de Palermo",
    "Soft Skills: Facilitação, escuta ativa e storytelling",
    "Hobbies: Lettering, fotografia urbana e yoga"
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
