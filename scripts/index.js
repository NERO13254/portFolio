import { contactController } from "../functions/contact/contact.js";
import {reportStatus}        from "../functions/reportStatus.js";
import {revealProjects}      from "../functions/projects/revealProjects.js";

const listWorks         = document.getElementById("listWorks");
const contactMe         = document.getElementById("contactMe");
const downLoadCv        = document.getElementById("downLoadCv");
const seeProjects       = document.getElementById("seeProjects");

// let projectsImg = ["./img/noroestecilMedia.PNG", "./img/autopartesminuto.PNG" , "./img/pokepedia.PNG" ,"./img/luz.PNG",  "./img/platon.PNG"];
// let projectsUrl = ["https://noroestecil.com/" , "https://autopartesminuto.com/" ,"https://nero13254.github.io/pokeApi/" ,"https://nero13254.github.io/hollywood/" , "https://nero13254.github.io/platon.github.io/"];
// let projectsDescriptions = ["noroestecil.com" , "autopartesminuto.com" , "Pokepedia" ,"HolyWood" , "PLATON"];


//al presionar proyectos se cargan todos los proyectos
seeProjects.addEventListener("click" , ()=>{
    let containerProjects = document.createElement("div");
    containerProjects.className='containerAllProjects';
    listWorks.innerHTML='';
    listWorks.append(containerProjects);

    revealProjects(projectsImg,projectsUrl,projectsDescriptions, containerProjects);
});
// al presionar el bototn contacto
contactMe.addEventListener("click" , ()=>{
    // carga el modulo de contacto
    contactController();
})
// al presionar el boton cv
downLoadCv.addEventListener("click" , ()=>{
    listWorks.innerHTML="";
    // despliega una alerta la cual advierte al usuario que se esta por descargar el cv
    reportStatus("Estás a punto de descargar un archivo PDF ", "¿Quieres continuar con la descarga o cancelar el proceso?" , 2 , ["Cancelar","Aceptar"],["cancelProcess","downloadFile"] , listWorks)

    document.getElementById("downloadFile").addEventListener("click" , ()=>{
        let a = document.createElement("a");
        a.href= "../Marcos Patricio Marchese Rodríguez.pdf";
        a.download = 'archivo.pdf';
        a.click(); 
    });
});
