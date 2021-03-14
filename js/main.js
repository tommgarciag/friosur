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
                
let $marcas = document.querySelector('.marcas_grid');

for (foto of fotos) {
    let $div = document.createElement('div');    
    let $img = document.createElement('img'); 
    $img.src = foto;
    $div.classList = 'marcas_item';
    $div.appendChild($img);
    $marcas.appendChild($div);
}

//console.log($marcas);




