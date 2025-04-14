const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        const response = await fetch("https://xpm14i5onj.execute-api.us-east-1.amazonaws.com/prod/counter");
        const data = await response.json();
        counter.innerHTML = `Page Views: ${data.views}`;
    } catch (error) {
        console.error('Error:', error);
        counter.innerHTML = 'Error loading view count';
    }
}

updateCounter();