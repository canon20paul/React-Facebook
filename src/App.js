import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Body from './Body'
import Dashboard from './Dashboard' 
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>

        <Navbar />
        <Body />
        
      
    <Routes>

          <Route path="/" element={<Body />} />
          <Route path="/dashboard" element={<Dashboard />} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
