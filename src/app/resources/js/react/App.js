import React from "react";
import { createRoot } from "react-dom/client";

export default function App() {
    return <h1>App React!</h1>;
}

if (document.getElementById("app-react")) {
    const container = document.getElementById("app-react");
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App />);
}
