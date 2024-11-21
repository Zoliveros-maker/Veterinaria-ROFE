document.addEventListener("DOMContentLoaded", function() {
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

    if (usuarioActivo) {
        const menu = document.getElementById("menu");

        // Verificar si el usuario y el botón de cerrar sesión ya existen
        const liUsuarioExistente = document.getElementById("usuarioActivo");
        const liCerrarSesionExistente = document.getElementById("cerrarSesion");

        if (!liUsuarioExistente && !liCerrarSesionExistente) {
            // Crear el elemento del usuario y el botón de cerrar sesión
            const liUsuario = document.createElement("li");
            liUsuario.id = "usuarioActivo"; // Asegúrate de asignar un id único para evitar duplicados
            liUsuario.textContent = usuarioActivo.nombres;

            

            const liCerrarSesion = document.createElement("li");
            liCerrarSesion.id = "cerrarSesion"; // Asegúrate de asignar un id único para evitar duplicados
            const botonCerrarSesion = document.createElement("a");
            botonCerrarSesion.href = "#";
            botonCerrarSesion.textContent = "Cerrar Sesión";
            botonCerrarSesion.addEventListener("click", function() {
                localStorage.removeItem("usuarioActivo");
                window.location.reload();
            });

            liCerrarSesion.appendChild(botonCerrarSesion);
            menu.appendChild(liCerrarSesion);
            menu.appendChild(liUsuario);
           
        }
    }
});
