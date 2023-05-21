// mesmo conceito de tyype, mas utilizando no contexto de classes
interface Robot {
    id: number | string;
    readonly name: string; //readonly: não aceita atribuição de valor depois de criado
    sayHello(): string;
}

const bot2: Robot = {
    id: 1,
    name: "chat gpt",
    sayHello(): string {return ""}
}
//bot2.name = "can't change";