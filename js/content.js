/* ============================================================
   CONTEÚDO DO SITE — edite aqui os textos (demo KiroWeb).
   Cada bloco alimenta uma seção da página via main.js.
   ============================================================ */

const CONTENT = {

  // Ato 2 — Os 5 pilares do Desenvolvedor Renascentista
  pillars: [
    {
      icon: 'curiosidade',
      name: 'Curiosidade',
      tag: 'O motor do aprendizado contínuo.',
      desc: 'O renascentista cruzava arte, ciência e técnica sem pedir licença. Hoje: nunca pare de aprender e use a IA para explorar o que você ainda não domina.'
    },
    {
      icon: 'sistemico',
      name: 'Pensamento Sistêmico',
      tag: 'Compreender a arquitetura invisível.',
      desc: 'O mestre via a catedral inteira antes da primeira pedra. Hoje: entenda como as peças se conectam, não só o trecho que a IA gerou.'
    },
    {
      icon: 'comunicacao',
      name: 'Comunicação Clara',
      tag: 'Eliminar a ambiguidade na era da IA.',
      desc: 'No Renascimento, a ideia bem comunicada virava obra. Hoje: descrever intenção com precisão separa um bom resultado de um ruído.'
    },
    {
      icon: 'dono',
      name: 'Sentimento de Dono',
      tag: 'Assumir a responsabilidade moral e técnica.',
      desc: 'A obra levava a reputação do autor. Hoje: a IA sugere, mas você assina embaixo e responde pelas decisões.'
    },
    {
      icon: 'polimata',
      name: 'Perfil Polímata',
      tag: 'Profundidade técnica com visão holística.',
      desc: 'O renascentista unia muitos saberes em uma só mente. Hoje: tenha profundidade em algo e trânsito por várias áreas com a IA.'
    }
  ],

  // Ato 3 — A ponte: do pilar à ferramenta
  bridge: [
    { pillar: 'Curiosidade',          action: 'explorar e aprender mais rápido com o apoio da IA' },
    { pillar: 'Pensamento Sistêmico', action: 'Steering ensina ao Kiro a arquitetura e os padrões do projeto' },
    { pillar: 'Comunicação Clara',    action: 'Specs transformam intenção em requisitos, design e tarefas' },
    { pillar: 'Sentimento de Dono',   action: 'você revisa, valida e aprova; Hooks automatizam a verificação' },
    { pillar: 'Perfil Polímata',      action: 'orquestrar agentes que planejam, codam, testam e documentam' }
  ],

  // Ato 4 — O que é o Kiro
  features: [
    { name: 'Specs',    desc: 'Transforma ideia em requisitos, design e tarefas' },
    { name: 'Agentes',  desc: 'Planejam, codam, testam e revisam sozinhos' },
    { name: 'Hooks',    desc: 'Automatizam ações a cada evento do projeto' },
    { name: 'Steering', desc: 'Ensina ao Kiro os padrões e regras do seu time' }
  ],

  // Ato 4 — Para muito além do dev
  profiles: [
    { emoji: '👨‍💻', name: 'Dev',       desc: 'Da ideia ao deploy com qualidade' },
    { emoji: '🎨',   name: 'Design/PM', desc: 'Protótipos e specs sem depender de fila' },
    { emoji: '📊',   name: 'Dados',     desc: 'Pipelines e análises mais rápidas' },
    { emoji: '💼',   name: 'Negócio',   desc: 'Tira ideia do papel e valida rápido' },
    { emoji: '🎓',   name: 'Estudante', desc: 'Aprende construindo, com um mentor 24/7' },
    { emoji: '🔧',   name: 'Infra/Ops', desc: 'Automação e revisão contínuas' }
  ],

  // Ato 5 — O início do caos
  risks: [
    { emoji: '🙈', name: 'Confiança cega',    desc: 'Aceitar a saída da IA sem entender' },
    { emoji: '🔍', name: 'Falta de validação', desc: 'Código que funciona hoje e quebra amanhã' },
    { emoji: '🧱', name: 'Dívida técnica',     desc: 'Volume alto, manutenção impossível' },
    { emoji: '⚖️', name: 'Ética e viés',       desc: 'Decisões sem transparência nem responsabilidade' }
  ],

  // Ato 5 — A resposta renascentista
  answers: [
    { name: 'Curiosidade e visão sistêmica', desc: 'Entender e decidir o que entra no projeto' },
    { name: 'Comunicação clara',             desc: 'Dizer com precisão o que quer' },
    { name: 'Sentimento de dono',            desc: 'Assumir as consequências das decisões' },
    { name: 'Raciocínio nunca terceirizado', desc: 'A IA amplia o pensamento — não o substitui' }
  ]
};
