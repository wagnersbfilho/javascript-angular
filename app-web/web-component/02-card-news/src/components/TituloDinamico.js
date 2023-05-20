class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        // 01 - base do componente
        const root = document.createElement("h1");
        //root.textContent = 'Minha notícia';
        root.textContent = this.getAttribute("titulo");

        // 02 - estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `;

        // 03 - enviar para a Shadow
        shadow.appendChild(root);
        shadow.appendChild(style);
    }
}

customElements.define
    ("titulo-dinamico", TituloDinamico);