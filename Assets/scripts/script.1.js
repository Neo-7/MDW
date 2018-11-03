
jQuery(document).ready(function($){
   
});

// side navigation toggle
                function openSideNav(){
                    $('#bodyWrap').addClass('menu-opened');
                }

                function closeSideNav(){
                    $('#bodyWrap').removeClass('menu-opened');

                    $('#nav-container').removeClass('active');
                    $('#main-nav a').removeClass('active');
                }

                // side navigation menu
                $('#main-nav a').on('click', function(){
                    if($(this).hasClass('active')){
                        $('#nav-container').removeClass('active');
                        $(this).removeClass('active')
                    }
                    else{
                        $('#nav-container').addClass('active');
                        $('#main-nav a').removeClass('active');
                        $(this).addClass('active')
                    }
                });
                
            // theme toggle
                function openTheme(){
                    if($('#navMenu').hasClass('active')){
                        $('#navMenu').removeClass('active');

                        setTimeout(function() {
                            $('.NavBackdrop').addClass('active');
                            $('#themeList').addClass('active');
                        }, 300);
                    }
                    else{
                        $('.NavBackdrop').addClass('active');
                        $('#themeList').addClass('active');
                    }
                }

                // on theme select
                    $('#themeList a').on('click', function() {
                        $('#themeList a').removeClass('active');
                        $(this).addClass('active');

                        var themeName = $(this).attr('data-theme');
                        $('body').attr('data-theme', themeName);

                        closeNav();
                    });

            // open mobile menu
                function openMMenu(){
                    $('.NavBackdrop').addClass('active');
                    $('#navMenu').addClass('active');
                }

                // close Navigation & theme toggle
                    function closeNav(){
                        $('.NavBackdrop').removeClass('active');
                        $('#navMenu').removeClass('active');

                        $('#themeList').removeClass('active');
                    }

            // material input
                function checkForInput(element) {
                    const $label = $(element).siblings('label');

                    if ($(element).val().length > 0) {
                        $label.addClass('input-has-value');
                    } else {
                        $label.removeClass('input-has-value');
                    }
                }

                // The lines below are executed on page load
                $('input.mat-input').each(function() {
                    checkForInput(this);
                });

                // The lines below (inside) are executed on change & keyup
                $('input.mat-input').on('change keyup', function() {
                    checkForInput(this);  
                });
            
            // card accordion toggle
                 $('.accordionToggle').on('click', function() {
                    if($(this).parents('.card-mini').attr('data-expand') == 'true'){
                        $(this).parents('.card-mini').attr('data-expand', 'false');
                    }
                    else{
                        $(this).parents('.card-mini').attr('data-expand','true');
                    }
                });

                $('.expandAllTabs').on('click', function() {
                    if($(this).attr('data-expandAll') == 'true'){
                        $('.card-mini').attr('data-expand', 'false');
                        $(this).parents('.card-mini').attr('data-expand','true');

                        $(this).html('settings_ethernet');
                        $(this).attr('data-expandAll','false');
                    }
                    else{
                        $('.card-mini').attr('data-expand','true');
                        
                        $(this).html('view_list');
                        $(this).attr('data-expandAll','true');
                    }
                });

            // dialog
                // open dialog
                    function dialogOpen(){
                        $('#dialog').addClass('active');
                    }

                // close dialog
                    function dialogClose(){
                        $('#dialog').removeClass('active');

                        setTimeout(function() {
                            clearDialogSize();
                        }, 300);
                    }

                // remove dialog size
                    function clearDialogSize(){
                        $('.dialog-container').removeClass('dialog-380');
                        $('.dialog-container').removeClass('dialog-800');
                        $('.dialog-container').removeClass('dialog-960');

                        $('.dialog-wrapper-two').removeClass('dialog-gt-lg-wh100');
                    }

                // dialog size :: 380 - small | 800 - medium | 960 - large
                    function dialogSmall(){
                        $('.dialog-container').addClass('dialog-380');
                        dialogOpen();
                    }

                    function dialogMedium(){
                        $('.dialog-container').addClass('dialog-800');
                        $('.dialog-wrapper-two').addClass('dialog-gt-lg-wh100');

                        dialogOpen();
                    }

                    function dialogLarge(){
                        $('.dialog-container').addClass('dialog-960');
                        $('.dialog-wrapper-two').addClass('dialog-gt-lg-wh100');

                        dialogOpen();
                    }
            
            // material tab
                $('.md-tab-header li').on('click', function() {
                    $('.md-tab-header li').removeClass('active')
                    $(this).addClass('active');

                    var CurTab = $(this).attr('data-tabid');
                    var TabChild = $(this).parents('.md-tab').children('.md-tab-content').children();

                    for (i = 0; i < TabChild.length; i++) {
                        if( $(TabChild[i]).attr('data-tabid') < CurTab){
                            $(TabChild[i]).attr('data-tabstatus', 'prev');
                        }
                        else if( $(TabChild[i]).attr('data-tabid') == CurTab ){
                            $(TabChild[i]).attr('data-tabstatus', 'active');
                        }
                        else if( $(TabChild[i]).attr('data-tabid') > CurTab ){
                            $(TabChild[i]).attr('data-tabstatus', 'next');
                        }
                    }
                });
            
            // ripple effect
                $('[ripple]').on('click', function (e) {
                    var rippleDiv = $('<div class="ripple" />'),
                        rippleOffset = $(this).offset(),
                        rippleY = e.pageY - rippleOffset.top,
                        rippleX = e.pageX - rippleOffset.left,
                        ripple = $('.ripple');

                    rippleDiv.css({
                        top: rippleY - (ripple.height() / 2),
                        left: rippleX - (ripple.width() / 2),
                        //background: $(this).attr("ripple-color")
                    }).appendTo($(this));

                    window.setTimeout(function () {
                        rippleDiv.remove();
                    }, 1500);
                });


            // change logo
                $('#company a').on('click', function () {
                    if($(this).attr('data-company') == 'stfc'){
                        $("#logo").attr("src","../Assets/images/Shriram-STFC.png");

                        // close dialog
                        dialogClose();

                        // theme change
                        $('#themeList a').removeClass('active');
                        $('.themeAmber').addClass('active');
                        $('body').attr('data-theme', 'amber');
                    }
                    else{
                        $("#logo").attr("src","../Assets/images/Shriram-SCUF.png");
                    
                        // close dialog
                        dialogClose();

                        // theme change
                        $('#themeList a').removeClass('active');
                        $('.themeGreen').addClass('active');
                        $('body').attr('data-theme', 'green');
                    }
                });

            // dialog demo
                // demo :: company dialog
                    function dialogCompany(){
                        $('#company').show();
                        $('#tools').hide();

                        // open dialog
                        dialogMedium();
                    }

                // demo :: tools dialog
                    function dialogTools(){
                        $('#company').hide();
                        $('#tools').show();

                        // open dialog
                        dialogMedium();
                    }