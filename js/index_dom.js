import hamburgerMenu from "./dom/menu_hamburguesa.js"
import {digitalClock, alarm} from "./dom/reloj.js"
import {shortcuts, moveBall} from "./dom/teclado.js"
import countdown from "./dom/cuenta_regresiva.js"
import scrollTopButton from "./dom/boton_scroll.js"
import darkTheme from "./dom/tema_oscuro.js"
import responsiveMedia from "./dom/objeto_responsive.js"
import responsiveTester from "./dom/prueba_responsive.js"
import userDeviceInfo from "./dom/deteccion_dispositivos.js"
import networkStatus from "./dom/deteccion_red.js"
import webCam from "./dom/deteccion_webcam.js"
import getGeolocation from "./dom/geolocalizacion.js"
import searchFilters from "./dom/filtro_busquedas.js"
import draw from "./dom/sorteo.js"
import slider from "./dom/carrusel.js"
import scrollSpy from "./dom/scroll_espia.js"
import smartVideo from "./dom/video_inteligente.js"
import contactFormValidations from "./dom/validaciones_formulario.js"
import speechReader from "./dom/narrador.js"

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{ //asi carga la funcion al instante, a diferencia del Load que es async
    hamburgerMenu(".panel-btn", ".panel", ".menu a"); 
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "May 04, 2022 09:09:36", "🎊🎉Feliz Cumpleee Farfenix 💻🎉🎊");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href = "https://www.youtube.com/watch?v=AAtvnv6LNMk&list=PLvq-jIkSeTUbQc3dGsssp8lxAi5npMrys" target="_blank" rel="noopener">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/AAtvnv6LNMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href = "https://goo.gl/maps/pXqEmBdMjv8RdYV29" target="_blank" rel="noopener">Ver mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.283258946519!2d9.189737815430192!3d45.46409757910086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27101a2e13!2sCatedral%20de%20Mil%C3%A1n!5e0!3m2!1ses!2sit!4v1650323142410!5m2!1ses!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester")
    userDeviceInfo("user-device")
    webCam("webcam")
    getGeolocation("geolocation")
    searchFilters(".card-filter", ".card")
    draw("#winner-btn", ".player")
    slider()
    scrollSpy()
    smartVideo()
    contactFormValidations()
})

d.addEventListener("keydown", (e) => { // No hay nececidad de delegar el
    shortcuts(e);
    moveBall(e, ".ball", ".stage")
})

//Tenemos que sacarla del DOMContentLoaded del index porq asi puede funcionar el suyo interno
darkTheme(".dark-theme-btn", "dark-mode");   
networkStatus()
speechReader()