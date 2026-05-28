// ========================================
// JS Exercise 12: AJAX & Fetch API
// fetch() POST to mock API, success/failure
// ========================================

function simulatePostRegistration(data) {
    console.log("Posting registration:", data);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(function (response) { return response.json(); })
        .then(function (result) {
            console.log("POST success:", result);
            document.getElementById("confirmation").value += " (Server response received)";
        })
        .catch(function (error) {
            console.error("POST failed:", error.message);
            document.getElementById("confirmation").value += " (Server unavailable - saved locally)";
        });
}
