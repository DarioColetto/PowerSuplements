
let home_view;

async function getData(){
    
    const response = await fetch('./views/home/home.html');
    const data = await response.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(data, 'text/html');
    home_view = html.getElementById('section');
    
    let section = document.getElementById('section');
    section.replaceWith (home_view);
    
    return home_view;
  
}

export {getData};
