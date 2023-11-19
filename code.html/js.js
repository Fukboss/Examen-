const URL = ' https://wizard-world-api.herokuapp.com';


window.onload = async () => {
  //const boton=document.getElementById('button');
  //boton.addEventListener('click', elixirclicat(id));
  const personatjes = await getAllpersonatjes();
  const casas = await getAllCasas();
  //const ElixirsS= await getAllElixirs();
 

  for (const personatje of personatjes) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
          <h2 class="personatje" id="${personatje.id}">${personatje.firstName} ${personatje.lastName}</h2>
          <button  id="${personatje.id}"onclick="destacar('${personatje.id}')"> Destacar </button>
        `;
    mainHtmlElement.appendChild(newElement);


    for (const Elixir of personatje.elixirs) {
      const newElements = document.createElement('div');
      newElements.innerHTML = `
          <h3>${Elixir.name}</h3>
          <button oncli ck="verIngredientes('${Elixir.id}')"> ingredients </button>
          <div id="${Elixir.id}"></div>
        `;

      mainHtmlElement.appendChild(newElements);
    }
  }

  for (const casa of casas) {
    const sectorCasas = document.getElementById("casas");
    const newCasa = document.createElement("div");
    newCasa.className = `${casa.name}`;
    newCasa.innerHTML = `
        <h1 class="${casa.name}">${casa.name}</h1>
        <h2 class="${casa.name}">habitación principal ${casa.commonRoom}</h2>
        <button id="openBtn" onclick="destacarC('${casa.id}')"> Destacar </button>
        
        
        `;
    sectorCasas.appendChild(newCasa);
  }
  const butt=document.getElementById('openBtn')

  butt.addEventListener('click', function() {
    document.getElementById('floatingWindow').classList.add('active');
  });
  
  const boto=document.getElementById('closeBtn')
  boto.addEventListener('click', function() {
    document.getElementById('floatingWindow').classList.remove('active');
  });
  
};

//________________________________________________________
async function destacarC(id) {
  const response = await getNombreC(id);
  const ingg=document.getElementById("destacar")
  const ing = document.getElementById("casa_preferida");
  ing.innerHTML = '';
  ing.innerHTML = `<p>${response.name} </p>
  `;
  ingg.innerHTML = '';
  ingg.innerHTML = `<p>${response.name} </p>
  `;
  // ing.appendChild(per);
  // ingg.appendChild(per);
 
// ________________________________________________


}

//______________________________________________________________
async function destacar(id) {
  const response = await getNombre(id);
  const ingg=document.getElementById("personatje_preferitt")
  const ing = document.getElementById("personatje_preferit");
  
  ing.innerHTML = '';
  ing.innerHTML = `<p>${response.firstName} </p>
  <p>${response.lastName} </p>
  `;
  ingg.innerHTML = '';
  ingg.innerHTML = `<p>${response.firstName} </p> <p>${response.lastName} </p>
  `;

   ing.appendChild(per);
  // ingg.appendChild(per);
  
  //_________________________________________________
}
//_________________________________________________

async function verIngredientes(id) {
  const responses = await getAllElixirs(id);
  const ing = document.getElementById(id);
  
  ing.innerHTML = '';
  for (const ingredient of responses) {
    const ingredientE = document.createElement("div");
    ingredientE.innerHTML = `
          <p> ${ingredient.name} </p>
          `;
    ing.appendChild(ingredientE);
   
  }
 
}

//___________________________________________________________________

async function getAllpersonatjes() {
  const response = await fetch(`${URL}/Wizards`);
  const data = await response.json();
  return data;
}

async function getAllElixirs(id) {
  const response = await fetch(`${URL}/Elixirs/${id}`);
  const data = await response.json();
  return data.ingredients;
}

async function getAllCasas() {
  const response = await fetch(`${URL}/Houses`);
  const data = await response.json();
  return data;
}
async function getNombre(id) {
  const response = await fetch(`${URL}/Wizards/${id}`);
  const data = await response.json();
  return data;
}

async function getNombreC(id) {
  const response = await fetch(`${URL}/Houses/${id}`);
  const data = await response.json();
  return data;


}

