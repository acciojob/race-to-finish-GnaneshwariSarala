document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById('output');

    // Function to create a promise with a random time between 1 and 5 seconds
    function createPromise() {
        const randomTime = Math.floor(Math.random() * 5) + 1;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Resolved after ${randomTime} seconds`);
            }, randomTime * 1000); // Converting seconds to milliseconds
        });
    }

    // Array of promises
    const promises = Array.from({ length: 5 }, createPromise);

    // Using Promise.any to wait for the first promise to resolve
    Promise.any(promises)
    .then(result => {
        // Print the result in the output div
        const p = document.createElement('p');
        p.textContent = result;
        outputDiv.appendChild(p);
    })
    .catch(error => {
        console.error("All promises rejected:", error);
    });
});
