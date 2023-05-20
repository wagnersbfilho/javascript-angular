class CardNews extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const root = document.createElement("div");
        root.setAttribute("class", "card");
        //root.className = "card";

        // Left
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("titulo");
        linkTitle.href = this.getAttribute("url");
        const conteudo = document.createElement("p");
        conteudo.textContent = this.getAttribute("conteudo");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(conteudo);

        // Right
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const imagem = document.createElement("img");
        imagem.src = "assets/img/" + (this.getAttribute("imagem") || "default.jpg");
        imagem.alt = "Imagem da noticia";
        cardRight.appendChild(imagem);

        // Root
        root.appendChild(cardLeft);
        root.appendChild(cardRight);

        return root;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 70%;
                display: flex;
                flex-direction: row;
                -webkit-box-shadow: 7px 8px 19px 4px rgba(0,0,0,0.3);
                -moz-box-shadow: 7px 8px 19px 4px rgba(0,0,0,0.3);
                box-shadow: 7px 8px 19px 4px rgba(0,0,0,0.3);
                justify-content: space-between;
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card_left > h1 {
                margin-top: 15px;
                font-size: 25px;
            }
            
            .card_left > p {
                color: grey;
            }
            
            .card_left > span {
                font-weight: bold;
            }
            
            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }        
        `;
        return style;
    }
}

customElements.define
    ("card-news", CardNews);