// Seleciona o botão de fechar e a barra de notificação
const closeBtn = document.getElementById('closeNotificationBar');
const notificationBar = document.getElementById('notificationBar');
closeBtn.addEventListener('click', function() {
    notificationBar.style.display = 'none'; // Esconde a barra de notificação
});


// Dados simulados de notícias
const noticias = [
    {
        titulo: "Roubo a banco frustrado pela Polícia Civil em Parnamirim",
        descricao: "Agentes conseguiram frustrar um assalto a banco, após monitoramento de suspeitos.",
    },
    {
        titulo: "Homem é preso com 5 kg de drogas em operação em São Gonçalo do Amarante",
        descricao: "A operação ocorreu na manhã desta terça-feira, com sucesso na apreensão de drogas.",
    },
    {
        titulo: "Polícia Civil inicia campanha de conscientização sobre crimes cibernéticos",
        descricao: "Campanha visa alertar a população sobre golpes digitais e formas de proteção.",
    },
    {
        titulo: "Investigação revela esquema de fraudes em licitações públicas",
        descricao: "Fraude em licitações envolvendo várias empresas é investigada pela Polícia Civil.",
    },
    {
        titulo: "Polícia Civil prende suspeito de homicídio após meses de investigação",
        descricao: "O suspeito foi localizado e preso em uma operação conjunta com a Polícia Militar.",
    },
    {
        titulo: "Foragido da justiça é preso em Natal após 5 anos",
        descricao: "Homem procurado por diversos crimes foi finalmente capturado em uma ação planejada.",
    },
    {
        titulo: "Incêndio em floresta é controlado após esforços conjuntos",
        descricao: "Equipes de bombeiros trabalham incessantemente para controlar as chamas e evitar danos maiores.",
    },
    {
        titulo: "Prefeitura de Natal anuncia melhorias na infraestrutura urbana",
        descricao: "Projetos de revitalização de praças e ruas devem ser iniciados no próximo mês.",
    },
    {
        titulo: "Festival de música traz artistas locais para o centro da cidade",
        descricao: "Evento visa promover a cultura e a música da região, com shows gratuitos para a população.",
    },
    {
        titulo: "Avanços na vacinação contra a gripe são registrados",
        descricao: "Campanha de vacinação tem alcançado um número recorde de imunizações na comunidade.",
    },
    {
        titulo: "Estudantes realizam protesto por melhorias na educação",
        descricao: "Movimento pede investimentos e melhores condições nas escolas públicas da região.",
    },
    {
        titulo: "Projeto de lei para proteção dos animais é aprovado na câmara",
        descricao: "Iniciativa visa fortalecer a proteção aos direitos dos animais e aumentar penalidades para maus-tratos.",
    },
    {
        titulo: "Projeto de lei contra aluno burro",
        descricao: "Iniciativa visa fortalecer o mental dos alunos em situação de dificuldade acadêmica.",
    },
    {
        titulo: "Campanha de doação de sangue registra número recorde de doadores",
        descricao: "Centros de saúde comemoram o sucesso da campanha de conscientização sobre a importância da doação.",
    },
    {
        titulo: "Polícia apreende carga de eletrônicos contrabandeados no porto de Natal",
        descricao: "Operação da Polícia Federal intercepta contrabando de produtos avaliados em mais de 2 milhões.",
    },
    {
        titulo: "Novo centro de pesquisas tecnológicas é inaugurado em São Paulo",
        descricao: "Centro promete impulsionar inovações nas áreas de inteligência artificial e robótica.",
    },
    {
        titulo: "Feira de artesanato atrai milhares de visitantes ao parque da cidade",
        descricao: "Evento com mais de 100 expositores celebra a arte e cultura local, com produtos exclusivos.",
    },
    {
        titulo: "Equipe brasileira de robótica conquista medalha em competição internacional",
        descricao: "Estudantes brasileiros são premiados em evento de tecnologia, destacando-se com projetos inovadores.",
    },
    {
        titulo: "Vacinação contra COVID-19 atinge 90% de cobertura no estado",
        descricao: "Campanha massiva de vacinação atinge marca histórica e é exemplo para outras regiões do país.",
    },
    {
        titulo: "Cientistas descobrem novo tratamento eficaz contra doenças autoimunes",
        descricao: "Pesquisadores revelam avanço em terapia que promete melhor qualidade de vida para pacientes.",
    },
    {
        titulo: "Brasil conquista medalha de ouro no Mundial de Atletismo",
        descricao: "Atleta brasileiro vence prova de 100 metros rasos em competição internacional.",
    },
    {
        titulo: "Expedição científica descobre nova espécie de planta na Amazônia",
        descricao: "Pesquisadores encontram planta rara que pode ter aplicações medicinais e ambientais.",
    },
    {
        titulo: "Polícia Ambiental intensifica fiscalização contra desmatamento ilegal",
        descricao: "Operação visa combater a extração ilegal de madeira e preservar a fauna e flora locais.",
    },
    {
        titulo: "Inovações em energias renováveis são apresentadas em conferência global",
        descricao: "Especialistas discutem o futuro das energias limpas e alternativas para a sustentabilidade.",
    },
    {
        titulo: "Novo museu de arte moderna é inaugurado em Porto Alegre",
        descricao: "Espaço cultural traz exposições permanentes e itinerantes, promovendo o acesso à arte contemporânea.",
    },
    {
        titulo: "Polícia desmantela quadrilha especializada em golpes financeiros",
        descricao: "Após meses de investigação, operação prende líderes de organização criminosa focada em fraudes bancárias.",
    },
    {
        titulo: "Acidente em rodovia deixa 5 feridos em Parnamirim",
        descricao: "Colisão entre dois veículos provoca engarrafamento e mobiliza equipes de resgate.",
    },
    {
        titulo: "Novo hospital especializado em cardiologia será inaugurado no próximo mês",
        descricao: "Unidade hospitalar promete reduzir filas de espera e melhorar atendimento na área de cardiologia.",
    },
    {
        titulo: "Bairros de Natal sofrem com falta de água após rompimento de tubulação",
        descricao: "Serviço de abastecimento é interrompido e reparos estão previstos para serem concluídos em 48 horas.",
    },
    {
        titulo: "Cientistas brasileiros fazem avanço em tratamento contra Alzheimer",
        descricao: "Pesquisa inédita abre caminho para novos tratamentos, retardando o avanço da doença.",
    },
    {
        titulo: "Feira gastronômica movimenta o centro da cidade com pratos típicos",
        descricao: "Evento destaca culinária regional e traz chefs renomados para a cidade.",
    },
    {
        titulo: "Câmara aprova orçamento para projetos de infraestrutura no interior",
        descricao: "Verbas serão destinadas a obras de pavimentação, saneamento e melhorias em estradas rurais.",
    },
    {
        titulo: "Prefeitura realiza mutirão de limpeza em praias e parques da cidade",
        descricao: "Ação envolve voluntários e busca conscientizar sobre a preservação do meio ambiente.",
    },
    {
        titulo: "Polícia Militar intensifica operações de combate ao tráfico de drogas",
        descricao: "Ações coordenadas nas comunidades resultam em prisões e apreensões de grandes quantidades de entorpecentes.",
    },
    {
        titulo: "Novo aplicativo de mobilidade urbana promete reduzir custos para usuários",
        descricao: "Startup brasileira lança app com foco em economia e sustentabilidade para o transporte urbano.",
    },
    {
        titulo: "Estudo revela que jovens estão mais propensos a problemas de saúde mental",
        descricao: "Pesquisa aponta aumento significativo de ansiedade e depressão entre adolescentes e jovens adultos.",
    },
    {
        titulo: "Escolas públicas de Natal adotam programa de ensino híbrido",
        descricao: "Projeto piloto combina aulas presenciais e online, oferecendo mais flexibilidade para estudantes.",
    },
    {
        titulo: "Festival de cinema em Natal homenageia grandes cineastas brasileiros",
        descricao: "Evento cultural exibe produções nacionais e promove debates com diretores e críticos de cinema.",
    },
    {
        titulo: "Polícia prende suspeito de liderar milícia em operação na zona oeste",
        descricao: "Indivíduo é apontado como chefe de organização criminosa que extorquia comerciantes e moradores.",
    },
    {
        titulo: "Universidade lança projeto de inovação para startups locais",
        descricao: "Iniciativa busca fomentar o empreendedorismo tecnológico com apoio de mentores e investidores.",
    },
    {
        titulo: "Projeto de reflorestamento recupera área degradada em região do semiárido",
        descricao: "Programa ambiental planta milhares de mudas para combater a desertificação e recuperar biodiversidade.",
    },
    {
        titulo: "Moradores organizam abaixo-assinado contra aumento de impostos",
        descricao: "População se mobiliza para barrar projeto de lei que prevê aumento na alíquota do IPTU.",
    },
    {
        titulo: "Natal recebe exposição interativa sobre a história da aviação brasileira",
        descricao: "Mostra traz aeronaves históricas e simuladores, promovendo a interação dos visitantes com o mundo da aviação.",
    },
    {
        titulo: "Projeto social oferece aulas gratuitas de música para crianças de comunidades carentes",
        descricao: "Iniciativa busca transformar vidas por meio da arte, oferecendo oportunidades educacionais.",
    },
    {
        titulo: "Indústria automotiva no Brasil vê crescimento nas vendas de veículos elétricos",
        descricao: "Aumento da demanda por carros elétricos reflete maior conscientização sobre sustentabilidade no setor.",
    },
    {
        titulo: "Meteorologistas preveem chuvas intensas para os próximos dias no litoral nordestino",
        descricao: "População deve se preparar para possíveis enchentes e ventos fortes na região.",
    },
    {
        titulo: "Projeto de lei incentiva a reciclagem",
        descricao: "blablabla eu desistoooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
    },
    {
        titulo: "Projeto de lei incentiva a reciclagem",
        descricao: "blablabla eu desistoooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
    },
    {
        titulo: "Projeto de lei incentiva a reciclagem",
        descricao: "blablabla eu desistoooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
    }
];


// Função para renderizar notícias com ênfase na manchete principal
function renderNews() {
    const newsList = document.getElementById('news-list');
    
    // Seleciona a primeira notícia como manchete principal
    const mainHeadline = noticias[0];
    const mainHeadlineElement = document.getElementById('main-headline');

    // Exibe a manchete principal
    mainHeadlineElement.innerHTML = `
        <h2>Manchete do Dia: ${mainHeadline.titulo}</h2>
        <p id="headline-description">${mainHeadline.descricao}</p>
    `;

    // Renderizar as demais notícias
    noticias.slice(1).forEach(noticia => {
        // Criar elemento de notícia
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        // Preencher conteúdo da notícia
        newsItem.innerHTML = `
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descricao}</p>
        `;

        // Adicionar ao container de notícias
        newsList.appendChild(newsItem);
    });
}

// Chama a função para renderizar as notícias ao carregar a página
renderNews();

// Função para alternar entre as seções do menu de feedback
function showSection(sectionId) {
    // Remover a classe 'active' de todas as seções
    document.querySelectorAll('.feedback-content').forEach(function(section) {
        section.classList.remove('active');
    });

    // Adicionar a classe 'active' à seção clicada
    document.getElementById(sectionId).classList.add('active');

    // Atualizar o menu para refletir a seção ativa
    document.querySelectorAll('.menu-item').forEach(function(item) {
        item.classList.remove('active');
    });
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Definir a seção inicial como "Canais de Atendimento"
showSection('canais');

