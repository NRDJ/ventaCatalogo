function validateForm() {

    const fullName = document.getElementById("fullName").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const birthdate = new Date(document.getElementById("birthdate").value);
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const today = new Date();

    // Validación de fecha de nacimiento (13 años mínimo)
    const age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    if (age < 13) {
        alert("Debes tener al menos 13 años para registrarte.");
        return false;
    }

    // Validación de contraseñas iguales
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Validación de formato de contraseña
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;
    if (!passwordRegex.test(password)) {
        alert("La contraseña debe tener entre 6 y 18 caracteres, al menos una letra mayúscula y al menos un número.");
        return false;
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    return true;
}