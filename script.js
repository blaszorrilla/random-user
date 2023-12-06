        const fotoElem = document.getElementById('foto');
        const nombreElem = document.getElementById('nombre');
        const correoElem = document.getElementById('correo');
        const telefonoElem = document.getElementById('telefono');

        let usuarioActual = null;
        const generarUsuario = async () => {
            const url = 'https://randomuser.me/api/';
            const respuesta = await fetch(url);
            const { results } = await respuesta.json();

            usuarioActual = {
                nombre: results[0].name.first,
                correo: results[0].email,
                telefono: results[0].phone,
                foto: results[0].picture.medium
            };

           // Mostrar los datos en la interfaz
            fotoElem.src = usuarioActual.foto;
            nombreElem.textContent = usuarioActual.nombre;
            correoElem.textContent = usuarioActual.correo;
            telefonoElem.textContent = usuarioActual.telefono;
        };

        const enviarDatosAlServidor = (usuario) => {
            // Enviar datos al servidor
            fetch('http://localhost:3000/guardarUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        };

        const guardarUsuario = async () => {
            // Mostrar un mensaje de confirmación
            const confirmacion = window.confirm(`¿Desea guardar este usuario?\nNombre: ${usuarioActual.nombre}\nCorreo: ${usuarioActual.correo}\nTeléfono: ${usuarioActual.telefono}`);

            // Si el usuario confirma, enviar datos al servidor
            if (confirmacion) {
                enviarDatosAlServidor(usuarioActual);
                generarUsuario();
            } else {
                alert('Usuario no guardado');
            }
        };

        const siguienteUsuario = () => {
            generarUsuario();
        };

        // Generar un usuario al cargar la página
        generarUsuario();
         

        // Cargar usuario en el grid
        const cargarUsuarios = () => {
            const usuariosGrid = document.getElementById('usuarios-grid');
            fetch('http://localhost:3000/obtenerUsuarios')
                .then(response => response.json())
                .then(data => {
                    // Limpiar el grid antes de agregar nuevos usuarios
                    usuariosGrid.innerHTML = '';
    
                    // Mostrar los usuarios en el grid
                    data.forEach(usuario => {
                        const usuarioCard = document.createElement('div');
                        usuarioCard.classList.add('usuario-card');
                        usuarioCard.innerHTML = `
                            <img src="${usuario.foto}" alt="Foto">
                            <p>${usuario.nombre}</p>
                            <p>${usuario.correo}</p>
                            <p>${usuario.telefono}</p>
                        `;
                        usuariosGrid.appendChild(usuarioCard);
                    });
                })
                .catch(error => console.error('Error al cargar usuarios:', error));
        };

        // listar usuarios al cargar la página
        cargarUsuarios();

    // Función para realizar la llamada a la API de GitHub y procesar los resultados
    function callApiUser(user) {
        const userUrl = url + user;
        const repoUrl = `${url}${user}/repos`;

        // Realizar llamadas a la API de GitHub para obtener datos del usuario y repositorios
        $.when(
            $.ajax({ url: userUrl }),
            $.ajax({ url: repoUrl })
        )
            .done(function (userData, repoData) {
                const dataUser = userData[0];
                const dataRepo = repoData[0];
                
                // Manejar el caso en que el usuario no existe
                if (dataUser.message === "Not Found") {
                    mostrarError("No existe el usuario...");
                    return;
                }

                // Mostrar la información del usuario y sus repositorios
                mostrarData(dataUser);
                mostrarRepos(dataRepo);
            })
            .fail(function (error) {
                console.log(error);
            });
    }

    // Función para mostrar la información del usuario en la interfaz
    function mostrarData(dataUser) {
        clearHTML();
        const {
            avatar_url,
            bio,
            followers,
            following,
            name,
            public_repos,
        } = dataUser;
        const container = $("<div>").html(`
            <div class="row-left">
                <img src="${avatar_url}" alt="user image">
            </div>
            <div class="row-right">
                <h3>${name}</h3>
                <p>${bio}</p>
                <div class="stats-user">
                    <p>${followers} <span>Followers</span></p>
                    <p>${following} <span>Following</span></p>
                    <p>${public_repos} <span>Repos</span></p>
                </div>
                <h3>Repositorios:</h3>
                <div class="link-repos"></div>
            </div>
        `);
        containerSection.append(container);
    }

    // Función para mostrar la lista de repositorios en la interfaz
    function mostrarRepos(repos) {
        const reposContainer = $(".link-repos");
        repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 10)
            .forEach((element) => {
                const link = $("<a>")
                    .text(element.name)
                    .attr("href", element.html_url)
                    .attr("target", "_blank");
                reposContainer.append(link);
            });
    }

    // Función para mostrar mensajes de error en la interfaz
    function mostrarError(mensaje) {
        const mensajeNuevo = "Advertencia: " + mensaje;
        const error = $("<h5>")
            .text(mensajeNuevo)
            .css("color", "red");
        mainContainer.append(error);
        // Eliminar el mensaje de error después de 5 segundos
        setTimeout(() => error.remove(), 5000);
    }

    // Función para limpiar el contenido HTML en el contenedor de repositorios
    function clearHTML() {
        containerSection.html("");
    }

