import './App.css';
import { NavBar } from "./componentes/NavBar/navBar";
import { Carrousel } from "./componentes/carrusel/Carousel";
import { cardG } from "./componentes/Target/targets";
//componentes

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Carrousel />
      <cardG />
    </div>
  );
}


export default App;