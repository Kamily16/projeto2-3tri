// script.js
document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const grade = parseFloat(document.getElementById('grade').value);
    const result = document.getElementById('result');
    
    if (isNaN(grade)) {
        result.textContent = 'Digite uma média válida, croquette!';
        result.style.color = 'red';
        return;
    }

    if (grade >= 6) {
        result.textContent = 'Croquette aprovado!';
        result.style.color = '#d2691e'; /* marrom crocante */
    } else {
        result.textContent = 'Croquette reprovado!';
        result.style.color = 'red';
    }
});
