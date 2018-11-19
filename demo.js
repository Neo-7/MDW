var isTouchSupported = 'ontouchstart' in document.documentElement;
var startEvent = isTouchSupported ? 'touchstart' : 'mousedown';

    // navigation
        var sideNavigation = document.querySelectorAll('.sideNavigation a');

        for(i = 0; i < sideNavigation.length; i++){
            sideNavigation[i].addEventListener('click', function() {
                var navName = this.textContent,
                    navValue = this.getAttribute('data-id');

                // menu active state
                    for(var i = 0; i < sideNavigation.length; i++){
                        sideNavigation[i].classList.remove('active');
                    }

                    this.classList.add('active');

                // screen title change
                    document.getElementById('title').innerText = navName + ' - Material';

                // bind page
                    document.getElementById('SectionTitle').innerText = navName;
                    
                    // removed because no js runs inside
                    
                    // xhttp = new XMLHttpRequest();
                    // var src = 'demo/' + navValue + '.html';
                    
                    // xhttp.onreadystatechange = function () {
                    //     if (xhttp.readyState == 4 && xhttp.status == 200) {
                    //         document.getElementById('middleContent').innerHTML = xhttp.responseText;
                    //     }
                    // }
                    // xhttp.open("GET", src, true);
                    // xhttp.setRequestHeader('Content-type', 'text/html');
                    // xhttp.send();
                    
                    $('#middleContent').load('demo/' + navValue + '.html');
                        
                // mobile side nav close
                    navCtrl();
            }, false);
        }

    // page theme change
        var themeLink = document.querySelectorAll('.pageTheme a');
        var metaThemeColor = document.querySelector("meta[name=theme-color]");
        var themeLinkID = document.getElementById('themeLink');

        for(var i = 0; i < themeLink.length; i++){
            themeLink[i].addEventListener("click", function(){
                var themeID = this.getAttribute('data-theme');
                var themeColor = this.getAttribute('data-themeColor');
                //backdrop.parentNode.removeChild(backdrop);
                
                // theme active
                    for(var i = 0; i < themeLink.length; i++){
                        themeLink[i].classList.remove('active');
                    }

                    this.classList.add('active');

                // css update
                    if(themeID == 'dark'){
                        themeLinkID.setAttribute('href', '');
                    }
                    else{
                        themeLinkID.setAttribute('href', 'Assets/css/theme/theme-'+themeID+'.css');
                    }

                // update theme color
                    metaThemeColor.setAttribute("content", themeColor);

                // close menu
                    overlayClose();

                // sessionStorage
                    sessionStorage.setItem("theme", themeID);
            });
        }
        
    // navigation control
        function navCtrl(){
            var nav = document.getElementsByClassName('nav')[0].classList;
            var navBD = document.getElementsByClassName('nav-backdrop')[0].classList;

            if(nav.contains("open")){
                nav.remove('open');
                navBD.remove('navOpen');
            }
            else{
                nav.add('open');
                navBD.add('navOpen');
            }
        }

    // pagescroll
        var lastScrollTop = 0;

        function pageScroll(){
            var container = document.getElementById('container'),
                st = document.body.scrollTop || document.documentElement.scrollTop;

            if (st > lastScrollTop){
                container.classList.add('scrolled');
            } else {
                container.classList.remove('scrolled');
            }
            lastScrollTop = st;
        }

    // onpage load
        document.addEventListener('DOMContentLoaded', function() {
            var currentTheme = sessionStorage.getItem("theme");

            if(sessionStorage.getItem("theme") === null){
                // do nothing
            }
            else{
                var themeID = document.querySelector('[data-theme='+currentTheme+']');
                var themeColor = themeID.getAttribute('data-themeColor');
                
                // theme active
                    for(var i = 0; i < themeLink.length; i++){
                        themeLink[i].classList.remove('active');
                    }

                    themeID.classList.add('active');

                // css update
                    if(currentTheme == 'dark'){
                        themeLinkID.setAttribute('href', '');
                    }
                    else{
                        themeLinkID.setAttribute('href', 'Assets/css/theme/theme-'+currentTheme+'.css');
                    }

                // update theme color
                    metaThemeColor.setAttribute("content", themeColor);
            }
        });
