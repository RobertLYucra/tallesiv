import { React } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/main/:user" element={<Main />} />
        <Route path="/*"element={<Login/>} />
        
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
