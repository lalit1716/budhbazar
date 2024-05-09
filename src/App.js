import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/Style.css';
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboute from "./pages/Aboute";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import Tshirts from "./components/Tshirts";
import Shoes from "./components/Shoes";
import Laptops from "./components/Laptops";
import Trimers from "./components/Trimers";
import Watchs from "./components/Watchs";
import Bags from "./components/Bags";
import Airpods from "./components/Airpods";
import Headphones from "./components/Headphones";
import Mobiles from "./components/Mobiles";
import Toys from "./components/Toys";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboute" element={<Aboute />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />

          {/* after this comment all Route for components linking */}

          <Route path="tshirts" element={<Tshirts />} />
          <Route path="Shoes" element={<Shoes />} />
          <Route path="Laptops" element={<Laptops />} />
          <Route path="Trimers" element={<Trimers />} />
          <Route path="Watchs" element={<Watchs />} />
          <Route path="Bags" element={<Bags />} />
          <Route path="Airpods" element={<Airpods />} />
          <Route path="Headphones" element={<Headphones />} />
          <Route path="Mobiles" element={<Mobiles />} />
          <Route path="Toys" element={<Toys />} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
