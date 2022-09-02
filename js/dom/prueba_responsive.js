const d = document;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if(e.target === $form) { //Otra forma de hacer e.target.matches
            //Cancelamos la accion x defecto de un formulario, (xk no hay atributo action)
            //Q es que envia la informacion por el metodo original(se procesa la pagina)
            e.preventDefault()
            //alert("Formulario enviado")
            tester = window.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
        }
    })
 
    d.addEventListener("click", e => {
        if(e.target === $form.cerrar) tester.close()
    })
}