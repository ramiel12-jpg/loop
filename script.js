
// Helper delay function returns a promise that resolves after ms milliseconds
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Phase 1: For loop from 1 to 10 with 0.5s delay
async function runForLoop() {
    const container = document.getElementById('forLoopOutput');
    container.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const span = document.createElement('span');
        span.classList.add('number-box');
        span.textContent = i;
        container.appendChild(span);
        await delay(500);
    }
}

// Phase 2: While loop adding random numbers until sum > 30, showing each number and total with delay
async function runWhileLoop() {
    const output = document.getElementById('whileLoopOutput');
    const totalBox = document.getElementById('whileLoopTotal');
    output.innerHTML = '';
    totalBox.textContent = 'Total: 0';

    let sum = 0;
    while (sum <= 30) {
        // Random integer between 1 and 10
        const num = Math.floor(Math.random() * 10) + 1;
        sum += num;

        const span = document.createElement('span');
        span.classList.add('random-number');
        span.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`; // random bright color
        span.textContent = num;
        output.appendChild(span);

        totalBox.textContent = `Total: ${sum}`;

        await delay(700);
    }
}

// Phase 3: forEach loop over colors array, showing color name with matching background color and delay
async function runForEachLoop() {
    const colors = ['Red', 'Green', 'Blue', 'Orange', 'Purple', 'Teal', 'Gold', 'Pink'];
    const container = document.getElementById('forEachOutput');
    container.innerHTML = '';

    for (const color of colors) {
        const div = document.createElement('div');
        div.classList.add('color-box');
        div.textContent = color;
        div.style.backgroundColor = color.toLowerCase();
        container.appendChild(div);
        await delay(600);
    }
}

// Run all phases sequentially to avoid overlap
async function runAll() {
    await runForLoop();
    await delay(1000);
    await runWhileLoop();
    await delay(1000);
    await runForEachLoop();
}

// Start the demonstration once page loads
window.onload = () => {
    runAll();
};


