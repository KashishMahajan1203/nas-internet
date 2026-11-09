
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import useScrollReveal from "./hooks/useScrollReveal";

import Service1 from "./pages/services/Service1";
import Service2 from "./pages/services/Service2";
import Service3 from "./pages/services/Service3";
import Service4 from "./pages/services/Service4";
import Service5 from "./pages/services/Service5";

function Layout() {
  const { pathname } = useLocation();
  useScrollReveal();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main key={pathname} className="page-enter flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/services/1" element={<Service1 />} />
          <Route path="/services/2" element={<Service2 />} />
          <Route path="/services/3" element={<Service3 />} />
          <Route path="/services/4" element={<Service4 />} />
          <Route path="/services/5" element={<Service5 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
