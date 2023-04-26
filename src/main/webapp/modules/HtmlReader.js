export async function HtmlReader(path, element){
	
    const response = await fetch(path);
    const data = await response.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(data, 'text/html');
    const HtmlElement = html.querySelector(element);
  
    return HtmlElement;
  
  };