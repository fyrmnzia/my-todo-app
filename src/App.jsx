import React from "react";
import TodoList from "./components/TodoList";
import "./index.css"; // Import Tailwind CSS

export default function App() {
  return (
    <div className="bg-[#101010] text-[#b0b0b0] min-h-screen flex items-center justify-center">
      <div className="fixed text-white text-center top-8 px-12 py-2 bg-[#222222] border-2 border-[#242424] shadow-lg rounded-lg">
        <h1 className="font-bold text-2xl">fytodo</h1>
        <p className="font-light text-xl">by &copy; fyrmnzia.com</p>
      </div>
      <TodoList />
    </div>
  );
}
