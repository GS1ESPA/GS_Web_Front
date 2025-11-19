let information = [
    "Nome completo: Ana Souza",
    "Data de nascimento: 15/05/1992",
    "Cidade: Rio de Janeiro",
    "Profissão: Gerente de Projetos",
    "Formação: MBA em Gestão de Projetos pela FGV",
    "Soft Skills: Liderança, Comunicação, Planejamento",
    "Hobbies: Viagens, Fotografia, Culinária"
]

let i = 0;
let time = 5000

function SlideShow() {
    document.getElementById("nome").innerText = information[i];
    i++;
    if (i >= information.length) {
        i = 0;
    }
    setTimeout(SlideShow, time);
}

SlideShow();