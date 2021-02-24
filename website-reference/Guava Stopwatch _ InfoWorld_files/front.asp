var vmConsentCookieFinder = (function() {
    var CONSENT_COOKIES
        = ['euconsent', 'euconsent-v2', '_evidon_consent_cookie', 'oil_data', 'CookieInformationConsent'];

    function readCookie(cookieString, name) {
        var nameEQ = name + '=';
        var ca = (cookieString || '').split(';');

        for(var i=0; i < ca.length; i++) {
            var c = ca[i];

            while (c.charAt(0) === ' ') {
                c = c.substring(1,c.length);
            }

            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length,c.length);
            }
        }
    }

    function findConsentCookie (cookieString) {
        try {
            for (var consentCookieIdx = 0; consentCookieIdx < CONSENT_COOKIES.length; consentCookieIdx++) {
                var cookieValue = readCookie(cookieString, CONSENT_COOKIES[consentCookieIdx]);

                if (cookieValue) {
                    return {
                        consentStr: cookieValue,
                        consentType: CONSENT_COOKIES[consentCookieIdx]
                    };
                }
            }
        } catch(error) {}
    }

    return {
        readCookie: readCookie,
        findConsentCookie: findConsentCookie
    };
}());

// Export for unit tests
if (typeof module !== 'undefined' && module.exports !== null) {
    module.exports = vmConsentCookieFinder;
};
/**
 * Reload the go service with the consent parameter
 */
!function () {
    var consentObj;

    var reloadGo = function reloadGo(consentData) {
        var consentStr  = (consentData) ? consentData.consentStr : '';
        var consentType = (consentData) ? consentData.consentType : '';

        var isBaseUrl = function (url) {
            url = url.substring(url.indexOf('://') + 3);
            var nextSlash = url.indexOf('/');
            return (nextSlash === -1) || (nextSlash === (url.length - 1));
        };

        var r = window.parent.location.href;

        if ((window.self === window.top) && (!r || (r.substr(0, 4) !== 'http') || isBaseUrl(r))) {
            r = document.URL;
            console.log('Consent Reload Go: Unable to retrieve page href, using document.URL instead: ' + r);
        }

        r = encodeURIComponent(r);

        var s = document.createElement('script');
        if ('//k.intellitxt.com/go/1/?ipid=89845'.includes('&referer=')) {
            s.src = '//k.intellitxt.com/go/1/?ipid=89845&consentstr=' + consentStr + '&consenttype=' + consentType + '&script=c';
        } else {
            s.src = '//k.intellitxt.com/go/1/?ipid=89845&consentstr=' + consentStr + '&consenttype=' + consentType + '&referer=' + r + '&script=c';
        }



        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);

        if (consentData) {
            console.log('VM: ReloadGo - Found consent type: ' + (consentType || '(none)'));
        } else {
            console.log('VM: ReloadGo - Consent cookie not found, defaulting to "no consent"');
        }
    };

    var reloadGoFromCookie = function reloadGoFromCookie(consoleMessage) {
        console.log(consoleMessage + ', calling reload go from cookie');
        consentObj = vmConsentCookieFinder.findConsentCookie(document.cookie);
        reloadGo(consentObj);
    };

    if(window.__tcfapi) {
        window.__tcfapi('getTCData', 2, function getTCDataCallback (tcData, isSuccessful) {
            if(isSuccessful) {
                if (tcData.tcString) {
                    consentObj = {
                        consentStr:  tcData.tcString,
                        consentType: 'euconsent'
                    };

                    console.log('Retrieved data from TCF API, calling reload go');
                    reloadGo(consentObj);
                } else {
                    reloadGoFromCookie('Invalid TCF API response');
                }
            } else {
                reloadGoFromCookie('TCF API call failed');
            }
        });
    } else {
        reloadGoFromCookie('No available TCF API');
    }
}();
