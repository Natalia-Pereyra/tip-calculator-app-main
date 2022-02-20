const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("number-input");
const fivePercent = document.getElementById("five-percent");
const tenPercent  = document.getElementById("ten-percent");
const fifteenPercent = document.getElementById("fifteen-percent");
const twentyfivePercent = document.getElementById("twentyfive-percent");
const fiftyPercent = document.getElementById("fifty-percent");
const customInput = document.getElementById("custom-input");
const customNumber = document.getElementById("custom-form");
const tipPerperson = document.getElementById("tip-per-person");
const numberOfPeople = document.getElementById("number-form");
const totalPerPerson = document.getElementById("total-per-person");
const resetBtn = document.getElementById("reset-btn");
peopleInput.value = 1;

function globalnumbers(percent) {
    let totalTip = (percent/100) * billInput.value;
    let totalTipPerPerson = totalTip / peopleInput.value;
    tipPerperson.innerText = `$${Math.round(totalTipPerPerson)}`;
    let totalPerson = billInput.value / peopleInput.value;
    totalPerPerson.innerText = `$${Math.round(totalPerson)}`;
}
fivePercent.addEventListener("click", e => {
    e.preventDefault();
   globalnumbers(5);
   fivePercent.style.backgroundColor = "hsl(186, 14%, 43%)";
})

tenPercent.addEventListener("click", e => {
    e.preventDefault();
    globalnumbers(10);
    tenPercent.style.backgroundColor = "hsl(186, 14%, 43%)";
})

fifteenPercent.addEventListener("click", e => {
    e.preventDefault();
    globalnumbers(15);
});

twentyfivePercent.addEventListener("click", e => {
    e.preventDefault();
    globalnumbers(25);
});

fiftyPercent.addEventListener("click", e => {
    e.preventDefault();
    globalnumbers(50);
})

numberOfPeople.addEventListener("submit", e => {
    e.preventDefault();
    
    let totalPerson = billInput.value / peopleInput.value;
    totalPerPerson.innerText = `$${Math.round(totalPerson)}`;
    let totalTip = (5/100) * billInput.value;
    let totalTipPerPerson = totalTip / peopleInput.value;
    tipPerperson.innerText = `$${Math.round(totalTipPerPerson)}`;
    console.log(totalTip);
})

customNumber.addEventListener("submit", e => {
    e.preventDefault();
    let totalTip = (customInput.value/100) * billInput.value;
    let totalTipPerPerson = totalTip / peopleInput.value;
    tipPerperson.innerText = `$${Math.round(totalTipPerPerson)}`;
    let totalPerson = billInput.value / peopleInput.value;
    totalPerPerson.innerText = `$${Math.round(totalPerson)}`;
    console.log(e)
})

resetBtn.addEventListener("click", e => {
    e.preventDefault();
    totalPerPerson.innerText = "0";
    tipPerperson.innerText = "0";
})
// total per person : input.value / amount of people
// tip amount : totalTip / amount of people