import React from "react";
import TodoList from "./components/TodoList";
import "./index.css"; // Import Tailwind CSS

export default function App() {
  return (
    <div className="bg-[#101010] text-[#b0b0b0] min-h-screen flex items-center justify-center">
      <TodoList />
    </div>
  );
}
