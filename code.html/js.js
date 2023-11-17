const URL= ' https://wizard-world-api.herokuapp.com';

window.onload = async()=>{
    const pokemons = await getAllPokemon();
  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();
  for(const pokemon of pokemons){
      const infop = await getInfoPoke(pokemon.url)
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      
      newElement.innerHTML = `
      <h2>${pokemon.name}</h2>
      <p>${infop.types.map(typeContainer => typeContainer.type.name).join(', ')}</p>
      <p>${infop.stats.map(statsname => statsname.stat.name  &&  statsname.base_stat)}</p>
      `;
      mainHtmlElement.appendChild(newElement);
      
  }

};
async function getAllPokemon(){
    const response = await fetch(`${SWAPI_BASE_URL}/pokemon`);
    const data = await response.json();
    return data.results;
  }