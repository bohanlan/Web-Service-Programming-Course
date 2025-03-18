let colorIndex1 = 0;
let colors1 = ['#c6efce', '#8bc34a', '#4caf50', '#2e865f', '#1a6d34', '#c6efce'];

let colorIndex2 = 0;
let colors2 = ['#87ceeb', '#4682b4', '#2f4f7f', '#1a1d23', '#4682b4', '#87ceeb'];

function changeColor1(id) {
    let element = document.getElementById(id);
    element.style.backgroundColor = colors1[(colorIndex1 + 1) % colors1.length];
    colorIndex1 = (colorIndex1 + 1) % colors1.length;
}

function changeColor2(id) {
    let element = document.getElementById(id);
    element.style.backgroundColor = colors2[(colorIndex2 + 1) % colors2.length];
    colorIndex2 = (colorIndex2 + 1) % colors2.length;
}

const person = {
    name: 'Mui',
    age: 5,
    weight: '3kg',
};
let clickCount = 0;

function printObj() {
    clickCount++;
    let demoElement = document.getElementById('demo');
    if (clickCount % 2 === 1) {
        demoElement.innerHTML = `
    <strong>Name:</strong>${person.name} <br>
    <strong>Age:</strong>${person.age} <br>
    <strong>Weight:</strong>${person.weight} <br>
    <img
        src="https://www.thesprucepets.com/thmb/CXe2gVD3fxw_qamxrnHrtr2N1jc=/2064x0/filters:no_upscale():strip_icc()/Russianblue-9f2a1d22e9444686a15f4a37fe362b84.jpg"
        style="max-height: 120px; display: block; margin-top: 20px;">
    `;
    } else {
        demoElement.innerHTML = '';
    }
}
