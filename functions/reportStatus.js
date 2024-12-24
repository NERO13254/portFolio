
export function reportStatus(message , messageDescription ,ammountButtons , textContentButtons , idButttons , append){
    // crea el div que contiene toda la informacion relevante
    let div = document.createElement("div");
    div.className="reportStatusContent";
    div.innerHTML = `
    <strong>${message}</strong>
    <p>${messageDescription}</p>
    <div id='buttonSettingController'>

    </div>
    `;
    append.append(div);
    // si si hay botones , recorre el array de sus propiedades y los añade al div principal
    if(ammountButtons>0){
        let buttonSettingController = document.getElementById("buttonSettingController");
        for (let i = 0; i < ammountButtons; i++) {
            const txtBtn = textContentButtons[i];
            const idBtn  = idButttons[i];
            let button = document.createElement("button");
            button.textContent = txtBtn;
            button.id = idBtn;
            buttonSettingController.append(button);
        }
    }
    // si existe un boton con id cancelProcess y es clikeado se limpia la alerta (osea se cierra)
    if(document.getElementById("cancelProcess")){
        document.getElementById("cancelProcess").addEventListener("click" , ()=>{
            append.innerHTML='';
        })
    }
}