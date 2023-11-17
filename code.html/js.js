const URL= ' https://wizard-world-api.herokuapp.com';


window.onload = async () => {
    
    
    const personatjes = await getAllpersonatjes();
    //const ElixirsS= await getAllElixirs();

  
    for (const personatje of personatjes) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
        <h2>${personatje.firstName}</h2>
        <h2>${personatje.lastName}</h2>
    
      `;
      mainHtmlElement.appendChild(newElement);
    
     
      for(const Elixir of personatje.elixirs){
        const mainHtmlElements = document.getElementById('main');
      const newElements = document.createElement('div');
      newElements.innerHTML = `
        
        <h3>${Elixir.name}</h3>
        <button id="${Elixir.name}"> ingredients </button>
        
      `;
      mainHtmlElements.appendChild(newElements);
      //const boton=document.getElementById('${Elixir.name}');
      //boton.addEventListener('click', elixirclicat());

      }
      
      
      
    }
    
    //__________________________________________________
    const elixirs = await getAllElixirs();
    function elixirclicat(){
        for (const ingredient of elixirs) {
            const mainHtmlElement = document.getElementById('mainn');
            const newElements = document.createElement('p');
            newElements.innerHTML = `
              <h2>${ingredient}</h2>
            `;
            mainHtmlElement.appendChild(newElements);
    
            }
             }
   
  
  async function getAllpersonatjes() {
    const response = await fetch(`${URL}/Wizards`);
    const data = await response.json();
    return data;
  }



  
};

  