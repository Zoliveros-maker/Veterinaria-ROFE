// Evento de clic en el botón "¿Aún no tienes cuenta? Registrarse"
document.getElementById("loginRedirectButton").addEventListener("click", function() {
    // Redirigir a la página de registro (registrarse.html)
    window.location.href = "registrarse.html"; // Cambia esta URL si es necesario
});

// Evento para el formulario de login
document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const email = document.getElementById("username").value;  // Usamos el id "username" para el correo
    const password = document.getElementById("password").value; // Usamos el id "password" para la contraseña

    // Obtener el usuario registrado del localStorage
    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

    // Verificar si no existe el usuario registrado en el localStorage
    if (!usuarioRegistrado) {
        // Si no hay usuario registrado, mostrar mensaje de alerta
        alert("No tienes una cuenta registrada. Por favor, regístrate primero.");
        // Redirigir a la página de registro
        window.location.href = "registrarse.html"; // Cambia esta URL a la página de registro si lo deseas
        return;
    }

    // Verificar si las credenciales coinciden con las del usuario registrado
    if (usuarioRegistrado.email === email && usuarioRegistrado.password === password) {
        // Si las credenciales son correctas, guardar el estado de sesión
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioRegistrado));

        // Redirigir a la página principal
        window.location.href = "indice.html"; // Cambia esta URL a la página que desees
    } else {
        // Si las credenciales no coinciden, mostrar un mensaje de error
        alert("Correo electrónico o contraseña incorrectos.");
    }
});
