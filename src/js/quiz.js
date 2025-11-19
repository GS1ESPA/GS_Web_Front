const perfisSimulados = [
	{
		id: "gerson",
		nome: "Gerson Altamir",
		area: "Engenharia de Software",
		cidade: "São Paulo",
		tecnologia: "Arquitetura distribuída resiliente",
		pagina: "./gerson.html",
		imagem: "../assets/imgs/Rutenio.jpg"
	},
	{
		id: "ana",
		nome: "Ana Souza",
		area: "Gerência de Projetos",
		cidade: "Rio de Janeiro",
		tecnologia: "Gestão ágil com foco em Scrum",
		pagina: "./ana.html",
		imagem: "../assets/imgs/Ana.avif"
	},
	{
		id: "joao",
		nome: "João Silva",
		area: "Desenvolvimento Front-end",
		cidade: "Recife",
		tecnologia: "Interfaces reativas em React",
		pagina: "./joao.html",
		imagem: "../assets/imgs/joao.webp"
	},
	{
		id: "maria",
		nome: "Maria Oliveira",
		area: "Ciência de Dados",
		cidade: "Salvador",
		tecnologia: "Modelagem preditiva orientada a negócios",
		pagina: "./maria.html",
		imagem: "../assets/imgs/Maria.jpg"
	},
	{
		id: "carlos",
		nome: "Carlos Pereira",
		area: "Segurança da Informação",
		cidade: "Curitiba",
		tecnologia: "Hardening de redes corporativas",
		pagina: "./carlos.html",
		imagem: "../assets/imgs/carlos.jpg"
	},
	{
		id: "juan",
		nome: "Juan Martinez",
		area: "DevOps",
		cidade: "Bogotá",
		tecnologia: "Automação de pipelines CI/CD",
		pagina: "./juan.html",
		imagem: "../assets/imgs/Juan.jpg"
	},
	{
		id: "laura",
		nome: "Laura Gómez",
		area: "UX/UI Design",
		cidade: "Buenos Aires",
		tecnologia: "Prototipagem de alta fidelidade",
		pagina: "./laura.html",
		imagem: "../assets/imgs/Laura.jpg"
	},
	{
		id: "pedro",
		nome: "Pedro Alvarez",
		area: "Product Management",
		cidade: "Montevidéu",
		tecnologia: "Roadmapping orientado a métricas",
		pagina: "./pedro.html",
		imagem: "../assets/imgs/pedro.avif"
	},
	{
		id: "kleber",
		nome: "Kléber Santos",
		area: "Quality Assurance",
		cidade: "Porto Alegre",
		tecnologia: "Testes exploratórios de alto impacto",
		pagina: "./kleber.html",
		imagem: "../assets/imgs/kleber.webp"
	},
	{
		id: "clovis",
		nome: "Clóvis Lima",
		area: "Consultoria em TI",
		cidade: "Belo Horizonte",
		tecnologia: "Governança de TI orientada a resultados",
		pagina: "./clovis.html",
		imagem: "../assets/imgs/clovis.jpeg"
	}
];

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("quiz-form");
	const areaContainer = document.getElementById("options-area");
	const cidadeContainer = document.getElementById("options-cidade");
	const tecnologiaContainer = document.getElementById("options-tecnologia");
	const resultCard = document.getElementById("quiz-result");

	if (!form || !areaContainer || !cidadeContainer || !tecnologiaContainer || !resultCard) {
		return;
	}

	preencherOpcoes(areaContainer, gerarOpcoesUnicas("area"), "area");
	preencherOpcoes(cidadeContainer, gerarOpcoesUnicas("cidade"), "cidade");
	preencherOpcoes(tecnologiaContainer, gerarOpcoesUnicas("tecnologia"), "tecnologia");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const preferencia = new FormData(form);
		const selecionados = {
			area: preferencia.get("area"),
			cidade: preferencia.get("cidade"),
			tecnologia: preferencia.get("tecnologia")
		};

		const camposSemResposta = Object.entries(selecionados)
			.filter(([, valor]) => !valor)
			.map(([chave]) => chave);

		if (camposSemResposta.length > 0) {
			exibirMensagem(resultCard, `Selecione uma opção em: ${camposSemResposta.join(", ")}.`);
			return;
		}

		const profissional = recomendarProfissional(selecionados);
		exibirResultado(resultCard, profissional, selecionados);
	});

	form.addEventListener("reset", () => {
		setTimeout(() => {
			exibirMensagem(resultCard, "Responda ao quiz acima para que possamos indicar o profissional mais compatível.");
		}, 0);
	});
});

function gerarOpcoesUnicas(campo) {
	return Array.from(new Set(perfisSimulados.map((perfil) => perfil[campo]))).sort();
}

function preencherOpcoes(container, opcoes, nomeCampo) {
	const fragment = document.createDocumentFragment();
	opcoes.forEach((opcao) => {
		const label = document.createElement("label");
		label.className = "quiz-option";

		const input = document.createElement("input");
		input.type = "radio";
		input.name = nomeCampo;
		input.value = opcao;

		const texto = document.createElement("span");
		texto.textContent = opcao;

		label.appendChild(input);
		label.appendChild(texto);
		fragment.appendChild(label);
	});
	container.textContent = "";
	container.appendChild(fragment);
}

function recomendarProfissional(preferencia) {
	let melhorPerfil = null;
	let maiorPontuacao = -1;

	perfisSimulados.forEach((perfil) => {
		let pontuacao = 0;
		if (perfil.area === preferencia.area) pontuacao += 2;
		if (perfil.cidade === preferencia.cidade) pontuacao += 1;
		if (perfil.tecnologia === preferencia.tecnologia) pontuacao += 2;

		if (pontuacao > maiorPontuacao) {
			maiorPontuacao = pontuacao;
			melhorPerfil = perfil;
		}
	});

	return melhorPerfil;
}

function exibirResultado(container, perfil, preferencia) {
	if (!perfil) {
		exibirMensagem(container, "Não encontramos um profissional que combine com essas respostas. Tente variar suas escolhas.");
		return;
	}

	container.innerHTML = `
		<h4>Profissional recomendado</h4>
		<div class="recommended-card">
			<img src="${perfil.imagem}" alt="Foto de ${perfil.nome}">
			<div>
				<strong>${perfil.nome}</strong>
				<p class="match-details">${perfil.area} · ${perfil.cidade}</p>
				<p>${perfil.tecnologia}</p>
				<a href="${perfil.pagina}">Ver perfil completo</a>
			</div>
		</div>
		<p>Baseado nas preferências: ${preferencia.area}, ${preferencia.cidade}, ${preferencia.tecnologia}.</p>
	`;
}

function exibirMensagem(container, mensagem) {
	container.innerHTML = `
		<h4>Resultado</h4>
		<p>${mensagem}</p>
	`;
}