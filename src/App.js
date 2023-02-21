import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
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
          <Route path='/products' element={<Products />} />
          <Route path='/products/product-detail/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </>

  );
}

export default App;
