function Dashboard() {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">🚀 Dashboard</h2>
  
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Tasks Completed</h3>
            <p className="text-3xl font-bold text-blue-700">12</p>
          </div>
  
          <div className="p-4 bg-green-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Pending Tasks</h3>
            <p className="text-3xl font-bold text-green-700">5</p>
          </div>
  
          <div className="p-4 bg-yellow-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Productivity Score</h3>
            <p className="text-3xl font-bold text-yellow-700">85%</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  