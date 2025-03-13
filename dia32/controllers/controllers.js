const db = require('../db');


// Ver los autores
exports.getAutores = (req, res) => {
    const query = 'SELECT * FROM Autores';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener autores:', err);
            res.status(500).send('Error en el servidor');
        } else {
            res.json(results);
        }
    });
}

//Ver los libros
exports.getLibrosVer = (req, res) => {
    const query = `
        SELECT 
            l.id AS libro_id, 
            l.titulo, 
            l.anio_publicacion, 
            l.precio, 
            e.nombre AS editorial, 
            a.nombre AS autor
        FROM Libros l
        JOIN Editoriales e ON l.editorial_id = e.id
        JOIN Libro_Autor la ON l.id = la.libro_id
        JOIN Autores a ON la.autor_id = a.id
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener libros:', err);
            res.status(500).send('Error en el servidor');
        } else {
            console.log("Libros obtenidos:", results); 
            res.json(results);
        }
    });
};


// Ver por id a los autores
exports.getAutoresId = (req, res) => {
    const { autorId } = req.params;
    console.log('Autor ID recibido:', autorId);
    const query = `
        SELECT 
            l.titulo, 
            l.anio_publicacion, 
            l.precio, 
            e.nombre AS editorial,
            a.nombre AS autor
        FROM Libros l
        JOIN Libro_Autor la ON l.id = la.libro_id
        JOIN Autores a ON la.autor_id = a.id
        JOIN Editoriales e ON l.editorial_id = e.id
        WHERE la.autor_id = ?
    `;
    
    db.query(query, [autorId], (err, results) => {
        if (err) {
            console.error('Error al obtener libros:', err);
            return res.status(500).send('Error en el servidor');
        }
        if (results.length === 0) {
            return res.status(404).send('No se encontraron libros para este autor');
        }
        res.json(results);
    });
}

exports.postLibros = (req, res) => {
    const { titulo, anio_publicacion, precio, editorial_id, nombre_autor } = req.body;
  
    let editorialId = editorial_id;
  
    // Función para crear la relación libro-autor
    const crearRelacionLibroAutor = (libroId, autorNombre) => {
      const queryAutor = 'SELECT id FROM Autores WHERE nombre = ?';
      db.query(queryAutor, [autorNombre], (err, autorResults) => {
        if (err) {
          console.error('Error al obtener el autor:', err);
          return res.status(500).send('Error al obtener el autor');
        }
  
        if (autorResults.length === 0) {
          // Si no encontramos el autor, lo creamos
          const queryNuevoAutor = 'INSERT INTO Autores (nombre) VALUES (?)';
          db.query(queryNuevoAutor, [autorNombre], (err, nuevoAutorResults) => {
            if (err) {
              console.error('Error al crear el autor:', err);
              return res.status(500).send('Error al crear el autor');
            }
  
            // Relacionamos el libro con el nuevo autor
            const queryRelacion = 'INSERT INTO Libro_Autor (libro_id, autor_id) VALUES (?, ?)';
            db.query(queryRelacion, [libroId, nuevoAutorResults.insertId], (err) => {
              if (err) {
                console.error('Error al relacionar libro con autor:', err);
                return res.status(500).send('Error al relacionar libro con autor');
              }
  
              res.status(201).send('Libro creado con éxito');
            });
          });
        } else {
          // Relacionamos el libro con el autor existente
          const queryRelacion = 'INSERT INTO Libro_Autor (libro_id, autor_id) VALUES (?, ?)';
          db.query(queryRelacion, [libroId, autorResults[0].id], (err) => {
            if (err) {
              console.error('Error al relacionar libro con autor:', err);
              return res.status(500).send('Error al relacionar libro con autor');
            }
  
            res.status(201).send('Libro creado con éxito');
          });
        }
      });
    };
  
    if (!editorialId) {
      // Si no hay un editorial_id, creamos una nueva editorial
      const queryEditorial = 'INSERT INTO Editoriales (nombre) VALUES (?)';
      db.query(queryEditorial, ['Nueva Editorial'], (err, editorialResults) => {
        if (err) {
          console.error('Error al crear la editorial:', err);
          return res.status(500).send('Error al crear la editorial');
        }
  
        editorialId = editorialResults.insertId;
  
        // Crear el libro
        const queryLibro = 'INSERT INTO Libros (titulo, anio_publicacion, precio, editorial_id) VALUES (?, ?, ?, ?)';
        db.query(queryLibro, [titulo, anio_publicacion, precio, editorialId], (err, libroResults) => {
          if (err) {
            console.error('Error al crear el libro:', err);
            return res.status(500).send('Error al crear el libro');
          }
  
          // Relacionamos el libro con el autor si se proporciona
          if (nombre_autor) {
            crearRelacionLibroAutor(libroResults.insertId, nombre_autor);
          } else {
            res.status(201).send('Libro creado con éxito');
          }
        });
      });
    } else {
      // Si ya existe un editorial_id, solo creamos el libro
      const queryLibro = 'INSERT INTO Libros (titulo, anio_publicacion, precio, editorial_id) VALUES (?, ?, ?, ?)';
      db.query(queryLibro, [titulo, anio_publicacion, precio, editorialId], (err, libroResults) => {
        if (err) {
          console.error('Error al crear el libro:', err);
          return res.status(500).send('Error al crear el libro');
        }
  
        // Relacionamos el libro con el autor si es necesario
        if (nombre_autor) {
          crearRelacionLibroAutor(libroResults.insertId, nombre_autor);
        } else {
          res.status(201).send('Libro creado con éxito');
        }
      });
    }
  };
  

// Eliminar los libros
exports.DeleteLibro = (req, res) => { 
    const { id } = req.params;
    console.log('ID recibido en el backend:', id);  

    const query = 'DELETE FROM Libros WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al eliminar el libro:', err);
            res.status(500).send('Error en el servidor');
        } else {
            res.status(200).send('Libro eliminado correctamente');
        }
    });
};


// ventas de libro por ID
exports.getVentasLibroID = (res, req) => {
    const { libroId } = req.params;
    const query = `
        SELECT v.fecha_venta, v.cantidad, v.precio_venta, l.nombre AS libreria
        FROM Ventas v
        JOIN Librerias l ON v.libreria_id = l.id
        WHERE v.libro_id = ?
    `;
    db.query(query, [libroId], (err, results) => {
        if (err) {
            console.error('Error al obtener ventas:', err);
            res.status(500).send('Error en el servidor');
        } else {
            res.json(results);
        }
    });
}

exports.putUpdateLibro = (req, res) => {
    const { id } = req.params; 
    const { titulo, anio_publicacion, precio, editorial_id } = req.body;

    console.log("ID recibido:", id);
    console.log("Datos recibidos:", { titulo, anio_publicacion, precio, editorial_id });

    const query = `
        UPDATE Libros
        SET titulo = ?, anio_publicacion = ?, precio = ?, editorial_id = ?
        WHERE id = ?
    `;

    db.query(query, [titulo, anio_publicacion, precio, editorial_id, id], (err, result) => {
        if (err) {
            console.error('Error al actualizar el libro:', err);
            return res.status(500).send('Error al actualizar el libro');
        }

        console.log("Resultado de la actualización:", result);

        if (result.affectedRows === 0) {
            return res.status(404).send('Libro no encontrado');
        }

        res.send('Libro actualizado con éxito');
    });
};
