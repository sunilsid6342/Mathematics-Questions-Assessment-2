import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Component/Nav';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/:id' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
