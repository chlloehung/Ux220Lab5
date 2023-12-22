class CenterHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", CenterHtml);

class OrangeHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color:orange">${this.innerHTML}</div>`;
    }
}

customElements.define("x-orange", OrangeHtml);