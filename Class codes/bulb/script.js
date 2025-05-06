const inputAButton = document.getElementById('inputA');
const inputBButton = document.getElementById('inputB');
const bulb = document.getElementById('bulb');
const gateTypeRadios = document.querySelectorAll('input[name="gateType"]');

let inputAState = 0; 
let inputBState = 0; 
let currentGateType = 'AND'; 

function updateBulb() {
    let output = 0;

    if (currentGateType === 'AND') {
        output = inputAState && inputBState; 
    } else if (currentGateType === 'OR') {
        output = inputAState || inputBState;
    }

    if (output === 1) {
        bulb.classList.add('on');
        bulb.classList.remove('off');
    } else {
        bulb.classList.add('off');
        bulb.classList.remove('on');
    }
}

function toggleButton(button) {
    const currentState = parseInt(button.dataset.state);
    const newState = 1 - currentState; 
    button.dataset.state = newState;
    button.textContent = newState === 1 ? 'ON' : 'OFF';
    button.classList.toggle('on', newState === 1); 
    return newState;
}


inputAButton.addEventListener('click', () => {
    inputAState = toggleButton(inputAButton);
    updateBulb();
});

inputBButton.addEventListener('click', () => {
    inputBState = toggleButton(inputBButton);
    updateBulb();
});

gateTypeRadios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        currentGateType = event.target.value;
        updateBulb();
    });
});

updateBulb();