import "./index.css";
import Header from "./components/header/header";
import Navbar from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Members from "./components/members/member";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
