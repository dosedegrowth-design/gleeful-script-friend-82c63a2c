// Static PT→EN/ES dictionary covering all visible UI text.
// Keys are the EXACT trimmed Portuguese strings found in the JSX.
// Values are translations applied at runtime by the DOM walker.

export type Lang = "pt" | "en" | "es";

export const DICT: Record<string, { en: string; es: string }> = {
  // ---------- NAV ----------
  "Como funciona": { en: "How it works", es: "Cómo funciona" },
  "Serviços": { en: "Services", es: "Servicios" },
  "Assessment": { en: "Assessment", es: "Assessment" },
  "Blog": { en: "Blog", es: "Blog" },
  "Contacto": { en: "Contact", es: "Contacto" },
  "Avaliar o meu caso": { en: "Evaluate my case", es: "Evaluar mi caso" },
  "Menu": { en: "Menu", es: "Menú" },

  // ---------- HERO / MARQUEE ----------
  "Coordenação Internacional de Vida e Património": { en: "International Coordination of Life and Wealth", es: "Coordinación Internacional de Vida y Patrimonio" },
  "Você não precisa": { en: "You don't need", es: "No necesitas" },
  "de mais informação.": { en: "more information.", es: "más información." },
  "Precisa de alguém": { en: "You need someone", es: "Necesitas a alguien" },
  "que coordene": { en: "to coordinate", es: "que coordine" },
  "a decisão.": { en: "the decision.", es: "la decisión." },
  "A MOOVIA Portugal não resolve tarefas isoladas. Coordenação completa, do primeiro diagnóstico aos 90 dias depois da chegada.":
    { en: "MOOVIA Portugal does not solve isolated tasks. Complete coordination, from the first diagnosis to 90 days after arrival.", es: "MOOVIA Portugal no resuelve tareas aisladas. Coordinación completa, desde el primer diagnóstico hasta 90 días después de la llegada." },
  "Ver como funciona": { en: "See how it works", es: "Ver cómo funciona" },
  "Planear · Chegar · Ficar": { en: "Plan · Arrive · Stay", es: "Planear · Llegar · Quedarse" },
  "Capítulo 01": { en: "Chapter 01", es: "Capítulo 01" },
  "Mandato de transição": { en: "Transition mandate", es: "Mandato de transición" },
  "Transição Internacional": { en: "International Transition", es: "Transición Internacional" },
  "Brasil para Portugal": { en: "Brazil to Portugal", es: "Brasil a Portugal" },
  "Coordenação de Vida e Património": { en: "Life & Wealth Coordination", es: "Coordinación de Vida y Patrimonio" },
  "Strategic Assessment": { en: "Strategic Assessment", es: "Strategic Assessment" },
  "Mandato Personalizado": { en: "Personalized Mandate", es: "Mandato Personalizado" },
  "90 dias Pós-chegada": { en: "90 days Post-arrival", es: "90 días Post-llegada" },
  "School Matching": { en: "School Matching", es: "School Matching" },
  "Fiscalidade Internacional": { en: "International Taxation", es: "Fiscalidad Internacional" },

  // ---------- PROBLEM ----------
  "O mercado resolve tarefas": { en: "The market solves tasks", es: "El mercado resuelve tareas" },
  "O problema não é a burocracia.": { en: "The problem is not bureaucracy.", es: "El problema no es la burocracia." },
  "É que ninguém coordena o todo.": { en: "It's that no one coordinates the whole.", es: "Es que nadie coordina el todo." },
  "Você tem um advogado para o visto, um corretor para o imóvel, uma escola para os filhos, um contador para o NIF. Cada um no seu quadrado. E você no meio tentando fazer tudo encaixar numa das decisões mais complexas da sua vida.":
    { en: "You have a lawyer for the visa, a broker for the property, a school for the kids, an accountant for the NIF. Each in their own box. And you in the middle trying to fit everything together in one of the most complex decisions of your life.", es: "Tienes un abogado para el visado, un agente para el inmueble, un colegio para los hijos, un contable para el NIF. Cada uno en su cuadrado. Y tú en medio intentando encajar todo en una de las decisiones más complejas de tu vida." },
  "Decisões simultâneas": { en: "Simultaneous decisions", es: "Decisiones simultáneas" },
  "O tempo não é o maior problema. É tomar dez decisões simultâneas sem ter feito nenhuma delas antes.":
    { en: "Time is not the biggest problem. It's making ten simultaneous decisions without having made any of them before.", es: "El tiempo no es el mayor problema. Es tomar diez decisiones simultáneas sin haber hecho ninguna antes." },
  "Volume de informação": { en: "Volume of information", es: "Volumen de información" },
  "Informação demais, clareza de menos": { en: "Too much information, too little clarity", es: "Demasiada información, poca claridad" },
  "Grupos de WhatsApp, YouTube, advogados e corretores dizem coisas diferentes. O volume de informação não resolve a decisão, cria mais dúvida.":
    { en: "WhatsApp groups, YouTube, lawyers and brokers all say different things. Volume of information does not solve the decision, it creates more doubt.", es: "Grupos de WhatsApp, YouTube, abogados y corredores dicen cosas diferentes. El volumen de información no resuelve la decisión, crea más dudas." },
  "Riscos invisíveis": { en: "Invisible risks", es: "Riesgos invisibles" },
  "Erros que custam": { en: "Mistakes that cost", es: "Errores que cuestan" },
  "Apartamento no bairro errado. Escola sem vaga. Uma rotina mal estruturada para a família. Cada erro custa dinheiro, tempo e energia que a família não tem.":
    { en: "Apartment in the wrong neighborhood. School with no spot. A poorly structured routine for the family. Each mistake costs money, time and energy the family doesn't have.", es: "Apartamento en el barrio equivocado. Colegio sin plaza. Una rutina mal estructurada para la familia. Cada error cuesta dinero, tiempo y energía que la familia no tiene." },
  "Adaptação estruturada": { en: "Structured adaptation", es: "Adaptación estructurada" },
  "O depois que ninguém resolve": { en: "The aftermath nobody solves", es: "El después que nadie resuelve" },
  "Chegar é metade do processo. A adaptação, do cônjuge que largou a carreira, das crianças na nova escola, da rotina reconstruída, exige acompanhamento real.":
    { en: "Arriving is half the process. Adaptation — of the spouse who left their career, of the children in a new school, of the rebuilt routine — requires real support.", es: "Llegar es la mitad del proceso. La adaptación — del cónyuge que dejó su carrera, de los hijos en la nueva escuela, de la rutina reconstruida — exige acompañamiento real." },
  "O mercado resolve tarefas.": { en: "The market solves tasks.", es: "El mercado resuelve tareas." },
  "A MOOVIA resolve a decisão.": { en: "MOOVIA solves the decision.", es: "MOOVIA resuelve la decisión." },

  // ---------- FOUNDERS ----------
  "Os fundadores são o produto": { en: "The founders are the product", es: "Los fundadores son el producto" },
  "\"Antes de coordenar": { en: "\"Before coordinating", es: "\"Antes de coordinar" },
  "transições internacionais,": { en: "international transitions,", es: "transiciones internacionales," },
  "vivemos as nossas.\"": { en: "we lived our own.\"", es: "vivimos las nuestras.\"" },
  "Background de Deloitte, Oracle e SAP. Cada sócio passou pelo processo que coordenamos. Essa experiência não é marketing: é o único diferencial que nenhum concorrente consegue replicar.":
    { en: "Background at Deloitte, Oracle and SAP. Each partner has been through the process we coordinate. That experience is not marketing: it's the only differentiator no competitor can replicate.", es: "Trayectoria en Deloitte, Oracle y SAP. Cada socio pasó por el proceso que coordinamos. Esa experiencia no es marketing: es el único diferencial que ningún competidor logra replicar." },
  "Founder & CEO": { en: "Founder & CEO", es: "Founder & CEO" },
  "Co-Founder & CFO": { en: "Co-Founder & CFO", es: "Co-Founder & CFO" },
  "Co-Founder": { en: "Co-Founder", es: "Co-Founder" },
  "29 anos em TI multinacional. MBA em Empreendedorismo FGV. Formação em Comunicação na University of Tampa. Em Lisboa desde 2018 com a família. Viveu a transição que hoje coordena e conduz pessoalmente cada mandato.":
    { en: "29 years in multinational IT. MBA in Entrepreneurship at FGV. Communications studies at the University of Tampa. In Lisbon since 2018 with his family. He has lived the transition he now coordinates and personally leads every mandate.", es: "29 años en TI multinacional. MBA en Emprendimiento FGV. Formación en Comunicación en la University of Tampa. En Lisboa desde 2018 con su familia. Vivió la transición que hoy coordina y conduce personalmente cada mandato." },
  "Vamos coordenar a sua transição internacional com o mesmo nível de cuidado, estrutura e atenção que gostaríamos de ter recebido na nossa.":
    { en: "We will coordinate your international transition with the same level of care, structure and attention we would have liked to receive in ours.", es: "Coordinaremos tu transición internacional con el mismo nivel de cuidado, estructura y atención que nos habría gustado recibir en la nuestra." },
  "Com trajetória internacional iniciada aos 17 anos, lidera as áreas financeira e tecnológica da MOOVIA. Mestrando em Engenharia Mecânica no Instituto Superior Técnico, assegura que cada mandato seja estruturado com eficiência, previsibilidade e visão de longo prazo.":
    { en: "With an international trajectory begun at 17, he leads MOOVIA's financial and technology areas. Master's candidate in Mechanical Engineering at Instituto Superior Técnico, he ensures every mandate is structured with efficiency, predictability and long-term vision.", es: "Con una trayectoria internacional iniciada a los 17 años, lidera las áreas financiera y tecnológica de MOOVIA. Maestrando en Ingeniería Mecánica en el Instituto Superior Técnico, asegura que cada mandato se estructure con eficiencia, previsibilidad y visión a largo plazo." },
  "Estruturamos cada mandato com a precisão de engenharia e a previsibilidade financeira que uma decisão desta dimensão exige.":
    { en: "We structure every mandate with engineering precision and the financial predictability a decision of this size demands.", es: "Estructuramos cada mandato con la precisión de la ingeniería y la previsibilidad financiera que una decisión de esta dimensión exige." },
  "Engenharia Mecânica": { en: "Mechanical Engineering", es: "Ingeniería Mecánica" },
  "Europa desde os 17": { en: "Europe since 17", es: "Europa desde los 17" },
  "Lisboa, 2018": { en: "Lisbon, 2018", es: "Lisboa, 2018" },
  "Equipa": { en: "Team", es: "Equipo" },
  "As pessoas que conduzem cada mandato.": { en: "The people who lead every mandate.", es: "Las personas que conducen cada mandato." },
  "Head of Operations": { en: "Head of Operations", es: "Head of Operations" },
  "Legal & Compliance": { en: "Legal & Compliance", es: "Legal & Compliance" },
  "Relocation Lead": { en: "Relocation Lead", es: "Relocation Lead" },
  "Client Experience": { en: "Client Experience", es: "Client Experience" },

  // ---------- TEAM ----------
  "A equipa que coordena a sua jornada.": { en: "The team that coordinates your journey.", es: "El equipo que coordina tu trayecto." },
  "Cada membro da MOOVIA foi escolhido pela profundidade da experiência, não pelo tamanho do currículo. São as pessoas certas para as decisões que importam.":
    { en: "Each MOOVIA member was chosen for the depth of their experience, not the length of their CV. They are the right people for the decisions that matter.", es: "Cada miembro de MOOVIA fue elegido por la profundidad de su experiencia, no por el tamaño de su currículum. Son las personas adecuadas para las decisiones que importan." },
  "Conselheiro Estratégico": { en: "Strategic Advisor", es: "Asesor Estratégico" },
  "Strategic Relocation Advisor": { en: "Strategic Relocation Advisor", es: "Strategic Relocation Advisor" },
  "Education & Family Transition Advisor": { en: "Education & Family Transition Advisor", es: "Education & Family Transition Advisor" },
  "Mobilidade Internacional": { en: "International Mobility", es: "Movilidad Internacional" },
  "Real Estate Specialist": { en: "Real Estate Specialist", es: "Real Estate Specialist" },
  "Advogado na Abreu Advogados em Corporate e M&A. Pós-graduações CIDP em Corporate Finance e M&A. O braço jurídico da MOOVIA no ecossistema português.":
    { en: "Lawyer at Abreu Advogados in Corporate and M&A. CIDP postgraduate studies in Corporate Finance and M&A. MOOVIA's legal arm in the Portuguese ecosystem.", es: "Abogado en Abreu Advogados en Corporate y M&A. Posgrados CIDP en Corporate Finance y M&A. El brazo jurídico de MOOVIA en el ecosistema portugués." },
  "25+ anos em tecnologia corporativa nas maiores empresas do setor, com especialização na indústria seguradora. Liderou equipas de alta performance e operações C-Level globais.":
    { en: "25+ years in corporate technology at the sector's largest firms, specialized in the insurance industry. Led high-performance teams and global C-Level operations.", es: "25+ años en tecnología corporativa en las mayores empresas del sector, con especialización en la industria aseguradora. Lideró equipos de alto rendimiento y operaciones C-Level globales." },
  "VP Global Sales na ADLS. Professor de MBA, palestrante internacional e investidor imobiliário em Santa Catarina. Fluente em PT, EN e ES.":
    { en: "VP Global Sales at ADLS. MBA professor, international speaker and real estate investor in Santa Catarina. Fluent in PT, EN and ES.", es: "VP Global Sales en ADLS. Profesor de MBA, conferencista internacional e inversor inmobiliario en Santa Catarina. Fluido en PT, EN y ES." },
  "18 anos como Chief Legal Officer da CID Records. Especialista no acompanhamento de estudantes e famílias em transição para Portugal.":
    { en: "18 years as Chief Legal Officer at CID Records. Specialist in supporting students and families transitioning to Portugal.", es: "18 años como Chief Legal Officer de CID Records. Especialista en el acompañamiento de estudiantes y familias en transición a Portugal." },
  "Mestre em Direito pela ULisboa, com Erasmus em Itália e República Tcheca. Especialista em imigração, nacionalidade e regularização documental.":
    { en: "Master in Law from ULisboa, with Erasmus in Italy and the Czech Republic. Specialist in immigration, nationality and documentary regularization.", es: "Máster en Derecho por la ULisboa, con Erasmus en Italia y la República Checa. Especialista en inmigración, nacionalidad y regularización documental." },
  "Mais de 10 anos no mercado imobiliário português. Especialista RE/MAX Collection. Habitação a partir de €1.500/mês.":
    { en: "Over 10 years in the Portuguese real estate market. RE/MAX Collection specialist. Housing from €1,500/month.", es: "Más de 10 años en el mercado inmobiliario portugués. Especialista RE/MAX Collection. Vivienda desde €1.500/mes." },

  // ---------- PROCESS ----------
  "Como trabalhamos": { en: "How we work", es: "Cómo trabajamos" },
  "\"Um processo.": { en: "\"One process.", es: "\"Un proceso." },
  "Do diagnóstico ao destino.\"": { en: "From diagnosis to destination.\"", es: "Del diagnóstico al destino.\"" },
  "Sem custo · Calendly": { en: "No cost · Calendly", es: "Sin coste · Calendly" },
  "Entendemos o seu contexto": { en: "We understand your context", es: "Entendemos tu contexto" },
  "Uma conversa direta com o founder, sem script, sem chatbot. Validamos o fit e mostramos como a MOOVIA pensa o seu caso.":
    { en: "A direct conversation with the founder — no script, no chatbot. We validate the fit and show how MOOVIA thinks about your case.", es: "Una conversación directa con el founder, sin script, sin chatbot. Validamos el fit y mostramos cómo MOOVIA piensa tu caso." },
  "Sem custo · Agendamento via Calendly": { en: "No cost · Scheduling via Calendly", es: "Sin coste · Agenda vía Calendly" },
  "Diagnóstico": { en: "Diagnosis", es: "Diagnóstico" },
  "O primeiro trabalho real": { en: "The first real piece of work", es: "El primer trabajo real" },
  "90 minutos com entregável físico. Mapeamento completo de perfil, riscos, estratégias e cronograma. Não é consulta: é diagnóstico.":
    { en: "90 minutes with a physical deliverable. Complete mapping of profile, risks, strategies and timeline. It's not a consultation: it's a diagnosis.", es: "90 minutos con entregable físico. Mapeo completo de perfil, riesgos, estrategias y cronograma. No es consulta: es diagnóstico." },
  "Entregável físico": { en: "Physical deliverable", es: "Entregable físico" },
  "Sob medida": { en: "Tailor-made", es: "A medida" },
  "Coordenação completa": { en: "Complete coordination", es: "Coordinación completa" },
  "Do visto ao apartamento, da escola ao banco. Um único ponto de responsabilidade para a decisão mais importante da sua família.":
    { en: "From the visa to the apartment, from the school to the bank. A single point of responsibility for your family's most important decision.", es: "Del visado al apartamento, del colegio al banco. Un único punto de responsabilidad para la decisión más importante de tu familia." },
  "Mandato completo": { en: "Full mandate", es: "Mandato completo" },
  "Único no mercado": { en: "Unique in the market", es: "Único en el mercado" },
  "Chegar é metade": { en: "Arriving is half", es: "Llegar es la mitad" },
  "Os 90 dias após o pouso são os mais críticos. Adaptação familiar, rotina, integração. Nenhum concorrente acompanha este período de forma estruturada.":
    { en: "The 90 days after landing are the most critical. Family adaptation, routine, integration. No competitor supports this period in a structured way.", es: "Los 90 días tras el aterrizaje son los más críticos. Adaptación familiar, rutina, integración. Ningún competidor acompaña este período de forma estructurada." },
  "Pós-chegada": { en: "Post-arrival", es: "Post-llegada" },

  // ---------- ASSESSMENT ----------
  "Strategic Relocation Assessment": { en: "Strategic Relocation Assessment", es: "Strategic Relocation Assessment" },
  "\"O diagnóstico que organiza": { en: "\"The diagnosis that organizes", es: "\"El diagnóstico que organiza" },
  "o que você não sabia": { en: "what you didn't know", es: "lo que no sabías" },
  "que precisava organizar.\"": { en: "you needed to organize.\"", es: "que necesitabas organizar.\"" },
  "Não é uma consulta. É o primeiro trabalho estratégico da MOOVIA, com entregável físico, que mapeia tudo o que precisa ser decidido antes de comprar a passagem.":
    { en: "It's not a consultation. It's MOOVIA's first strategic deliverable — a physical document that maps everything that must be decided before booking the flight.", es: "No es una consulta. Es el primer trabajo estratégico de MOOVIA, con entregable físico, que mapea todo lo que hay que decidir antes de comprar el billete." },
  "A maioria das pessoas chega a Portugal sem ter respondido as perguntas certas. Nós construímos o mapa antes da viagem.":
    { en: "Most people arrive in Portugal without having answered the right questions. We build the map before the trip.", es: "La mayoría de personas llega a Portugal sin haber respondido las preguntas correctas. Nosotros construimos el mapa antes del viaje." },
  "90 minutos estruturados": { en: "90 structured minutes", es: "90 minutos estructurados" },
  "Entregável físico que você leva": { en: "Physical deliverable you take with you", es: "Entregable físico que te llevas" },
  "€250 abatidos no mandato": { en: "€250 deducted from the mandate", es: "€250 descontados del mandato" },
  "Diretamente com o founder": { en: "Directly with the founder", es: "Directamente con el founder" },
  "90 minutos · Entregável físico": { en: "90 minutes · Physical deliverable", es: "90 minutos · Entregable físico" },
  "Mapa de decisão personalizado": { en: "Personalized decision map", es: "Mapa de decisión personalizado" },
  "Estratégia de habitação": { en: "Housing strategy", es: "Estrategia de vivienda" },
  "Estratégia documental e migratória": { en: "Documentary and migration strategy", es: "Estrategia documental y migratoria" },
  "Estratégia familiar e escolar": { en: "Family and school strategy", es: "Estrategia familiar y escolar" },
  "Estrutura fiscal inicial": { en: "Initial tax structure", es: "Estructura fiscal inicial" },
  "Plano de próximos passos com cronograma": { en: "Next-steps plan with timeline", es: "Plan de próximos pasos con cronograma" },
  "Entregável físico: documento que você leva": { en: "Physical deliverable: a document you take with you", es: "Entregable físico: documento que te llevas" },
  "Solicitar Assessment": { en: "Request Assessment", es: "Solicitar Assessment" },

  // ---------- PILLARS ----------
  "Quatro pilares": { en: "Four pillars", es: "Cuatro pilares" },
  "\"Uma jornada completa.\"": { en: "\"A complete journey.\"", es: "\"Un trayecto completo.\"" },
  "Não resolvemos tarefas isoladas. Coordenamos a jornada inteira, do planejamento à estruturação da vida em Portugal.":
    { en: "We don't solve isolated tasks. We coordinate the entire journey, from planning to structuring life in Portugal.", es: "No resolvemos tareas aisladas. Coordinamos el trayecto entero, desde la planificación hasta la estructuración de la vida en Portugal." },
  "Planejamos": { en: "We Plan", es: "Planificamos" },
  "Instalamos": { en: "We Install", es: "Instalamos" },
  "Integramos": { en: "We Integrate", es: "Integramos" },
  "Estruturamos": { en: "We Structure", es: "Estructuramos" },
  "\"Tomar as decisões certas antes de mudar.\"": { en: "\"Make the right decisions before moving.\"", es: "\"Tomar las decisiones correctas antes de mudarse.\"" },
  "\"Tudo que precisa para chegar e ficar legalmente instalado.\"": { en: "\"Everything you need to arrive and be legally settled.\"", es: "\"Todo lo que necesitas para llegar y quedar legalmente instalado.\"" },
  "\"Transformando uma mudança numa transição de vida.\"": { en: "\"Turning a move into a life transition.\"", es: "\"Transformando una mudanza en una transición de vida.\"" },
  "\"Para quem quer estruturar a vida financeira em Portugal.\"": { en: "\"For those who want to structure their financial life in Portugal.\"", es: "\"Para quienes quieren estructurar la vida financiera en Portugal.\"" },
  "Plano Estratégico de Transição Internacional": { en: "Strategic International Transition Plan", es: "Plan Estratégico de Transición Internacional" },
  "Família legalmente instalada e operando": { en: "Family legally settled and operating", es: "Familia legalmente instalada y operando" },
  "Uma mudança que vira transição de vida": { en: "A move that becomes a life transition", es: "Una mudanza que se convierte en transición de vida" },
  "Vida financeira estruturada e em conformidade": { en: "Financial life structured and compliant", es: "Vida financiera estructurada y en conformidad" },
  "Resultado:": { en: "Result:", es: "Resultado:" },
  "Diagnóstico Habitacional": { en: "Housing Diagnosis", es: "Diagnóstico Habitacional" },
  "Diagnóstico Educacional": { en: "Educational Diagnosis", es: "Diagnóstico Educacional" },
  "Diagnóstico Documental": { en: "Documentary Diagnosis", es: "Diagnóstico Documental" },
  "Diagnóstico Fiscal": { en: "Tax Diagnosis", es: "Diagnóstico Fiscal" },
  "Mapa de Decisão": { en: "Decision Map", es: "Mapa de Decisión" },
  "Estratégia Migratória": { en: "Migration Strategy", es: "Estrategia Migratoria" },
  "Planeamento Fiscal": { en: "Tax Planning", es: "Planificación Fiscal" },
  "City Experience": { en: "City Experience", es: "City Experience" },
  "Exploração de Bairros": { en: "Neighborhood Exploration", es: "Exploración de Barrios" },
  "Planeamento Habitacional": { en: "Housing Planning", es: "Planificación de Vivienda" },
  "Avaliação de Crédito": { en: "Credit Assessment", es: "Evaluación de Crédito" },
  "Habitação (Busca Ativa, Airbnb Hunting, Visitas, Negociação)": { en: "Housing (Active Search, Airbnb Hunting, Visits, Negotiation)", es: "Vivienda (Búsqueda Activa, Airbnb Hunting, Visitas, Negociación)" },
  "Número de Utente": { en: "Health Number (Utente)", es: "Número de Utente" },
  "Conta Bancária": { en: "Bank Account", es: "Cuenta Bancaria" },
  "Carta de Condução": { en: "Driver's License", es: "Carnet de Conducir" },
  "Passe Navegante": { en: "Navegante Transit Pass", es: "Pase Navegante" },
  "Abertura de Atividade": { en: "Activity Opening", es: "Apertura de Actividad" },
  "Recibos Verdes": { en: "Green Receipts", es: "Recibos Verdes" },
  "Estatuto de Igualdade": { en: "Equality Statute", es: "Estatuto de Igualdad" },
  "Airport Pick-up": { en: "Airport Pick-up", es: "Recogida en Aeropuerto" },
  "Concierge completo": { en: "Full Concierge", es: "Concierge completo" },
  "Água": { en: "Water", es: "Agua" },
  "Gás": { en: "Gas", es: "Gas" },
  "Luz": { en: "Electricity", es: "Luz" },
  "Internet": { en: "Internet", es: "Internet" },
  "Ginásio": { en: "Gym", es: "Gimnasio" },
  "Traduções Certificadas": { en: "Certified Translations", es: "Traducciones Certificadas" },
  "Equivalências de Diplomas": { en: "Diploma Equivalencies", es: "Equivalencias de Títulos" },
  "School Matching Nacional": { en: "National School Matching", es: "School Matching Nacional" },
  "School Matching Internacional": { en: "International School Matching", es: "School Matching Internacional" },
  "Gestão de Matrículas": { en: "Enrollment Management", es: "Gestión de Matrículas" },
  "Adaptação Familiar 30 dias": { en: "30-day Family Adaptation", es: "Adaptación Familiar 30 días" },
  "Adaptação 60 dias": { en: "60-day Adaptation", es: "Adaptación 60 días" },
  "Adaptação 90 dias": { en: "90-day Adaptation", es: "Adaptación 90 días" },
  "Pet Relocation (TAP/Lufthansa, CVI, VIGIAGRO, recepção)": { en: "Pet Relocation (TAP/Lufthansa, CVI, VIGIAGRO, reception)", es: "Pet Relocation (TAP/Lufthansa, CVI, VIGIAGRO, recepción)" },
  "Lisboa Experience Premium": { en: "Lisbon Premium Experience", es: "Lisboa Experience Premium" },
  "City Tour Estratégico": { en: "Strategic City Tour", es: "City Tour Estratégico" },
  "Integração Cultural": { en: "Cultural Integration", es: "Integración Cultural" },
  "Enquadramento Fiscal": { en: "Tax Framework", es: "Encuadre Fiscal" },
  "Simulação de Rendimentos Líquidos": { en: "Net Income Simulation", es: "Simulación de Ingresos Netos" },
  "Abertura e Encerramento de Atividade": { en: "Opening and Closing of Activity", es: "Apertura y Cierre de Actividad" },
  "Primeira Declaração IRS": { en: "First IRS Declaration", es: "Primera Declaración IRS" },
  "Declaração Anual IRS": { en: "Annual IRS Declaration", es: "Declaración Anual IRS" },
  "Regularização Fiscal": { en: "Tax Regularization", es: "Regularización Fiscal" },
  "Representação Fiscal para Não Residentes": { en: "Tax Representation for Non-Residents", es: "Representación Fiscal para No Residentes" },
  "Planeamento Internacional": { en: "International Planning", es: "Planificación Internacional" },
  "Dupla Tributação": { en: "Double Taxation", es: "Doble Tributación" },
  "Segurança Social": { en: "Social Security", es: "Seguridad Social" },
  "Constituição de Empresa": { en: "Company Incorporation", es: "Constitución de Empresa" },
  "Contabilidade Mensal ENI": { en: "Monthly Accounting (ENI)", es: "Contabilidad Mensual ENI" },
  "Contabilidade Mensal Lda": { en: "Monthly Accounting (Lda)", es: "Contabilidad Mensual Lda" },
  "Processamento Salarial": { en: "Payroll Processing", es: "Procesamiento Salarial" },
  "Estruturação Societária": { en: "Corporate Structuring", es: "Estructuración Societaria" },
  "Estruturação Patrimonial": { en: "Wealth Structuring", es: "Estructuración Patrimonial" },
  "Planeamento de Investimentos": { en: "Investment Planning", es: "Planificación de Inversiones" },
  "Apoio a Investidores": { en: "Investor Support", es: "Apoyo a Inversores" },

  // ---------- MANIFESTO ----------
  "A posição da marca": { en: "The brand position", es: "La posición de la marca" },
  "\"Acompanhamos um número limitado": { en: "\"We support a limited number", es: "\"Acompañamos un número limitado" },
  "de mandatos em simultâneo.\"": { en: "of mandates at a time.\"", es: "de mandatos simultáneamente.\"" },
  "Não por limitação operacional, porque acreditamos que decisões desta importância exigem acompanhamento próximo, coordenação ativa e atenção individual. Para preservar este nível, aceitamos apenas o número de novos mandatos que conseguimos coordenar com a qualidade que a decisão exige.":
    { en: "Not because of operational limitation, but because we believe decisions of this importance require close support, active coordination and individual attention. To preserve this standard, we accept only the number of new mandates we can coordinate with the quality the decision demands.", es: "No por limitación operativa, sino porque creemos que decisiones de esta importancia exigen acompañamiento cercano, coordinación activa y atención individual. Para preservar este nivel, aceptamos solo el número de mandatos nuevos que podemos coordinar con la calidad que la decisión exige." },
  "Se o seu caso merece isso, este é o lugar.": { en: "If your case deserves this, this is the place.", es: "Si tu caso lo merece, este es el lugar." },
  "Atendemos famílias internacionais em todas as suas formas.": { en: "We serve international families in all their forms.", es: "Atendemos familias internacionales en todas sus formas." },

  // ---------- BLOG TEASER ----------
  "Conteúdo estratégico": { en: "Strategic content", es: "Contenido estratégico" },
  "\"O que você precisa entender": { en: "\"What you need to understand", es: "\"Lo que necesitas entender" },
  "antes de decidir.\"": { en: "before deciding.\"", es: "antes de decidir.\"" },
  "Artigos escritos pela equipa da MOOVIA sobre os temas que mais impactam a jornada de transição internacional.":
    { en: "Articles written by MOOVIA's team on the topics that most impact the international transition journey.", es: "Artículos escritos por el equipo de MOOVIA sobre los temas que más impactan el trayecto de transición internacional." },
  "Ver todos os artigos": { en: "View all articles", es: "Ver todos los artículos" },
  "Visto": { en: "Visa", es: "Visado" },
  "Visto D3, D2 ou D7: qual é o certo para o seu perfil?": { en: "Visa D3, D2 or D7: which is right for your profile?", es: "Visado D3, D2 o D7: ¿cuál es el correcto para tu perfil?" },
  "A escolha do visto define o cronograma inteiro da sua mudança. Entender a diferença antes de contratar qualquer advogado é o primeiro passo para não perder tempo e dinheiro.":
    { en: "Choosing the visa defines your entire moving timeline. Understanding the difference before hiring any lawyer is the first step to not waste time and money.", es: "Elegir el visado define todo el cronograma de tu mudanza. Entender la diferencia antes de contratar a cualquier abogado es el primer paso para no perder tiempo y dinero." },
  "Fiscalidade": { en: "Taxation", es: "Fiscalidad" },
  "Como funciona a tributação para brasileiros em Portugal em 2026": { en: "How taxation works for Brazilians in Portugal in 2026", es: "Cómo funciona la tributación para brasileños en Portugal en 2026" },
  "O RNH acabou. O IFICI chegou. O que muda para quem pretende se mudar em 2026 e como estruturar a chegada para pagar menos imposto legalmente.":
    { en: "RNH is over. IFICI has arrived. What changes for those moving in 2026 and how to structure arrival to legally pay less tax.", es: "El RNH terminó. Llegó el IFICI. Qué cambia para quienes piensan mudarse en 2026 y cómo estructurar la llegada para pagar menos impuestos legalmente." },
  "Habitação": { en: "Housing", es: "Vivienda" },
  "Quanto custa morar em Lisboa em 2026: bairro por bairro": { en: "Cost of living in Lisbon in 2026: neighborhood by neighborhood", es: "Cuánto cuesta vivir en Lisboa en 2026: barrio por barrio" },
  "Os preços mudaram. Parque das Nações, Cascais, Almada: onde fica o melhor custo-benefício para quem chega com família.":
    { en: "Prices have changed. Parque das Nações, Cascais, Almada: where is the best value for those arriving with family.", es: "Los precios cambiaron. Parque das Nações, Cascais, Almada: dónde está la mejor relación calidad-precio para quienes llegan con familia." },

  // ---------- FAQ ----------
  "Perguntas frequentes": { en: "Frequently asked questions", es: "Preguntas frecuentes" },
  "O que as pessoas perguntam": { en: "What people ask", es: "Lo que la gente pregunta" },
  "antes de decidir.": { en: "before deciding.", es: "antes de decidir." },
  "O que exatamente a MOOVIA Portugal faz?": { en: "What exactly does MOOVIA Portugal do?", es: "¿Qué hace exactamente MOOVIA Portugal?" },
  "A MOOVIA Portugal coordena a jornada completa de transição internacional, do diagnóstico estratégico até os 90 dias após a chegada. Não somos uma empresa de imigração, não somos uma imobiliária, não somos uma escola. Somos o único ponto de responsabilidade para uma decisão que normalmente exige coordenar dez fornecedores diferentes ao mesmo tempo.":
    { en: "MOOVIA Portugal coordinates the complete international transition journey, from strategic diagnosis to 90 days after arrival. We are not an immigration company, not a real estate agency, not a school. We are the single point of responsibility for a decision that usually requires coordinating ten different providers at the same time.", es: "MOOVIA Portugal coordina el trayecto completo de transición internacional, del diagnóstico estratégico a los 90 días tras la llegada. No somos una empresa de inmigración, no somos una inmobiliaria, no somos una escuela. Somos el único punto de responsabilidad para una decisión que normalmente exige coordinar diez proveedores distintos al mismo tiempo." },
  "O que é o Strategic Assessment de €250?": { en: "What is the €250 Strategic Assessment?", es: "¿Qué es el Strategic Assessment de €250?" },
  "É o primeiro produto da MOOVIA: não uma consulta, mas um trabalho estratégico real com entregável físico. 90 minutos com o founder, mapeamento completo de perfil, riscos, estratégias e cronograma. Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA.":
    { en: "It is MOOVIA's first product: not a consultation, but a real strategic engagement with a physical deliverable. 90 minutes with the founder, complete mapping of profile, risks, strategies and timeline. The €250 are fully deducted from the mandate if you decide to proceed with MOOVIA.", es: "Es el primer producto de MOOVIA: no una consulta, sino un trabajo estratégico real con entregable físico. 90 minutos con el founder, mapeo completo de perfil, riesgos, estrategias y cronograma. Los €250 se descuentan íntegramente del mandato si decides continuar con MOOVIA." },
  "Qual a diferença entre a MOOVIA e uma empresa de imigração?": { en: "What is the difference between MOOVIA and an immigration company?", es: "¿Cuál es la diferencia entre MOOVIA y una empresa de inmigración?" },
  "Uma empresa de imigração resolve o visto. A MOOVIA coordena a decisão inteira, escola, imóvel, fiscalidade, integração familiar e os 90 dias depois da chegada. Você não nos contrata para resolver um problema. Nos contrata para que os problemas não apareçam.":
    { en: "An immigration company solves the visa. MOOVIA coordinates the entire decision — school, property, taxation, family integration and the 90 days after arrival. You don't hire us to solve a problem. You hire us so the problems don't appear.", es: "Una empresa de inmigración resuelve el visado. MOOVIA coordina la decisión entera: colegio, inmueble, fiscalidad, integración familiar y los 90 días tras la llegada. No nos contratas para resolver un problema. Nos contratas para que los problemas no aparezcan." },
  "A MOOVIA trabalha com pacotes ou planos de serviço?": { en: "Does MOOVIA work with packages or service plans?", es: "¿MOOVIA trabaja con paquetes o planes de servicio?" },
  "Não. Cada cliente recebe uma proposta construída a partir do seu diagnóstico. Não existe plano A, B ou C. Existe um mandato personalizado. Um alfaiate não tem prateleira. Nós também não.":
    { en: "No. Each client receives a proposal built from their diagnosis. There is no plan A, B or C. There is a personalized mandate. A tailor has no shelf. Neither do we.", es: "No. Cada cliente recibe una propuesta construida a partir de su diagnóstico. No existe plan A, B o C. Existe un mandato personalizado. Un sastre no tiene estantería. Nosotros tampoco." },
  "Quanto tempo leva o processo de transição?": { en: "How long does the transition process take?", es: "¿Cuánto tiempo dura el proceso de transición?" },
  "Depende do perfil. Um profissional de TI com proposta de trabalho pode estar operacional em Portugal em 30 a 90 dias. Uma família em transição patrimonial pode levar de 3 a 12 meses. O cronograma real é definido no Assessment.":
    { en: "It depends on the profile. An IT professional with a job offer can be operational in Portugal within 30 to 90 days. A family in a wealth transition may take 3 to 12 months. The real timeline is defined in the Assessment.", es: "Depende del perfil. Un profesional de TI con oferta de trabajo puede estar operativo en Portugal en 30 a 90 días. Una familia en transición patrimonial puede tardar de 3 a 12 meses. El cronograma real se define en el Assessment." },
  "Quanto custa a transição completa com a MOOVIA?": { en: "How much does the complete transition with MOOVIA cost?", es: "¿Cuánto cuesta la transición completa con MOOVIA?" },
  "Não publicamos tabela de preços porque não existem pacotes. O Assessment custa €250, abatidos no mandato. O mandato completo varia entre €3.000 e €10.000 dependendo do perfil, do corredor e da complexidade.":
    { en: "We don't publish a price list because there are no packages. The Assessment costs €250, deducted from the mandate. The complete mandate ranges between €3,000 and €10,000 depending on the profile, corridor and complexity.", es: "No publicamos lista de precios porque no existen paquetes. El Assessment cuesta €250, descontados del mandato. El mandato completo varía entre €3.000 y €10.000 según el perfil, el corredor y la complejidad." },
  "A MOOVIA atende apenas brasileiros?": { en: "Does MOOVIA only serve Brazilians?", es: "¿MOOVIA solo atiende a brasileños?" },
  "O foco da MOOVIA é exclusivamente o corredor Brasil para Portugal. Se o seu caso está fora deste corredor, a conversa de qualificação define se temos o perfil certo.":
    { en: "MOOVIA's focus is exclusively the Brazil to Portugal corridor. If your case falls outside this corridor, the qualification conversation will define whether we are the right fit.", es: "El foco de MOOVIA es exclusivamente el corredor Brasil a Portugal. Si tu caso está fuera de este corredor, la conversación de calificación definirá si somos el perfil adecuado." },

  // ---------- FORM ----------
  "O primeiro passo": { en: "The first step", es: "El primer paso" },
  "\"A conversa certa.\"": { en: "\"The right conversation.\"", es: "\"La conversación correcta.\"" },
  "Não é um formulário de contato. É o início de um diagnóstico. Quanto mais você nos contar, mais preciso será o nosso retorno.":
    { en: "This is not a contact form. It is the beginning of a diagnosis. The more you tell us, the more precise our reply will be.", es: "No es un formulario de contacto. Es el inicio de un diagnóstico. Cuanto más nos cuentes, más preciso será nuestro retorno." },
  "\"Cada contato é respondido pessoalmente pelo Frederico, sem chatbot, sem script.\"":
    { en: "\"Every contact is answered personally by Frederico — no chatbot, no script.\"", es: "\"Cada contacto es respondido personalmente por Frederico, sin chatbot, sin script.\"" },
  "Resposta em até 2 horas em dias úteis": { en: "Reply within 2 hours on business days", es: "Respuesta en hasta 2 horas en días laborales" },
  "Conversa direta com o founder": { en: "Direct conversation with the founder", es: "Conversación directa con el founder" },
  "Sem pitch, sem script": { en: "No pitch, no script", es: "Sin pitch, sin script" },
  "Confidencial": { en: "Confidential", es: "Confidencial" },
  "Qual o seu objetivo principal?": { en: "What is your main objective?", es: "¿Cuál es tu objetivo principal?" },
  "Trabalhar em Portugal": { en: "Work in Portugal", es: "Trabajar en Portugal" },
  "Estudar em Portugal": { en: "Study in Portugal", es: "Estudiar en Portugal" },
  "Mudar com a família": { en: "Move with family", es: "Mudarse con la familia" },
  "Investir em imóveis": { en: "Invest in real estate", es: "Invertir en inmuebles" },
  "Aposentadoria em Portugal": { en: "Retirement in Portugal", es: "Jubilación en Portugal" },
  "Outro": { en: "Other", es: "Otro" },
  "Quando pretende mudar?": { en: "When do you plan to move?", es: "¿Cuándo piensas mudarte?" },
  "Menos de 3 meses (urgente)": { en: "Less than 3 months (urgent)", es: "Menos de 3 meses (urgente)" },
  "3 a 6 meses": { en: "3 to 6 months", es: "3 a 6 meses" },
  "6 a 12 meses": { en: "6 to 12 months", es: "6 a 12 meses" },
  "Mais de 1 ano": { en: "More than 1 year", es: "Más de 1 año" },
  "Ainda estou pesquisando": { en: "Still researching", es: "Todavía estoy investigando" },
  "Quantas pessoas participam da mudança?": { en: "How many people are part of the move?", es: "¿Cuántas personas participan de la mudanza?" },
  "Apenas eu": { en: "Just me", es: "Solo yo" },
  "Casal": { en: "Couple", es: "Pareja" },
  "Família com filhos": { en: "Family with children", es: "Familia con hijos" },
  "Família com filhos e pets": { en: "Family with children and pets", es: "Familia con hijos y mascotas" },
  "Projeto individual": { en: "Individual project", es: "Proyecto individual" },
  "Em que fase da decisão está?": { en: "What stage of the decision are you in?", es: "¿En qué fase de la decisión estás?" },
  "Apenas pesquisando": { en: "Just researching", es: "Solo investigando" },
  "Comparando Portugal com outras opções": { en: "Comparing Portugal with other options", es: "Comparando Portugal con otras opciones" },
  "Já decidi Portugal, planejando quando": { en: "Already decided on Portugal, planning when", es: "Ya decidí Portugal, planificando cuándo" },
  "Tomei a decisão, preciso agir": { en: "Made the decision, need to act", es: "Tomé la decisión, necesito actuar" },
  "Já tenho proposta/contrato assinado": { en: "Already have offer/contract signed", es: "Ya tengo oferta/contrato firmado" },
  "Seu nome completo": { en: "Your full name", es: "Tu nombre completo" },
  "WhatsApp com código do país — ex: +55 11 99999-9999": { en: "WhatsApp with country code — e.g. +55 11 99999-9999", es: "WhatsApp con código de país — ej.: +55 11 99999-9999" },
  "E-mail": { en: "Email", es: "Correo electrónico" },
  "Conte brevemente o seu caso (opcional)": { en: "Briefly describe your case (optional)", es: "Cuenta brevemente tu caso (opcional)" },
  "Enviando...": { en: "Sending...", es: "Enviando..." },
  "Enviar e aguardar retorno": { en: "Send and wait for reply", es: "Enviar y esperar respuesta" },
  "Marcar Conversa Gratuita diretamente": { en: "Book Free Conversation directly", es: "Reservar Conversación Gratuita directamente" },
  "O Frederico vai analisar o seu perfil e entrar em contacto pessoalmente. Enquanto isso, você já pode agendar a Conversa Gratuita:":
    { en: "Frederico will review your profile and reach out personally. Meanwhile, you can schedule the Free Conversation:", es: "Frederico analizará tu perfil y se pondrá en contacto personalmente. Mientras tanto, ya puedes agendar la Conversación Gratuita:" },
  "Prefere WhatsApp? →": { en: "Prefer WhatsApp? →", es: "¿Prefieres WhatsApp? →" },
  "Enviado com sucesso!": { en: "Sent successfully!", es: "¡Enviado con éxito!" },

  // ---------- LISBOA GALLERY ----------
  "Editorial · Portugal": { en: "Editorial · Portugal", es: "Editorial · Portugal" },
  "Uma vida em Portugal,": { en: "A life in Portugal,", es: "Una vida en Portugal," },
  "vista por dentro.": { en: "seen from within.", es: "vista por dentro." },

  // ---------- FOOTER ----------
  "Privacidade": { en: "Privacy", es: "Privacidad" },
  "Cookies": { en: "Cookies", es: "Cookies" },
  "© 2026 MOOVIA Portugal | Brasil → Portugal": { en: "© 2026 MOOVIA Portugal | Brazil → Portugal", es: "© 2026 MOOVIA Portugal | Brasil → Portugal" },
};

/** Suffix patterns to translate (e.g. "+ 14 serviços"). */
const SUFFIX_RULES: { pt: RegExp; build: (m: RegExpMatchArray) => { en: string; es: string } }[] = [
  {
    pt: /^\+\s*(\d+)\s+serviços$/,
    build: (m) => ({ en: `+ ${m[1]} services`, es: `+ ${m[1]} servicios` }),
  },
];

export function translate(text: string, lang: Lang): string | null {
  if (lang === "pt") return null;
  const key = text.trim();
  if (!key) return null;
  const entry = DICT[key];
  if (entry) {
    const out = entry[lang];
    // Preserve original surrounding whitespace
    return text.replace(key, out);
  }
  for (const rule of SUFFIX_RULES) {
    const m = key.match(rule.pt);
    if (m) {
      const out = rule.build(m)[lang];
      return text.replace(key, out);
    }
  }
  return null;
}
