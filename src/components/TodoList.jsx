import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <div className="flex flex-col items-center justify-center rounded-xl bg-[#181818] border-2 border-[#202020] p-8">
        <h1 className="text-2xl font-bold mb-4 text-white">To-Do List</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-[#202020] border-2 border-[#222222] rounded-l px-4 py-2 w-full"
            placeholder="Add a new task"
          />
          <button
            onClick={handleAddTask}
            className="bg-[#39ff14] text-[#202020] px-2 rounded-r text-4xl items-center justify-center transition-transform transform hover:scale-105 bg-center"
          >
            <p>+</p>
          </button>
        </div>
      </div>
      <ul className="list-disc mt-2 p-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 bg-[#181818] p-4 rounded-xl border-2 border-[#202020]"
          >
            <span>{task}</span>
            <button
              onClick={() => handleRemoveTask(index)}
              className="bg-[#ff3131] text-[#181818] text-4xl px-3 text-center justify-center items-center rounded transition-transform transform hover:scale-105"
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
