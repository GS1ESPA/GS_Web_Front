let information = [
    "Nome completo: Gerson Altamir",
    "Data de nascimento: 10/10/1990",
    "Cidade: São Paulo",
    "Profissão: Engenheiro de Software",
    "Formação: Bacharel em Engenharia de Software pela USP",
    "Soft Skills: Comunicação, Trabalho em equipe, Resolução de problemas",
    "Hobbies: Leitura, Ciclismo, Programação"
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