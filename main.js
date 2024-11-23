document.addEventListener("DOMContentLoaded", function () {
    const usuarioActivo = localStorage.getItem("usuarioActivo");

    // Si no hay usuario activo, redirigir al login
    if (!usuarioActivo) {
        window.location.href = "index.html"; // Redirigir al login si no hay usuario activo
    } else {
        const usuarioNombre = localStorage.getItem("usuarioNombre"); // Obtener el nombre del usuario
        if (usuarioNombre) {
            const usuarioDisplay = document.getElementById("usuarioNombre");
        }
    }

    // Manejador para el enlace de "Cerrar Sesión"
    const cerrarSesionLink = document.querySelector("a[href='#cerrar-sesion']");
    if (cerrarSesionLink) {
        cerrarSesionLink.addEventListener("click", function (e) {
            e.preventDefault(); // Evita la acción por defecto del enlace

            // Eliminar datos del usuario de localStorage
            localStorage.removeItem("usuarioActivo");
            localStorage.removeItem("usuarioNombre");

            // Redirigir al login después de cerrar sesión
            alert("Has cerrado sesión correctamente.");
            window.location.href = "index.html"; // Cambiar la URL a la página de inicio de sesión
        });
    }
});