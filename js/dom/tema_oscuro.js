const d = document;
const l = function (arg){console.log(arg)};
const ls = localStorage;

export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
    const $stage = document.querySelector(".stage") 
    //l($selectors);

    let moon = "🌑",
        sun = "🌞";

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark))
        $themeBtn.textContent = moon;
        $stage.classList.remove("white")  
        ls.setItem("theme", "light") 
    }
    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark))
        $themeBtn.textContent = sun;
        $stage.classList.add("white") 
        ls.setItem("theme", "dark") 
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
           // l($themeBtn.textContent)
            if($themeBtn.textContent === moon) {
            darkMode()
            } else {
            lightMode()
            }
        }
    })
//necesitamos desencadenar un evento de tipo domcontentload para que pregunte si esta el sol o la luna
    d.addEventListener("DOMContentLoaded", (e) => {
     //l(ls.getItem("theme"))
     //Este se encarga de establecer el primer valor en el local Storage   
     if(ls.getItem("theme") === null) ls.setItem("theme", "light");
        //Dsps entra solo en estos 2 loops
     if(ls.getItem("theme") === "light") lightMode();
     if(ls.getItem("theme") === "dark") darkMode();
    })
}



