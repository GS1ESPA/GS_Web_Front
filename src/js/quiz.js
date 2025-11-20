const perguntasMercado = [
	{
		area: "Engenharia de Software",
		cidade: "São Paulo",
		pergunta: "Qual tipo de trabalho as fintechs paulistas mais pedem dos squads de engenharia?",
		opcoes: [
			"Produtos digitais full-stack orientados a microsserviços",
			"Migração de sistemas COBOL para mainframe",
			"Suporte a impressoras departamentais",
			"Administração de datacenters on-premise sem automação"
		],
		resposta: "Produtos digitais full-stack orientados a microsserviços",
		explicacao: "A capital concentra hubs de fintechs que priorizam squads capazes de iterar rápido com microsserviços cloud-native."
	},
	{
		area: "Gerência de Projetos",
		cidade: "Rio de Janeiro",
		pergunta: "Projetos de transformação digital em energia e telecom no Rio normalmente buscam gerentes com qual foco?",
		opcoes: [
			"PMOs híbridos que combinam métodos ágeis e compliance regulatório",
			"Cronogramas em papel e aprovação manual",
			"Coordenação exclusiva de eventos corporativos",
			"Gestão de facilities e manutenção predial"
		],
		resposta: "PMOs híbridos que combinam métodos ágeis e compliance regulatório",
		explicacao: "As grandes operadoras cariocas precisam de PMs que traduzam normas da ANEEL/ANATEL para cadências ágeis."
	},
	{
		area: "Ciência de Dados",
		cidade: "Salvador",
		pergunta: "Os polos de varejo e logística em Salvador costumam contratar cientistas de dados para qual desafio?",
		opcoes: [
			"Modelos preditivos de demanda e rotas para operações no Nordeste",
			"Renderização 3D de jogos multiplayer",
			"Suporte de help desk nível 1",
			"Catalogação manual de documentos físicos"
		],
		resposta: "Modelos preditivos de demanda e rotas para operações no Nordeste",
		explicacao: "Centros logísticos na Bahia apostam em analytics para abastecimento omnichannel e otimização de frotas."
	},
	{
		area: "Segurança da Informação",
		cidade: "Curitiba",
		pergunta: "Qual frente de segurança fica em evidência com a cadeia automotiva e fintechs de Curitiba?",
		opcoes: [
			"Times Blue/Red com foco em hardening de APIs e IoT embarcado",
			"Inventário de papelada física",
			"Treinamento de etiqueta corporativa",
			"Suporte a telefonia PABX"
		],
		resposta: "Times Blue/Red com foco em hardening de APIs e IoT embarcado",
		explicacao: "A região abriga montadoras e bancos digitais que priorizam testes ofensivos e blindagem de dispositivos conectados."
	},
	{
		area: "DevOps",
		cidade: "Bogotá",
		pergunta: "Os centros nearshore colombianos demandam profissionais de DevOps focados em quê?",
		opcoes: [
			"Automação de pipelines multi-cloud e confiabilidade de plataformas",
			"Digitação de dados em ERP legado",
			"Design de folhetos impressos",
			"Operação de telefonia analógica"
		],
		resposta: "Automação de pipelines multi-cloud e confiabilidade de plataformas",
		explicacao: "Bogotá exporta serviços de engenharia site reliability para clientes da América do Norte."
	},
	{
		area: "UX/UI Design",
		cidade: "Buenos Aires",
		pergunta: "Os estúdios de produto porteño costumam destacar designers com qual entrega principal?",
		opcoes: [
			"Pesquisa contínua com usuários e design systems bilíngues",
			"Manutenção de infraestrutura elétrica",
			"Operação de caixa em lojas físicas",
			"Produção de comerciais televisivos"
		],
		resposta: "Pesquisa contínua com usuários e design systems bilíngues",
		explicacao: "Scale-ups argentinas atendem LATAM e EUA, exigindo experiências consistentes em múltiplos idiomas."
	},
	{
		area: "Product Management",
		cidade: "Montevidéu",
		pergunta: "O hub uruguaio de serviços digitais prioriza PMs especializados em quê?",
		opcoes: [
			"Roadmaps orientados a métricas para banking digital e gaming",
			"Controle de estoque em frigoríficos",
			"Gestão de frota agrícola",
			"Secretariado executivo"
		],
		resposta: "Roadmaps orientados a métricas para banking digital e gaming",
		explicacao: "Startups uruguaias miram fintech e estúdios de games, cobrando OKRs claros e experimentação guiada por dados."
	},
	{
		area: "Quality Assurance",
		cidade: "Porto Alegre",
		pergunta: "Qual tipo de atuação em QA ganha espaço com healthtechs e indústrias gaúchas?",
		opcoes: [
			"Testes automatizados regulados e validação contínua de APIs",
			"Digitação de notas fiscais",
			"Treinamento de recepcionistas",
			"Monitoramento de CFTV"
		],
		resposta: "Testes automatizados regulados e validação contínua de APIs",
		explicacao: "O polo gaúcho precisa de QA que traduza requisitos da Anvisa/ISO para pipelines automatizados."
	}
];

document.addEventListener("DOMContentLoaded", () => {
	const questionEl = document.getElementById("quiz-question");
	const optionsEl = document.getElementById("quiz-options");
	const progressEl = document.getElementById("quiz-progress");
	const scoreEl = document.getElementById("quiz-score");
	const areaEl = document.getElementById("quiz-area");
	const cityEl = document.getElementById("quiz-city");
	const feedbackEl = document.getElementById("quiz-feedback");
	const nextBtn = document.getElementById("quiz-next");
	const restartBtn = document.getElementById("quiz-restart");
	const resultCard = document.getElementById("quiz-result");

	if (!questionEl || !optionsEl || !progressEl || !scoreEl || !areaEl || !cityEl || !feedbackEl || !nextBtn || !restartBtn || !resultCard) {
		return;
	}

	let indiceAtual = 0;
	let pontuacao = 0;
	let perguntaRespondida = false;

	const totalPerguntas = perguntasMercado.length;
	carregarPergunta();

	nextBtn.addEventListener("click", () => {
		if (nextBtn.disabled) {
			return;
		}

		if (indiceAtual === totalPerguntas - 1) {
			finalizarQuiz();
			return;
		}

		indiceAtual += 1;
		carregarPergunta();
	});

	restartBtn.addEventListener("click", () => {
		indiceAtual = 0;
		pontuacao = 0;
		carregarPergunta();
		resultCard.innerHTML = `
			<h4>Resumo</h4>
			<p>Avance pelas perguntas para ver seu desempenho e descobrir que cidades concentram vagas estratégicas em cada área.</p>
		`;
	});

	function carregarPergunta() {
		const perguntaAtual = perguntasMercado[indiceAtual];
		perguntaRespondida = false;
		nextBtn.disabled = true;
		nextBtn.textContent = indiceAtual === totalPerguntas - 1 ? "Ver resultado" : "Responder próxima";
		progressEl.textContent = `Pergunta ${indiceAtual + 1} de ${totalPerguntas}`;
		scoreEl.textContent = `${pontuacao} acerto${pontuacao === 1 ? "" : "s"}`;
		areaEl.textContent = `Área: ${perguntaAtual.area}`;
		cityEl.textContent = `Cidade em destaque: ${perguntaAtual.cidade}`;
		questionEl.textContent = perguntaAtual.pergunta;
		feedbackEl.textContent = "";

		optionsEl.innerHTML = "";
		const opcoes = embaralhar([...perguntaAtual.opcoes]);
		opcoes.forEach((opcao) => {
			const botao = document.createElement("button");
			botao.type = "button";
			botao.className = "quiz-option";
			botao.textContent = opcao;
			botao.setAttribute("data-opcao", opcao);
			botao.addEventListener("click", () => selecionarOpcao(botao, perguntaAtual));
			optionsEl.appendChild(botao);
		});
	}

	function selecionarOpcao(botaoSelecionado, perguntaAtual) {
		if (perguntaRespondida) {
			return;
		}

		perguntaRespondida = true;
		nextBtn.disabled = false;

		const botoes = optionsEl.querySelectorAll("button");
		botoes.forEach((btn) => {
			btn.disabled = true;
			if (btn.getAttribute("data-opcao") === perguntaAtual.resposta) {
				btn.classList.add("correct");
			}
		});

		const respostaSelecionada = botaoSelecionado.getAttribute("data-opcao");
		const acertou = respostaSelecionada === perguntaAtual.resposta;

		if (acertou) {
			pontuacao += 1;
			feedbackEl.textContent = "Mandou bem! Essa é a demanda principal da região.";
		} else {
			botaoSelecionado.classList.add("incorrect");
			feedbackEl.textContent = `Resposta correta: ${perguntaAtual.resposta}.`;
		}

		feedbackEl.textContent += ` ${perguntaAtual.explicacao}`;
		scoreEl.textContent = `${pontuacao} acerto${pontuacao === 1 ? "" : "s"}`;
		atualizarResumoParcial();
	}

	function atualizarResumoParcial() {
		resultCard.innerHTML = `
			<h4>Resumo parcial</h4>
			<p>Você respondeu ${indiceAtual + 1} de ${totalPerguntas} perguntas e acertou ${pontuacao}.</p>
		`;
	}

	function finalizarQuiz() {
		nextBtn.disabled = true;
		feedbackEl.textContent = "";
		resultCard.innerHTML = `
			<h4>Mercado mapeado!</h4>
			<p>Você acertou ${pontuacao} de ${totalPerguntas} questões sobre áreas e cidades em destaque.</p>
			<p>${gerarDiagnostico()}</p>
		`;
	}

	function gerarDiagnostico() {
		if (pontuacao === totalPerguntas) {
			return "Excelente! Você está por dentro das demandas regionais e pode usar isso em entrevistas e networking.";
		}
		if (pontuacao >= totalPerguntas * 0.6) {
			return "Bom resultado! Revise as cidades em que errou para identificar oportunidades de especialização.";
		}
		return "Que tal revisitar os relatórios de mercado e conversar com profissionais das capitais citadas? O cenário muda rápido.";
	}

	function embaralhar(lista) {
		for (let i = lista.length - 1; i > 0; i -= 1) {
			const j = Math.floor(Math.random() * (i + 1));
			[lista[i], lista[j]] = [lista[j], lista[i]];
		}
		return lista;
	}
});