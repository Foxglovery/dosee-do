import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Navbar from './components/Nav';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </Router>
);

export default App;
