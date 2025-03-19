import { useState } from "react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";
import { useTasks } from "../context/TaskContext";  // 👈 Import useTasks

const TaskList = () => {
  const { tasks, addTask, deleteTask, toggleComplete } = useTasks();  // 🎯 Use Global Task State
  const [newTask, setNewTask] = useState("");

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">Task List</h2>

      {/* Input & Add Button */}
      <div className="flex mb-3">
        <input
          type="text"
          className="border p-2 flex-1 rounded-l-md"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => { addTask(newTask); setNewTask(""); }} className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
          <FaPlus />
        </button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet. Add one!</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center bg-gray-100 p-2 my-1 rounded-md">
              <span className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}>
                {task.text}
              </span>
              <button onClick={() => toggleComplete(task.id)} className="text-green-500 hover:text-green-700 mx-2">
                <FaCheck />
              </button>
              <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
