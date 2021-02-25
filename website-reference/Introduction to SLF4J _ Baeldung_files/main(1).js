var _loadedImages = 0,
    _imageArray = new Array(
        'copy1.svg',
        'copy2.svg',
        'copy3.svg',
        'copy4.svg',
        'copy5.svg',
        'copy_EF1.svg',
        'copy_EF2.svg',
        'copy_eyebrow.svg',
        'copy_cta.svg',
        'house.svg',
        'checklist.svg',
        'usaa_logo.svg',
        'shadow_f1.png',
        'shadow_f1_1.png',
        'shadow_f2.png',
        'shadow_f3.png'
        ),
    pi1 = 'Power1.easeIn',
    po1 = 'Power1.easeOut',
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

    ipGSPA.addEventListener('load', loadDrawSVG, false);
}
function loadDrawSVG(){
      ipDrawSVG = document.createElement('script');
      ipDrawSVG.setAttribute('type', 'text/javascript');
      ipDrawSVG.setAttribute('src', 'DrawSVGPlugin.min.js');
      document.getElementsByTagName('head')[0].appendChild(ipDrawSVG);

      ipDrawSVG.addEventListener('load', initAnimations, false);
}

function initAnimations(){
    console.time('animationTotalTime')
    _tl = gsap.timeline();
    _tl

    .set(['.st0','.st1'], {drawSVG:'0%',visibility:'visible'},0)
    .set('.banner',{opacity:1}, '+=.5')
    .to('.copy1',{duration:.5,opacity:1, ease:po2})
    .to('#copy2',{duration:.5, y:34, opacity:1, ease:po2},'+=.2')
    .to('#shadow_f1_1',{duration:.5, opacity:1, ease:po2},'-=.4')
    .to('.f-01',{duration:.5,x:-350, ease:po2},'+=2.5')
    .to(['#copy3','#shadow_f2'],{duration:.5,opacity:1, ease:po2},'-=.2')
    .to(['#copy3','#shadow_f2'],{duration:.5,opacity:0, ease:po2},'+=2')
    .to(['#copy4','#shadow_f3'],{duration:.5,opacity:1, ease:po2},'-=.3')
    .to('#copy5',{duration:.5,top:2, ease:po2},'+=.2')

    .to('.f-03',{duration:.5,opacity:0, ease:po2},'+=2.5')
    .to('#usaa_logo',{duration:.6,opacity:1, scale:1,ease:po2}, '-=.4')
    .to('#copy_EF1',{duration:.6,opacity:1, ease:po2},'-=.3')
    .to('#copy_EF2',{duration:.6,opacity:1, ease:po2},'-=.3')
    .to('#cta',{duration:.8,opacity:1, ease:po2, onComplete:actionsButton},'-=.3')
     
    .call(function(){console.timeEnd('animationTotalTime')})
}
function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){ gsap.to('#cta',.5,{backgroundColor:'#f4f3f2',ease:po2})});
    _btnExit.addEventListener('mouseout', function(){ gsap.to('#cta',.5,{backgroundColor:'#fac705',ease:po2})});
}