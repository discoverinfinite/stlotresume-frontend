const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        const response = await fetch("https://mt5ddl5al2ybyyav3vfulhgpfa0yxopb.lambda-url.us-east-1.on.aws/");
        const data = await response.json();
        counter.innerHTML = `Page Views: ${data.views}`;
    } catch (error) {
        console.error('Error:', error);
        counter.innerHTML = 'Error loading view count';
    }
}

updateCounter();