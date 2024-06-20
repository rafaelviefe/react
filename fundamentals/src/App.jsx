import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Company from './pages/Company';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
