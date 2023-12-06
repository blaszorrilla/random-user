# random-user
Generador de usuarios random utilizando API fetch y express.js como servidor

Web que permite generar perfiles de usuario de forma aleatoria consultando una API externa. 
La información generado como el nombre, el correo electrónico, el número de teléfono y la imagen se muestran en la GUI. El botón "Siguiente" genera un perfil random cada vez que es presionado. Después de hacer clic en el botón "Guardar", se mostrará un mensaje de confirmación al usuario solicitando aprobación para guardar la información en la base de datos de tipo MySQL. En caso de aprobación, los datos serán enviados al servidor y registrados en la base de datos. El sitio web ofrece la posibilidad de cargar y ver usuarios previamente registrados en forma de tarjetas, proporcionando una interfaz dinámica y fácil de usar para interactuar con la información almacenada.

**Instalación**

- Instalar las dependencias
```npm install```
- Importar la base de datos MySQL 'randomuser.sql' ubicada en la carpeta data
- Levantar el servidor en express
```node server.js```
- Abrir en el navegador el archivo index.html
**Demo**
![Animation](https://github.com/blaszorrilla/random-user/assets/37028794/d211c029-5bb0-46e4-a440-03a29dfc977f)



