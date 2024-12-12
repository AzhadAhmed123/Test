const textArray = [
    "Logo",
    "Characters and Comic",
    "Branding",
    "Editorial",
    "Graphics",
    "UI / UX",
    "Animation",
    "3d Modelling",
];
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        document.getElementById("dynamic-text").textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 2500);
    }
}

function deleteText() {
    if (charIndex > 0) {
        document.getElementById("dynamic-text").textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Move to the next text  
        setTimeout(typeText, 1000); // Start typing again  
    }
}

typeText();