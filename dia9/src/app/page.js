import Perfil from "./components/perfil"; 
import Productos from "./components/producto"; 
import Boton from "./components/Boton"; 
import ContenidoTarjeta from "./components/Tarjeta"; 
import Contenido from "./components/Contenedor";
import Alerta from "./components/Alerta";
import SaludoPersona from "./components/Saludo";
import TareaCompletada from "./components/Tarea";
import MostrarAvatar from "./components/Avatar";
import Caja from "./components/Caja";
import Lista from "./components/Lista";
import BotonP from "./components/BotonPersonalizado";


export default function Home() {
  return (
    <>
    <Perfil/>
    <br></br>
    <Productos/>
    <br></br>
    <Boton/>
    <br></br>
    <br></br>
    <ContenidoTarjeta/>
    <br></br>
    <Contenido/>
    <br></br>
    <Alerta/>
    <br></br>
    <SaludoPersona/>
    <br></br>
    <TareaCompletada/>
    <br></br>
    <MostrarAvatar/>
    <br></br>
    <Caja/>
    <br></br>
    <Lista/>
    <br></br>
    <BotonP/>
    </>
  );
}
