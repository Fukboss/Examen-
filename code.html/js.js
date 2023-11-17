const URL= ' https://wizard-world-api.herokuapp.com';


window.onload = async () => {

    const personatjes = await getAllpersonatjes();
  

  
    for (const personatje of personatjes) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
        <h2>${personatje.firstName}</h2>
      `;
      mainHtmlElement.appendChild(newElement);
    }
  };
  
  async function getAllpersonatjes() {
    const response = await fetch(`${URL}/Wizards`);
    const data = await response.json();
   
    return data.Array;
  }