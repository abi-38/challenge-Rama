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


const showDetails = (filmDetails) =>{
    const popup = document.createElement('aside');
    const mainField = document.getElementById('mainField');
    mainField.appendChild(popup);
    const bouton = document.createElement('button');
    bouton.textContent = 'Close';
    bouton.id = 'bouton';
    popup.appendChild(bouton);

//test avec le switch
for (const property in filmDetails){
    switch(property){
        case 'title':
            let movieTitle = document.createElement('h3');
            movieTitle.textContent = filmDetails[property];
            popup.appendChild(movieTitle);
            break;
        case 'releaseDate':
            let movieDate = document.createElement('p');
            movieDate.textContent = `Release date: ${filmDetails[property]}`;
            popup.appendChild(movieDate);
            break;
        case 'runtimeStr':
            let movieRuntime = document.createElement('p');
            movieRuntime.textContent = `Runtime: ${filmDetails[property]}`;
            popup.appendChild(movieRuntime)
            break;
        case 'plot':
            let moviePlot = document.createElement('p');
            moviePlot.textContent = filmDetails[property];
            popup.appendChild(moviePlot);
            break;
        case 'directors':
            let movieDir = document.createElement('p');
            movieDir.textContent = `Director: ${filmDetails[property]}`;
            popup.appendChild(movieDir);
            break;
        case 'writers':
            let movieWrit = document.createElement('p');
            movieWrit.textContent = `Writer: ${filmDetails[property]}`;
            popup.appendChild(movieWrit);
            break;
        case 'genres':
            let movieGenre = document.createElement('p');
            movieGenre.textContent = `Genre: ${filmDetails[property]}`;
            popup.appendChild(movieGenre);
            break;
//affichage des photos des acteurs 
        case 'actorList':
            let actorsDiv = document.createElement('div');
        actorsDiv.classList.add('card-group');
        popup.appendChild(actorsDiv);
        for(const actor of filmDetails[property]){
        let actorCard = document.createElement('div');
        actorCard.classList.add('col-12', 'col-md-6', 'col-lg-4');
        actorsDiv.appendChild(actorCard);
                    let actorImg = document.createElement('div');
                    actorImg.innerHTML = `<img src="${actor.image}" class="card-img-top actorimg"></img>`;
                    actorCard.appendChild(actorImg);
                
                    let actorName = document.createElement('h5');
                    actorName.textContent = actor.name;
                    actorCard.appendChild(actorName);
                
                    let actorChar = document.createElement('p');
                    actorChar.textContent = `as ${actor.asCharacter}`;
                    actorCard.appendChild(actorChar);
                
                actorsDiv.appendChild(actorCard)
            }
    }
}
    
    bouton.addEventListener('click', ()=>{
        popup.innerHTML = '';
        mainField.removeChild(popup);
    })
}