/* Replace #discussion_reference# by the unique identifer of the page */
var splitPath = window.location.pathname.split( '/' );
if(splitPath.length >= 3 && splitPath[2] != ""){ //Bypass all pages except Article page
    var discussion_reference = blurbKey;
    var _oneall = _oneall || [];
    _oneall.push(['loudvoice', 'set_providers', ['facebook', 'twitter', 'google','linkedin']]);
    _oneall.push(['loudvoice', 'set_page', document.title, window.location.href]);
    _oneall.push(['loudvoice', 'set_reference', discussion_reference]);
    _oneall.push(['loudvoice', 'do_render_ui', 'article-comments']);
}