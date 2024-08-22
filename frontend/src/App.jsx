import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NewLaunches from "./Components/NewLaunches/NewLaunches";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/smartwatch"
            element={<ShopCategory category="smartwatch" />}
          />
          <Route
            path="/headphones"
            element={<ShopCategory category="headphones" />}
          />
          <Route path="/tws" element={<ShopCategory category="tws" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/newlaunches" element={<NewLaunches/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
