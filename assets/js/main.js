// ========================================
// main.js - Bootstrap & HTML Event Handlers
// Initialization and functions called from
// inline HTML event attributes
// ========================================

// --- Initialization (calls from exercise files) ---
window.onload = function () {
    loadPreference();
    fetchAndDisplayEvents();
};

// --- HTML Exercise 5: Image enlarge (ondblclick) ---
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

// --- HTML Exercise 6: Phone validation (onblur) ---
function validatePhone(input) {
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(input.value)) {
        alert("Please enter a valid phone number (format: 123-456-7890)");
        input.focus();
    }
}

// --- HTML Exercise 6: Event fee display (onchange) ---
function displayEventFee(select) {
    var feeDisplay = document.getElementById("feeDisplay");
    var selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value) {
        feeDisplay.textContent = "Selected fee: " + (selectedOption.text.split(" - ")[1] || "Free");
    } else {
        feeDisplay.textContent = "Selected fee: --";
    }
}

// --- HTML Exercise 6: Character count (keydown) ---
function countCharacters(textarea) {
    document.getElementById("charCount").textContent = textarea.value.length;
}

// --- HTML Exercise 6: Submit feedback (onclick) ---
function submitFeedback() {
    var message = document.getElementById("feedbackMessage").value.trim();
    if (message) {
        alert("Thank you for your feedback!");
    } else {
        alert("Please write your feedback before submitting.");
    }
}

// --- HTML Exercise 6: Show confirmation (onclick on submit) ---
function showConfirmation(e) {
    if (!document.getElementById("registrationForm").checkValidity()) {
        alert("Please fill in all required fields.");
    }
}

// --- HTML Exercise 7: Video oncanplay ---
function videoReady() {
    document.getElementById("videoStatus").textContent = "Video ready to play!";
}

// --- HTML Exercise 7: Warn on leaving form page ---
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

// --- HTML Exercise 8: LocalStorage / SessionStorage ---
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

// --- HTML Exercise 9: Geolocation ---
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
