const URL= ' https://wizard-world-api.herokuapp.com';


window.onload = async () => {

    const personatjes = await getAllpersonatjes();
    const ElixirsS= await getAllElixirs();
    //const ElixirsS= await getAllElixirs();

  
    for (const personatje of personatjes) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
        <h2>${personatje.firstName}</h2>
      `;
      for(const Elixir of ElixirsS){
        const mainHtmlElements = document.getElementById('main');
      const newElements = document.createElement('div');
      newElements.innerHTML = `
        <h3>${personatje.firstName}</h3>
      `;
      }

      mainHtmlElement.appendChild(newElement);
      mainHtmlElement.appendChild(newElements);

    }

   
 
  
  async function getAllpersonatjes() {
    const response = await fetch(`${URL}/Wizards`);
    const data = await response.json();
    return data;
  }
  async function getAllElixirs() {
    const response = await fetch(`${URL}/Wizards`);
    const data = await response.json();
    return data.elixirs;
  }
};
  