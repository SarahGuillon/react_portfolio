import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
