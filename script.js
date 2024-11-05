document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
    const result = document.getElementById('result');

    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
        result.textContent = 'Por favor, insira todas as notas corretamente 💕';
        result.style.color = 'red';
        return;
    }

    const average = (grade1 + grade2 + grade3) / 3;

    if (average >= 6) {
        result.textContent = `Aprovada! 💖 Média: ${average.toFixed(1)}`;
        result.style.color = '#a94e7b';
    } else {
        result.textContent = `Reprovada. Média: ${average.toFixed(1)}`;
        result.style.color = 'red';
    }
});


