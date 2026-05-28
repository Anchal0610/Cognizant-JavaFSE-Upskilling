// ========================================
// JS Exercise 3: Conditionals, Loops, Error Handling
// if-else, forEach(), try-catch
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
