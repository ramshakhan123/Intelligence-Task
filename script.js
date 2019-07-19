let paraIntelligenceValue = document.querySelector("#see-the-intelligence");
let userName = document.querySelector("input");

function check() {
    let intelligenceOfAPerson = ["Good Person", "Multi Talented"];
    paraIntelligenceValue.innerHTML = userName.value;
    paraIntelligenceValue.innerHTML = userName.value + intelligenceOfAPerson;
}



