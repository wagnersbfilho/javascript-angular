//generics
function contacArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = contacArray<number[]>([1, 5], [3]);
console.log(numArray);

const stgArray = contacArray<string[]>(["A", "B"], ["C"]);
console.log(stgArray);

//stgArray.push(true); ERRO