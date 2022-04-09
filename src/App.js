import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Download from "./components/download/Download";
import Subscribe from "./components/subscribe/Subscribe";
import FAQ from "./components/faq/Faq";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Download />
      <Subscribe />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
