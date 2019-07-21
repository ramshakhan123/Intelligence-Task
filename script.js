let intelligenceName = ["Talented",
    "Multi-talented",
    "Superb",
    "Einstein",
    "Dumb",
    "Intelligent", "Smart", "Good Person", "Great",
    "Mastermind", "Hard working", "Average", "Extra ordinary", "Brave"]

function check() {
    let userInputName = document.querySelector("input").value;
    let randomIndex = parseInt(Math.random() * intelligenceName.length);
    document.querySelector("p").innerHTML = intelligenceName[randomIndex];
}