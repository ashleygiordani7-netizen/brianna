

const quoteData = [
    "You are beautiful beyond words",
    "No word has yet to be invented to describe how beautiful you truly are",
    "You are the reason to get up in the morning and many more reasons to smile throughout the day",
    "You are truly incredible",
    "Every time you smile, the world becomes a little brighter",
    "In a crowd of thousands, my eyes will always search for you first",
    "You are my favorite thought, my happiest daydream, and my sweetest reality",
    "The sound of your laughter is my favorite melody",
    "You make even the simplest moments unforgettable",
    "You are my safe place and my greatest adventure",
    "Every moment with you feels like a page from a fairy tale",
    "Your presence feels like sunshine after days of rain",
    "The world is more beautiful simply because you exist in it",
    "You are the best part of my today and the hope of my tomorrow",
    "Loving you feels like breathing — effortless and essential",
    "You are the magic I didn’t believe existed until I met you",
    "Even on the darkest days, your light guides me home",
    "If I could, I’d write your name in the stars so the universe never forgets you",
    "Your kindness is as breathtaking as your beauty",
    "Every heartbeat of mine whispers your name"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quoteData.length);

    const quoteOfTheDay = quoteData[randomIndex];
    const parentElement = document.querySelector(".quote").firstElementChild;
    
    parentElement.textContent = quoteOfTheDay
}

function getTimeOfDay() {
    const hour = new Date().getHours(); // returns 0–23

    if (hour >= 5 && hour < 12) {
        return "Morning";
    } else if (hour >= 12 && hour < 17) {
        return "Afternoon";
    } else {
        return "Evening";
    }
}

const displayMessage = () => {
    const messageElement = document.querySelector(".morning-text");
    messageElement.textContent = `Good ${getTimeOfDay()} Brianna`;
}

displayMessage();
getRandomQuote();

