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

const sucursales = document.querySelector('.sucursales_grid');
sucursales.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(e.target);
    if (e.target.classList.contains('mas_info')) {
        const info_sucursal = e.target.parentElement.parentElement.children[1];
        const caption_sucursal = e.target.parentElement;            
        caption_sucursal.style.display = 'none';
        info_sucursal.style.display = 'flex';              
    }

    if (e.target.classList.contains('menos_info')) {
        const info_sucursal = e.target.parentElement;
        const caption_sucursal = e.target.parentElement.parentElement.children[0];       
        info_sucursal.style.display= 'none';           
        caption_sucursal.style.display = 'flex';        
    }
    
});

