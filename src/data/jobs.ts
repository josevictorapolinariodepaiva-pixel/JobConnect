import type { Job } from '../types/Job'

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Desenvolvedor Frontend',
    company: 'Tech Solutions',
    location: 'Remoto',
    type: 'CLT',
    salary: 'R$ 5.000 - R$ 7.000',
    description:
      'Estamos procurando um desenvolvedor frontend para criar interfaces modernas e responsivas.',
    requirements: [
      'Conhecimento em HTML e CSS',
      'Conhecimento em JavaScript',
      'Experiência com React',
      'Conhecimento básico em TypeScript'
    ]
  },

  {
    id: 2,
    title: 'Desenvolvedor Backend',
    company: 'Code Company',
    location: 'São Paulo, SP',
    type: 'PJ',
    salary: 'R$ 7.000 - R$ 10.000',
    description:
      'Buscamos um desenvolvedor backend para trabalhar na criação e manutenção de APIs.',
    requirements: [
      'Conhecimento em Node.js',
      'Conhecimento em APIs REST',
      'Experiência com bancos de dados',
      'Conhecimento em JavaScript ou TypeScript'
    ]
  },

  {
    id: 3,
    title: 'Desenvolvedor Full Stack',
    company: 'Digital Tech',
    location: 'Belo Horizonte, MG',
    type: 'Híbrido',
    salary: 'R$ 6.000 - R$ 9.000',
    description:
      'Estamos procurando um desenvolvedor Full Stack para participar de projetos modernos.',
    requirements: [
      'Conhecimento em React',
      'Conhecimento em Node.js',
      'Experiência com banco de dados',
      'Conhecimento em Git'
    ]
  }
]