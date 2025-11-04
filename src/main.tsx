import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Button from "./components/button";

function App() {
  return (
    <main>
      <h1>UIKit React Component Library</h1>
      <Button>Click me</Button>
    </main>
  );
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
