// Obtener referencias a los elementos HTML
var sueldoBaseInput = document.getElementById('sueldoBase');
var aniosTrabajadosInput = document.getElementById('aniosTrabajados');
var bono14Input = document.getElementById('bono14');
var aguinaldoInput = document.getElementById('aguinaldo');
var salarioPendienteInput = document.getElementById('salarioPendiente');
var deudasInput = document.getElementById('deudas');
var salarioFinalSpan = document.getElementById('salarioFinal');
var calcularButton = document.getElementById('calcularButton');
// Función para calcular el salario final
function calcularSalarioFinal() {
    var sueldoBase = parseFloat(sueldoBaseInput.value);
    var aniosTrabajados = parseFloat(aniosTrabajadosInput.value);
    var bono14 = parseFloat(bono14Input.value);
    var aguinaldo = parseFloat(aguinaldoInput.value);
    var salarioPendiente = parseFloat(salarioPendienteInput.value);
    var deudas = parseFloat(deudasInput.value);
    // Cálculo de la antigüedad
    var antiguedad = aniosTrabajados * 0.02; // Suponiendo un 2% por año de antigüedad
    // Cálculo del salario final
    var salarioFinal = sueldoBase * (1 + antiguedad) + bono14 + aguinaldo + salarioPendiente - deudas;
    // Mostrar el resultado
    salarioFinalSpan.textContent = salarioFinal.toFixed(2);
}
// Evento para el botón de calcular
calcularButton.addEventListener('click', calcularSalarioFinal);
