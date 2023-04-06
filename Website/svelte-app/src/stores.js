import { writable } from "svelte/store";

export const questions = writable([
  {
    question: "What is the meaning of life?",
  },
  {
    question: "What is the capital of France?",
  },
]);