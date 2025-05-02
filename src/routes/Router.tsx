import { Routes, Route } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CartPages from "../pages/CartPages";
import Productpage from "../pages/Productpage";
const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="cart" element={<CartPages />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="product/:id" element={<Productpage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
