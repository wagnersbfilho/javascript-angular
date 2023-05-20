function addNumber (x: number, y: number) {
    return x + y;
}

// definir tipo de retorno
function addToHello(name: string): string {
    return `Hello ${name} !`;
}

let soma: number = addNumber(1, 2);
console.log(soma);
console.log(addToHello("Fulano"));

// funcao multi type
function call (phone: number | string): number | string {
    return phone;
}

console.log(call(1234567495));
console.log(call("987645"));

// funções assíncronas
// SEMPRE rotorno é um Promise
async function getData(id: number): Promise<string> {
    return "coluna1"
}