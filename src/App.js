import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App()
{
  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/products' element={<Products />} exact />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>

  );
}

export default App;
