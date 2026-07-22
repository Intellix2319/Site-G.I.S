/* ==========================================================================
   G.I.S - Soluções Web & Sistemas
   Script único - Dados e Interatividade
   ========================================================================== */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '5511977167323';

  function waLink(text) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  /* ========================================================================
     DATA
     ======================================================================== */

  const servicesData = [
    {
      id: 'sites-institucionais', category: 'site',
      title: 'Criação de Sites & Landing Pages',
      tagline: 'Sua marca com presença profissional e de alta conversão na web',
      description: 'Desenvolvemos websites modernos, rápidos e elegantes para apresentar sua empresa, serviços e produtos. Otimizados para aparecer no topo do Google e converter visitantes em clientes no WhatsApp.',
      iconName: 'globe', startingPrice: 'R$ 890', deliveryTime: '5 a 8 dias',
      highlights: [
        'Design 100% responsivo (Celular, Tablet e PC)',
        'Otimização SEO de alta performance para o Google',
        'Botões diretos de chamada e WhatsApp',
        'Inclusão de formulário de contato e mapa do local',
        'Certificado de Segurança SSL Grátis'
      ],
      idealFor: 'Empresas, advogados, clínicas, consultórios, corretores, consultores e prestadores de serviços.'
    },
    {
      id: 'sistemas-pedidos', category: 'sistema-pedidos',
      title: 'Sistemas de Pedidos & Cardápio Digital',
      tagline: 'Venda online sem pagar taxas de comissão por cada pedido',
      description: 'Sistema completo para restaurantes, pizzarias, hamburguerias, marmitarias e delivery. Seu cliente faz o pedido direto pelo celular, escolhe os adicionais e você recebe tudo organizado no WhatsApp e no painel da cozinha.',
      iconName: 'utensils-crossed', startingPrice: 'R$ 1.290', deliveryTime: '7 a 10 dias',
      highlights: [
        'Cardápio digital interativo com fotos e adicionais',
        'Sem cobrança de porcentagem ou taxas por pedido',
        'Painel de cozinha para mudar status (Em preparo, Entregue)',
        'Cálculo automático de taxa de entrega por bairro/distância',
        'Pagamento facilitado via Pix Copia e Cola e Cartão'
      ],
      idealFor: 'Restaurantes, pizzarias, lanchonetes, hamburguerias, distribuidoras de bebidas e docerias.'
    },
    {
      id: 'lojas-virtuais', category: 'e-commerce',
      title: 'Lojas Virtuais & E-commerce',
      tagline: 'Sua loja aberta 24 horas por dia vendendo para todo o Brasil',
      description: 'Criamos e-commerces completos com catálogo de produtos ilimitado, gestão de estoque, cálculo de frete automático e gateway de pagamento seguro para receber por Pix e Cartão de Crédito.',
      iconName: 'shopping-bag', startingPrice: 'R$ 1.590', deliveryTime: '8 a 12 dias',
      highlights: [
        'Catálogo completo com variações de cores e tamanhos',
        'Checkout rápido com Pix instantâneo e Cartão',
        'Cálculo automático de frete (Correios / Melhores Envios)',
        'Painel intuitivo para você cadastrar e atualizar produtos',
        'Notificações automáticas de vendas pelo WhatsApp'
      ],
      idealFor: 'Lojas de roupas, calçados, eletrônicos, cosméticos, acessórios e comércio em geral.'
    },
    {
      id: 'dashboards-sistemas', category: 'dashboard',
      title: 'Sistemas Web & Dashboards Sob Medida',
      tagline: 'Sistemas personalizados para automatizar e organizar o seu negócio',
      description: 'Desenvolvemos painéis administrativos, controle de clientes (CRM), agendamentos de horários online e sistemas de gestão desenhados exatamente para a rotina da sua empresa.',
      iconName: 'layout-dashboard', startingPrice: 'R$ 1.890', deliveryTime: '10 a 15 dias',
      highlights: [
        'Sistemas de agendamento online com confirmação automática',
        'Painéis com gráficos de desempenho e relatórios',
        'Área de membros e login de usuários com permissões',
        'Automação de processos repetitivos da sua equipe',
        'Arquitetura segura e escalável em nuvem'
      ],
      idealFor: 'Barbearias, salões de beleza, clínicas com agendamento, imobiliárias e empresas de serviços.'
    },
    {
      id: 'manutencao-seo', category: 'manutencao',
      title: 'Manutenção, SEO & Hospedagem VIP',
      tagline: 'Seu site sempre seguro, rápido e atualizado no ar',
      description: 'Cuidamos da saúde do seu site com atualizações contínuas, otimização diária de performance, segurança contra ataques e alterações de conteúdo sempre que precisar.',
      iconName: 'shield-check', startingPrice: 'R$ 149/mês', deliveryTime: 'Ativação imediata',
      highlights: [
        'Servidor de alta velocidade Cloud Run / Vercel',
        'Backups periódicos automáticos e monitoramento 24/7',
        'Alterações rápidas de textos, imagens e preços',
        'Relatórios mensais de acessos e SEO',
        'Suporte prioritário via WhatsApp direto com os devs'
      ],
      idealFor: 'Empresas que desejam tranquilidade total e suporte rápido mantendo a plataforma atualizada.'
    }
  ];

  const portfolioProjects = [
    {
      id: 'sabor-gourmet-express', title: 'Sabor Gourmet Express', clientName: 'Restaurante & Delivery Sabor Gourmet',
      category: 'sistema-pedidos', categoryLabel: 'Sistema de Pedidos Delivery',
      description: 'Sistema completo de pedidos online com cardápio digital dinâmico, painel da cozinha em tempo real e fechamento automático no WhatsApp.',
      fullStory: 'A Sabor Gourmet pagava mais de R$ 3.500/mês em taxas para plataformas de delivery de terceiros. A G.I.S criou um sistema de pedidos próprio sem cobrança de comissões. Os clientes acessam o cardápio pelo QR Code na mesa ou link da bio do Instagram, escolhem opcionais, inserem o endereço e enviam o pedido formatado direto pro WhatsApp e pra tela da cozinha.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      metrics: [
        { label: 'Economia em Comissões', value: 'R$ 42.000/ano' },
        { label: 'Tempo de Atendimento', value: '3x Mais Rápido' },
        { label: 'Aumento em Pedidos Diretos', value: '+180%' }
      ],
      techStack: ['React 19', 'Tailwind CSS', 'WhatsApp Business API', 'Pix Instantâneo', 'Node.js'],
      features: [
        'Cardápio digital responsivo com categorias e adicionais',
        'Painel em tempo real para a cozinha alterar status dos pedidos',
        'Cálculo de taxa de entrega dinâmico por bairro',
        'Cópia e Cola de chave Pix com confirmação',
        'Impressão rápida de comanda de pedido'
      ],
      clientLocation: 'São Paulo, SP',
      testimonial: { quote: 'O sistema da G.I.S mudou totalmente nosso negócio. Zeramos a dependência de aplicativos caros de delivery e agora atendemos duas vezes mais rápido!', author: 'Carlos Eduardo', role: 'Proprietário do Sabor Gourmet' }
    },
    {
      id: 'aura-jewelry', title: 'Aura Joias & Acessórios', clientName: 'Aura Boutique',
      category: 'e-commerce', categoryLabel: 'Loja Virtual E-commerce',
      description: 'E-commerce de alto padrão para marca de joias finas com catálogo visual sofisticado, filtro por categoria e checkout transparente via Pix e Cartão.',
      fullStory: 'A Aura necessitava de uma loja online com estética luxuosa para transmitir valor às suas peças exclusivas. A G.I.S projetou um e-commerce fluido, com galeria de alta definição, cálculo de frete automático e experiência de compra rápida em apenas 3 cliques.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80',
      metrics: [
        { label: 'Taxa de Conversão', value: '4.8%' },
        { label: 'Velocidade de Carregamento', value: '0.7s' },
        { label: 'Ticket Médio', value: '+35%' }
      ],
      techStack: ['React', 'Vite', 'Tailwind CSS', 'Gateway Pix/Cartão', 'Melhor Envio'],
      features: [
        'Galeria interativa de produtos em alta definição',
        'Filtros por material, tamanho e faixa de preço',
        'Cálculo de frete automático integrado aos Correios',
        'Notificação instantânea de compra realizada via WhatsApp',
        'Painel simples para cadastro de produtos e estoque'
      ],
      clientLocation: 'Curitiba, PR',
      testimonial: { quote: 'A G.I.S entregou a loja virtual mais elegante e rápida que já vi no nosso nicho. As vendas pelo celular dispararam na primeira semana.', author: 'Mariana Siqueira', role: 'Diretora Criativa da Aura' }
    },
    {
      id: 'nexus-solutions', title: 'Nexus Corp Consultoria', clientName: 'Nexus Group',
      category: 'site', categoryLabel: 'Site Institucional Premium',
      description: 'Website empresarial institucional para empresa de consultoria corporativa com blog otimizado para SEO e sistema de agendamento de reuniões.',
      fullStory: 'A Nexus precisava se posicionar como autoridade no mercado corporativo e atrair clientes de alto valor pelo Google. Desenvolvemos um site com design imponente em tons neutros e metálicos, carregamento instantâneo e botão de agendamento automático de diagnóstico estratégico.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      metrics: [
        { label: 'Posição no Google', value: 'Top 3 em 60 dias' },
        { label: 'Novos Leads Mensais', value: '+210%' },
        { label: 'Nota no Google Speed', value: '99/100' }
      ],
      techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Google Analytics 4', 'Calendly API'],
      features: [
        'Páginas institucionais de serviços detalhadas',
        'Blog integrado para estratégias de Marketing de Conteúdo',
        'Formulário inteligente com pré-qualificação de leads',
        'Otimização completa para busca local e orgânica (SEO)',
        'Certificado de segurança avançado e proteção DDoS'
      ],
      clientLocation: 'Belo Horizonte, MG',
      testimonial: { quote: 'Impressionado com o nível de acabamento e a velocidade do site. Fechamos três contratos de grande porte apenas pelo tráfego orgânico gerado.', author: 'Dr. Roberto Mendes', role: 'CEO da Nexus Corp' }
    },
    {
      id: 'barber-vip-hub', title: 'Barber VIP System & Agendamentos', clientName: 'Rede Barber VIP',
      category: 'dashboard', categoryLabel: 'Sistema de Agendamento & Gestão',
      description: 'Sistema web para agendamento online de horários, escolha de profissional, lembretes automáticos por WhatsApp e painel de faturamento.',
      fullStory: 'Com 4 unidades, a Barber VIP enfrentava furos em horários e sobrecarga no atendimento do telefone. A G.I.S construiu uma plataforma intuitiva onde os clientes escolhem o serviço, profissional e horário livre. O sistema envia confirmações e lembretes automáticos no WhatsApp 2 horas antes.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
      metrics: [
        { label: 'Redução de Faltas', value: '-85%' },
        { label: 'Agendamentos Automáticos', value: '92%' },
        { label: 'Economia de Tempo da Recepção', value: '25h/semana' }
      ],
      techStack: ['React', 'Express', 'Node.js', 'WhatsApp Bot', 'Tailwind'],
      features: [
        'Seleção de barbearia, barbeiro preferido e tipo de corte',
        'Sincronização de agenda em tempo real',
        'Notificações de lembrete enviadas via WhatsApp',
        'Painel de relatórios de faturamento por profissional',
        'Controle de comissões e histórico do cliente'
      ],
      clientLocation: 'Florianópolis, SC',
      testimonial: { quote: 'Nossa recepção agora foca em dar atenção aos clientes no salão. O sistema da G.I.S cuida de todos os agendamentos sozinho!', author: 'Thiago Mota', role: 'Fundador da Barber VIP' }
    },
    {
      id: 'verde-grao-emporio', title: 'Verde & Grão Empório Natural', clientName: 'Verde & Grão',
      category: 'sistema-pedidos', categoryLabel: 'Catálogo de Produtos & Pedidos',
      description: 'Catálogo digital interativo para venda de produtos a granel e orgânicos com escolha de quantidade em gramas e envio de pedido pronto ao WhatsApp.',
      fullStory: 'Empório de produtos naturais que necessitava de uma forma prática de vender itens fracionados (100g, 250g, 500g). A G.I.S desenvolveu uma calculadora de quantidade por gramatura integrada ao catálogo, facilitando imensamente a montagem de cestas saudáveis.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
      metrics: [
        { label: 'Crescimento nas Vendas', value: '+140%' },
        { label: 'Tempo no Site por Visitante', value: '4m 20s' },
        { label: 'Clientes Recorrentes', value: '68%' }
      ],
      techStack: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp Orders'],
      features: [
        'Seleção flexível de peso e quantidade personalizada',
        'Busca rápida por tabela nutricional e restrições (Sem Glúten, Vegano)',
        'Envio de pedido detalhado com opção de retirada ou entrega',
        'Layout clean e minimalista'
      ],
      clientLocation: 'Porto Alegre, RS'
    },
    {
      id: 'pronto-pet-clinic', title: 'ProntoPet Clínica Veterinária 24h', clientName: 'ProntoPet 24h',
      category: 'site', categoryLabel: 'Site com Emergência & Agendamento',
      description: 'Site institucional rápido focado em atendimento de emergência veterinária com botão de chamada em 1 clique e agendamento de consultas.',
      fullStory: 'Em momentos de emergência, os tutores de pets precisam encontrar socorro veterinário em poucos segundos. A G.I.S criou um site leve com botão destacado de "Emergência 24h" que inicia chamada imediata e rota do GPS no Waze/Google Maps.',
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=80',
      metrics: [
        { label: 'Chamadas de Emergência', value: '+260%' },
        { label: 'Tempo de Resposta', value: '< 2 segundos' },
        { label: 'Acessos pelo Celular', value: '89%' }
      ],
      techStack: ['React', 'Tailwind CSS', 'Google Maps API', 'WhatsApp Direct'],
      features: [
        'Botão fixo de Emergência 24h para ligação direta',
        'Integração com mapas para rota automática no GPS',
        'Cardápio de serviços (Exames, Cirurgias, Vacinação)',
        'Avaliações de clientes do Google Meu Negócio'
      ],
      clientLocation: 'Campinas, SP'
    }
  ];

  const INITIAL_MENU = [
    { id: '1', name: 'Burguer GIS Double Bacon', category: 'Lanches', description: 'Pão brioche artesanal, 2x hambúrgueres 150g, queijo cheddar fatiado, bacon crocante e molho especial GIS.', price: 34.90, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80', popular: true },
    { id: '2', name: 'Pizza Quatro Queijos Especial (Grande)', category: 'Pizzas', description: 'Massa artesanal de longa fermentação, molho pelati italiano, muçarela, gorgonzola, catupiry original e parmesão.', price: 64.90, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', popular: true },
    { id: '3', name: 'Porção Batata Suprema com Cheddar', category: 'Porções', description: 'Batata frita rústica crocante (400g) coberta com cheddar cremoso e farofa de bacon.', price: 28.00, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80' },
    { id: '4', name: 'Coca-Cola Zero 2 Litros', category: 'Bebidas', description: 'Garrafa pet 2L trincando de gelada.', price: 12.00, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80' }
  ];

  const testimonialsData = [
    { quote: 'Contratamos a G.I.S para criar o sistema de pedidos do nosso restaurante. Foi a melhor decisão que tomamos este ano. Economizamos milhares de reais em taxas de delivery e nossas entregas ficaram muito mais rápidas.', author: 'Carlos Eduardo Santos', role: 'Proprietário', company: 'Sabor Gourmet Express', city: 'São Paulo, SP', rating: 5 },
    { quote: 'O site institucional criado pela G.I.S para o nosso escritório de advocacia ficou impecável. A velocidade de carregamento é impressionante e o atendimento da equipe no WhatsApp foi nota 10 do início ao fim.', author: 'Dra. Renata Vasconcelos', role: 'Sócia Fundadora', company: 'Vasconcelos & Associados', city: 'Rio de Janeiro, RJ', rating: 5 },
    { quote: 'Minha loja virtual ficou linda, super moderna e fácil para cadastrar os produtos. Já na primeira semana após o lançamento batemos recorde de vendas pelo Pix no WhatsApp!', author: 'Mariana Siqueira', role: 'Diretora Criativa', company: 'Aura Boutique Joias', city: 'Curitiba, PR', rating: 5 }
  ];

  const comparisonsData = [
    { title: 'Taxas de Comissão & Vendas', without: 'Paga 15% a 30% em cada pedido em aplicativos de terceiros', with: '0% de comissão. 100% do valor do pedido vai direto para o seu bolso' },
    { title: 'Disponibilidade de Atendimento', without: 'Vendas limitadas ao horário em que alguém atende o telefone', with: 'Sistema online vendendo e anotando pedidos 24 horas por dia automaticamente' },
    { title: 'Base de Dados de Clientes', without: 'Os contatos dos seus clientes pertencem às plataformas', with: 'Você tem a lista completa de nomes e números para fazer promoções no WhatsApp' },
    { title: 'Credibilidade & Profissionalismo', without: 'Perfil genérico nas redes sociais que passa insegurança ao cliente', with: 'Site institucional moderno com endereço próprio (.com.br) e selo de segurança' },
    { title: 'Rapidez de Atendimento', without: 'Demora e erros no envio de fotos do cardápio e chaves Pix manuais', with: 'Cliente escolhe os itens, copia o Pix e envia tudo formatado no WhatsApp em 1 minuto' }
  ];

  const faqsData = [
    { q: 'Quanto tempo demora para o meu site ou sistema ficar pronto?', a: 'O prazo médio de entrega varia de 5 a 10 dias úteis a depender do tipo do projeto. Para projetos urgentes, temos a opção de Entrega Expressa em até 3 a 5 dias.' },
    { q: 'O site terá mensalidade obrigatória?', a: 'Não! O site é 100% seu. Não cobramos mensalidades sobre a criação. Você apenas arca com custos anuais normais de hospedagem e registro do domínio (.com.br).' },
    { q: 'Como funciona o Sistema de Pedidos para restaurantes?', a: 'Seu cliente acessa o cardápio digital via QR Code ou link, escolhe os produtos, digita o endereço e envia o pedido formatado direto no WhatsApp do seu restaurante e no painel da cozinha.' },
    { q: 'Eu mesmo poderei alterar textos, produtos e preços depois?', a: 'Sim! Desenvolvemos painéis extremamente simples e intuitivos para que você ou sua equipe possam cadastrar e alterar informações em poucos segundos.' },
    { q: 'O site vai funcionar bem em telefones celulares?', a: 'Com certeza! Todos os nossos projetos são desenvolvidos com a metodologia "Mobile-First", garantindo navegação perfeita em celulares, tablets e computadores.' }
  ];

  const projectTypesData = [
    { id: 'site', name: 'Site Institucional', basePrice: 890, time: '5 a 8 dias', desc: 'Ideal para empresas, médicos, advogados e prestadores de serviços' },
    { id: 'sistema-pedidos', name: 'Sistema de Pedidos Delivery', basePrice: 1290, time: '7 a 10 dias', desc: 'Para restaurantes, pizzarias e lanchonetes com cardápio digital e WhatsApp' },
    { id: 'e-commerce', name: 'Loja Virtual E-commerce', basePrice: 1590, time: '8 a 12 dias', desc: 'Com produtos ilimitados, cálculo de frete e checkout Pix/Cartão' },
    { id: 'dashboard', name: 'Sistema Web Customizado', basePrice: 1890, time: '10 a 15 dias', desc: 'Painéis administrativos, agendamentos e controle interno' }
  ];

  const availableFeaturesData = [
    { id: 'seo', name: 'Otimização SEO para Topo do Google', price: 200, desc: 'Apareça nos primeiros resultados do Google' },
    { id: 'pix', name: 'Integração com Pix Copia & Cola', price: 150, desc: 'Receba pagamentos instantâneos com chave automática' },
    { id: 'whatsapp_bot', name: 'Atendimento Automático WhatsApp', price: 250, desc: 'Bot que envia respostas e links de pedidos' },
    { id: 'cardapio_qr', name: 'Gerador de QR Code para Mesas', price: 100, desc: 'Para cardápios e balcões em restaurantes' },
    { id: 'multilingue', name: 'Suporte a Múltiplos Idiomas', price: 300, desc: 'Português + Inglês / Espanhol' },
    { id: 'hospedagem_ano', name: '1 Ano de Hospedagem VIP + SSL', price: 240, desc: 'Servidor de ultra-velocidade incluso por 12 meses' }
  ];

  const serviceLabels = {
    'site': 'Criação de Site Institucional',
    'sistema-pedidos': 'Sistema de Pedidos Delivery',
    'e-commerce': 'Loja Virtual E-commerce',
    'dashboard': 'Sistema Web Sob Medida',
    'manutencao': 'Manutenção & Otimização'
  };

  /* ========================================================================
     UTILITIES
     ======================================================================== */
  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function brl(value) {
    return `R$ ${value.toFixed(2)}`;
  }

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  /* ========================================================================
     HEADER: scroll state + mobile menu + WhatsApp links
     ======================================================================== */
  function initHeader() {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });

    const mobileToggle = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileDrawer');
    let menuOpen = false;
    mobileToggle.addEventListener('click', () => {
      menuOpen = !menuOpen;
      drawer.hidden = !menuOpen;
      mobileToggle.setAttribute('aria-expanded', String(menuOpen));
      mobileToggle.innerHTML = menuOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
      refreshIcons();
    });
    drawer.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => {
        menuOpen = false;
        drawer.hidden = true;
        mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
        refreshIcons();
      });
    });

    // WhatsApp links
    const headerMsg = 'Olá, equipe G.I.S! 👋\n\nVim pelo site e gostaria de solicitar um orçamento para meu projeto.';
    document.getElementById('waHeaderBtn').href = waLink(headerMsg);
    document.getElementById('waMobileBtn').href = waLink(headerMsg);
    document.getElementById('floatingWaBtn').href = waLink('Olá, equipe G.I.S! 👋\n\nVim pelo site da G.I.S Tech e gostaria de solicitar um orçamento para o meu projeto.');
    document.getElementById('footerWaBtn').href = waLink('Olá, equipe G.I.S! 👋\n\nVim pelo rodapé do site e gostaria de solicitar atendimento para meu projeto.');
    document.getElementById('contactWaBtn').href = waLink('Olá! Gostaria de falar com a G.I.S');

    // Calculator / AI Consultant open buttons
    ['openCalculatorDesktop', 'openCalculatorMobile', 'openCalculatorHero'].forEach((id) => {
      document.getElementById(id).addEventListener('click', () => scrollToId('calculadora'));
    });
    ['openAiConsultantDesktop', 'openAiConsultantMobile'].forEach((id) => {
      document.getElementById(id).addEventListener('click', () => openModal('aiConsultantModal'));
    });
  }

  /* ========================================================================
     MODAL HELPERS
     ======================================================================== */
  function openModal(id) {
    document.getElementById(id).hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeModal(id) {
    document.getElementById(id).hidden = true;
    document.body.style.overflow = '';
  }

  /* ========================================================================
     GIS LOGO IMAGE FALLBACK
     If the Cloudinary image fails to load for any reason, show the CSS
     monogram fallback instead so the layout never breaks.
     ======================================================================== */
  function initLogoFallbacks() {
    document.querySelectorAll('.gis-logo-img').forEach((img) => {
      img.addEventListener('error', () => {
        img.hidden = true;
        const fallback = img.parentElement.querySelector('.gis-logo-fallback');
        if (fallback) fallback.hidden = false;
      });
    });
  }

  /* ========================================================================
     LOGO ENERGY BURST
     Fires a radiating "power surge" effect (lines + shockwave ring + flash)
     from the header logo badge whenever it's clicked.
     ======================================================================== */
  function triggerLogoEnergyBurst(logoLink) {
    const badge = logoLink.querySelector('.gis-logo-badge');
    if (!badge) return;

    const linkRect = logoLink.getBoundingClientRect();
    const badgeRect = badge.getBoundingClientRect();

    // Container positioned exactly over the badge, but attached to the link
    // (not the badge) so the radiating lines aren't clipped by the badge's
    // own overflow:hidden.
    const burst = document.createElement('div');
    burst.className = 'logo-energy-burst';
    burst.style.left = `${badgeRect.left - linkRect.left}px`;
    burst.style.top = `${badgeRect.top - linkRect.top}px`;
    burst.style.width = `${badgeRect.width}px`;
    burst.style.height = `${badgeRect.height}px`;

    const ring = document.createElement('div');
    ring.className = 'logo-energy-ring';
    burst.appendChild(ring);

    const LINE_COUNT = 8;
    for (let i = 0; i < LINE_COUNT; i++) {
      const line = document.createElement('span');
      line.className = 'logo-energy-line';
      line.style.setProperty('--line-angle', `${(360 / LINE_COUNT) * i}deg`);
      line.style.animationDelay = `${i * 12}ms`;
      burst.appendChild(line);
    }

    logoLink.appendChild(burst);

    // Quick white flash right on the badge itself
    const flash = document.createElement('div');
    flash.className = 'logo-energy-flash';
    badge.appendChild(flash);

    window.setTimeout(() => {
      burst.remove();
      flash.remove();
    }, 750);
  }

  function initLogoEnergyBurst() {
    const headerLogoLink = document.querySelector('.logo-link');
    if (!headerLogoLink) return;
    headerLogoLink.addEventListener('click', () => triggerLogoEnergyBurst(headerLogoLink));
  }

  function initModalCloseButtons() {
    document.querySelectorAll('[data-close-modal]').forEach((btn) => {
      btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close-modal')));
    });
    document.querySelectorAll('.modal-overlay').forEach((overlay) => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(overlay.id);
      });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach((overlay) => {
          if (!overlay.hidden) closeModal(overlay.id);
        });
      }
    });
  }

  /* ========================================================================
     SERVICES SECTION
     ======================================================================== */
  const serviceCategories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'site', label: 'Sites & Landing Pages' },
    { id: 'sistema-pedidos', label: 'Sistemas de Pedidos' },
    { id: 'e-commerce', label: 'Lojas Virtuais' },
    { id: 'dashboard', label: 'Sistemas Sob Medida' }
  ];
  let selectedServiceCategory = 'all';

  function renderServiceFilters() {
    const wrap = document.getElementById('servicesFilters');
    wrap.innerHTML = serviceCategories.map((cat) => `
      <button class="filter-pill ${selectedServiceCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">${cat.label}</button>
    `).join('');
    wrap.querySelectorAll('.filter-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedServiceCategory = btn.getAttribute('data-cat');
        renderServiceFilters();
        renderServicesGrid();
      });
    });
  }

  function renderServicesGrid() {
    const grid = document.getElementById('servicesGrid');
    const filtered = selectedServiceCategory === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedServiceCategory);

    grid.innerHTML = filtered.map((service) => `
      <div class="service-card" data-service-category="${service.category}">
        <div>
          <div class="service-card-top">
            <div class="service-icon-box"><i data-lucide="${service.iconName}"></i></div>
            <div>
              <span class="service-price-label">A partir de</span>
              <span class="service-price-value">${escapeHtml(service.startingPrice)}</span>
            </div>
          </div>
          <h3>${escapeHtml(service.title)}</h3>
          <p class="service-tagline">"${escapeHtml(service.tagline)}"</p>
          <p class="service-desc">${escapeHtml(service.description)}</p>
          <div class="service-meta">
            <div class="service-delivery"><i data-lucide="clock"></i><span>Prazo estimado: <strong>${escapeHtml(service.deliveryTime)}</strong></span></div>
            <ul class="service-highlights">
              ${service.highlights.slice(0, 4).map((h) => `<li><i data-lucide="check"></i><span>${escapeHtml(h)}</span></li>`).join('')}
            </ul>
          </div>
          <div class="service-ideal"><strong>Ideal para:</strong>${escapeHtml(service.idealFor)}</div>
        </div>
        <div class="service-cta-wrap">
          <button class="service-cta-btn" data-select-service="${service.id}">
            <span>Solicitar Orçamento</span><i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('[data-select-service]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const svc = servicesData.find((s) => s.id === btn.getAttribute('data-select-service'));
        if (svc) selectCalculatorProjectType(svc.category);
        scrollToId('calculadora');
      });
    });
    refreshIcons();
  }

  /* ========================================================================
     LIVE ORDER SYSTEM DEMO
     ======================================================================== */
  let cart = []; // { item, quantity }
  let orders = [
    {
      id: '#GIS-1042', customerName: 'Ricardo Oliveira', phone: '(11) 98765-4321', address: 'Rua das Flores, 142 - Apto 32',
      items: [{ item: INITIAL_MENU[0], quantity: 2 }, { item: INITIAL_MENU[3], quantity: 1 }],
      total: 81.80, paymentMethod: 'pix', status: 'em_preparo', createdAt: '10 mins atrás'
    },
    {
      id: '#GIS-1041', customerName: 'Camila Santos', phone: '(11) 97123-8899', address: 'Av. Paulista, 1000 - Bloco B',
      items: [{ item: INITIAL_MENU[1], quantity: 1 }, { item: INITIAL_MENU[2], quantity: 1 }],
      total: 92.90, paymentMethod: 'cartao', status: 'saiu_entrega', createdAt: '22 mins atrás'
    }
  ];
  let currentPaymentMethod = 'pix';

  function renderMenu() {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = INITIAL_MENU.map((menuItem) => `
      <div class="menu-item-card">
        <div>
          <div class="menu-item-image-wrap">
            <img src="${menuItem.image}" alt="${escapeHtml(menuItem.name)}" referrerpolicy="no-referrer" />
            ${menuItem.popular ? '<span class="popular-badge">Mais Pedido</span>' : ''}
          </div>
          <h4>${escapeHtml(menuItem.name)}</h4>
          <p>${escapeHtml(menuItem.description)}</p>
        </div>
        <div class="menu-item-footer">
          <span class="menu-item-price">${brl(menuItem.price)}</span>
          <button class="add-to-cart-btn" data-add-item="${menuItem.id}">
            <i data-lucide="plus"></i><span>Adicionar</span>
          </button>
        </div>
      </div>
    `).join('');
    grid.querySelectorAll('[data-add-item]').forEach((btn) => {
      btn.addEventListener('click', () => addToCart(btn.getAttribute('data-add-item')));
    });
    refreshIcons();
  }

  function addToCart(menuItemId) {
    const menuItem = INITIAL_MENU.find((m) => m.id === menuItemId);
    if (!menuItem) return;
    const existing = cart.find((c) => c.item.id === menuItemId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ item: menuItem, quantity: 1 });
    }
    renderCart();
  }

  function updateQuantity(itemId, delta) {
    cart = cart
      .map((c) => {
        if (c.item.id === itemId) {
          const newQty = c.quantity + delta;
          return newQty > 0 ? { ...c, quantity: newQty } : null;
        }
        return c;
      })
      .filter(Boolean);
    renderCart();
  }

  function getCartTotal() {
    return cart.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  }

  function renderCart() {
    const cartCount = document.getElementById('cartCount');
    const emptyState = document.getElementById('cartEmptyState');
    const form = document.getElementById('orderForm');
    const clearBtn = document.getElementById('clearCartBtn');

    const totalQty = cart.reduce((a, c) => a + c.quantity, 0);
    cartCount.textContent = totalQty;
    clearBtn.hidden = cart.length === 0;

    if (cart.length === 0) {
      emptyState.hidden = false;
      form.hidden = true;
      return;
    }

    emptyState.hidden = true;
    form.hidden = false;

    const itemsList = document.getElementById('cartItemsList');
    itemsList.innerHTML = cart.map(({ item, quantity }) => `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <p>${escapeHtml(item.name)}</p>
          <p>${brl(item.price * quantity)}</p>
        </div>
        <div class="cart-qty-control">
          <button type="button" data-qty-minus="${item.id}"><i data-lucide="minus"></i></button>
          <span>${quantity}</span>
          <button type="button" data-qty-plus="${item.id}"><i data-lucide="plus"></i></button>
        </div>
      </div>
    `).join('');
    itemsList.querySelectorAll('[data-qty-minus]').forEach((btn) => {
      btn.addEventListener('click', () => updateQuantity(btn.getAttribute('data-qty-minus'), -1));
    });
    itemsList.querySelectorAll('[data-qty-plus]').forEach((btn) => {
      btn.addEventListener('click', () => updateQuantity(btn.getAttribute('data-qty-plus'), 1));
    });

    const cartTotal = getCartTotal();
    document.getElementById('cartSubtotal').textContent = brl(cartTotal);
    document.getElementById('cartFinalTotal').textContent = brl(cartTotal + 7);
    refreshIcons();
  }

  function renderOrders() {
    const grid = document.getElementById('ordersGrid');
    document.getElementById('ordersCountTab').textContent = orders.length;
    document.getElementById('ordersCountBadge').textContent = `${orders.length} Pedidos Registrados`;

    grid.innerHTML = orders.map((order) => `
      <div class="order-card">
        <div>
          <div class="order-card-header">
            <span class="order-card-id">${escapeHtml(order.id)}</span>
            <span class="order-card-time"><i data-lucide="clock"></i>${escapeHtml(order.createdAt)}</span>
          </div>
          <div class="order-card-customer">
            <p>${escapeHtml(order.customerName)}</p>
            <p>${escapeHtml(order.phone)}</p>
            <p>${escapeHtml(order.address)}</p>
          </div>
          <div class="order-card-items">
            ${order.items.map((ci) => `
              <div class="order-card-item-row">
                <span><strong>${ci.quantity}x</strong> ${escapeHtml(ci.item.name)}</span>
                <span>${brl(ci.item.price * ci.quantity)}</span>
              </div>
            `).join('')}
          </div>
          <div class="order-card-payment">
            <span class="order-card-payment-tag">${escapeHtml(order.paymentMethod)}</span>
            <span class="order-card-total">Total: ${brl(order.total)}</span>
          </div>
        </div>
        <div class="order-status-control">
          <label>Alterar Status:</label>
          <div class="status-buttons-grid">
            <button class="status-btn ${order.status === 'em_preparo' ? 'status-active-preparo' : ''}" data-order-id="${order.id}" data-status="em_preparo">Em Preparo</button>
            <button class="status-btn ${order.status === 'saiu_entrega' ? 'status-active-entrega' : ''}" data-order-id="${order.id}" data-status="saiu_entrega">Saiu Entrega</button>
            <button class="status-btn full-width ${order.status === 'entregue' ? 'status-active-entregue' : ''}" data-order-id="${order.id}" data-status="entregue">✓ Pedido Entregue</button>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('[data-status]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const orderId = btn.getAttribute('data-order-id');
        const newStatus = btn.getAttribute('data-status');
        const order = orders.find((o) => o.id === orderId);
        if (order) order.status = newStatus;
        renderOrders();
      });
    });
    refreshIcons();
  }

  function initOrderSystemDemo() {
    renderMenu();
    renderCart();
    renderOrders();

    const tabCustomer = document.getElementById('tabCustomer');
    const tabKitchen = document.getElementById('tabKitchen');
    const customerPanel = document.getElementById('customerPanel');
    const kitchenPanel = document.getElementById('kitchenPanel');

    function setTab(tab) {
      const isCustomer = tab === 'customer';
      tabCustomer.classList.toggle('active', isCustomer);
      tabKitchen.classList.toggle('active', !isCustomer);
      customerPanel.hidden = !isCustomer;
      kitchenPanel.hidden = isCustomer;
    }
    tabCustomer.addEventListener('click', () => setTab('customer'));
    tabKitchen.addEventListener('click', () => setTab('kitchen'));

    document.getElementById('clearCartBtn').addEventListener('click', () => {
      cart = [];
      renderCart();
    });

    document.querySelectorAll('.payment-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentPaymentMethod = btn.getAttribute('data-method');
        document.querySelectorAll('.payment-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    document.getElementById('orderForm').addEventListener('submit', (e) => {
      e.preventDefault();
      if (cart.length === 0) return;

      const customerName = document.getElementById('customerName').value || 'Cliente Teste';
      const customerAddress = document.getElementById('customerAddress').value || 'Rua Principal, 500 - Bairro Centro';
      const cartTotal = getCartTotal();

      const newOrder = {
        id: `#GIS-${Math.floor(1000 + Math.random() * 9000)}`,
        customerName,
        phone: '(11) 99999-8888',
        address: customerAddress,
        items: cart.map((c) => ({ ...c })),
        total: cartTotal + 7.00,
        paymentMethod: currentPaymentMethod,
        status: 'recebido',
        createdAt: 'Agora mesmo'
      };

      orders = [newOrder, ...orders];
      renderOrders();

      document.getElementById('successOrderId').textContent = newOrder.id;
      document.getElementById('successCustomerName').textContent = newOrder.customerName;
      document.getElementById('successTotal').textContent = brl(newOrder.total);
      document.getElementById('successPayment').textContent = newOrder.paymentMethod;
      openModal('orderSuccessModal');

      cart = [];
      renderCart();
      document.getElementById('orderForm').reset();
    });

    document.getElementById('viewKitchenBtn').addEventListener('click', () => {
      closeModal('orderSuccessModal');
      setTab('kitchen');
    });
  }

  /* ========================================================================
     PORTFOLIO SECTION
     ======================================================================== */
  const portfolioCategories = [
    { id: 'all', label: 'Todos os Trabalhos' },
    { id: 'sistema-pedidos', label: 'Sistemas de Pedidos' },
    { id: 'e-commerce', label: 'Lojas Virtuais' },
    { id: 'site', label: 'Sites Institucionais' },
    { id: 'dashboard', label: 'Dashboards & Gestão' }
  ];
  let selectedPortfolioCategory = 'all';
  let currentPreviewDevice = 'desktop';

  function renderPortfolioFilters() {
    const wrap = document.getElementById('portfolioFilters');
    wrap.innerHTML = portfolioCategories.map((cat) => `
      <button class="filter-pill ${selectedPortfolioCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">${cat.label}</button>
    `).join('');
    wrap.querySelectorAll('.filter-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedPortfolioCategory = btn.getAttribute('data-cat');
        renderPortfolioFilters();
        renderPortfolioGrid();
      });
    });
  }

  function renderPortfolioGrid() {
    const grid = document.getElementById('portfolioGrid');
    const filtered = selectedPortfolioCategory === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedPortfolioCategory);

    grid.innerHTML = filtered.map((project) => `
      <div class="service-card portfolio-card" data-project-id="${project.id}" style="padding:0; cursor:pointer;">
        <div>
          <div style="position:relative; aspect-ratio:16/10; overflow:hidden; background:var(--zinc-950); border-radius: 1rem 1rem 0 0;">
            <img src="${project.image}" alt="${escapeHtml(project.title)}" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:cover;opacity:0.9;" />
            <div style="position:absolute;top:0.75rem;left:0.75rem;background:rgba(9,9,11,0.8);backdrop-filter:blur(8px);padding:0.25rem 0.75rem;border-radius:0.5rem;border:1px solid rgba(63,63,70,0.8);font-size:0.68rem;font-weight:600;color:var(--zinc-200);">${escapeHtml(project.categoryLabel)}</div>
            <div style="position:absolute;bottom:0.75rem;right:0.75rem;background:rgba(9,9,11,0.8);backdrop-filter:blur(8px);padding:0.2rem 0.6rem;border-radius:0.375rem;font-size:0.6rem;color:var(--zinc-400);display:flex;align-items:center;gap:0.25rem;border:1px solid var(--zinc-800);"><i data-lucide="map-pin" style="width:0.7rem;height:0.7rem;"></i>${escapeHtml(project.clientLocation)}</div>
          </div>
          <div style="padding:1.5rem;">
            <h3 style="font-size:1.25rem;font-weight:700;color:var(--zinc-100);">${escapeHtml(project.title)}</h3>
            <p style="font-size:0.75rem;color:var(--zinc-400);font-weight:500;margin-top:0.25rem;">${escapeHtml(project.clientName)}</p>
            <p style="font-size:0.75rem;color:var(--zinc-300);margin-top:0.75rem;line-height:1.6;font-weight:300;">${escapeHtml(project.description)}</p>
            <div style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid rgba(39,39,42,0.8);display:grid;grid-template-columns:repeat(2,1fr);gap:0.5rem;">
              ${project.metrics.slice(0, 2).map((m) => `
                <div style="padding:0.5rem;border-radius:0.5rem;background:rgba(9,9,11,0.8);border:1px solid rgba(39,39,42,0.6);">
                  <span style="font-size:0.6rem;color:var(--zinc-500);text-transform:uppercase;font-weight:600;display:block;">${escapeHtml(m.label)}</span>
                  <span style="font-size:0.7rem;font-family:var(--font-mono);font-weight:800;color:var(--emerald-400);">${escapeHtml(m.value)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div style="padding:0 1.5rem 1.5rem;">
          <div style="width:100%;display:flex;align-items:center;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--zinc-300);padding-top:0.75rem;border-top:1px solid rgba(39,39,42,0.6);">
            <span>Ver Detalhes & Preview</span>
            <i data-lucide="arrow-right"></i>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('[data-project-id]').forEach((card) => {
      card.addEventListener('click', () => openPortfolioModal(card.getAttribute('data-project-id')));
    });
    refreshIcons();
  }

  function openPortfolioModal(projectId) {
    const project = portfolioProjects.find((p) => p.id === projectId);
    if (!project) return;

    document.getElementById('modalCategoryLabel').textContent = project.categoryLabel;
    document.getElementById('modalLocation').textContent = project.clientLocation;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalClient').textContent = `Cliente: ${project.clientName}`;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.title;
    document.getElementById('browserUrl').textContent = `https://${project.id}.gis.dev`;

    document.getElementById('modalMetrics').innerHTML = project.metrics.map((m) => `
      <div class="modal-metric-card"><span>${escapeHtml(m.label)}</span><span>${escapeHtml(m.value)}</span></div>
    `).join('');

    document.getElementById('modalFullStory').textContent = project.fullStory;

    document.getElementById('modalFeatures').innerHTML = project.features.map((f) => `
      <li><i data-lucide="check-circle"></i><span>${escapeHtml(f)}</span></li>
    `).join('');

    document.getElementById('modalTechStack').innerHTML = project.techStack.map((t) => `<span>${escapeHtml(t)}</span>`).join('');

    const testimonialWrap = document.getElementById('modalTestimonialWrap');
    if (project.testimonial) {
      testimonialWrap.hidden = false;
      document.getElementById('modalTestimonialQuote').textContent = `"${project.testimonial.quote}"`;
      document.getElementById('modalTestimonialAuthor').textContent = project.testimonial.author;
      document.getElementById('modalTestimonialRole').textContent = project.testimonial.role;
    } else {
      testimonialWrap.hidden = true;
    }

    document.getElementById('modalWaBtn').href = waLink(
      `Olá, equipe G.I.S! 👋\n\nVi o projeto *${project.title}* no portfólio do site e gostaria de solicitar um orçamento para desenvolver algo semelhante para a minha empresa.`
    );

    currentPreviewDevice = 'desktop';
    updateDeviceFrame();

    openModal('portfolioModal');
    refreshIcons();
  }

  function updateDeviceFrame() {
    const frame = document.getElementById('deviceFrame');
    const browserBar = document.getElementById('browserBar');
    const desktopBtn = document.getElementById('deviceDesktopBtn');
    const mobileBtn = document.getElementById('deviceMobileBtn');
    const isDesktop = currentPreviewDevice === 'desktop';
    frame.classList.toggle('desktop', isDesktop);
    frame.classList.toggle('mobile', !isDesktop);
    browserBar.hidden = !isDesktop;
    desktopBtn.classList.toggle('active', isDesktop);
    mobileBtn.classList.toggle('active', !isDesktop);
  }

  function initPortfolioModalControls() {
    document.getElementById('deviceDesktopBtn').addEventListener('click', () => {
      currentPreviewDevice = 'desktop';
      updateDeviceFrame();
    });
    document.getElementById('deviceMobileBtn').addEventListener('click', () => {
      currentPreviewDevice = 'mobile';
      updateDeviceFrame();
    });
  }

  /* ========================================================================
     CALCULATOR SECTION
     ======================================================================== */
  let calcProjectType = 'site';
  let calcPageCount = 3;
  let calcSelectedFeatures = ['seo', 'pix'];
  let calcExpressDelivery = false;

  function selectCalculatorProjectType(type) {
    if (projectTypesData.some((p) => p.id === type)) {
      calcProjectType = type;
      renderCalculator();
    }
  }

  function renderProjectTypeGrid() {
    const grid = document.getElementById('projectTypeGrid');
    grid.innerHTML = projectTypesData.map((type) => `
      <div class="project-type-card ${calcProjectType === type.id ? 'active' : ''}" data-type="${type.id}">
        <div class="project-type-card-top">
          <h4>${escapeHtml(type.name)}</h4>
          <span class="project-type-card-price">R$ ${type.basePrice}</span>
        </div>
        <p>${escapeHtml(type.desc)}</p>
      </div>
    `).join('');
    grid.querySelectorAll('[data-type]').forEach((card) => {
      card.addEventListener('click', () => {
        calcProjectType = card.getAttribute('data-type');
        renderCalculator();
      });
    });
  }

  function renderFeaturesGrid() {
    const grid = document.getElementById('featuresGrid');
    grid.innerHTML = availableFeaturesData.map((feat) => {
      const isChecked = calcSelectedFeatures.includes(feat.id);
      return `
        <div class="feature-option ${isChecked ? 'checked' : ''}" data-feature="${feat.id}">
          <div class="feature-checkbox"><i data-lucide="check"></i></div>
          <div class="feature-option-content">
            <div class="feature-option-top">
              <span>${escapeHtml(feat.name)}</span>
              <span class="feature-price">+R$ ${feat.price}</span>
            </div>
            <p>${escapeHtml(feat.desc)}</p>
          </div>
        </div>
      `;
    }).join('');
    grid.querySelectorAll('[data-feature]').forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-feature');
        if (calcSelectedFeatures.includes(id)) {
          calcSelectedFeatures = calcSelectedFeatures.filter((f) => f !== id);
        } else {
          calcSelectedFeatures.push(id);
        }
        renderCalculator();
      });
    });
    refreshIcons();
  }

  function renderCalculator() {
    renderProjectTypeGrid();
    renderFeaturesGrid();

    const selectedTypeObj = projectTypesData.find((p) => p.id === calcProjectType) || projectTypesData[0];

    document.getElementById('pageCountSlider').value = calcPageCount;
    document.getElementById('pageCountDisplay').textContent = `${calcPageCount} ${calcPageCount === 1 ? 'Página' : 'Páginas'}`;
    document.getElementById('expressDeliveryCheckbox').checked = calcExpressDelivery;

    const pagesCost = (calcPageCount - 1) * 80;
    const featuresCost = calcSelectedFeatures.reduce((sum, fId) => {
      const feat = availableFeaturesData.find((af) => af.id === fId);
      return sum + (feat ? feat.price : 0);
    }, 0);

    const subtotal = selectedTypeObj.basePrice + (calcPageCount > 1 ? pagesCost : 0) + featuresCost;
    const deliveryMultiplier = calcExpressDelivery ? 1.25 : 1;
    const finalPriceEstimate = Math.round(subtotal * deliveryMultiplier);

    let breakdownHtml = `
      <div><span>Projeto: <strong>${escapeHtml(selectedTypeObj.name)}</strong></span><span>R$ ${selectedTypeObj.basePrice}</span></div>
    `;
    if (calcPageCount > 1) {
      breakdownHtml += `<div><span>+ ${calcPageCount - 1} páginas adicionais</span><span>R$ ${pagesCost}</span></div>`;
    }
    if (calcSelectedFeatures.length > 0) {
      breakdownHtml += `<div><span>${calcSelectedFeatures.length} opcionais selecionados</span><span>R$ ${featuresCost}</span></div>`;
    }
    if (calcExpressDelivery) {
      breakdownHtml += `<div class="express-row"><span>Taxa Entrega Expressa</span><span>+25%</span></div>`;
    }
    document.getElementById('summaryBreakdown').innerHTML = breakdownHtml;

    document.getElementById('finalPriceDisplay').textContent = `R$ ${finalPriceEstimate.toLocaleString('pt-BR')}`;
    document.getElementById('deliveryTimeDisplay').textContent = calcExpressDelivery ? '3 a 5 dias úteis' : selectedTypeObj.time;

    const featureNames = calcSelectedFeatures
      .map((id) => availableFeaturesData.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const waText =
      `⚡ *SIMULAÇÃO DE PROJETO - G.I.S TECH*\n\n` +
      `📌 *Tipo de Projeto:* ${selectedTypeObj.name}\n` +
      `📄 *Páginas / Telas:* ${calcPageCount}\n` +
      `✨ *Recursos Opcionais:* ${featureNames || 'Nenhum'}\n` +
      `⏱️ *Prazo Escolhido:* ${calcExpressDelivery ? 'Expressa (3 a 5 dias)' : selectedTypeObj.time}\n` +
      `💰 *Estimativa Calculada:* R$ ${finalPriceEstimate.toLocaleString('pt-BR')}\n\n` +
      `Olá, equipe G.I.S! Gostaria de confirmar esse orçamento e iniciar meu projeto!`;

    document.getElementById('calcWaBtn').href = waLink(waText);
    refreshIcons();
  }

  function initCalculator() {
    renderCalculator();

    document.getElementById('pageCountSlider').addEventListener('input', (e) => {
      calcPageCount = parseInt(e.target.value, 10);
      renderCalculator();
    });

    document.getElementById('expressDeliveryCheckbox').addEventListener('change', (e) => {
      calcExpressDelivery = e.target.checked;
      renderCalculator();
    });
  }

  /* ========================================================================
     COMPARISON SECTION
     ======================================================================== */
  function renderComparison() {
    const withoutList = document.getElementById('comparisonWithoutList');
    const withList = document.getElementById('comparisonWithList');

    withoutList.innerHTML = comparisonsData.map((c) => `
      <li><i data-lucide="x"></i><div><h4>${escapeHtml(c.title)}</h4><p>${escapeHtml(c.without)}</p></div></li>
    `).join('');

    withList.innerHTML = comparisonsData.map((c) => `
      <li><i data-lucide="check"></i><div><h4>${escapeHtml(c.title)}</h4><p>${escapeHtml(c.with)}</p></div></li>
    `).join('');
    refreshIcons();
  }

  /* ========================================================================
     TESTIMONIALS SECTION
     ======================================================================== */
  function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = testimonialsData.map((t) => `
      <div class="testimonial-card">
        <div>
          <div class="testimonial-stars">${'<i data-lucide="star"></i>'.repeat(t.rating)}</div>
          <i data-lucide="quote" class="testimonial-quote-icon"></i>
          <p class="testimonial-text">"${escapeHtml(t.quote)}"</p>
        </div>
        <div class="testimonial-footer">
          <div>
            <h4>${escapeHtml(t.author)}</h4>
            <p>${escapeHtml(t.role)} • <strong>${escapeHtml(t.company)}</strong></p>
            <span class="city">${escapeHtml(t.city)}</span>
          </div>
          <div class="testimonial-check"><i data-lucide="check-circle"></i></div>
        </div>
      </div>
    `).join('');
    refreshIcons();
  }

  /* ========================================================================
     CONTACT SECTION
     ======================================================================== */
  function formatPhoneInput(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (!digits) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  }

  function initContactForm() {
    const phoneInput = document.getElementById('contactPhone');
    phoneInput.addEventListener('input', (e) => {
      e.target.value = formatPhoneInput(e.target.value);
    });

    function buildWaUrl() {
      const name = document.getElementById('contactName').value;
      const phone = document.getElementById('contactPhone').value;
      const company = document.getElementById('contactCompany').value;
      const service = document.getElementById('contactService').value;
      const message = document.getElementById('contactMessage').value;
      const formattedService = serviceLabels[service] || service;

      const waText =
        `🚀 *SOLICITAÇÃO DE ORÇAMENTO - G.I.S CYBER SYSTEMS*\n\n` +
        `👤 *Nome:* ${name}\n` +
        `📱 *WhatsApp:* ${phone}\n` +
        `🏢 *Empresa:* ${company || 'Não informada'}\n` +
        `🛠️ *Serviço de Interesse:* ${formattedService}\n\n` +
        `💬 *Detalhes do Projeto:*\n"${message}"\n\n` +
        `---\n` +
        `Enviado pelo site oficial G.I.S Tech`;
      return waLink(waText);
    }

    const contactForm = document.getElementById('contactForm');
    const successPanel = document.getElementById('contactFormSuccess');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const url = buildWaUrl();
      window.open(url, '_blank');
      document.getElementById('contactSuccessWaBtn').href = url;
      contactForm.hidden = true;
      successPanel.hidden = false;
    });

    document.getElementById('contactSendAnotherBtn').addEventListener('click', () => {
      contactForm.reset();
      successPanel.hidden = true;
      contactForm.hidden = false;
    });
  }

  function renderFaq() {
    const list = document.getElementById('faqList');
    list.innerHTML = faqsData.map((faq, idx) => `
      <div class="faq-item" data-faq-idx="${idx}">
        <button class="faq-question">
          <span>${escapeHtml(faq.q)}</span>
          <i data-lucide="chevron-down"></i>
        </button>
        <div class="faq-answer" hidden>${escapeHtml(faq.a)}</div>
      </div>
    `).join('');

    let openIdx = 0;
    function updateFaq() {
      list.querySelectorAll('.faq-item').forEach((item) => {
        const idx = parseInt(item.getAttribute('data-faq-idx'), 10);
        const isOpen = idx === openIdx;
        const answer = item.querySelector('.faq-answer');
        answer.hidden = !isOpen;
        item.classList.toggle('open', isOpen);
      });
    }

    list.querySelectorAll('.faq-question').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.closest('.faq-item').getAttribute('data-faq-idx'), 10);
        openIdx = openIdx === idx ? null : idx;
        updateFaq();
      });
    });

    updateFaq();
  }

  /* ========================================================================
     AI CONSULTANT MODAL (client-side rule-based simulation)
     ======================================================================== */
  function generateAiConsultantResult({ businessName, businessType, goal, requestedFeatures }) {
    const typeText = (businessType || '').toLowerCase();
    let recommendedType = 'Site Institucional de Alta Conversão';
    if (/restaurante|comida|delivery|lanchonete|pizzaria|hamburgueria/.test(typeText)) {
      recommendedType = 'Sistema de Pedidos Online + Cardápio Digital';
    } else if (/loja|produto|roupa|comércio|e-commerce|ecommerce/.test(typeText)) {
      recommendedType = 'Loja Virtual E-commerce Completa';
    } else if (/agend|clínica|salão|barbearia|consultório/.test(typeText)) {
      recommendedType = 'Sistema Web de Agendamentos & Gestão';
    }

    return {
      recommendedType,
      estimatedTime: '7 a 12 dias úteis',
      recommendedStack: ['React/Vite', 'Tailwind CSS', 'WhatsApp Business API', 'Pix Automático'],
      keyFeatures: [
        'Design responsivo mobile-first',
        'Integração direta com WhatsApp para fechamento rápido',
        'Painel do gestor para acompanhamento de chamados e pedidos',
        'Otimização SEO para aparecer no Google'
      ],
      proposalSummary: `Recomendamos para a ${businessName || 'sua empresa'} uma solução focada em velocidade, design elegante e captação direta de clientes no WhatsApp${goal ? `, com foco especial em ${goal.toLowerCase()}` : ''}.`,
      suggestedPlan: 'Plano Profissional G.I.S',
      reasoning: `Baseado no ramo "${businessType || 'geral'}" e no objetivo informado, a estrutura recomendada maximiza conversão e reduz custos operacionais.`
    };
  }

  function initAiConsultantModal() {
    const form = document.getElementById('aiConsultantForm');
    const resultPanel = document.getElementById('aiResultPanel');
    const submitBtn = document.getElementById('aiSubmitBtn');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const businessName = document.getElementById('aiBusinessName').value;
      const businessType = document.getElementById('aiBusinessType').value;
      const goal = document.getElementById('aiGoal').value;
      const requestedFeatures = document.getElementById('aiFeatures').value;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i data-lucide="loader-2" style="animation: spin 1s linear infinite;"></i><span>Analisando Requisitos Tecnológicos...</span>';
      refreshIcons();

      setTimeout(() => {
        const result = generateAiConsultantResult({ businessName, businessType, goal, requestedFeatures });
        showAiResult(result, businessName);

        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i data-lucide="sparkles"></i><span>Gerar Recomendação de Arquitetura</span>';
        refreshIcons();
      }, 900);
    });

    document.getElementById('aiNewAnalysisBtn').addEventListener('click', () => {
      resultPanel.hidden = true;
      form.hidden = false;
    });

    function showAiResult(result, businessName) {
      form.hidden = true;
      resultPanel.hidden = false;

      document.getElementById('aiSuggestedPlan').textContent = result.suggestedPlan;
      document.getElementById('aiRecommendedType').textContent = result.recommendedType;
      document.getElementById('aiProposalSummary').textContent = result.proposalSummary;
      document.getElementById('aiEstimatedTime').textContent = result.estimatedTime;
      document.getElementById('aiKeyFeatures').innerHTML = result.keyFeatures.map((f) => `
        <li><i data-lucide="check-circle-2"></i><span>${escapeHtml(f)}</span></li>
      `).join('');

      document.getElementById('aiWaBtn').href = waLink(
        `🤖 *ANÁLISE DO CONSULTOR IA - G.I.S*\n\n` +
        `🏢 *Empresa:* ${businessName}\n` +
        `💡 *Solução Recomendada:* ${result.recommendedType}\n` +
        `🎯 *Resumo:* ${result.reasoning}\n\n` +
        `Olá, equipe G.I.S! Fiz uma análise com o Consultor IA do site e gostaria de solicitar esse projeto para o meu negócio.`
      );
      refreshIcons();
    }
  }

  /* ========================================================================
     FOOTER
     ======================================================================== */
  function initFooter() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('scrollTopBtn').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ========================================================================
     INIT
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    refreshIcons();
    initHeader();
    initModalCloseButtons();
    initLogoFallbacks();
    initLogoEnergyBurst();

    renderServiceFilters();
    renderServicesGrid();

    initOrderSystemDemo();

    renderPortfolioFilters();
    renderPortfolioGrid();
    initPortfolioModalControls();

    initCalculator();
    renderComparison();
    renderTestimonials();
    initContactForm();
    renderFaq();
    initAiConsultantModal();
    initFooter();

    refreshIcons();
  });

  // Simple spin keyframes for loader icon (injected once)
  const styleTag = document.createElement('style');
  styleTag.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
  document.head.appendChild(styleTag);
})();