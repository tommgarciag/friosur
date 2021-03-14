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