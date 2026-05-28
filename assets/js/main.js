// ========================================
// Exercise 1: JavaScript Basics & Setup
// ========================================
console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Welcome! The page has fully loaded.");
    loadPreference();
    fetchAndDisplayEvents();
};

// ========================================
// Exercise 2: Syntax, Data Types & Operators
// ========================================
const PORTAL_NAME = "Local Community Event Portal";
const CREATED_YEAR = 2026;
let availableSeats = 100;

console.log(`Welcome to ${PORTAL_NAME} - Est. ${CREATED_YEAR}`);
console.log(`Initial seats available: ${availableSeats}`);

function registerSeat() {
    if (availableSeats > 0) {
        availableSeats--;
        console.log(`Seat registered! Remaining: ${availableSeats}`);
    }
}

function cancelSeat() {
    availableSeats++;
    console.log(`Seat cancelled! Available: ${availableSeats}`);
}

// ========================================
// Exercise 3: Conditionals, Loops, Error Handling
// ========================================
const events = [
    { id: 1, name: "Music Concert", date: "2026-06-15", category: "Music", seats: 50 },
    { id: 2, name: "Art Workshop", date: "2026-07-01", category: "Workshop", seats: 20 },
    { id: 3, name: "Food Festival", date: "2026-08-10", category: "Festival", seats: 100 },
    { id: 4, name: "Charity Run", date: "2026-09-05", category: "Sports", seats: 0 },
    { id: 5, name: "Yoga Session", date: "2026-05-20", category: "Workshop", seats: 15 },
    { id: 6, name: "Community Festival", date: "2026-04-10", category: "Festival", seats: 200 }
];

function displayValidEvents(eventList) {
    const today = new Date();
    eventList.forEach(function (event) {
        const eventDate = new Date(event.date);
        if (eventDate >= today && event.seats > 0) {
            console.log(`Upcoming: ${event.name} on ${event.date} (${event.seats} seats)`);
        } else {
            console.log(`Skipped: ${event.name} - ${eventDate < today ? 'Past event' : 'No seats'}`);
        }
    });
}

displayValidEvents(events);

// ========================================
// Exercise 4: Functions, Scope, Closures, Higher-Order
// ========================================
function addEvent(name, date, category, seats) {
    const newEvent = {
        id: events.length + 1,
        name: name,
        date: date,
        category: category,
        seats: seats
    };
    events.push(newEvent);
    return newEvent;
}

function registerUser(eventId, callback) {
    try {
        const event = events.find(function (e) { return e.id === eventId; });
        if (!event) throw new Error("Event not found");
        if (event.seats <= 0) throw new Error("No seats available");
        event.seats--;
        console.log(`Registered for ${event.name}`);
        if (callback) callback(null, event);
    } catch (error) {
        console.error("Registration error:", error.message);
        if (callback) callback(error, null);
    }
}

function filterEventsByCategory(category) {
    if (category === "all") {
        renderEventCards(events);
        return;
    }
    const filtered = events.filter(function (e) { return e.category === category; });
    renderEventCards(filtered);
}

// Closure: track total registrations per category
function createCategoryTracker() {
    const counts = {};
    return function (category) {
        if (counts[category] === undefined) counts[category] = 0;
        counts[category]++;
        console.log(`Total registrations for ${category}: ${counts[category]}`);
        return counts[category];
    };
}

const trackCategory = createCategoryTracker();

// ========================================
// Exercise 5: Objects and Prototypes
// ========================================
function EventObj(id, name, date, category, seats) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.category = category;
    this.seats = seats;
}

EventObj.prototype.checkAvailability = function () {
    const today = new Date();
    const eventDate = new Date(this.date);
    return eventDate >= today && this.seats > 0;
};

const sampleEvent = new EventObj(7, "Test Event", "2026-12-25", "Workshop", 30);
console.log("Sample event available:", sampleEvent.checkAvailability());
console.log("Event entries:", Object.entries(sampleEvent));

// ========================================
// Exercise 6: Arrays and Methods
// ========================================
addEvent("New Music Night", "2026-10-01", "Music", 40);

const musicEvents = events.filter(function (e) { return e.category === "Music"; });
console.log("Music events:", musicEvents);

const eventCards = events.map(function (e) {
    return `${e.name} on ${e.date} - ${e.category}`;
});
console.log("Formatted event cards:", eventCards);

// ========================================
// Exercise 7: DOM Manipulation
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

// ========================================
// Exercise 8: Event Handling
// ========================================
// onclick - handled inline in HTML
// onchange - handled inline in HTML
// onkeydown - quick search

function quickSearch(event) {
    const query = event.target.value.toLowerCase();
    const filtered = events.filter(function (e) {
        return e.name.toLowerCase().includes(query);
    });
    renderEventCards(filtered);
}

// ========================================
// Exercise 9: Async JS, Promises, Async/Await
// ========================================
function fetchAndDisplayEvents() {
    const container = document.querySelector("#eventList");
    container.innerHTML = "<div class='spinner'></div>";

    fetch("assets/data/events.json")
        .then(function (response) {
            if (!response.ok) throw new Error("Network error");
            return response.json();
        })
        .then(function (data) {
            console.log("Fetched events:", data);
            renderEventCards(data);
        })
        .catch(function (error) {
            console.error("Fetch error:", error.message);
            container.innerHTML = "<p style='color:red;'>Failed to load events.</p>";
        });
}

async function fetchEventsAsync() {
    try {
        const response = await fetch("assets/data/events.json");
        if (!response.ok) throw new Error("Network error");
        const data = await response.json();
        renderEventCards(data);
    } catch (error) {
        console.error("Async fetch error:", error.message);
    }
}

// ========================================
// Exercise 10: Modern JavaScript Features
// ========================================
function displayEventDetails({ name = "Unknown", date = "TBD", category = "General", seats = 0 } = {}) {
    console.log(`${name} | ${date} | ${category} | ${seats} seats`);
}

displayEventDetails(events[0]);

function cloneAndFilter(list, category) {
    const clone = [...list];
    return clone.filter(function (e) { return e.category === category; });
}

console.log("Cloned & filtered:", cloneAndFilter(events, "Workshop"));

// ========================================
// Exercise 11: Working with Forms
// ========================================
function handleRegistration(event) {
    event.preventDefault();

    const form = document.getElementById("registrationForm");
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const eventDate = form.elements["eventDate"].value;
    const eventType = form.elements["eventType"].value;

    // Clear previous errors
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

// ========================================
// Exercise 12: AJAX & Fetch API (POST)
// ========================================
function simulatePostRegistration(data) {
    console.log("Posting registration:", data);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(function (response) { return response.json(); })
        .then(function (result) {
            console.log("POST success:", result);
            document.getElementById("confirmation").value += " (Server response received)";
        })
        .catch(function (error) {
            console.error("POST failed:", error.message);
            document.getElementById("confirmation").value += " (Server unavailable - saved locally)";
        });
}

// ========================================
// Exercise 13: Debugging (breakpoints, console logs)
// ========================================
// Add breakpoints here in DevTools and reload
function debugRegistrationFlow() {
    console.log("=== DEBUG: Registration Flow Start ===");
    console.log("Available seats:", availableSeats);
    console.log("Events loaded:", events.length);
    // Set a breakpoint on the line below to inspect
    let debugInfo = { step: "validation", status: "pending" }; // <-- Breakpoint here
    debugInfo.status = "complete";
    console.log("Debug info:", debugInfo);
}

// ========================================
// Exercise 14: jQuery-like functionality & Framework mention
// ========================================
// Native JS equivalent of jQuery $('#registerBtn').click(...)
document.addEventListener("DOMContentLoaded", function () {
    var registerBtn = document.getElementById("registerBtn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function (e) {
            console.log("Register button clicked (native listener)");
        });
    }

    // Fade-in effect for event cards (like jQuery .fadeIn())
    var style = document.createElement("style");
    style.textContent = ".event-card { animation: fadeIn 0.5s ease-in; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }";
    document.head.appendChild(style);
});

// ========================================
// Exercise 5 (HTML): Image enlarge on double-click
// Exercise 6 (HTML): Feedback form event handlers
// ========================================
function enlargeImage(img) {
    if (img.style.transform === "scale(1.5)") {
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.3s";
    } else {
        img.style.transform = "scale(1.5)";
        img.style.transition = "transform 0.3s";
        img.style.zIndex = "999";
        img.style.position = "relative";
    }
}

// ========================================
// Exercise 6 (HTML): Phone validation (onblur)
// ========================================
function validatePhone(input) {
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(input.value)) {
        alert("Please enter a valid phone number (format: 123-456-7890)");
        input.focus();
    }
}

// ========================================
// Exercise 6 (HTML): Event fee display (onchange)
// ========================================
function displayEventFee(select) {
    var feeDisplay = document.getElementById("feeDisplay");
    var selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value) {
        feeDisplay.textContent = "Selected fee: " + selectedOption.text.split(" - ")[1] || "Free";
    } else {
        feeDisplay.textContent = "Selected fee: --";
    }
}

// ========================================
// Exercise 6 (HTML): Character count (keydown)
// ========================================
function countCharacters(textarea) {
    document.getElementById("charCount").textContent = textarea.value.length;
}

// ========================================
// Exercise 6 (HTML): Submit feedback (onclick)
// ========================================
function submitFeedback() {
    var message = document.getElementById("feedbackMessage").value.trim();
    if (message) {
        alert("Thank you for your feedback!");
    } else {
        alert("Please write your feedback before submitting.");
    }
}

// ========================================
// Exercise 6 (HTML): Show confirmation (onclick on submit)
// ========================================
function showConfirmation(e) {
    if (!document.getElementById("registrationForm").checkValidity()) {
        alert("Please fill in all required fields.");
    }
}

// ========================================
// Exercise 7 (HTML): Video oncanplay
// ========================================
function videoReady() {
    document.getElementById("videoStatus").textContent = "Video ready to play!";
}

// ========================================
// Exercise 7 (HTML): Warn on leaving form page
// ========================================
window.onbeforeunload = function (e) {
    var form = document.getElementById("registrationForm");
    if (form) {
        var name = form.elements["name"].value.trim();
        if (name) {
            e.preventDefault();
            e.returnValue = "You have unsaved form data. Are you sure you want to leave?";
            return "You have unsaved form data. Are you sure you want to leave?";
        }
    }
};

// ========================================
// Exercise 8 (HTML): LocalStorage / SessionStorage Preferences
// ========================================
function savePreference(value) {
    if (value) {
        localStorage.setItem("preferredEventType", value);
        sessionStorage.setItem("lastSelected", value);
        console.log("Preference saved:", value);
    }
}

function loadPreference() {
    var saved = localStorage.getItem("preferredEventType");
    if (saved) {
        document.getElementById("prefEventType").value = saved;
        console.log("Preference restored:", saved);
    }
}

function clearPreferences() {
    localStorage.clear();
    sessionStorage.clear();
    document.getElementById("prefEventType").value = "";
    alert("All preferences cleared!");
}

// ========================================
// Exercise 9 (HTML): Geolocation
// ========================================
function findNearbyEvents() {
    var coordDisplay = document.getElementById("coordinates");
    var errorDisplay = document.getElementById("geoError");

    coordDisplay.textContent = "Fetching location...";
    errorDisplay.textContent = "";

    var options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };

    function success(pos) {
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        coordDisplay.textContent = "Your location: Latitude " + lat + ", Longitude " + lon;
        console.log("Geolocation success:", lat, lon);
    }

    function error(err) {
        errorDisplay.textContent = "Location error: " + err.message;
        console.error("Geolocation error:", err.code, err.message);
        switch (err.code) {
            case err.PERMISSION_DENIED:
                errorDisplay.textContent = "Permission denied. Please enable location access.";
                break;
            case err.TIMEOUT:
                errorDisplay.textContent = "Location request timed out. Please try again.";
                break;
            case err.POSITION_UNAVAILABLE:
                errorDisplay.textContent = "Location unavailable. Please try again later.";
                break;
        }
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
        errorDisplay.textContent = "Geolocation is not supported by this browser.";
    }
}

// ========================================
// Debug init (Exercise 13)
// ========================================
debugRegistrationFlow();
