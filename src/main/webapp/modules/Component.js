export class Component extends HTMLElement {

    constructor(HtmlPath) {
        
        super();
        this.HtmlPath = HtmlPath
        this.tagName('main');
        this.getMain();
    }

    render() {

        return Component;


    }



    async getMain() {

        const response = await fetch(this.HtmlPath);
        const data = await response.text();
        const parser = new DOMParser();
        const html = parser.parseFromString(data, 'text/html');
        this.innerHTML.replace = html.querySelector('main');

    };

}