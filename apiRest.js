let result = document.getElementById('films');
let bouton = document.getElementById('bouton');

bouton.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {

        if(this.readyState === 4) {
            console.log(this.responseText);
            let reponse = JSON.parse(this.responseText);
            console.log(reponse);
            for (let i=0; i < reponse.items.length; i++) {
                let pImage = document.createElement('p');
                result.appendChild(pImage);
                pImage.innerHTML = `<img src="${reponse.items[i].image}" width=100 ></img>`;
                let pTitle = document.createElement('p');
                result.appendChild(pTitle);
                pTitle.innerHTML = reponse.items[i].title;
            }
        }

    });
    xhr.open("GET", "https://imdb-api.com/en/API/BoxOffice/k_uhool6g6");
    xhr.send();

})
