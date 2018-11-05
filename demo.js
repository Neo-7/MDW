
    // navigation
        var sideNavigation = document.querySelectorAll('.sideNavigation a');

        for(var i = 0; i < sideNavigation.length; i++){
            sideNavigation[i].onclick = function() {
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
                    /*
                    xhttp = new XMLHttpRequest();
                    var src = '' + sectionTarget + '/' + navValue + '.html';
                      
                    xhttp.onreadystatechange = function () {
                        if (xhttp.readyState == 4 && xhttp.status == 200) {
                            document.getElementById('middleContent').innerHTML = xhttp.responseText;
                        }
                    }
                    xhttp.open("GET", src, true);
                    xhttp.setRequestHeader('Content-type', 'text/html');
                    xhttp.send();
                    */
                    $('#middleContent').load('demo/' + navValue + '.html');

                // mobile side nav close
                    navCtrl();
            }
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

    // page theme change
        var themeLink = document.querySelectorAll('.pageTheme a');

        for(var i = 0; i < themeLink.length; i++){
            themeLink[i].onclick = function(){
                var themeID = this.getAttribute('data-theme');
                var themeLinkID = document.getElementById('themeLink');
                //backdrop.parentNode.removeChild(backdrop);
                
                // theme active
                    for(var i = 0; i < themeLink.length; i++){
                        themeLink[i].classList.remove('active');
                    }

                    this.classList.add('active');

                // css update
                    if(themeID == 'dark'){
                        themeLinkID.setAttribute('link', '');
                    }
                    else{
                        themeLinkID.setAttribute('link', 'Assets/css/theme/theme-'+themeID+'.css');
                    }

                // close menu
                    overlayClose();
            }
        }


        /*

        $('.pageTheme a').on('click', function(){
            var themeID = $(this).attr('data-theme');

            $('.pageTheme a').classList.remove('active');
            $(this).classList.add('active')

            // bind css
                if(themeID == 'dark'){
                    $('#themeLink').remove();
                }
                else{
                    $('#themeLink').remove();
                    $('head').append('<link id="themeLink" href="Assets/css/theme/theme-'+themeID+'.css" rel="stylesheet" />');
                }
            
            overlayClose();
        });
    */



/*
    // theme section
        $('.theme').on('click', function(){
            //overlayMenuEnable($(this));
            matMenuOverlayVisible($(this));
        });

    // page theme change
        $('.pageTheme a').on('click', function(){
            var themeID = $(this).attr('data-theme');

            $('.pageTheme a').classList.remove('active');
            $(this).classList.add('active')

            // bind css
                if(themeID == 'dark'){
                    $('#themeLink').remove();
                }
                else{
                    $('#themeLink').remove();
                    $('head').append('<link id="themeLink" href="Assets/css/theme/theme-'+themeID+'.css" rel="stylesheet" />');
                }
            
            overlayClose();
        });

    // demo section
        $('body').on('click', '.demo-toggle', function(){
            var sectionContainer = $(this).parents('.demo-section');
            if($(sectionContainer).hasClass('active')){
                $(sectionContainer).classList.remove('active');
            }
            else{
                $(sectionContainer).classList.add('active');
            }
        });

    // code toggle
        $('main').on('click', '.code-toggle', function(){
            if($(this).parents('.mat-panel').attr('data-codeview') == 'true'){
                $(this).parents('.mat-panel').attr('data-codeview', 'false');
            }
            else{
                $(this).parents('.mat-panel').attr('data-codeview','true');
            }
        });
*/

