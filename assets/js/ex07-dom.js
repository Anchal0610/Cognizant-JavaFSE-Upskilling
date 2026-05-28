// ========================================
// JS Exercise 7: DOM Manipulation
// querySelector(), createElement(), appendChild()
// ========================================

function renderEventCards(eventArray) {
    const container = document.querySelector("#eventList");
    container.innerHTML = "";

    eventArray.forEach(function (event) {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = "<h3>" + event.name + "</h3>" +
            "<p><strong>Date:</strong> " + event.date + "</p>" +
            "<p><strong>Category:</strong> " + event.category + "</p>" +
            "<p><strong>Seats:</strong> " + event.seats + "</p>" +
            "<button onclick='registerForEvent(" + event.id + ")'>Register</button>";
        container.appendChild(card);
    });
}

function registerForEvent(eventId) {
    registerUser(eventId, function (err, event) {
        if (err) {
            alert("Registration failed: " + err.message);
        } else {
            trackCategory(event.category);
            alert("Registered for " + event.name + "!");
            renderEventCards(events);
        }
    });
}
