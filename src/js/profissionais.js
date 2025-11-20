const profissionais = [
    {
        nome: "Gerson Altamir",
        cargo: "Eng. de Software",
        imagem: "./src/assets/imgs/Rutenio.jpg",
        pagina: "./src/pages/gerson.html"
    },
    {
        nome: "João Silva",
        cargo: "Dev Front-end",
        imagem: "./src/assets/imgs/joao.webp",
        pagina: "./src/pages/joao.html"
    },
    {
        nome: "Maria Oliveira",
        cargo: "Cientista de Dados",
        imagem: "./src/assets/imgs/Maria.jpg",
        pagina: "./src/pages/maria.html"
    },
    {
        nome: "Ana Souza",
        cargo: "Gerente de Projetos",
        imagem: "./src/assets/imgs/Ana.avif",
        pagina: "./src/pages/ana.html"
    },
    {
        nome: "Carlos Pereira",
        cargo: "Analista de Segurança",
        imagem: "./src/assets/imgs/carlos.jpg",
        pagina: "./src/pages/carlos.html"
    },
    {
        nome: "Juan Martinez",
        cargo: "DevOps Engineer",
        imagem: "./src/assets/imgs/Juan.jpg",
        pagina: "./src/pages/juan.html"
    },
    {
        nome: "Laura Gómez",
        cargo: "UX/UI Designer",
        imagem: "./src/assets/imgs/Laura.jpg",
        pagina: "./src/pages/laura.html"
    },
    {
        nome: "Pedro Alvarez",
        cargo: "Product Owner",
        imagem: "./src/assets/imgs/pedro.avif",
        pagina: "./src/pages/pedro.html"
    },
    {
        nome: "Kléber Santos",
        cargo: "QA Lead",
        imagem: "./src/assets/imgs/kleber.webp",
        pagina: "./src/pages/kleber.html"
    },
    {
        nome: "Clóvis Lima",
        cargo: "Consultor de TI",
        imagem: "./src/assets/imgs/clovis.jpeg",
        pagina: "./src/pages/clovis.html"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("professionals-list");
    if (!lista) {
        return;
    }

    lista.innerHTML = "";
    profissionais.forEach((profissional) => {
        const li = document.createElement("li");

        const link = document.createElement("a");
        link.href = profissional.pagina;

        const imagem = document.createElement("img");
        imagem.src = profissional.imagem;
        imagem.alt = `Foto de ${profissional.nome}`;

        const texto = document.createElement("div");
        texto.className = "profile-text";

        const nome = document.createElement("strong");
        nome.textContent = profissional.nome;

        const cargo = document.createElement("span");
        cargo.textContent = profissional.cargo;

        texto.appendChild(nome);
        texto.appendChild(cargo);

        link.appendChild(imagem);
        link.appendChild(texto);
        li.appendChild(link);
        lista.appendChild(li);
    });
});
