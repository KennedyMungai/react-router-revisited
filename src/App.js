import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";

function App()
{
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
