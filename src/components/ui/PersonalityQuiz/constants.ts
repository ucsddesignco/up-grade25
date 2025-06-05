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
    question: 'Which type of environment would you thrive in the most?',
    option: [
      {
        id: 'a',
        text: 'A collaborative space where people share stories and experiences',
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
        text: 'A creative studio filled with inspiration and reference imagery',
        pointDist: {
          UXR: 0,
          UXD: 3,
          PM: 0,
          SWE: 0,
          VIS: 5,
          PMM: 1
        }
      },
      {
        id: 'c',
        text: 'A structured space with clear goals and organized systems',
        pointDist: {
          UXR: 0,
          UXD: 0,
          PM: 5,
          SWE: 1,
          VIS: 0,
          PMM: 2
        }
      },
      {
        id: 'd',
        text: 'A workshop where you can build, experiment, and problem-solve',
        pointDist: {
          UXR: 0,
          UXD: 2,
          PM: 0,
          SWE: 5,
          VIS: 1,
          PMM: 0
        }
      }
    ]
  },

  {
    id: '2',
    question: 'If you could be any superhero, who would you want to be?',
    option: [
      {
        id: 'a',
        text: 'Professor X:  Ability to read minds',
        pointDist: {
          UXR: 5,
          UXD: 2,
          PM: 0,
          SWE: 0,
          VIS: 0,
          PMM: 4
        }
      },
      {
        id: 'b',
        text: 'Scarlet Witch: Ability to alter reality',
        pointDist: {
          UXR: 0,
          UXD: 3,
          PM: 1,
          SWE: 0,
          VIS: 5,
          PMM: 0
        }
      },
      {
        id: 'c',
        text: 'The Flash: Ability to control time',
        pointDist: {
          UXR: 0,
          UXD: 0,
          PM: 5,
          SWE: 2,
          VIS: 0,
          PMM: 1
        }
      },
      {
        id: 'd',
        text: 'Green Lantern: Ability to create anything',
        pointDist: {
          UXR: 0,
          UXD: 0,
          PM: 0,
          SWE: 4,
          VIS: 3,
          PMM: 2
        }
      }
    ]
  },

  {
    id: '3',
    question: 'What draws your attention when experiencing something new?',
    option: [
      {
        id: 'a',
        text: 'The story behind it and how it connects with people',
        pointDist: {
          UXR: 0,
          UXD: 2,
          PM: 5,
          SWE: 0,
          VIS: 0,
          PMM: 1
        }
      },
      {
        id: 'b',
        text: 'The aesthetics and how it makes you feel visually',
        pointDist: {
          UXR: 5,
          UXD: 2,
          PM: 0,
          SWE: 0,
          VIS: 0,
          PMM: 1
        }
      },
      {
        id: 'c',
        text: 'How it works and the systems that make it function',
        pointDist: {
          UXR: 0,
          UXD: 1,
          PM: 0,
          SWE: 0,
          VIS: 5,
          PMM: 3
        }
      },
      {
        id: 'd',
        text: 'How it could be improved or made more efficient',
        pointDist: {
          UXR: 0,
          UXD: 2,
          PM: 1,
          SWE: 5,
          VIS: 0,
          PMM: 0
        }
      }
    ]
  },

  {
    id: '4',
    question: 'In a group project, which role naturally appeals to you?',
    option: [
      {
        id: 'a',
        text: 'The one who keeps everyone on track and makes sure deadlines are met',
        pointDist: {
          UXR: 3,
          UXD: 1,
          PM: 0,
          SWE: 0,
          VIS: 0,
          PMM: 5
        }
      },
      {
        id: 'b',
        text: 'The one who listens to everyone’s ideas and finds the common threads',
        pointDist: {
          UXR: 0,
          UXD: 2,
          PM: 0,
          SWE: 0,
          VIS: 5,
          PMM: 2
        }
      },
      {
        id: 'c',
        text: 'The one who makes everything look good and creates the final presentation',
        pointDist: {
          UXR: 0,
          UXD: 2,
          PM: 1,
          SWE: 5,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'd',
        text: 'The one who sees how things fit together and brings it to life',
        pointDist: {
          UXR: 2,
          UXD: 4,
          PM: 3,
          SWE: 0,
          VIS: 0,
          PMM: 0
        }
      }
    ]
  },

  {
    id: '5',
    question: 'If you were planning a road trip, what would be your primary focus?',
    option: [
      {
        id: 'a',
        text: 'Creating the perfect itinerary with the best destinations',
        pointDist: {
          UXR: 0,
          UXD: 1,
          PM: 5,
          SWE: 2,
          VIS: 0,
          PMM: 0
        }
      },
      {
        id: 'b',
        text: 'Planning around the needs and preferences of the people traveling',
        pointDist: {
          UXR: 5,
          UXD: 1,
          PM: 0,
          SWE: 0,
          VIS: 0,
          PMM: 3
        }
      },
      {
        id: 'c',
        text: 'Documenting the journey and memories with photos',
        pointDist: {
          UXR: 0,
          UXD: 1,
          PM: 0,
          SWE: 0,
          VIS: 5,
          PMM: 3
        }
      },
      {
        id: 'd',
        text: 'Packing the car with important gear and gadgets',
        pointDist: {
          UXR: 0,
          UXD: 1,
          PM: 2,
          SWE: 5,
          VIS: 0,
          PMM: 0
        }
      }
    ]
  }
];
