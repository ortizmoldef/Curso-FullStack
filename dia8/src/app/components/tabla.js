
const Usuariostabla = () =>{

    const usuarios = [
        { id: 1, nombre: "Ana", edad: 25, ciudad: "Madrid" },
        { id: 2, nombre: "Luis", edad: 30, ciudad: "Barcelona" },
        { id: 3, nombre: "Carlos", edad: 22, ciudad: "Sevilla" },
    ]
    
    return (
        <div>
          <h1>Lista de Usuarios</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Ciudad</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.edad}</td>
                  <td>{usuario.ciudad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default Usuariostabla;