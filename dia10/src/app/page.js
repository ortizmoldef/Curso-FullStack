import ContadorAleatorio from "./components/contador"; 
import ObtenerDatosApi from "./components/datosApi"; 
import BotonEncendidoApagado from "./components/BotonEncendido";
import Formulario from "./components/Formulario";
import Temporizador from "./components/Temporizador";
import CambiarColorFondo from "./components/CambiarColor";
import AgregarElementos from "./components/AgregarElementos";
import AumentaContador from "./components/ContadorAumenta";
import Alerta from "./components/Alerta";
import CampoTexto from "./components/CampoTexto";
import PresionaTecla from "./components/PresionaTecla";
import ColorDiv from "./components/ColorDiv";

export default function Home() {
  return (
    <>
      <ContadorAleatorio/>
      <br></br>
      <ObtenerDatosApi/>
      <br></br>
      <BotonEncendidoApagado/>
      <br></br>
      <Formulario/>
      <br></br>
      <Temporizador/>
      <br></br>
      <CambiarColorFondo/>
      <br></br>
      <AgregarElementos/>
      <br></br>
      <PresionaTecla/>
      <br></br>
      <AumentaContador/>
      <br></br>
      <Alerta/>
      <br></br>
      <CampoTexto/>
      <br></br>
      <ColorDiv/>
    </>
  );
}
