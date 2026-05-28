// ========================================
// JS Exercise 5: Objects and Prototypes
// Constructor function, prototype method, Object.entries()
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
