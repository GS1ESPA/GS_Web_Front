let information = [
    "Nome completo: Maria Oliveira",
    "Data de nascimento: 11/02/1991",
    "Cidade: Salvador",
    "Profissão: Cientista de Dados",
    "Formação: Mestrado em Ciência de Dados pela UFBA",
    "Soft Skills: Comunicação visual, curiosidade e pensamento estatístico",
    "Hobbies: Corridas de 5K, culinária baiana e clubes de leitura"
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
