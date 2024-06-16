// Obtener referencias a los elementos HTML
const sueldoBaseInput = document.getElementById('sueldoBase') as HTMLInputElement;
const aniosTrabajadosInput = document.getElementById('aniosTrabajados') as HTMLInputElement;
const bono14Input = document.getElementById('bono14') as HTMLInputElement;
const aguinaldoInput = document.getElementById('aguinaldo') as HTMLInputElement;
const salarioPendienteInput = document.getElementById('salarioPendiente') as HTMLInputElement;
const deudasInput = document.getElementById('deudas') as HTMLInputElement;
const salarioFinalSpan = document.getElementById('salarioFinal') as HTMLSpanElement;
const calcularButton = document.getElementById('calcularButton') as HTMLButtonElement;

// Función para calcular el salario final
function calcularSalarioFinal() {
    const sueldoBase = parseFloat(sueldoBaseInput.value);
    const aniosTrabajados = parseFloat(aniosTrabajadosInput.value);
    const bono14 = parseFloat(bono14Input.value);
    const aguinaldo = parseFloat(aguinaldoInput.value);
    const salarioPendiente = parseFloat(salarioPendienteInput.value);
    const deudas = parseFloat(deudasInput.value);

    // Cálculo de la antigüedad
    const antiguedad = aniosTrabajados * 0.02; // Suponiendo un 2% por año de antigüedad

    // Cálculo del salario final
    const salarioFinal = sueldoBase * (1 + antiguedad) + bono14 + aguinaldo + salarioPendiente - deudas;

    // Mostrar el resultado
    salarioFinalSpan.textContent = salarioFinal.toFixed(2);
}

// Evento para el botón de calcular
calcularButton.addEventListener('click', calcularSalarioFinal);
