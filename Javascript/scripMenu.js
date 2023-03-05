const menu = document.querySelector(".contentMenu");
const header =document.querySelector(".header");

menu.addEventListener("click",()=>{
    header.classList.toggle("response")
})

// preguntar antes de salir

window.addEventListener("beforeunload", (salir) => {
    if (true) {
        salir.preventDefault();
        salir.returnValue = "";
        return "";
    } 
})