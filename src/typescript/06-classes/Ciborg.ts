class Ciborg implements Robot {
    id: number | string;
    name: string;
    public move?: boolean; // interrogação = variavel opcional

    constructor(id: number|string, name: string) {
        this.id = id;
        this.name = name;
    }

    public sayHello(): string {
        return `Hello ${this.name}`;
    }
}

const ciber = new Ciborg(1, "Ciborg");
ciber.move = false;
console.log(ciber.sayHello());