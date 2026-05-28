// ========================================
// JS Exercise 11: Working with Forms
// form.elements, preventDefault, validation, inline errors
// ========================================

function handleRegistration(event) {
    event.preventDefault();

    const form = document.getElementById("registrationForm");
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const eventDate = form.elements["eventDate"].value;
    const eventType = form.elements["eventType"].value;

    document.querySelectorAll(".error-inline").forEach(function (el) { el.remove(); });

    let isValid = true;

    if (!name) {
        showError("name", "Name is required");
        isValid = false;
    }
    if (!email || !email.includes("@")) {
        showError("email", "Valid email is required");
        isValid = false;
    }
    if (!eventDate) {
        showError("eventDate", "Please select a date");
        isValid = false;
    }
    if (!eventType) {
        showError("eventType", "Please select an event type");
        isValid = false;
    }

    if (isValid) {
        document.getElementById("confirmation").value = "Registration confirmed for " + name + "!";
        simulatePostRegistration({ name: name, email: email, event: eventType });
    }
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement("p");
    error.className = "error-inline";
    error.style.color = "red";
    error.style.fontSize = "14px";
    error.style.marginTop = "-10px";
    error.textContent = message;
    field.parentNode.insertBefore(error, field.nextSibling);
    field.style.borderColor = "red";
}
