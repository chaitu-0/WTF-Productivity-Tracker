import { useState } from "react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete React Component", completed: false },
    { id: 2, text: "Fix Tailwind Styling", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full">
      <h2 className="text-xl font-bold mb-4">📌 Task List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 flex-1 rounded-l-md focus:outline-none"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
          onClick={addTask}
        >
          <FaPlus />
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 mb-2 rounded-md ${
              task.completed ? "bg-green-100 line-through" : "bg-gray-100"
            }`}
          >
            <span>{task.text}</span>
            <div className="flex gap-2">
              <button
                className="text-green-500 hover:text-green-700"
                onClick={() => toggleComplete(task.id)}
              >
                <FaCheck />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => deleteTask(task.id)}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
