function fibonacci() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = fibonacciSequence(0, numero);
    document.getElementById('resultado').innerHTML = resultado.join(', ');

    function fibonacciSequence(start, count) {
        start = Math.max(0, Math.floor(start));
    
        let sequence = [start, start + 1];
    
        for (let i = 2; i < count; i++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
    
        sequence.length = count;
    
        return sequence;
    }

}