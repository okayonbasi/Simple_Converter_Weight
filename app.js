
const lbsInput = document.getElementById('lbsInput');
const gramsOutput = document.getElementById('gramsOutput');
const kgOutput = document.getElementById('kgOutput');
const ozOutput = document.getElementById('ozOutput');
const result = document.getElementById('output');

result.style.visibility = 'hidden';

lbsInput.addEventListener('input', (e) => { 
    
    let pounds = e.target.value;

    result.style.visibility = 'visible';

    kgOutput.innerHTML = pounds * 0.45359237;
    gramsOutput.innerHTML = pounds * 453.59237;
    ozOutput.innerHTML = pounds * 16;
} )