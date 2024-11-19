const lista=document.getElementById("listaUsuarios");
 

async function obtenergente() {const resultados=await fetch("https://jsonplaceholder.typicode.com/users")
    const devolver=await resultados.json();
    return devolver;}

    function edadAleatoria(min, max) 
    { return Math.floor(Math.random() * (max - min + 1)) + min; } 
    
    
    
    function mostrarPersonas(personas){lista.innerHTML="";
        personas.forEach(persona=> {
        const divpersona=document.createElement("li")
        divpersona.classList.add("css");
        
        
        const imagen=`./assets/img/${persona.id}.jpeg`;
        
        const nombre=persona.name;
        const edad=edadAleatoria(18, 60); 
        const username=persona.username;
        const telefono=persona.phone;
        const correo=persona.email;
        const compañia=persona.company.name;
        const direccion=`${persona.address.street}, ${persona.address.suite}, ${persona.address.city}`;
        divpersona.innerHTML=`<div class="general">
        <div class="contenedor"> <img class="imagen" src= ${imagen} alt=${nombre}>
        <ul class="definitivo">
        <li ><span><b>Nombre: </b> </span>${nombre}</li>
        <li><span><b>Edad: </b></span>${edad}</li>
        <li><span><b>Username: </b></span>${username}</li>
        <li><span><b>Telefono: </b></span>${telefono}</li>
        <li><span><b>Email: </b></span>${correo}</li>
        </ul>
        </div>
        <ul class="total">
        <li><span><b>Compañia: </b></span>${compañia}</li>
        <li><span><b>Dirección: </b></span>${direccion}</li>
        </ul>
        </div>
        `;
        lista.appendChild(divpersona);})};
        

        
        async function total() { const personas = await obtenergente(); mostrarPersonas(personas);}
        total();
        