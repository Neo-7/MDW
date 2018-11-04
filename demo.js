/*
jQuery(document).ready(function($){
   
});

$(document).ready(function() {
    //$('main').load('about.html');
});
*/

    // navigation
        $('.sideNavigation a').on('click', function(){
            var sectionTarget = $(this).parents('.sideNavigation').attr('data-navsection');

            var navName = $(this).text();
            var navValue = $(this).attr('data-id');
            
            $('#SectionTitle').html(navName);

            $('#middleContent').load('' + sectionTarget + '/' + navValue + '.html');

            $('.sideNavigation a').removeClass('active');
            $(this).addClass('active');

            // title change
            $('title').html(navName + ' - Material')

            navCtrl();
        });
        
        $('.nav-control').on('click', function(){
            navCtrl();
        });

        function navCtrl(){
            if($('.nav').hasClass('open')){
                $('.nav').removeClass('open');
                $('.nav-backdrop').removeClass('navOpen');
            }
            else{
                $('.nav').addClass('open');
                $('.nav-backdrop').addClass('navOpen');
            }
        }

    // page on scroll
        var lastScrollTop = 0;
        $(window).scroll(function(event){
            var st = $(this).scrollTop();

            if (st > lastScrollTop){
                $('#container').addClass('scrolled');
            } else {
                $('#container').removeClass('scrolled');
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

            $('.pageTheme a').removeClass('active');
            $(this).addClass('active')

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
                $(sectionContainer).removeClass('active');
            }
            else{
                $(sectionContainer).addClass('active');
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


