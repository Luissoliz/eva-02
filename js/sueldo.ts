function calcularTotal() {
  const salario: number = parseFloat((document.getElementById('salario') as HTMLInputElement).value);
  const bonificacion: number = parseFloat((document.getElementById('bonificacion') as HTMLInputElement).value);
  const comisiones: number = parseFloat((document.getElementById('comisiones') as HTMLInputElement).value);
  const total: number = salario + bonificacion + comisiones;
  (document.getElementById('total') as HTMLSpanElement).textContent = total.toFixed(2);
}

function calcular() {
  const ahorro: number = parseFloat((document.getElementById('ahorro') as HTMLInputElement).value);
  const porcentajeIgss: number = parseFloat((document.getElementById('igss') as HTMLInputElement).value) / 100;
  const prestamos: number = parseFloat((document.getElementById('prestamos') as HTMLInputElement).value);
  const otrosDescuentos: number = 0; // No se ha proporcionado el valor de otros descuentos

  const totalDescuentosSinIgss: number = prestamos + otrosDescuentos;

  const salarioNetoSinIgss: number = ahorro - totalDescuentosSinIgss;

  const resultadoSeleccionado: string = "Total";

  let resultadoValor: number;

  switch (resultadoSeleccionado) {
    case "Total":
      resultadoValor = salarioNetoSinIgss;
      break;
    default:
      resultadoValor = 0;
  }
  document.getElementById('resultado-valor').textContent = `**${resultadoSeleccionado.toUpperCase()}:** ${resultadoValor.toFixed(2)}`;
}
function sumarResultados(): void {
  const resultadoSuma = document.getElementById("resultado_suma")?.innerText.split(": ")[1];
  const resultadoOperacion = document.getElementById("resultado_operacion")?.innerText.split(": ")[1];
  
  const suma1: number = resultadoSuma ? parseFloat(resultadoSuma) : 0;
  const suma2: number = resultadoOperacion ? parseFloat(resultadoOperacion) : 0;

  const total: number = suma1 + suma2;

  (document.getElementById("resultado_total") as HTMLElement).innerHTML = "Resultado de la suma de los dos cuadros: " + total;
}