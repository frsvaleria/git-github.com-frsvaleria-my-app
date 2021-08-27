import './App.css';
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-boostrap";

//componentes

import './componentes/carrusel';
import { navBar } from "./componentes/NavBar/navBar";
import './componentes/tarjetas';


function App() {
  return (
    <div className="App" >
      <navBar />
    </div>
  );
}

export default App;