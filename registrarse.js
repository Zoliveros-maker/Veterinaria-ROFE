document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página

        // Obtener los datos del formulario
        const nombres = document.getElementById("registroNombres").value;
        const email = document.getElementById("registroEmail").value;
        const password = document.getElementById("registroPassword").value;
        const genero = document.getElementById("registroGenero").value;

        // Validar los campos (opcional)
        if (nombres === "" || email === "" || password === "" || genero === "") {
            alert("Por favor, completa todos los campos.");
            return; // Detener el proceso si falta algún dato
        }

        // Verificar si ya existe un usuario registrado
        const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));


        // Si no hay un usuario registrado, permite el registro del nuevo usuario
        if (usuarioRegistrado) {
            // Verificar si el correo electrónico del usuario ya está registrado
            if (usuarioRegistrado.email === email) {
                alert("Ya tienes una cuenta registrada con este correo electrónico. Puedes iniciar sesión.");
                return; // Detener el proceso si el usuario ya está registrado
            }
        }

        // Guardar los datos del nuevo usuario en el localStorage
        const usuario = {
            nombres: nombres,
            email: email,
            password: password,
            genero: genero
        };

        // Guardar el nuevo usuario en el localStorage
        localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

        // Confirmar registro exitoso
        alert("¡Registro exitoso!");

        // Redirigir a la página de login después de registrar
        window.location.href = "index.html"; // Cambia esta URL a la que desees
    });

    // Event listener para el botón "Ya tienes cuenta"
    document.getElementById("loginRedirectButton").addEventListener("click", function() {
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = "index.html"; // Cambia esta URL a la que desees
    });
});
