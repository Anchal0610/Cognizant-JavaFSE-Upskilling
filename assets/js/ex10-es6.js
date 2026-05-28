// ========================================
// JS Exercise 10: Modern JavaScript (ES6+)
// Default parameters, destructuring, spread operator
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
