let information = [
    "Nome completo: Carlos Pereira",
    "Data de nascimento: 09/08/1987",
    "Cidade: Curitiba",
    "Profissão: Analista de Segurança",
    "Formação: Pós-graduação em Segurança da Informação pela UFPR",
    "Soft Skills: Pensamento analítico, foco e colaboração",
    "Hobbies: Maratonas de captura a bandeira e ciclismo"
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
