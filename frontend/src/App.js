import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login";
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/:id" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
