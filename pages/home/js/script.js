const listaEstudiantes = [
  { nombre: "David Izquierdo",rol: "Est Programacion Web",iniciales: "DI", urlImagen: "../../media/img/yo.png",urlPortafolio : "../portafolio/portafolio.html", urlLinkedin:"https://www.linkedin.com/in/david-izquierdo-camargo-7b1389213/",urlX:"",urlFacebook:""},
  { nombre: "Andrés Luna",   rol: "Est de Ing Sistemas",iniciales: "AL", urlImagen : null,urlPortafolio : "https://curriculumvitaeandresluna.vercel.app/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Andrés Rivera",   rol: "Programacion web", iniciales: "AR", urlImagen : null,urlPortafolio : "https://afriverag.github.io/CV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Daniel Orozco", rol: "Programacion web",iniciales: "DO", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Juranis Botto",  rol: "Programacion web",iniciales: "JB", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Milder Blanco",  rol: "Programacion web",iniciales: "MB", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Andrés Lara", rol: "Programacion web", iniciales: "AL", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Santiago Torres",    rol: "Programacion web",iniciales: "ST", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Leonardo Ramirez", rol: "Programacion web",iniciales: "LR", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Johan Marin", rol: "Programacion web",iniciales: "JM", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Jossy Rojas", rol: "Programacion web",iniciales: "JR", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Camilo Monsalve", rol: "Programacion web",iniciales: "CM", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Juan Simancas", rol: "Programacion web",iniciales: "JS", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
  { nombre: "Juan Tamara", rol: "Programacion web", iniciales: "JT", urlImagen : null,urlPortafolio : "https://davizq02.github.io/HDV/", urlLinkedin:"",urlX:"",urlFacebook:""},
];

const grid = document.getElementById("cardsGrid");

/* Genera y renderiza las tarjetas en el grid a partir de un array de estudiantes */
function renderCards(list) {
  grid.innerHTML = "";
  list.forEach(estudiante => {
    const card = document.createElement("article");
    card.className = "student-card";
    card.innerHTML = `
        <div class="avatar-wrap">
            ${
            estudiante.urlImagen 
                ? `<img src="${estudiante.urlImagen}" alt="${estudiante.nombre}" class="avatar-img">`
                : `<div class="avatar-placeholder" 
                    style="background:linear-gradient(135deg, var(--color${Math.floor(Math.random() * 20) + 1}), var(--color${Math.floor(Math.random() * 20) + 1}))">
                    ${estudiante.iniciales}
                </div>`
            }
        </div>
      <div class="student-nombre"> ${estudiante.nombre} </div>
      <div class="student-rol">${estudiante.rol}</div>
      <a href="${estudiante.urlPortafolio}" class="btn-ver">Ver</a>
      <div class="social-icons">
        <a href="${estudiante.urlLinkedin}" class="social-btn li">in</a>
        <a href="${estudiante.urlX}" class="social-btn tw"><img src="../../media/svg/x.svg" alt="X"></a>
        <a href="${estudiante.urlFacebook}" class="social-btn fb"><img src="../../media/svg/facebook.svg" alt="Facebook"></a>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

/* Filtra las tarjetas en tiempo real según el texto escrito en el buscador */
function filterCards() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const filtered = listaEstudiantes.filter(e =>
    e.nombre.toLowerCase().includes(q) || e.rol.toLowerCase().includes(q)
  );
  renderCards(filtered);
}

/* Carga inicial: renderiza todas las tarjetas al abrir la página */
renderCards(listaEstudiantes);