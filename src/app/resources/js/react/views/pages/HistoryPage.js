import React from 'react'
import HistoryTemplate from '../templates/HistoryTemplate'
import { createRoot } from "react-dom/client";

export default function HistoryPage(props) {
  return (
    <HistoryTemplate {...props}/>
  )
}

if (document.getElementById("app-history")) {
    const container = document.getElementById("app-history");
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<HistoryPage />);
}
