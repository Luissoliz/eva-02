function calcularTotal() {
    var salario = parseFloat(document.getElementById('salario').value);
    var bonificacion = parseFloat(document.getElementById('bonificacion').value);
    var comisiones = parseFloat(document.getElementById('comisiones').value);
    var total = salario + bonificacion + comisiones;
    document.getElementById('total').textContent = total.toFixed(2);
}
function calcular() {
    var ahorro = parseFloat(document.getElementById('ahorro').value);
    var porcentajeIgss = parseFloat(document.getElementById('igss').value) / 100;
    var prestamos = parseFloat(document.getElementById('prestamos').value);
    var otrosDescuentos = 0; // No se ha proporcionado el valor de otros descuentos
    var totalDescuentosSinIgss = prestamos + otrosDescuentos;
    var salarioNetoSinIgss = ahorro - totalDescuentosSinIgss;
    var resultadoSeleccionado = "Total";
    var resultadoValor;
    switch (resultadoSeleccionado) {
        case "Total":
            resultadoValor = salarioNetoSinIgss;
            break;
        default:
            resultadoValor = 0;
    }
    document.getElementById('resultado-valor').textContent = "**".concat(resultadoSeleccionado.toUpperCase(), ":** ").concat(resultadoValor.toFixed(2));
}
