export default function reducer(state, action) {
    switch (action.type) {
      case "SET_OPTIONS":
        return { ...state, options: action.payload };
      case "SET_QUESTION":
        return { ...state, question: action.payload };
      case "SET_CORRECT_ANSWER":
        return { ...state, correctAnswer: action.payload };
      case "SET_RENDER_ANSWER":
        return { ...state, renderAnswer: action.payload };
      case "SET_COUNT":
        return { ...state, count: action.payload };
      case "SET_ANSWER":
        return { ...state, answer: action.payload };
      case "SET_RENDER_QUESTION":
        return { ...state, renderQuestion: action.payload };
      case "SET_GAME_OVER":
        return { ...state, gameOver: action.payload };
      default:
        return state;
    }
  }