const servicos = [
  {
    "id": 1,
    "titulo": "Serviços de Infraestrutura e Suporte",
    "subservicos": [
      {
        "id": 1,
        "titulo": "Suporte técnico (help desk e field service)",
        "subservicos": [
          "Atendimento remoto e presencial",
          "Suporte a incidentes e problemas",
          "Solução de dúvidas e treinamento básico",
          "Registro e acompanhamento de chamados",
          "Outros"
        ]
      },
      {
        "id": 2,
        "titulo": "Administração de redes (LAN, WAN, VPN)",
        "subservicos": [
          "Configuração e monitoramento de switches e roteadores",
          "Gerenciamento de VLANs e sub-redes",
          "Configuração de VPNs para acesso remoto seguro",
          "Diagnóstico e resolução de falhas de conectividade",
          "Outros"
        ]
      },
      {
        "id": 3,
        "titulo": "Gerenciamento de servidores (Windows, Linux)",
        "subservicos": [
          "Instalação e configuração de sistemas operacionais",
          "Gerenciamento de usuários e permissões",
          "Atualizações de segurança e patches",
          "Otimização de desempenho dos servidores",
          "Outros"
        ]
      },
      {
        "id": 4,
        "titulo": "Instalação e configuração de hardware",
        "subservicos": [
          "Montagem e substituição de peças (HD, memória, placa de vídeo)",
          "Instalação de estações de trabalho e periféricos",
          "Configuração de impressoras, scanners e outros dispositivos",
          "Outros"
        ]
      },
      {
        "id": 5,
        "titulo": "Monitoramento de rede e sistemas (NOC)",
        "subservicos": [
          "Uso de ferramentas como Zabbix, Nagios, PRTG",
          "Criação de alertas e relatórios de desempenho",
          "Monitoramento de disponibilidade e utilização de recursos",
          "Outros"
        ]
      },
      {
        "id": 6,
        "titulo": "Gerenciamento de data center",
        "subservicos": [
          "Organização física (rack, cabeamento)",
          "Controle de acesso e segurança física",
          "Gerenciamento de climatização e energia",
          "Documentação e inventário de equipamentos",
          "Outros"
        ]
      },
      {
        "id": 7,
        "titulo": "Virtualização de servidores (VMware, Hyper-V)",
        "subservicos": [
          "Criação e configuração de VMs",
          "Alocação de recursos (CPU, RAM, armazenamento)",
          "Backup e migração de máquinas virtuais",
          "Outros"
        ]
      },
      {
        "id": 8,
        "titulo": "Backup e recuperação de desastres",
        "subservicos": [
          "Configuração de rotinas de backup",
          "Testes de restauração periódicos",
          "Planos de recuperação de desastres (DRP)",
          "Outros"
        ]
      },
      {
        "id": 9,
        "titulo": "Migração de sistemas e dados",
        "subservicos": [
          "Planejamento da migração (impacto e riscos)",
          "Transferência de dados e aplicativos",
          "Testes pós-migração e validação",
          "Outros"
        ]
      },
      {
        "id": 10,
        "titulo": "Inventário de TI e gerenciamento de ativos",
        "subservicos": [
          "Registro de equipamentos e softwares licenciados",
          "Rastreamento de mudanças de ativos",
          "Controle de ciclo de vida de ativos",
          "Outros"
        ]
      },
      {
        "id": 11,
        "titulo": "Instalação e manutenção de cabeamento estruturado",
        "subservicos": [
          "Projeto de cabeamento (UTP, fibra)",
          "Organização e etiquetagem de cabos",
          "Testes de certificação e continuidade",
          "Outros"
        ]
      },
      {
        "id": 12,
        "titulo": "Monitoramento de disponibilidade (uptime)",
        "subservicos": [
          "Monitoramento contínuo dos serviços críticos",
          "Relatórios de disponibilidade e SLA",
          "Resposta rápida a incidentes de indisponibilidade",
          "Outros"
        ]
      }
    ]
  },
  {
    "id": 2,
    "titulo": "Serviços em Nuvem (Cloud Services)",
    "subservicos": [
      {
        "id": 1,
        "titulo": "Migração para a nuvem (Azure, AWS, Google Cloud)",
        "subservicos": [
          "Avaliação de requisitos e arquitetura",
          "Planejamento da migração (lift-and-shift, refactoring)",
          "Execução e testes pós-migração",
          "Outros"
        ]
      },
      {
        "id": 2,
        "titulo": "Infraestrutura como serviço (IaaS)",
        "subservicos": [
          "Criação de VMs e recursos virtuais",
          "Configuração de redes e balanceadores",
          "Monitoramento de consumo de recursos",
          "Outros"
        ]
      },
      {
        "id": 3,
        "titulo": "Plataforma como serviço (PaaS)",
        "subservicos": [
          "Configuração de serviços de banco de dados gerenciado",
          "Deploy de aplicativos em serviços de nuvem gerenciados",
          "Integração com serviços de nuvem (API, storage)",
          "Outros"
        ]
      },
      {
        "id": 4,
        "titulo": "Software como serviço (SaaS)",
        "subservicos": [
          "Gerenciamento de contas e licenças",
          "Treinamento de usuários finais",
          "Suporte e configuração de ferramentas SaaS",
          "Outros"
        ]
      },
      {
        "id": 5,
        "titulo": "Armazenamento em nuvem e backup",
        "subservicos": [
          "Configuração de buckets/containers",
          "Automação de backups na nuvem",
          "Gerenciamento de ciclo de vida de dados",
          "Outros"
        ]
      },
      {
        "id": 6,
        "titulo": "Configuração de ambientes híbridos",
        "subservicos": [
          "Integração de datacenters locais e nuvem",
          "Configuração de VPNs site-to-site ou Direct Connect",
          "Sincronização de dados e identidade",
          "Outros"
        ]
      },
      {
        "id": 7,
        "titulo": "Gerenciamento de contas e permissões",
        "subservicos": [
          "Gestão de usuários e grupos (IAM)",
          "Configuração de MFA e políticas de segurança",
          "Auditoria de acessos e logs",
          "Outros"
        ]
      },
      {
        "id": 8,
        "titulo": "Integração com serviços de terceiros (APIs, webhooks)",
        "subservicos": [
          "Configuração de integrações e autenticação (OAuth, API keys)",
          "Monitoramento de integrações e fluxos de dados",
          "Outros"
        ]
      },
      {
        "id": 9,
        "titulo": "Otimização de custos em nuvem",
        "subservicos": [
          "Análise de consumo de recursos",
          "Ajustes de dimensionamento e agendamento",
          "Recomendações para redução de custos",
          "Outros"
        ]
      },
      {
        "id": 10,
        "titulo": "Contêineres e orquestração (Docker, Kubernetes)",
        "subservicos": [
          "Criação de imagens e containers",
          "Configuração de clusters e serviços",
          "Gerenciamento de escalabilidade e atualizações",
          "Outros"
        ]
      }
    ]
  },
  {
    "id": 3,
    "titulo": "Desenvolvimento de Software",
    "subservicos": [
      {
        "id": 1,
        "titulo": "Desenvolvimento web (front-end e back-end)",
        "subservicos": [
          "Criação de sites responsivos e dinâmicos",
          "Integração com bancos de dados e APIs",
          "Otimização de performance",
          "Outros"
        ]
      },
      {
        "id": 2,
        "titulo": "Desenvolvimento mobile (Android, iOS, multiplataforma)",
        "subservicos": [
          "Criação de aplicativos nativos e híbridos",
          "Publicação em lojas (Play Store, App Store)",
          "Atualizações e correções",
          "Outros"
        ]
      },
      {
        "id": 3,
        "titulo": "Aplicações desktop (Windows, Mac, Linux)",
        "subservicos": [
          "Desenvolvimento de aplicativos locais",
          "Integração com sistemas existentes",
          "Pacotes de instalação e manutenção",
          "Outros"
        ]
      },
      {
        "id": 4,
        "titulo": "Criação de APIs RESTful ou GraphQL",
        "subservicos": [
          "Definição de endpoints e documentação",
          "Autenticação e autorização",
          "Testes e monitoramento de APIs",
          "Outros"
        ]
      },
      {
        "id": 5,
        "titulo": "Desenvolvimento de sistemas ERP e CRM",
        "subservicos": [
          "Análise de processos de negócios",
          "Customização e integração de módulos",
          "Relatórios e dashboards gerenciais",
          "Outros"
        ]
      },
      {
        "id": 6,
        "titulo": "Automação de processos com scripts",
        "subservicos": [
          "Scripts em Python, PowerShell, Bash",
          "Agendamento de tarefas automáticas",
          "Relatórios e notificações automatizadas",
          "Outros"
        ]
      },
      {
        "id": 7,
        "titulo": "Integração de sistemas (middleware)",
        "subservicos": [
          "Conexão entre diferentes aplicações",
          "Transformação de dados e sincronização",
          "Garantia de consistência e performance",
          "Outros"
        ]
      },
      {
        "id": 8,
        "titulo": "Desenvolvimento de e-commerce",
        "subservicos": [
          "Implementação de lojas virtuais",
          "Integração com meios de pagamento",
          "SEO e performance do e-commerce",
          "Outros"
        ]
      },
      {
        "id": 9,
        "titulo": "Desenvolvimento de aplicativos sob demanda",
        "subservicos": [
          "Levantamento de requisitos personalizados",
          "Protótipos e testes de usabilidade",
          "Implementação e manutenção",
          "Outros"
        ]
      },
      {
        "id": 10,
        "titulo": "Manutenção e evolução de sistemas legados",
        "subservicos": [
          "Correção de bugs e vulnerabilidades",
          "Atualização de bibliotecas e frameworks",
          "Refatoração de código para melhorar performance",
          "Outros"
        ]
      }
    ]
  },
  {
    "id": 4,
    "titulo": "Automação e Inteligência Artificial",
    "subservicos": [
      {
        "id": 1,
        "titulo": "Robôs de automação (RPA)",
        "subservicos": [
          "Mapeamento de processos para automação",
          "Desenvolvimento de bots para tarefas repetitivas",
          "Integração de bots com sistemas legados",
          "Monitoramento e manutenção de robôs",
          "Otimização de fluxos automatizados"
        ]
      },
      {
        "id": 2,
        "titulo": "Chatbots e assistentes virtuais",
        "subservicos": [
          "Design de diálogos e fluxos conversacionais",
          "Integração com mensageiros (WhatsApp, Facebook, Telegram)",
          "Suporte multicanal (web, mobile, voz)",
          "Treinamento de IA conversacional",
          "Monitoramento e ajustes de performance"
        ]
      },
      {
        "id": 3,
        "titulo": "Sistemas de recomendação",
        "subservicos": [
          "Implementação de sistemas baseados em regras ou IA",
          "Integração com e-commerce e plataformas digitais",
          "Personalização de produtos/serviços para usuários",
          "Análise de comportamento e preferências"
        ]
      },
      {
        "id": 4,
        "titulo": "Processamento de linguagem natural (NLP)",
        "subservicos": [
          "Análise de sentimentos e feedback",
          "Extração de entidades e informações",
          "Tradução automática e correção ortográfica",
          "Geração de resumos automáticos"
        ]
      },
      {
        "id": 5,
        "titulo": "Visão computacional",
        "subservicos": [
          "Reconhecimento facial e de objetos",
          "Processamento de imagens e vídeos",
          "Extração de dados de imagens (OCR)",
          "Análise de segurança e vigilância"
        ]
      },
      {
        "id": 6,
        "titulo": "Análise preditiva",
        "subservicos": [
          "Modelagem de previsões de vendas e demanda",
          "Análise de churn e retenção de clientes",
          "Previsão de manutenção preventiva",
          "Modelos estatísticos para tendências"
        ]
      },
      {
        "id": 7,
        "titulo": "Classificação e clusterização de dados",
        "subservicos": [
          "Segmentação de clientes ou usuários",
          "Agrupamento de dados por similaridade",
          "Algoritmos supervisionados e não supervisionados"
        ]
      },
      {
        "id": 8,
        "titulo": "Treinamento de modelos de IA personalizados",
        "subservicos": [
          "Coleta e preparação de datasets",
          "Ajuste fino de modelos existentes",
          "Treinamento de modelos de machine learning",
          "Validação e testes de modelos"
        ]
      },
      {
        "id": 9,
        "titulo": "Integração de IA com sistemas empresariais",
        "subservicos": [
          "Conexão de modelos de IA com ERPs e CRMs",
          "Integração via APIs e Webhooks",
          "Ajustes e monitoramento de performance",
          "Suporte técnico e evolução do sistema"
        ]
      }
    ]
  },
  {
    "id": 5,
    "titulo": "Serviços Administrativos de TI",
    "subservicos": [
      {
        "id": 1,
        "titulo": "Gestão de licenças e contratos de software",
        "subservicos": [
          "Inventário e renovação de licenças",
          "Monitoramento de compliance de licenciamento",
          "Auditoria de contratos e renovações",
          "Consolidação de informações para auditorias"
        ]
      },
      {
        "id": 2,
        "titulo": "Controle de ativos de TI",
        "subservicos": [
          "Registro e atualização de ativos",
          "Gestão do ciclo de vida dos equipamentos",
          "Planejamento de substituições e upgrades",
          "Inventário físico e digital"
        ]
      },
      {
        "id": 3,
        "titulo": "Suporte administrativo a equipes de TI",
        "subservicos": [
          "Coordenação de tarefas administrativas",
          "Elaboração de relatórios gerenciais",
          "Organização de documentação técnica",
          "Comunicação interna e externa"
        ]
      },
      {
        "id": 4,
        "titulo": "Planejamento e gestão de projetos de TI",
        "subservicos": [
          "Definição de escopo e cronogramas",
          "Acompanhamento de entregas e prazos",
          "Gestão de riscos e recursos",
          "Relatórios de status e resultados"
        ]
      },
      {
        "id": 5,
        "titulo": "Compliance e segurança da informação",
        "subservicos": [
          "Políticas de segurança e boas práticas",
          "Auditorias e controles de acesso",
          "Treinamento e conscientização",
          "Gerenciamento de incidentes de segurança"
        ]
      }
    ]
  }
];

