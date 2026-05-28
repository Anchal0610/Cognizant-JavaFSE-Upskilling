// ========================================
// JS Exercise 6: Arrays and Methods
// .push(), .filter(), .map()
// ========================================

addEvent("New Music Night", "2026-10-01", "Music", 40);

const musicEvents = events.filter(function (e) { return e.category === "Music"; });
console.log("Music events:", musicEvents);

const eventCards = events.map(function (e) {
    return `${e.name} on ${e.date} - ${e.category}`;
});
console.log("Formatted event cards:", eventCards);
