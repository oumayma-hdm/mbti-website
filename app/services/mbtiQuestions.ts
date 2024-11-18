export interface MBTIQuestion {
    id: number;
    question: string;
    options: {
      text: string;
      type: string;
    }[];
    category: 'EI' | 'SN' | 'TF' | 'JP';
  }
  
  // Large pool of questions
  export const mbtiQuestions: MBTIQuestion[] = [
    // Extraversion (E) vs. Introversion (I)
    {
      id: 1,
      question: "How do you prefer to spend your free time?",
      options: [
        { text: "Going out with friends and meeting new people", type: "E" },
        { text: "Staying in with a book or enjoying quiet activities", type: "I" }
      ],
      category: 'EI'
    },
    {
      id: 2,
      question: "In group discussions, you usually:",
      options: [
        { text: "Speak up readily and share your thoughts", type: "E" },
        { text: "Listen first and speak after careful consideration", type: "I" }
      ],
      category: 'EI'
    },
    // Sensing (S) vs. Intuition (N)
    {
      id: 3,
      question: "When learning something new, you prefer:",
      options: [
        { text: "Concrete, practical examples and applications", type: "S" },
        { text: "Theoretical concepts and abstract ideas", type: "N" }
      ],
      category: 'SN'
    },
    {
      id: 4,
      question: "When solving problems, you tend to:",
      options: [
        { text: "Trust past experience and proven methods", type: "S" },
        { text: "Look for new, innovative approaches", type: "N" }
      ],
      category: 'SN'
    },
    // Thinking (T) vs. Feeling (F)
    {
      id: 5,
      question: "When making decisions, you primarily consider:",
      options: [
        { text: "Logic and objective analysis", type: "T" },
        { text: "People's feelings and harmony", type: "F" }
      ],
      category: 'TF'
    },
    {
      id: 6,
      question: "In conflicts, you tend to:",
      options: [
        { text: "Focus on finding the most logical solution", type: "T" },
        { text: "Consider everyone's feelings and values", type: "F" }
      ],
      category: 'TF'
    },
    // Judging (J) vs. Perceiving (P)
    {
      id: 7,
      question: "How do you prefer to plan your day?",
      options: [
        { text: "With a clear schedule and structure", type: "J" },
        { text: "Keeping options open and flexible", type: "P" }
      ],
      category: 'JP'
    },
    {
      id: 8,
      question: "When working on a project, you prefer to:",
      options: [
        { text: "Follow a clear plan and timeline", type: "J" },
        { text: "Adapt and change as you go", type: "P" }
      ],
      category: 'JP'
    }
  ];
  
  // Function to get random questions ensuring coverage of all aspects
  export function getRandomMBTIQuestions(count: number = 20): MBTIQuestion[] {
    const questions = [];
    const categories = ['EI', 'SN', 'TF', 'JP'];
    const questionsPerCategory = Math.floor(count / 4);
  
    categories.forEach(category => {
      const categoryQuestions = mbtiQuestions.filter(q => q.category === category);
      const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random());
      questions.push(...shuffled.slice(0, questionsPerCategory));
    });
  
    return questions.sort(() => 0.5 - Math.random());
  }
  
  // Function to calculate MBTI type
  export function calculateMBTIType(answers: string[]): string {
    const counts = answers.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
    const E = counts['E'] || 0;
    const I = counts['I'] || 0;
    const S = counts['S'] || 0;
    const N = counts['N'] || 0;
    const T = counts['T'] || 0;
    const F = counts['F'] || 0;
    const J = counts['J'] || 0;
    const P = counts['P'] || 0;
  
    return `${E > I ? 'E' : 'I'}${S > N ? 'S' : 'N'}${T > F ? 'T' : 'F'}${J > P ? 'J' : 'P'}`;
  }