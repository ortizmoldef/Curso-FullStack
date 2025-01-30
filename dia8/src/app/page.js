import Fruta from './components/fruta'
import Producto from './components/productos'
import Productos from './components/mostrar'
import BuscadorUsuarios from './components/input'
import LibrosEditable from './components/eliminar'
import Usuariostabla from './components/tabla'
import ListaDeFrutas from './components/agregarFruta'
import Usuarios from './components/mayorEdad'
import Categoria from './components/categoria'


export default function Home() {
  return (
   <>
   <h1>Dia 8</h1>
   <br></br>
   <Fruta /> 
   <br></br>
   <Producto />
   <br></br>
   <Productos/>
    <br></br>
    <BuscadorUsuarios/>
    <br></br>
    <LibrosEditable/>
    <br></br>
    <Usuariostabla/>
    <br></br>
    <ListaDeFrutas/>
    <br></br>
    <Usuarios/>
    <br></br>
    <Categoria />
   </>
  );
}
