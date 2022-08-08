import { Routes, Route } from "react-router-dom";

import { About, Footer, Home, Navbar, Projects } from "./components";

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
      <Footer />
    </div>
  );
}

export default App;
