const marvel = {
  render: () => {
    //const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?apikey=5849d723445b45eb7da3edc5131a92cd' ;
  const urlAPI = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=5849d723445b45eb7da3edc5131a92cd&hash=801e014b1bb1b0f59e2ae1a0dd877870';
    
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          // Buscar el enlace de tipo 'wiki' o cualquier otro disponible
          let urlHero = hero.urls.find(url => url.type === "wiki") || hero.urls[0];
          
          // Si 'urlHero' es un objeto válido, accede a la propiedad 'url'
          if (urlHero) {
            contentHTML += `
              <div class="col-md-4">
                <a href="${urlHero.url}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
              </div>`;
          }
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();