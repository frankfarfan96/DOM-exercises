const d = document,
    n=navigator,
    l = function(arg){console.log(arg)};

export default function getGeolocation(id) {
    const $id= d.getElementById(id),
    options = {
        enableHighAccuracy : true, //con esta opcion hacemos que el hardware se acelere para tomar una mejor lectura
        timeout: 5000, //El tiempo de espera para tomar la respuesta de la lectura
        maximumAge: 0 //Para que no se guarde el cache, asi puede segir con las lecturas
    },
    success = position => {
        let coords = position.coords;
        l(position)

        $id.innerHTML = `
        <p>Tu posicion actual es: </p>
        <ul>
         <li>Latitud: <b>${coords.latitude}</b></li>
         <li>Longitud: <b>${coords.longitude}</b></li>
         <li>Precision: <b>${coords.accuracy}</b> metros</li>
        </ul> 
        <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 10z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `
    },
    error = err => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        l(`Error ${err.code}: ${err.message}`)
    };

    n.geolocation.getCurrentPosition(success, error, options)
}