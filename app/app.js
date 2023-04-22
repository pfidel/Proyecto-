fetch("https://rickandmortyapi.com/api/character")
.then((response) => {
    return response.json ()
})
.then((data) => {
    const $contenedor = document.getElementById("grid-item");
    const personajes = data.results;

for( i=0 ; i < personajes.length ; i++) {
    console.log(personajes[i].name)
    $contenedor.innerHTML += `

    <div class= "contenedorPersonajes">
    <img src=" ${personajes[i].image} ">
    <p class="personajeStylo"> ${personajes[i].name}</p>
    <p> Genero: ${personajes[i].gender}</p>
    <p> Especie: ${personajes[i].species}</p>
    <p> Estado: ${personajes[i].status}</p>
    </div>
    `

}}); 
