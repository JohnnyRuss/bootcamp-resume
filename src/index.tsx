import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Theme from "./Theme";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Theme>
      <App />
    </Theme>
  </BrowserRouter>
);
