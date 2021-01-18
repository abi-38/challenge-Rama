//sections d'affichage
const movieInsp = document.getElementById('movieInsp');
const seriesInsp = document.getElementById('seriesInsp');

// bouton qui lance la requête pour les films
const inspMovieButton = document.getElementById('inspire-movie-button');
inspMovieButton.addEventListener('click', function() {
    getInspired('https://imdb-api.com/en/API/Top250Movies/k_7wu03o0q', movieInsp)
});

//bouton qui lance la requête pour les séries
const inspSeriesButton = document.getElementById('inspire-series-button');
inspSeriesButton.addEventListener('click', function(){
    getInspired('https://imdb-api.com/en/API/Top250TVs/k_7wu03o0q', seriesInsp)
})

// fonction qui récupère la liste des films et en choisit un 
async function getInspired(url, section){
    try{
        const request = await fetch (url);
        const result = await request.json();
//génération d'un nombre aléatoire
        const random = Math.floor(Math.random()*250);
//fonction qui affiche le résultat
        showInsp(result.items[random], section)
    }
    catch(error){
        console.log(error)
    }
    }

//l'affichage du film/série
function showInsp(filmObject, film){
    film.innerHTML = '';
    const filmTitle = document.createElement('h3');
    filmTitle.textContent = filmObject.title;
    filmTitle.addEventListener('click', async function getInspDetails(){
        try{
            const newRequest = await fetch('https://imdb-api.com/en/API/Title/k_7wu03o0q/' + filmObject.id);
            const newResult = await newRequest.json();
            showDetails(newResult)
        }
        catch(error){
            console.log(error)
        }
    })
    const filmYear = document.createElement('p');
    filmYear.textContent = filmObject.year;
    const filmImg = document.createElement('p');
    filmImg.innerHTML = `<img src="${filmObject.image}" class="imageInsp"></img>`;
    film.appendChild(filmTitle);
    film.appendChild(filmYear);
    film.appendChild(filmImg);
}


