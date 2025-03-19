import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(1500); // 25 min = 1500 sec
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">⏳ Focus Timer</h2>
      <div className="text-4xl font-mono mb-4">{formatTime(time)}</div>
      <div className="space-x-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTime(1500);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
