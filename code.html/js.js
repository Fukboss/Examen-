const URL= ' https://wizard-world-api.herokuapp.com/Wizards';


window.onload = async () => {

    const films = await getAllStarWarsFilms();
  

  
    for (const film of films) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
        <h2>${film}</h2>
      `;
      mainHtmlElement.appendChild(newElement);
    }
  };
  
  async function getAllStarWarsFilms() {
    const response = await fetch(`${URL}/name`);
    const data = await response.json();
    return data.results;
  }