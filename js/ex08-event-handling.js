// ========================================
// JS Exercise 8: Event Handling
// onclick, onchange, onkeydown
// ========================================

function quickSearch(event) {
    const query = event.target.value.toLowerCase();
    const filtered = events.filter(function (e) {
        return e.name.toLowerCase().includes(query);
    });
    renderEventCards(filtered);
}
