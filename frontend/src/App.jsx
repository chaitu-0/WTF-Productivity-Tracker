import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import Profile from "./components/Profile";
import { ProfileProvider } from "./context/ProfileContext";  // 🆕 Import Context Provider

const App = () => {
  return (
    <ProfileProvider> {/* 👈 Yeh wrap karna important hai! */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <Header />
        <Navbar />
        <div className="container mx-auto p-4">
          <Dashboard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TaskList />
            <Timer />
          </div>
        </div>
      </div>
    </ProfileProvider>
  );
};

export default App;
