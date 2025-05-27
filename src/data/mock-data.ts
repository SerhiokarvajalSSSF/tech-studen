import { Question, Answer, Subject, SubjectInfo } from '../types';
import { BookOpenText, Brain, History, Languages } from 'lucide-react';

export const SUBJECTS: SubjectInfo[] = [
  {
    id: 'historia',
    name: 'Historia',
    description: 'Líneas de tiempo interactivas, biografías y eventos históricos clave.',
    icon: 'History',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'filosofia',
    name: 'Filosofía',
    description: 'Pensadores clásicos y modernos, conceptos clave y corrientes filosóficas.',
    icon: 'Brain',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'matematicas',
    name: 'Matemáticas',
    description: 'Álgebra, geometría, cálculo con explicaciones paso a paso y visualizaciones.',
    icon: 'BookOpenText',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'español',
    name: 'Español',
    description: 'Gramática, ortografía, análisis literario y ejercicios interactivos.',
    icon: 'Languages',
    color: 'from-red-500 to-red-600'
  }
];

export const RECENT_QUESTIONS: Question[] = [
  {
    id: '1',
    text: '¿Cuáles fueron las causas principales de la Segunda Guerra Mundial?',
    subject: 'historia',
    createdAt: new Date('2023-10-15'),
    isFavorite: true
  },
  {
    id: '2',
    text: '¿Cómo puedo resolver ecuaciones cuadráticas?',
    subject: 'matematicas',
    createdAt: new Date('2023-10-16'),
    isFavorite: false
  },
  {
    id: '3',
    text: '¿Cuáles son las principales corrientes del existencialismo?',
    subject: 'filosofia',
    createdAt: new Date('2023-10-17'),
    isFavorite: true
  },
  {
    id: '4',
    text: '¿Cuáles son las reglas para el uso de la tilde en español?',
    subject: 'español',
    createdAt: new Date('2023-10-18'),
    isFavorite: false
  }
];

export const SAMPLE_ANSWERS: Record<string, Answer> = {
  '1': {
    id: 'a1',
    questionId: '1',
    text: `Las principales causas de la Segunda Guerra Mundial fueron:

1. El Tratado de Versalles (1919): Impuso severas condiciones a Alemania tras la Primera Guerra Mundial, generando resentimiento.

2. La Gran Depresión (1929): Crisis económica mundial que favoreció el ascenso de regímenes totalitarios.

3. El ascenso del fascismo y nazismo: Hitler en Alemania (1933), Mussolini en Italia (1922) y el militarismo japonés.

4. Política de apaciguamiento: Las potencias democráticas no frenaron las primeras agresiones de Hitler.

5. Expansionismo alemán: Anexión de Austria (Anschluss), ocupación de Checoslovaquia.

El detonante final fue la invasión alemana a Polonia el 1 de septiembre de 1939, que provocó la declaración de guerra por parte de Francia y Reino Unido.`,
    sources: [
      {
        title: 'The Origins of the Second World War - A.J.P. Taylor',
        url: 'https://scholar.google.com/article123',
        type: 'book'
      },
      {
        title: 'Segunda Guerra Mundial - Enciclopedia Británica',
        url: 'https://www.britannica.com/event/World-War-II',
        type: 'academic'
      }
    ],
    createdAt: new Date('2023-10-15')
  },
  '2': {
    id: 'a2',
    questionId: '2',
    text: `Para resolver una ecuación cuadrática de la forma ax² + bx + c = 0, puedes utilizar:

1. La fórmula general: 
   x = [-b ± √(b² - 4ac)] / 2a

2. Factorización (cuando es posible):
   Si ax² + bx + c = (px + q)(rx + s), entonces las soluciones son x = -q/p y x = -s/r

3. Completar el cuadrado:
   Reorganizar la ecuación en la forma (x + p)² = q

Ejemplo paso a paso:
Para resolver 2x² - 5x - 3 = 0

Usando la fórmula general con a=2, b=-5, c=-3:
x = [5 ± √(25 + 24)] / 4
x = [5 ± √49] / 4
x = [5 ± 7] / 4
x = 3 o x = -1/2

Por lo tanto, las soluciones son x = 3 y x = -1/2`,
    sources: [
      {
        title: 'Khan Academy - Ecuaciones Cuadráticas',
        url: 'https://es.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations',
        type: 'website'
      }
    ],
    createdAt: new Date('2023-10-16')
  }
};

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'History':
      return History;
    case 'Brain':
      return Brain;
    case 'BookOpenText':
      return BookOpenText;
    case 'Languages':
      return Languages;
    default:
      return BookOpenText;
  }
};