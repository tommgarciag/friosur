// $(document).ready(function() {
        
//     $('.faq_question').click(function() {
 
//         if ($(this).parent().is('.open')){
//             $(this).closest('.faq').find('.faq_answer_container').animate({'height':'0'},500);
//             $(this).closest('.faq').removeClass('open');
 
//             }else{
//                 var newHeight =$(this).closest('.faq').find('.faq_answer').height() +'px';
//                 $(this).closest('.faq').find('.faq_answer_container').animate({'height':newHeight},500);
//                 $(this).closest('.faq').addClass('open');
//             }
 
//     });
 
// });

const fotos = ['./img/estmenzoa-logo-web.png',
                './img/grenlife-logo-web.png',
                './img/villavicencio-logo-web.png',
                './img/frigor-logo-web.png',
                './img/levite-logo-web.png',
                './img/infinity-logo-web.png',
                './img/villadelsur-logo-web.png',
                './img/mole-logo-web.png',
                './img/paty-logo-web.png',
                './img/peñon-logo-web.png',
                './img/salteña-logo-web.png',
                './img/serenisima-logo-web.png',
                './img/silk-logo-web.png',
                './img/toro-logo-web.png'
                ];

                
let $marcas = document.querySelector('.marcas_contenedor');

for (foto of fotos) {
    let $div = document.createElement('div');    
    let $img = document.createElement('img'); 
    $img.src = foto;
    $div.classList = 'marcas_item';
    $div.appendChild($img);
    $marcas.appendChild($div);
}

//console.log($marcas);

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


