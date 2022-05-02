function validaArray(array, num) {

    try {

        if(!array && !num) throw new ReferenceError("Parâmetros não enviados!");

        if(typeof array !== 'object') throw new TypeError("O Array precisa ser do tipo object");
    
        if(typeof num !== 'number') throw new TypeError("O número precisa ser do tipo number");
    
        if(array.length !== num) throw new RangeError("Tamanho inválido!");
    
        return array;

    } catch (error) {
        if(error instanceof ReferenceError)
        {
            console.log("Este erro é um ReferenceError.");
            console.log(error.message);
        }else if(error instanceof TypeError)
        {
            console.log("Este erro é um TypeError.");
            console.log(error.message);
        } else if(error instanceof RangeError)
        {
            console.log("Este erro é um RangeError.");
            console.log(error.message);
        } else {
            console.log("Tipo de erro não esperado: " + e);

        }
    }
}

console.log(validaArray());

console.log("");

console.log(validaArray(5, 5));

console.log("");

console.log(validaArray([], 'a'));

console.log("");

console.log(validaArray([], 2));

console.log("");

console.log(validaArray([1, 2, 3, 4, 5], 5));