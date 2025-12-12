// CORS-friendly API
const API_URL = "https://dummyjson.com/quotes/random";

async function getQuote() {
    const quoteBox = document.getElementById("quoteBox");
    
    // Add fade animation
    quoteBox.classList.add("fade");

    try {
        // Fetch quote from dummyjson API
        const response = await fetch(API_URL);
        const data = await response.json();

        document.getElementById("quote").innerText = data.quote;
        document.getElementById("author").innerText = "- " + data.author;

        // Change background color randomly
        const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 40%, 85%)`;
        document.body.style.background = randomColor;

    } catch (error) {
        document.getElementById("quote").innerText = "Failed to load quote.";
        document.getElementById("author").innerText = "";
        console.error("Error fetching quote:", error);
    }

    // Remove fade class after animation
    setTimeout(() => quoteBox.classList.remove("fade"), 600);
}

// Copy quote
function copyQuote() {
    const text =
        document.getElementById("quote").innerText +
        " " +
        document.getElementById("author").innerText;

    navigator.clipboard.writeText(text);
    alert("Quote copied!");
}

// Tweet quote
function tweetQuote() {
    const text =
        document.getElementById("quote").innerText +
        " " +
        document.getElementById("author").innerText;

    window.open(
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text),
        "_blank"
    );
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

