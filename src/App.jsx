import Navegar from "./Componentes/Navegar/Navegar";
import Principal from "./Componentes/Principal/Principal";
import Fondo from "./imagenes/Fondo.png";

function App() {  
  const imgFondo = {
    backgroundImage : `url(${Fondo})`,
    backgroundReapet : "no-repeat",
    backgroundPosition : "bottom",
    backgroundSize:"cover",
    position : "relative",
    
  }
  return (
    < div style={imgFondo} className="overflow-hidden min-h-screen">
    <Navegar></Navegar>
    <Principal></Principal>
    </div>
  )
}

export default App
