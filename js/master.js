let personajesHtml = document.querySelector('.personajes');
fetch('../datos/personajes.json')
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((personajes) => {
        //console.log(personajes)
        personajes.forEach(personaje => {
            personajesHtml.innerHTML += ` 
        <div class="card text-center col-12 col-md-6 col-lg-3 p-4 m-1">
            <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.imagen}">
            <div class="card-body">
            <h2>${personaje.nombre} </h2>

            <a   id='${JSON.stringify(personaje)}' href= '#' class='btn btn-outline-primary d-block botonDetalle' >Mas info </a>
            </div>
        </div>
        `
        });

        let botonDetalle = document.querySelectorAll('.botonDetalle')

        let arrayMiListaDePersonajes
        let miObjeto
        let codigo


        botonDetalle.forEach(personajesSeleccion => {
            personajesSeleccion.addEventListener('click', function (e) {

                e.preventDefault()
                let miListaDePersonajes = localStorage.getItem('detallesPersonaje')
                if (miListaDePersonajes == null) {
                    arrayMiListaDePersonajes = [];
                } else {
                    arrayMiListaDePersonajes = JSON.parse(miListaDePersonajes)
                } 
                arrayMiListaDePersonajes.push(this.id)
                miObjeto = JSON.parse(arrayMiListaDePersonajes[0])
                codigo = miObjeto.codigo
                localStorage.setItem('detallesPersonaje', JSON.stringify(arrayMiListaDePersonajes))
                location.href = `detalle.html?codigo=${codigo}`

            })
        })



    })
    .catch((error) => {
        console.log('Ha ocurrido un error ' + error);
    })
