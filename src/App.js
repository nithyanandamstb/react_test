//import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/login/Form";
import PropResult from "./components/property-result/Result";
import Details from "./components/details/Details";

/**
 * 
 * IN THIS PAGE I WILL CREATE A ROUTER
 * 
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/property-result" element={<PropResult />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
