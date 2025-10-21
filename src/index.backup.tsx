// src/index.tsx
import * as React from "react"
import * as ReactDOM from "react-dom/client"

// Choose the page you want as your homepage during testing.
// Swap Framework for Home or CaseStudies anytime.
import Framework from "./Framework.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Framework />
  </React.StrictMode>
)

