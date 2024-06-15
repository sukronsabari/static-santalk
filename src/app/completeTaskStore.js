// completedTaskStore.js
import { create } from "zustand";

export const useCompletedTaskStore = create((set) => ({
  completedTasks: [],
  addCompletedTask: (task) =>
    set((state) => ({ completedTasks: [...state.completedTasks, task] })),
  removeCompletedTask: (index) =>
    set((state) => ({
      completedTasks: state.completedTasks.filter((_, idx) => idx !== index),
    })),
}));
