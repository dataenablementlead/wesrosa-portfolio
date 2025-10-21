import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages (each already includes Layout internally)
import Homepage from "./Homepage.tsx"
import CaseStudies from "./CaseStudies.tsx"
import Framework from "./Framework.tsx"
import Chat from "./Chat.tsx"
import Book from "./Book.tsx"
import About from "./About.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
