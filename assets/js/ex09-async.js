// ========================================
// JS Exercise 9: Async JS, Promises, Async/Await
// fetch() from events.json, .then().catch(),
// async/await, loading spinner
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
