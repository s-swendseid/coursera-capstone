import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Booking from "./components/Booking Page/Booking";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Specials />
      <Testimonials />
      <About />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
