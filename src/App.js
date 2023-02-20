import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App()
{
  return (
    <>
      <header>

      </header>
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </Router>
      </main>
    </>

  );
}

export default App;
