    window.fbAsyncInit = function () {
        FB.init({
            appId: '345980885930256',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v3.0'
        });

        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    function statusChangeCallback(response) {
        if (response.status === "connected") {
            console.log("Logged in. :)");
            setElements(true);
            graphAPI();
        } else {
            console.log("Not logged in. :(");
            setElements(false);
        }
    }

    //Call Login 
    function fb_login() {
        FB.login(function (response) {
            statusChangeCallback(response);
        }, {
            scope: 'email,public_profile'
        });
    }

    //Set Buttons none/block
    function setElements(isLoggedIn) {
        if (isLoggedIn) {
            document.getElementById('fb-btn').style.display = 'none';
            document.getElementById('logout').style.display = 'block';
            document.getElementById('name').style.marginTop = '0';
        } else {
            document.getElementById('fb-btn').style.display = 'block';
            document.getElementById('logout').style.display = 'none';
            document.getElementById('name').innerHTML = "Please log in.";
            document.getElementById('name').style.marginTop = '13px';
            document.getElementById('mail').innerHTML = "";
            document.getElementById('userImage').src = "";
        }
    }

    //Logout
    function logout() {
        FB.logout(function (response) {
            setElements(false);
        });
    }

    //Get Info from User
    function graphAPI() {
        FB.api("me?fields=id,name,email,picture", function (response) {
            if (response && !response.error) {
                console.log(response);
                document.getElementById('name').innerHTML = response.name;
                document.getElementById('mail').innerHTML = response.email;
                document.getElementById('userImage').src = response.picture.data.url;
            }
        });
    }