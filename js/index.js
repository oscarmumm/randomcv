const nombre = document.getElementById('nombre');
const foto = document.getElementById('foto');
const edad = document.getElementById('edad');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const celular = document.getElementById('celular');
const email = document.getElementById('email');
const cumpleanos = document.getElementById('cumpleanos');
const calle = document.getElementById('calle');
const divEdad = document.getElementById('div-edad');
const divDireccion = document.getElementById('div-direccion');

function fetchData(){
  fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => {
    return infoPersona = {
      nombre: data.results[0].name.first,
      apellido: data.results[0].name.last,
      edad: data.results[0].dob.age,
      diaNacimiento: (data.results[0].dob.date).slice(8,10),
      mesNacimiento: (data.results[0].dob.date).slice(5,7),
      anoNacimiento: (data.results[0].dob.date).slice(0,4),
      email: data.results[0].email,
      nacionalidad: data.results[0].nat,
      direccion: `${data.results[0].location.street.name} ${data.results[0].location.street.number}`,
      ciudad: data.results[0].location.city,
      estado: data.results[0].location.state,
      pais: data.results[0].location.country,
      telefono: data.results[0].phone,
      celular: data.results[0].cell,
      fotoGrande: data.results[0].picture.large,
      fotoMediana: data.results[0].picture.medium,
      fotoChica: data.results[0].picture.thumbnail
    }
  })
  .then(infoPersona => {
    console.table(infoPersona)
    mostrarDatos(infoPersona)
  })
};
fetchData();

function mostrarDatos(){
  nombre.innerText = `${infoPersona.nombre} ${infoPersona.apellido}`;
  foto.src = infoPersona.fotoGrande;
  edad.innerText = infoPersona.edad;
  cumpleanos.innerText = `${infoPersona.diaNacimiento}/${infoPersona.mesNacimiento}/${infoPersona.anoNacimiento}`;
  direccion.innerText = `${infoPersona.ciudad}, ${infoPersona.pais}`;
  calle.innerText = infoPersona.direccion;
  email.innerText = infoPersona.email;
  telefono.innerText = infoPersona.telefono;
  celular.innerText = infoPersona.celular;
}

divEdad.addEventListener('click', () => {
  cumpleanos.classList.toggle('mostrar-info-extra');
});

divDireccion.addEventListener('click', () => {
  calle.classList.toggle('mostrar-info-extra');
});
