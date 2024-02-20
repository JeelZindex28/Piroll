import './css/style.css';
import './css/responsive.css';
import './fonts/fonts.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './Pages/Service/Service';
import Abouts from './Pages/About/Abouts';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Service" element={<Service />} />
            <Route exact path="/About" element={<Abouts />} />
            <Route exact path="/Projects" element={<Projects />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
