
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

    // demo try
        var demotoggle = document.querySelectorAll('.demo-toggle');
        for(var i = 0; i < demotoggle.length; i++){
            demotoggle[i].onclick = function(){
                alert('hi');
            }
        }
        

        // $('body').on('click', '.demo-toggle', function(){
        //     var sectionContainer = $(this).parents('.demo-section');
        //     if($(sectionContainer).hasClass('active')){
        //         $(sectionContainer).classList.remove('active');
        //     }
        //     else{
        //         $(sectionContainer).classList.add('active');
        //     }
        // });


/*
    // navigation
        $('.sideNavigation a').on('click', function(){
            var sectionTarget = $(this).parents('.sideNavigation').attr('data-navsection');

            var navName = $(this).text();
            var navValue = $(this).attr('data-id');
            
            $('#SectionTitle').html(navName);

            $('#middleContent').load('' + sectionTarget + '/' + navValue + '.html');

            $('.sideNavigation a').classList.remove('active');
            $(this).classList.add('active');

            // title change
            $('title').html(navName + ' - Material')

            navCtrl();
        });
        
        $('.nav-control').on('click', function(){
            navCtrl();
        });

        function navCtrl(){
            if($('.nav').hasClass('open')){
                $('.nav').classList.remove('open');
                $('.nav-backdrop').classList.remove('navOpen');
            }
            else{
                $('.nav').classList.add('open');
                $('.nav-backdrop').classList.add('navOpen');
            }
        }

    // page on scroll
        var lastScrollTop = 0;
        $(window).scroll(function(event){
            var st = $(this).scrollTop();

            if (st > lastScrollTop){
                $('#container').classList.add('scrolled');
            } else {
                $('#container').classList.remove('scrolled');
            }
            lastScrollTop = st;
        });

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

