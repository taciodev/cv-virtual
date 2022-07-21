import { BrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

function App() {
  return (
    <BrowserRouter>
      <div id="portfolio">
        <h1>Taciano da Hora</h1>
        <Sidebar />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
