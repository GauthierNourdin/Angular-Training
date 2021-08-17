class MaBalise extends HTMLElement {
    constructor() {
        // console.log("constructor");
        super();
        this.innerHTML += " from TypeScript";
        this.style.color = "red";
    }
    connectedCallback() {
        console.log("connected");
    }
    disconnectedCallback() {
        console.log("disconnected");
    }
    attributeChangedCallback() {
        console.log("ACD");
    }
}
window.customElements.define('ma-balise', MaBalise);