export function contactController() {
    // crea un div que contiene todos los enlaces 
    let div = document.createElement("div");
    div.className = "contactLinksContent";
    div.innerHTML = `
        <div class='linkContent'>
            <a href="" class='link'>LinkedIn</a>
        </div>
        <div class="linkContent">
            <a href="" class='link'>GitHub</a>
        </div>
        <div class="linkContent">
            <a href="" class='link' >X</a>
        </div>
    `;

    listWorks.innerHTML = "";
    listWorks.append(div);
}

 
