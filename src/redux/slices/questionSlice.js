import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionList: [
    {
      id: 1,
      question: "What is your favorite color?",
      options: [
        { id: 1, text: "Red" },
        { id: 2, text: "Blue" },
      ],
      rightAnswer: 2,
    },
    {
      id: 2,
      question: "Do you prefer coffee or tea?",
      options: [
        { id: 1, text: "Coffee" },
        { id: 2, text: "Tea" },
      ],
      rightAnswer: 2,
    },
    {
      id: 3,
      question: "What is your preferred mode of transportation?",
      options: [
        { id: 1, text: "Car" },
        { id: 2, text: "Bicycle" },
      ],
      rightAnswer: 1,
    },
    {
      id: 4,
      question: "Do you enjoy reading books?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
      rightAnswer: 1,
    },
    {
      id: 5,
      question: "What is your favorite season?",
      options: [
        { id: 1, text: "Summer" },
        { id: 2, text: "Winter" },
      ],
      rightAnswer: 2,
    },
    {
      id: 6,
      question: "Do you like to travel?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
      rightAnswer: 1,
    },
    {
      id: 7,
      question: "What type of music do you prefer?",
      options: [
        { id: 1, text: "Classical" },
        { id: 2, text: "Rock" },
      ],
      rightAnswer: 1,
    },
    {
      id: 8,
      question: "Do you prefer cats or dogs?",
      options: [
        { id: 1, text: "Cats" },
        { id: 2, text: "Dogs" },
      ],
      rightAnswer: 1,
    },
    {
      id: 9,
      question: "What is your preferred form of exercise?",
      options: [
        { id: 1, text: "Running" },
        { id: 2, text: "Yoga" },
      ],
      rightAnswer: 2,
    },
    {
      id: 10,
      question: "Are you a morning person or a night owl?",
      options: [
        { id: 1, text: "Morning person" },
        { id: 2, text: "Night owl" },
      ],
      rightAnswer: 2,
    },
  ],
  userAnswers: {},
  score: 0,
};

const questionSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { questionId, answerId } = action.payload;
      state.userAnswers[questionId] = answerId;
    },
    calcScore: (state) => {
      let totalScore = 0;
      state.questionList.forEach((q) => {
        if (state.userAnswers[q.id] === q.rightAnswer) {
          totalScore++;
        }
      });
      state.score = totalScore;
    },
    resetScore: (state) => {
      state.userAnswers = {};
      state.score = 0;
    },
  },
});
export const { submitAnswer, calcScore, resetScore } = questionSlice.actions;
export default questionSlice.reducer;
