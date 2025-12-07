import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WorkflowCard from "./WorkflowCard";
import workflow from "../data/gmail.json";

export function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600">Workflows</h1>
      <WorkflowCard data={workflow} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
