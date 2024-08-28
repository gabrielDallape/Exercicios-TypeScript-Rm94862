function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Lógica do decorator aqui
}

class Calculadora {

    somarNumeros(array: number[]): number {
        // Simula uma soma de números
        return array.reduce((a, b) => a + b, 0);
    }
}

// Exemplo de uso:
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);  // Deve exibir o tempo de execução