type compilador={
    mensagem: string
};

function imprime(msg: compilador) {
    console.log(msg.mensagem);
}

imprime({
    mensagem: "Compilado!"
});