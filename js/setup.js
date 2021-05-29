// função para calcular o tamanho dos 4% das minhas laterais so site para pixels, já q stagePadding apenas aceita pixels
function tamanhoDiv(){
    var pxDiv = document.getElementsByTagName('body')[0].offsetWidth; //tamanho da tela
    var pixels = (pxDiv * 4) / 100;
    return pixels;
};

// carrossel para section "Continuar ouvindo"
$('#ouvindo').owlCarousel({
    loop: false,
    margin:10,
    nav:true,
    navText: ["<-", "->"],
    dots: false,
    stagePadding: tamanhoDiv(),
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});

// carrossel para section "Destaques da semana"
 $('#destaques').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    
// carrossel para as demais sections
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});