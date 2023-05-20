function ligar (emergencia) {
    console.log("ligando para: " + emergencia.telefone);
}

ligar ({
    nome: "Bombeiros",
    cidade: "Lisboa",
    telefone: "123456789"
});