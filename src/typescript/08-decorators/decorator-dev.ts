function ApiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version});
    }
}

@ApiVersion("1.10")
class API{}

const api = new API();

//Somente em tempo de transpilação - injeta dinamicamente - funciona com TS Node Dev
//console.log(api.__version);