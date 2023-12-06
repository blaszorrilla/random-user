const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const puerto = 3000;

// Configura CORS para permitir solicitudes desde todas las fuentes (ajusta según sea necesario)
app.use(cors());

// Configura la conexión a la base de datos MySQL (ajusta según tu configuración)
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'randomuser',
});

conexion.connect((error) => {
    if (error) {
        console.error('Error de conexión a la base de datos:', error);
    } else {
        console.log('Conexión a la base de datos establecida');
    }
});

app.use(express.json()); // Middleware para parsear JSON en las solicitudes POST

app.post('/guardarUsuario', (req, res) => {
    const { nombre, correo, telefono, foto } = req.body;

    const sql = 'INSERT INTO usuarios (nombre, correo, telefono, foto) VALUES (?, ?, ?, ?)';
    conexion.query(sql, [nombre, correo, telefono, foto], (err, result) => {
        if (err) {
            console.log('Error al insertar usuario: ', err);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }

        console.log('Usuario insertado correctamente');
        res.status(200).json({ mensaje: 'Usuario insertado correctamente' });
    });
});

// ... (otras configuraciones)

app.get('/obtenerUsuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios ORDER BY id DESC';
    conexion.query(sql, (err, result) => {
        if (err) {
            console.log('Error al obtener usuarios: ', err);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }

        res.status(200).json(result);
    });
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});
