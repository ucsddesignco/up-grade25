export type role = 'PMM' | 'PM' | 'UXR' | 'UXD' | 'SWE' | 'VIS';
export interface QuizOption {
  id: string;
  text: string;
  pointDist: Record<role, number>;
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
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'b',
        text: 'Mapping out intuitive user flows',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 5,
          PMM: 0
        }
      },
      {
        id: 'c',
        text: 'Crafting the look and feel',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'd',
        text: 'Keeping the team organized',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'e',
        text: 'Shaping the message and content',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      }
    ]
  },

  {
    id: '2',
    question: 'What do you prefer when it comes to design?',
    option: [
      {
        id: 'a',
        text: 'Minimalism',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'b',
        text: 'Bold and colorful designs',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'c',
        text: 'Retro vibes',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'd',
        text: 'Sleek and modern aesthetics',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'e',
        text: 'Whimsical and playful',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      }
    ]
  },

  {
    id: '3',
    question: 'What is your go-to method for solving a problem?',
    option: [
      {
        id: 'a',
        text: 'Brainstorming with others',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'b',
        text: 'Researching the issue deeply',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'c',
        text: 'Testing different approaches',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'd',
        text: 'Breaking the problem into smaller pieces',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'e',
        text: 'Trusting my gut instinct',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
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
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'b',
        text: 'I prefer working alone to maintain control',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'c',
        text: 'I’m comfortable in both settings',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'd',
        text: 'I prefer to lead the team',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'e',
        text: 'I’m flexible depending on the project',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
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
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'b',
        text: 'A quiet and focused environment',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'c',
        text: 'A dynamic and fast-paced office',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'd',
        text: 'A remote and flexible work setup',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'e',
        text: 'A balance of quiet and collaboration',
        pointDist: {
          UXR: 5,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      }
    ]
  }
];
