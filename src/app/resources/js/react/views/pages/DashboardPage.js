import React from 'react'
import DashboardTemplate from '../templates/DashboardTemplate'
import { createRoot } from "react-dom/client";
import './../../style.css'


export default function DashboardPage() {
  return (
    <DashboardTemplate />
  )
}

if (document.getElementById("app-dashboard")) {
    const container = document.getElementById("app-dashboard");
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<DashboardPage />);
}
