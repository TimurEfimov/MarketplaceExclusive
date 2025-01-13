import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./scss/app.scss";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="line" />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
