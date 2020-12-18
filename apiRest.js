//la section où sont stockés les resultats de la requête Box office
const boxOfficeElt = document.getElementById('boxOffice');

//la section où sont stockés les resultats de la requête Les plus populaires
const plusPopulaireElt = document.getElementById('plusPopulaire');

// l'url de base de l'API pour la requête Box office
const premierUrl = "https://imdb-api.com/en/API/BoxOffice/k_uhool6g6";

// l'url de base de l'API pour la requête Les plus populaires
const secondUrl = "https://imdb-api.com/en/API/MostPopularTVs/k_uhool6g6";

// la fonction de la requête première requête
function boxOffice() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
    
        if(this.readyState === 4) {
            let reponse = JSON.parse(this.responseText);
            for (let i=0; i < 10; i++) {
                let divboxOffice = document.createElement('div');
                boxOfficeElt.appendChild(divboxOffice);
                divboxOffice.classList.add('bloc');
                let aImage = document.createElement('a');
                aImage.href = '#';
                divboxOffice.appendChild(aImage);
                let imgElt = document.createElement('img');
                aImage.appendChild(imgElt);
                imgElt.src = reponse.items[i].image;
                imgElt.style.width = '100px'
                let aTitle = document.createElement('a');
                divboxOffice.appendChild(aTitle);
                aTitle.innerHTML = reponse.items[i].title;
                aTitle.href = '#';
                aTitle.classList.add('selection');
            }
        }
    })
    xhr.open("GET", premierUrl);
    xhr.send();
}

function mostPopular() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {

        if(this.readyState === 4) {
            let reponse = JSON.parse(this.responseText);
            for (let i=10; i < 20; i++) {
                let divPopulaire = document.createElement('div');
                plusPopulaireElt.appendChild(divPopulaire);
                divPopulaire.classList.add('bloc');
                let aImage = document.createElement('a');
                aImage.href = '#';
                divPopulaire.appendChild(aImage);
                let imgElt = document.createElement('img');
                aImage.appendChild(imgElt);
                imgElt.src = reponse.items[i].image;
                imgElt.style.width = '100px'
                let aTitle = document.createElement('a');
                aTitle.href = '#';
                divPopulaire.appendChild(aTitle);
                aTitle.classList.add('titre');
                aTitle.innerHTML = reponse.items[i].title;
            }
        }
    })
    xhr.open("GET", secondUrl);
    xhr.send();
}

async function requetes() {
    const premiereRequete = await window.addEventListener('load', boxOffice);
    const secondeRequete = await window.addEventListener('load', mostPopular);
}
requetes();

