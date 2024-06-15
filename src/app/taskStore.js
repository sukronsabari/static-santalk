// taskStore.js
import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  removeTask: (index) =>
    set((state) => ({ tasks: state.tasks.filter((_, idx) => idx !== index) })),
}));
