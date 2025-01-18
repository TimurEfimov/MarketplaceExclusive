import { Routes, Route } from "react-router";

import "./scss/app.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound.tsx/NotFound";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="line" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
