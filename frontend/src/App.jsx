import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";  // 👈 Import Timer
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <div className="container mx-auto p-4">
        <Dashboard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TaskList />
          <Timer />  
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default App;
