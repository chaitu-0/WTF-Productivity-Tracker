import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(25 * 60); // 25-minute timer
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startPauseTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(25 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-xl font-bold mb-4">⏳ Pomodoro Timer</h2>
      <div className="text-4xl font-mono mb-4">{formatTime(time)}</div>
      <div className="flex justify-center gap-4">
        <button
          className={`px-4 py-2 rounded-md ${
            isRunning ? "bg-red-500" : "bg-green-500"
          } text-white`}
          onClick={startPauseTimer}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
