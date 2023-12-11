function fibonacciDivideAndConquer(n, memo = {}) { // 1 (chamada da função)
    if (n <= 1) { // n (verificação)
        return n; // 1 (retorno)
    }
    if (!memo[n]) { // n (verificação em memo)
        memo[n] = fibonacciDivideAndConquer(n - 1, memo) + fibonacciDivideAndConquer(n - 2, memo); // 1 (cálculo e armazenamento em memo)
    }
    return memo[n]; // 1 (retorno do valor memorizado)
}
//Análise de Tempo: Complexidade:Θ(n)
//Cada valor é calculado e armazenado uma vez. As verificações e retornos ocorrem n vezes.

//Análise de Espaço: Complexidade:O(n).
//O objeto memo armazena até n valores.


function fibonacciBottomUp(n) { // 1 (chamada da função)
    let fib = [0, 1]; // 1 (inicialização de fib)
    for (let i = 2; i <= n; i++) { // n - 1 (iterações do loop)
        fib[i] = fib[i - 1] + fib[i - 2]; // n - 2 (cálculos e armazenamentos em fib)
    }
    return fib[n]; // 1 (retorno)
}
//Análise de Tempo: Complexidade: Θ(n).
//Cada número é calculado uma vez através de iteração.

//Análise de Espaço: Complexidade: O(n).
//O array fib armazena até n + 1 valores.


function fibonacciTopDown(n, fib) { // 1 (chamada da função)
    if (n <= 1) { // n (verificação)
        return n; // 1 (retorno)
    }
    if (fib[n] === undefined) { // n (verificação em fib)
        fib[n] = fibonacciTopDown(n - 1, fib) + fibonacciTopDown(n - 2, fib); // 1 (cálculo e armazenamento em fib)
    }
    return fib[n]; // 1 (retorno do valor memorizado)
}
//Análise de Tempo: Complexidade: Θ(n).
//Cada valor é calculado e armazenado uma vez. As verificações e retornos ocorrem n vezes.
//Análise de Espaço: Complexidade:O(n).
//O array fib armazena até n + 1 valores.
