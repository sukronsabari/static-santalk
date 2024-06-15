import { useState } from "react";
import { useTaskStore, useCompletedTaskStore } from "./app/store";
import { XCircle, CheckCircle } from "lucide-react";

const App = () => {
  const [task, setTask] = useState("");

  const tasks = useTaskStore((state) => state.tasks);
  const completedTasks = useCompletedTaskStore((state) => state.completedTasks);

  const addTask = useTaskStore((state) => state.addTask);
  const removeTask = useTaskStore((state) => state.removeTask);
  const addCompletedTask = useCompletedTaskStore(
    (state) => state.addCompletedTask
  );
  const removeCompletedTask = useCompletedTaskStore(
    (state) => state.removeCompletedTask
  );

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  const handleCompleteTask = (index) => {
    const completedTask = tasks[index];
    addCompletedTask(completedTask);
    removeTask(index);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-sm shadow-md p-8">
          <div>
            <input
              className="px-3 py-2 border border-gray-300"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              onClick={handleAddTask}
              className="px-3 py-2 border border-gray-300"
            >
              Add Task
            </button>
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-1">Task List</h2>
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center border border-gray-300 px-2 py-1"
              >
                {task}{" "}
                <div>
                  <button
                    onClick={() => handleCompleteTask(index)}
                    className="mr-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                  </button>
                  <button onClick={() => removeTask(index)}>
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mt-4 mb-1">Completed Tasks</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center border border-gray-300 px-2 py-1"
              >
                {task}{" "}
                <button onClick={() => removeCompletedTask(index)}>
                  <XCircle className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
