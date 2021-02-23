const messaging = firebase.messaging();
messaging.usePublicVapidKey('BBNAshlY62xa3rm7O8mHkwr30erXL8yQdkJiPqqP5bkSWxOgwV6Ow5Z3yba2j1nM6NsA3uhxlMg_iAa0M_N1Q4c');

function sendTokenToServer(currentToken) {
    $.ajax({
        url: '/api/fcm/subscribe',
        type: 'POST',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
        },
        contentType: "application/json",
        dataType: "json",
        data:  JSON.stringify ({
            token: currentToken,
            offset: getTimeOffSet()
        }),
        success: function (response) {
            setTokenSentToServer(true)
            //TODO: Change its location
            // alert('You are successfully subscribed to topic');
        }
    });
}

function getTimeOffSet() {
    let d = new Date();
    return d.getTimezoneOffset();
}

function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') === '1';
}

function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
}

function requestPermission() {
    messaging.requestPermission()
        .then(function () {
            console.log('Notification permission granted.');
            messaging.getToken()
                .then(function (currentToken) {
                    console.log('Token is: ' + currentToken);
                    if (currentToken) {
                        if (!isTokenSentToServer()) {
                            console.log("FCM Token not sent to server, sending it now.");
                            sendTokenToServer(currentToken);
                        } else {
                            console.log("FCM Token already sent to server, not sending it again.");
                        }
//                                        updateUIForPushEnabled(currentToken);
                    } else {
                        // Show permission request.
                        console.log('No Instance ID token available. Request permission to generate one.');
                        // Show permission UI.
                        setTokenSentToServer(false);
                        // updateUIForPushPermissionRequired();
                    }
                })
                .catch(function (err) {
                    console.log('An error occurred while retrieving token. ', err);
                    setTokenSentToServer(false);
                });

        })
        .catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });
}

messaging.onTokenRefresh(function () {
    messaging.getToken()
        .then(function (refreshedToken) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent to the
            // app server.
            setTokenSentToServer(false);
            // Send Instance ID token to app server.
            sendTokenToServer(refreshedToken);
            // ...
        })
        .catch(function (err) {
            console.log('Unable to retrieve refreshed token ', err);
            // showToken('Unable to retrieve refreshed token ', err);
        });
});

/*messaging.onMessage((payload) => {
    console.log('FCM Message received. ', payload);
    // ...
});*/

$(document).ready(function () {
    requestPermission();
});