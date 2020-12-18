let boxOfficeElt = document.getElementById('boxOffice');
let plusPopulaireElt = document.getElementById('plusPopulaire');

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
});
xhr.open("GET", "https://imdb-api.com/en/API/BoxOffice/k_uhool6g6");
xhr.send();

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
});
xhr.open("GET", "https://imdb-api.com/en/API/MostPopularTVs/k_uhool6g6");
xhr.send();

let titreElt = document.getElementsByClassName("selection");
/*console.log(titreElt);*/
console.log(titreElt[5]);




/*for (let i = 0 ; i < titreElt.length; i++) {
    console.log(titreElt{i});
}

for (let i = 0 ; i < titreElt.length; i++) {
    titreElt[i].addEventListener('click' , function(e) {
        console.log('merde');
    }
)}

Array.from(titreElt).forEach(titre => {
    titre.addEventListener("click", function() {
        e.preventDefault();
        console.log('ok');
    });
  });
  let logoElt = document.getElementById('logo');
  logoElt.addEventListener('click', function() {
      console.log('ok');
  })*/
