let information = [
    "Nome completo: Pedro Alvarez",
    "Data de nascimento: 06/06/1986",
    "Cidade: Montevidéu",
    "Profissão: Product Owner",
    "Formação: Administração com ênfase em Produtos pela UDELAR",
    "Soft Skills: Priorização, comunicação com stakeholders e visão de negócio",
    "Hobbies: Futebol, cafés locais e storytelling de produtos"
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
