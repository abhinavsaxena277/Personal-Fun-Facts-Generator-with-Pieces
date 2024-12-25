const facts = [
    "I once hiked 10 miles in a single day!",
    "I have visited five national parks.",
    "I love to take photos of wildlife while hiking.",
    "I can identify most trees by their leaves.",
    "I have a collection of hiking gear from around the world.",
    "My hobby is drawing.",
    "I enjoy painting in my free time.",
    "Gardening is one of my favorite activities.",
    "I have camped under the stars in the wilderness.",
    "I can cook a meal using only ingredients found in the wild.",
    "I have completed a multi-day backpacking trip.",
    "I enjoy birdwatching and can identify various species.",
    "I have a favorite hiking trail that I visit every year.",
    "I once saw a bear while hiking and stayed calm.",
    "I have taken part in a trail cleanup event."
];

const funFactElement = document.getElementById('fun-fact');
const generateFactButton = document.getElementById('generate-fact');
const customFactInput = document.getElementById('custom-fact');
const addFactButton = document.getElementById('add-fact');

function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    funFactElement.textContent = facts[randomIndex];
}

function addCustomFact() {
    const customFact = customFactInput.value.trim();
    if (customFact) {
        facts.push(customFact);
        customFactInput.value = '';
        alert("Your fun fact has been added!");
    } else {
        alert("Please enter a fun fact.");
    }
}

generateFactButton.addEventListener('click', generateRandomFact);
addFactButton.addEventListener('click', addCustomFact);
