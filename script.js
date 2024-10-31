// script.js
document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const grade = parseFloat(document.getElementById('grade').value);
    const result = document.getElementById('result');
    
    if (isNaN(grade)) {
        result.textContent = 'Por favor, insira uma média válida 💌';
        result.style.color = 'red';
        return;
    }

    if (grade >= 6) {
        result.textContent = 'Parabéns, você passou com estilo! 🎉';
        result.style.color = '#d87093'; /* rosa vintage */
    } else {
        result.textContent = 'Infelizmente, não foi dessa vez 😔';
        result.style.color = 'red';
    }
});
