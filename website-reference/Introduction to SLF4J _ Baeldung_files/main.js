var _loadedImages = 0,
    _imageArray = new Array(
        'copy01.svg',
        'copy02.svg',
        'copy03.svg',
        'copy04.svg',
        'copy_cta.svg',
        'copy_eyebrow.svg',
        'copy_EF01.svg',
        'truck.svg',
        'home.svg',
        'logo.svg'
        ),
    po2 = 'Power2.easeOut',
    _tl;

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;
    if(_loadedImages == _imageArray.length) loadCSS();
}

function loadCSS(){
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);
    css.addEventListener('load', loadGSPA, false);
}

function loadGSPA(){
    ipGSPA = document.createElement('script');
    ipGSPA.setAttribute('type', 'text/javascript');
    ipGSPA.setAttribute('src', 'https://s0.2mdn.net/ads/studio/cached_libs/gsap_3.0.1_min.js');
    // ipGSPA.setAttribute('src', 'gsap_3.0.1_min.js'); /* For local use */
    document.getElementsByTagName('head')[0].appendChild(ipGSPA);

    ipGSPA.addEventListener('load', initAnimations, false);
}

function initAnimations(){
    console.time('animationTotalTime')
    _tl = gsap.timeline();

    _tl
    .set('.banner',{opacity:1})

    .to('#truck',{duration:.6, opacity:1,x:200,ease:po2}, '+=.3')
    .to('.f01',{duration:.6, stagger:.5, opacity:1,ease:po2}, '-=.2')
    .to('.moving',{duration:.6,x:"+=240",ease:po2}, '+=2')
    .to('.f01',{duration:.4, opacity:0,ease:po2}, '-=.5')
    .to('#copy03',{duration:.4, opacity:1,ease:po2}, '-=.1')
    .to('#copy03',{duration:.4, opacity:0,ease:po2}, '+=2.5')
    .to('#copy04',{duration:.4, opacity:1,ease:po2}, '-=.3')
    
    .to('#copy_eyebrow',{duration:.5,top:-20,ease:Power2.easeOut},'+=2')
    .to('#yellowLine',{duration:.5,top:-20,ease:Power2.easeOut},'-=.4')
    .to('.f04',{duration:.5,x:"+=240",ease:po2}, '-=.5')
    .to('#logo02',{duration:.5, opacity:1,scale:1, transformOrigin:"center 20%", transformStyle:"preserve-3d", ease:Power1.easeOut},'-=.5')
    .to('.copyEF',{duration:.3,opacity:1,stagger:.2, onComplete:actionsButton, ease:Power1.easeIn},'-=.2')
    .call(function(){console.timeEnd('animationTotalTime')})
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){ gsap.to('#cta',{duration:.5, backgroundColor:'#fff',ease:po2 })});
    _btnExit.addEventListener('mouseout', function(){ gsap.to('#cta',{duration:.5, backgroundColor:'#fac705',ease:Power2.easeOut })});
}
