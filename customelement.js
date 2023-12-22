class ChloeElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "Chloe was here";
    }
}

customElements.define("x-chloe", ChloeElement);

class CenterElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);

class OrangeElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="color:orange">${this.innerHTML}</div>`;
    }
}

customElements.define("x-orange", OrangeElement);