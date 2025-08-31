import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { About, Home, Projects } from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
