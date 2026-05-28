// ========================================
// JS Exercise 14: jQuery and JS Frameworks
// Native DOMContentLoaded, fadeIn effect,
// framework comparison notes
// ========================================

document.addEventListener("DOMContentLoaded", function () {
    // Native JS equivalent of jQuery $('#registerBtn').click(...)
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

// Note on Frameworks:
// Moving to React or Vue would provide component-based architecture,
// virtual DOM for performance, state management, and better code
// organization for large-scale portals. jQuery simplifies DOM
// traversal and event handling but lacks modern reactivity.
