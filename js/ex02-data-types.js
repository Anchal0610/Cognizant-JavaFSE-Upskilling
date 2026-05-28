// ========================================
// JS Exercise 2: Syntax, Data Types & Operators
// const, let, template literals, ++ / --
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
