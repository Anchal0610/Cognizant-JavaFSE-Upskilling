// ========================================
// JS Exercise 13: Debugging with Chrome DevTools
// console.log(), breakpoints, variable inspection
// ========================================
// Instructions:
// 1. Open Chrome DevTools (F12)
// 2. Go to Sources tab
// 3. Set a breakpoint on line 15: let debugInfo = ...
// 4. Reload the page to watch variable values

function debugRegistrationFlow() {
    console.log("=== DEBUG: Registration Flow Start ===");
    console.log("Available seats:", availableSeats);
    console.log("Events loaded:", events.length);
    let debugInfo = { step: "validation", status: "pending" }; // <-- Breakpoint here
    debugInfo.status = "complete";
    console.log("Debug info:", debugInfo);
}

debugRegistrationFlow();
