$(document).ready(function() {
	$('input[name ="q"]').attr('title','custom search').attr('aria-label','G search');
        $('img:not([alt])').each(function( index ) {
            $(this).attr('alt','image'+index);
        });
        $('a[href=""]').remove();
  /***** TABS *****/
    $(".tab_content").hide();
    $("ul.tabs").each(function() {
        $(this).find('li:first').addClass("active");
        $(this).next('.tab_container').find('.tab_content:first').show();
    });
    
    $("ul.tabs li a").click(function() {
        var cTab = $(this).closest('li');
        cTab.siblings('li').removeClass("active");
        cTab.addClass("active");
        cTab.closest('ul.tabs').nextAll('.tab_container:first').find('.tab_content').hide();

        var activeTab = $(this).attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        return false;
    }); 
});

function nlsignup()
{
    if(signup_clicked == 1)
    {
        setTimeout('nlsignup()', 20000);
        signup_clicked = 0;
    }
    else if(signup_hovered == 1)
    {
        setTimeout('nlsignup()', 5000);
        signup_hovered = 0;
    }
    else
    {
        document.getElementById('nl-signup').style.display = 'none';
    }
}

function clickNlsignup()
{	
	document.getElementById('nl-signup').style.display ='inline';
}

//For greeting user after login/register
/*!
* jQuery Cookie Plugin
*/
	(function($) {
		$.cookie = function(key, value, options) {

			// key and at least value given, set cookie...
			if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
				options = $.extend({}, options);

				if (value === null || value === undefined) {
					options.expires = -1;
				}

				if (typeof options.expires === 'number') {
					var days = options.expires, t = options.expires = new Date();
					t.setDate(t.getDate() + days);
				}

				value = String(value);

				return (document.cookie = [
					encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
					options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					options.path ? '; path=' + options.path : '',
					options.domain ? '; domain=' + options.domain : '',
					options.secure ? '; secure' : ''
				].join(''));
			}

			// key and possibly options given, get cookie...
			options = value || {};
			var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

			var pairs = document.cookie.split('; ');
			for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
				if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
			}
			return null;
		};
	})(jQuery);


var userId = '';
if($.cookie('ENCRYPTED_EMAIL_COOKIE')!=null){
				userId =  decodeURIComponent($.cookie('ENCRYPTED_EMAIL_COOKIE'));
}
else if($.cookie('STAGE_ENCRYPTED_EMAIL_COOKIE')!=null && userId==''){
				userId =  decodeURIComponent($.cookie('STAGE_ENCRYPTED_EMAIL_COOKIE'));                  
}
else if($.cookie('TEST_ENCRYPTED_EMAIL_COOKIE')!=null && userId==''){
				userId =  decodeURIComponent($.cookie('TEST_ENCRYPTED_EMAIL_COOKIE'));                      
}
else if($.cookie('DEV_ENCRYPTED_EMAIL_COOKIE')!=null && userId==''){
				userId =  decodeURIComponent($.cookie('DEV_ENCRYPTED_EMAIL_COOKIE'));                       
}
else
				userId = 'undefined';

if(userId!='undefined'){
				var meta = document.createElement('meta');
				meta.name = 'DCS.dcsaut';                          
				meta.content = userId;
				document.getElementsByTagName('head')[0].appendChild(meta);        
}
		
function updateIFrame( leadformData) { //only used for ACL screens not for lead forms pages
	//console.log('leadformData height'+leadformData['height']);
	var iframe = document.getElementById( 'myframe' );   
	var containerDiv = document.getElementById('ACL_Form_Container');
	if(typeof( leadformData['height'] )!=undefined && leadformData['height'] !=0)			 
		iframe.setAttribute( 'height', leadformData['height']);
	
	welcomeUser();						 
}function recaptchaCallback(){
    $("#submit").removeAttr("disabled");
}
function recaptchaExpired(){
    $("#submit").attr("disabled","disabled");
}