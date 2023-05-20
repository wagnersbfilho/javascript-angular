type Emergencia = {
    nome: string;
    cidade: string;
    telefone: string;
}

function ligar (sos: Emergencia) {
    console.log("ligando para: " + sos.telefone);
}

ligar ({
    nome: "Bombeiros",
    cidade: "Lisboa",
    telefone: "123456789"
});