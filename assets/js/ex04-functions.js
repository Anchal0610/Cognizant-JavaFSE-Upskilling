// ========================================
// JS Exercise 4: Functions, Scope, Closures, Higher-Order
// addEvent(), registerUser(), filterEventsByCategory()
// Closure for category tracking
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
