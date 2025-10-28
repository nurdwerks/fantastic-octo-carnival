const insults = [
    "Thou sodden-witted lord! Thou hast no more brain than I have in mine elbows!",
    "Your brain is as dry as the remainder biscuit after voyage.",
    "He has not so much brain as ear-wax.",
    "Away thou rag, thou quantity, thou remnant.",
    "Thou whoreson zed, thou unnecessary letter!",
    "Foul spoken coward, that thund’rest with thy tongue, and with thy weapon nothing dares perform.",
    "Thou slander of thy heavy mother's womb!",
    "There’s small choice in rotten apples.",
    "Thy sin’s not accidental, but a trade.",
    "Heaven truly knows that thou art false as hell.",
    "A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality.",
    "Thou art a boil, a plague sore, an embossed carbuncle in my corrupted blood.",
    "The rankest compound of villainous smell that ever offended nostril.",
    "Away, you three-inch fool!",
    "Thou elvish-mark’d, abortive, rooting hog!",
    "Bloody, bawdy villain! Remorseless, treacherous, lecherous, kindless villain!",
    "I am sick when I do look on thee.",
    "Out of my sight! Thou dost infect my eyes.",
    "Thou hateful wither’d hag!",
    "Thou art as fat as butter."
];

const insultButton = document.getElementById('insult-button');
const insultDisplay = document.getElementById('insult-display');

insultButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * insults.length);
    insultDisplay.textContent = insults[randomIndex];
});
