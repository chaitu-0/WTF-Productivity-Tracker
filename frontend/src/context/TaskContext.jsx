// import { createContext, useState } from "react";

// export const TaskContext = createContext();

// export const TaskProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (newTask) => {
//     if (newTask.trim() === "") return;
//     setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleComplete }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };


import { createContext, useContext, useState } from "react";

// 1️⃣ Context Banaao
const TaskContext = createContext();

// 2️⃣ Provider Component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Task Add Function
  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  // Task Delete Function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Task Complete Toggle
  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};

// 3️⃣ Custom Hook for Easy Access
export const useTasks = () => {
  return useContext(TaskContext);
};
