import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import Task4 from './pages/Task4';
import Footer from './pages/Footer';
function App() {
  
  return (
    <div className="App bg-bgColor h-full p-5">
       <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Task1" element={<Task1 />} />
          <Route path="/Task2" element={<Task2 />} />
          <Route path="/Task3" element={<Task3 />} />
          <Route path="/Task4" element={<Task4 />} />
          </Routes>
          <Footer />
       </Router>
    </div>
  );
}

export default App;
