function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function calcular(n1, n2, operacao) {
  return operacao(n1, n2);
}

console.log(calcular(2, 3, somar));        // 5
console.log(calcular(2, 3, multiplicar));  // 6
