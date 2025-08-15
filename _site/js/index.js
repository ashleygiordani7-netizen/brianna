

const quoteData = [
    "You are beautiful beyond words",
    "No word has yet to be invented to describe how beautiful you truly are",
    "You are the funniest person ive ever met",
    "You are intelligent, brave and courageous every day",
    "Hope you have a lovely day whatever it may bring"
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

