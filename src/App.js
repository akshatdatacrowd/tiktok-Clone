import Index from "./components/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fyp from "./components/Fyp.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/fyp' element={<Fyp />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
