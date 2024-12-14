import { configureStore } from "@reduxjs/toolkit";
import questionnaire from "./slices/questionSlice";

export const store = configureStore({
  reducer: { questionnaire },
});
