const URL = ' https://wizard-world-api.herokuapp.com';


window.onload = async () => {
  const personatjes = await getAllpersonatjes();
  const casas = await getAllCasas();
  const Spells= await getAllSpells();
  const Nox=document.getElementById("Nox");
  const Lumos=document.getElementById("Lumos");
  const Orchideous=document.getElementById("Orchideous");
  const Alarte=document.getElementById("Freezing Charm");
  const cerdo=document.getElementById('botonSonido')
  
  
  const quitarTextoBtn = document.getElementById('quitarTextoBtn');

  quitarTextoBtn.addEventListener('click', function () {
    if(quitarTextoBtn.textContent==="Evanesco"){
    document.getElementById('Thechizos').style.display = 'none';
    this.textContent="Accio";}
    else{
      document.getElementById('Thechizos').style.display = 'flex';
      this.textContent="Evanesco";
    }
  });

  cerdo.addEventListener('click', reproducirSonido);
  function reproducirSonido() {
    var audio = new Audio('/cerdo.mp3');
    audio.play();
}
  
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
      <button onclick="verIngredientes('${Elixir.id}')">ingredients</button>
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
        <h2 class="${casa.name}">habitación principal: ${casa.commonRoom}</h2>
        <h2 class="${casa.name}">fundador: ${casa.founder}</h2>
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
  

// Part dels encanteris
for (const spell of Spells) {
  const divE = document.getElementById("Thechizos");
  const newCasa = document.createElement("div");
  newCasa.innerHTML = `<p class="echiS">${spell.name} </p>
  `;
  divE.appendChild(newCasa);
}
Nox.addEventListener('click',ExecNux);
Lumos.addEventListener('click',ExecLumos);
Orchideous.addEventListener('click',ExcOrchideous);
Alarte.addEventListener('click', ExcAlert);
function ExcAlert(){
  alert('💋💋💋💋🥶🥶🥶🥶🥶🥶');

}
function regresar() {
  document.body.style.backgroundColor = ""; 
}
function ExecNux(e) {
  e.preventDefault();
  document.body.style.backgroundColor = "grey"; 
setTimeout(regresar, 5000);  
}
function ExecLumos(e) {
  e.preventDefault();
  document.body.style.backgroundColor = "rgba(255, 248, 33, 0.558)"; 
setTimeout(regresar, 5000);  
}
function ExcOrchideous(e) {
  e.preventDefault();
  document.body.style.background=" url(/florv2.jpg)";
setTimeout(regresar, 5000);  
}
function regresar() {
  document.body.style.background="";

}

};






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
  

}


async function destacar(id) {
  const response = await getNombre(id);
  const ingg=document.getElementById("personatje_preferitt")
  const ing = document.getElementById("personatje_preferit");
  
  ing.innerHTML = '';
  ing.innerHTML = `<p>${response.firstName} ${response.lastName}</p>
  
  `;
  ingg.innerHTML = '';
  ingg.innerHTML = `<p>${response.firstName} ${response.lastName}</p>
  `;

  
}


async function verIngredientes(id) {
  const responses = await getAllElixirs(id);
  const ing = document.getElementById(id);
  ing.innerHTML = '';  
  for (const ingredient of responses) {
    const newIngredient = document.createElement('p');
    newIngredient.className = 'ingredients';
    newIngredient.textContent = ingredient.name;
    ing.appendChild(newIngredient);
  }
}



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
async function getAllSpells() {
  const response = await fetch(`${URL}/Spells`);
  const data = await response.json();
  return data;


}

