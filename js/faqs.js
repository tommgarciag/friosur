// FAQS


const faqs = document.querySelector('.faqs');
faqs.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(e.target);
    if (e.target.classList.contains('faq_question')) {
        const rta = e.target.children[0];
        if (rta.classList.contains('open')) {
            rta.classList.remove('open');
        } else {
            rta.classList.add('open');
        }        
    }
});

// const sucursales = document.querySelector('.sucursales_grid');
// sucursales.addEventListener('click', (e) => {
//     e.preventDefault();
//     //console.log(e.target);
//     if (e.target.classList.contains('mas_info')) {
//         const info_sucursal = e.target.parentElement.parentElement.children[1];
//         const caption_sucursal = e.target.parentElement;            
//         caption_sucursal.style.display = 'none';
//         info_sucursal.style.display = 'flex';              
//     }

//     if (e.target.classList.contains('menos_info')) {
//         const info_sucursal = e.target.parentElement;
//         const caption_sucursal = e.target.parentElement.parentElement.children[0];       
//         info_sucursal.style.display= 'none';           
//         caption_sucursal.style.display = 'flex';        
//     }
    
// });

// SUCURSALES

let contendorApp = document.querySelector("#app");

class Sucursal {
  constructor(imagen, nombre, direccion, tel, wapp, linkWapp, contacto, mapa) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.direccion = direccion;
    this.tel = tel;
    this.wapp = wapp;
    this.linkWapp = linkWapp;
    this.contacto = contacto;
    this.mapa = mapa;
  }
  mostrarTel() {
    if (this.tel !== "") {
      return `
          <a style="text-decoration:none;" href="#" target="_blank" >
            <i class="fas fa-phone-alt"></i>${this.tel}               
          </a>
          `;
    } else {
      return `<p> - </p>`;
    }
  }
}

let madryn = new Sucursal(
  "./img/sucursal_madryn.png", 
  "Puerto Madryn",
  "Colombia 1736",
  "",
  "2804669036",
  "https://wa.me/542804669036",
  "Javier",
  "https://goo.gl/maps/ZPxMLnKmAvegHXZw8"
);
let caleta = new Sucursal(
  "./img/sucursal_caleta.png",
  "Caleta Olivia",
  "Circ. Sur entre Ruta 3 y 1",
  "2974830892",
  "2974259091",
  "https://wa.me/542974259091",
  "Facundo",
  "#"
);
let comodoro = new Sucursal(
  "./img/sucursal_trelew.png",
  "Comodoro Rivadavia",
  "Marcial Riadigos 385",
  "2974480337",
  "2976250050",
  "https://wa.me/54297625005",
  "Marcelo",
  "#"
);
let esquel = new Sucursal(
  "./img/sucursal_esquel.png",
  "Esquel",
  "Alberdi 433",
  "2945455813",
  "2945694452",
  "https://wa.me/542945694452",
  "Elio",
  "#"
);
let gallegos = new Sucursal(
  "./img/sucursal_gallegos.png",
  "Rio Gallegos",
  "Francisco Ramirez 672",
  "2966440201",
  "296622470",
  "https://wa.me/54296622470",
  "José",
  "#"
);
let sao = new Sucursal(
  "./img/sucursal_trelew.png",
  "San Antonio Oeste",
  "Irigoyen 425",
  "",
  "2934447904",
  "https://wa.me/542934447904",
  "Hernan",
  "#"
);
let trelew = new Sucursal(
  "./img/sucursal_trelew.png",
  "Trelew",
  "Lezama 944",
  "",
  "2804669826",
  "https://wa.me/542804669826",
  "Marcos",
  "#"
);

const sucursales = [madryn, caleta, comodoro, esquel, gallegos, sao, trelew];

html = "";

sucursales.forEach((sucursal) => {
  html += `
    
    <div class="col">
      <div class="card h-100">
        <img src="${sucursal.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${sucursal.nombre}</h5>
          <p class="card-text">${sucursal.direccion}</p>
          <p class="card-text">
            ${sucursal.mostrarTel()}
          </p>
          <p class="card-text">
            <a style="text-decoration:none;" href="${sucursal.linkWapp}" target="_blank" >
                <i class="fab fa-whatsapp"></i>${sucursal.wapp}
                <span>${sucursal.contacto}</span>
            </a>
          </p>
          <a href="${sucursal.mapa}" target="_blank" class="btn btn-primary">Ir al mapa</a>
        </div>
      </div>
    </div>
    
  
    `;
});

contendorApp.innerHTML = html;

