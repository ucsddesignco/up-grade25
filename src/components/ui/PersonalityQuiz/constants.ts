export interface QuizOption {
  id: string;
  text: string;
  role: 'PMM' | 'PM' | 'UXR' | 'UXD' | 'SWE' | 'Vis';
  points: number;
}

export interface QuizQuesiton {
  id: string;
  question: string;
  option: QuizOption[];
}

export const QuizQuestions: QuizQuesiton[] = [
  {
    id: '1',
    question: 'Which part of creating a digital product is the most exciting to you?',
    option: [
      {
        id: 'a',
        text: 'Bringing designs to life through code',
        role: 'PMM',
        points: 1
      },
      {
        id: 'b',
        text: 'Mapping out intuitive user flows',
        role: 'PM',
        points: 1
      },
      {
        id: 'c',
        text: 'Crafting the look and feel',
        role: 'UXD',
        points: 1
      },
      {
        id: 'd',
        text: 'Keeping the team organized',
        role: 'UXR',
        points: 1
      },
      {
        id: 'e',
        text: 'Shaping the message and content',
        role: 'Vis',
        points: 1
      }
    ]
  },

  {
    id: '2',
    question: 'What do you prefer when it comes to design?',
    option: [
      { id: 'a', text: 'Minimalism', role: 'PMM', points: 1 },
      {
        id: 'b',
        text: 'Bold and colorful designs',
        role: 'PMM',
        points: 1
      },
      { id: 'c', text: 'Retro vibes', role: 'PM', points: 1 },
      {
        id: 'd',
        text: 'Sleek and modern aesthetics',
        role: 'UXR',
        points: 1
      },
      { id: 'e', text: 'Whimsical and playful', role: 'Vis', points: 1 }
    ]
  },

  {
    id: '3',
    question: 'What is your go-to method for solving a problem?',
    option: [
      {
        id: 'a',
        text: 'Brainstorming with others',
        role: 'SWE',
        points: 1
      },
      {
        id: 'b',
        text: 'Researching the issue deeply',
        role: 'UXR',
        points: 1
      },
      {
        id: 'c',
        text: 'Testing different approaches',
        role: 'UXD',
        points: 1
      },
      {
        id: 'd',
        text: 'Breaking the problem into smaller pieces',
        role: 'PMM',
        points: 1
      },
      {
        id: 'e',
        text: 'Trusting my gut instinct',
        role: 'PM',
        points: 1
      }
    ]
  },

  {
    id: '4',
    question: 'How do you feel about collaboration in a project?',
    option: [
      {
        id: 'a',
        text: 'I love working with a team and sharing ideas',
        role: 'Vis',
        points: 1
      },
      {
        id: 'b',
        text: 'I prefer working alone to maintain control',
        role: 'SWE',
        points: 1
      },
      {
        id: 'c',
        text: 'I’m comfortable in both settings',
        role: 'UXD',
        points: 1
      },
      {
        id: 'd',
        text: 'I prefer to lead the team',
        role: 'PM',
        points: 1
      },
      {
        id: 'e',
        text: 'I’m flexible depending on the project',
        role: 'PMM',
        points: 1
      }
    ]
  },

  {
    id: '5',
    question: 'What’s your ideal work environment?',
    option: [
      {
        id: 'a',
        text: 'A creative and collaborative space',
        role: 'PMM',
        points: 1
      },
      {
        id: 'b',
        text: 'A quiet and focused environment',
        role: 'PM',
        points: 1
      },
      {
        id: 'c',
        text: 'A dynamic and fast-paced office',
        role: 'SWE',
        points: 1
      },
      {
        id: 'd',
        text: 'A remote and flexible work setup',
        role: 'UXR',
        points: 1
      },
      {
        id: 'e',
        text: 'A balance of quiet and collaboration',
        role: 'Vis',
        points: 1
      }
    ]
  }
];
