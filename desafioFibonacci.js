function fibonacciAte(n) {
    const sequence = [0, 1];
  
    while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= n) {
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
  }
  function estaNaSequenciaFibonacci(n) {
    const sequence = fibonacciAte(n);
    return sequence.includes(n);
  }
  // Exemplo de uso:
  const numero = 21;
  if (estaNaSequenciaFibonacci(numero)) {
    console.log(`${numero} está na sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não está na sequência de Fibonacci.`);
  }