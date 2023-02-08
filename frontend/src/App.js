import {React,useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import axios from "axios";
import Login from "./pages/Login";
import Main from './pages/Main'
import Register  from "./pages/Register";
import InicioSesion from "./pages/InicioSesion";






function App() {
  
  const [list,setList] = useState([])
  useEffect(() => {
    async function listarUsuario() {
      try{
        const response = await axios.get("http://localhost:8801/user")
        setList(response.data)
      }catch(error){
        console.log(error)
      }
      
    }
    listarUsuario()

  }, [list])

  return (
    <div>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login list={list}/>}/>
          <Route path="/Register" element={<Register list={list}/>}/>
          <Route path="/InicioSesion" element={<InicioSesion/>}/>
          <Route path="/:id" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
