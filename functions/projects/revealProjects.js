export function revealProjects(img , url , description , append){
    let number = 0
    // recorre todas las descripciones del array y crea un div con la info por cada elemento 
    description.forEach(element => {
        let div = document.createElement("div");
        div.classList = "projectContent";
        // corrobora si existe el dato que se quiere añadir
        let imgContent = img[number] ? img[number] : "";
        let urlContent = url[number] ? url[number] : "";

        div.innerHTML = `
            <div class='imgProjectContent'>
                <img src='${imgContent}' alt='imagen_De_Proyecto'>
            </div>
            <p>${element}</p>
            <a href='${urlContent}'>
                <strong class='goToProject'>ver proyecto</strong>
            </a>
        `;
        append.append(div);
        number++;
    });
}