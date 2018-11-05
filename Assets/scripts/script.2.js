
// material :: menu overlay
    function matMenuOverlayVisible(thisTarget){
        // get x, y, height & width values
        elx = thisTarget.position().left;
        ely = thisTarget.position().top;
        elw = thisTarget.width();
        elh = thisTarget.height();

        eltar = $('[data-menuid=' + thisTarget.attr('data-menu') + ']');
        menutarget = eltar.children('.mat-menu');
        tarw = menutarget.width();
        tarh = menutarget.height();

        wwth = $(window).width();
        wht = $(window).height();

        ely2 = 'auto';

        // console.log(elx,ely,elw,elh,eltar,tarw,tarh,wwth,wht);
        
        // change menu position based on height and width
            if( elx + tarw <= wwth &&  wht - ely >= wht / 2 ){
                menuHeight = wht - ely - 16;
                transOrigin = 'top left';
            }
            else if ( elx + tarw >= wwth && wht - ely >= wht / 2){
                menuHeight = wht - ely - 16;
                elx = elx - tarw + elw;
                transOrigin = 'top right';
            }
            else if( elx + tarw >= wwth && wht - ely <= wht / 2 ){
                elx = elx - tarw + elw;
                ely2 = wht - ely - elh;
                menuHeight = wht - ely2 - 16;
                ely = 'auto'
                
                transOrigin = 'bottom right';
            }
            else if ( ely + tarh >= wht && wht - ely <= wht / 2 ){
                ely2 = wht - ely - elh;
                menuHeight = wht - ely2 - 16;
                ely = 'auto'

                transOrigin = 'bottom left';
            }

        // append overlay backdrop
            $(eltar).prepend('<div class="hw100 fixed tl overlay-backdrop backdrop-nocolor"></div>');

        // assign target width height to overlay wrapper
            $(menutarget).css({
                top: ely,
                left: elx,
                bottom: ely2,
                'transform-origin': transOrigin,
                'max-height': menuHeight
            })

        // remove body scroll
            $('body').css({overflow: 'hidden'})

        // overlay menu open animation
            $(eltar).addClass('opened');
    }
    
    /* alternative to menu backdrop and body onclick
    $('.function').on('click', function(e){
        e.stopPropagation();

        // open here
        
        $(document.body).on('click.menuHide', function(){
            var $body = $(this);

            // close here

            $body.off('click.menuHide');
        });
    });
    */

// material :: bottom sheet
    function bottomsheetEnable(thisTarget){
        eltar = $('[data-bottomsheetid=' + thisTarget.attr('data-bottomsheet') + ']');

        $(eltar).prepend('<div class="hw100 fixed tl overlay-backdrop"></div>');

        // remove body scroll
            $('body').css({overflow: 'hidden'})

        // overlay menu open animation
            $(eltar).addClass('opened');
    }

// material :: dialog
    function dialogEnable(thisTarget){
        eltar = $('[data-dialogid=' + thisTarget.attr('data-dialog') + ']');

        $(eltar).prepend('<div class="hw100 fixed tl overlay-backdrop"></div>');

        // remove body scroll
            $('body').css({overflow: 'hidden'})

        // overlay menu open animation
            $(eltar).addClass('opened');
    }

// material :: overlay close
    // on backdrop click
        $('body').on('click', '.overlay-backdrop', function(){
            $(this).parent().removeClass('opened');
            $('body').css({overflow: 'auto'})
            
            setTimeout(function() {
                $('.overlay-backdrop').siblings().removeAttr('style data-dir');
                $('.overlay-backdrop').remove();
            }, 300);
        });

    // by passed function
        function overlayClose(){
            $('.mat-overlay.opened').removeClass('opened');
            $('body').css({overflow: 'auto'})
            
            setTimeout(function() {
                $('.mat-overlay').children().removeAttr('style');
                $('.mat-overlay .overlay-backdrop').remove();
            }, 300);
        }

// material :: button toggle
    function matButtonToggle($element){
        var toggleParent = $element.parent();

        if(toggleParent.attr('data-type') == 'independent'){
            $element.toggleClass('toggle-active');
        }
        else{
            toggleParent.children().removeClass('toggle-active');
            $element.addClass('toggle-active');
        }
    }

// material :: input
    function checkForInput(thisTarget) {
        const $label = $(thisTarget).siblings('label');

        if ($(thisTarget).val().length > 0) {
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


// material :: select 
    function checkForSelect(thisTarget) {
        const $label = $(thisTarget).siblings('label');

        if ( $(thisTarget).children(":selected").val() === "" ){
            $label.removeClass('input-has-value');
        }
        else{
            $label.addClass('input-has-value');
            //console.log($(thisTarget).val());
        }
    }

    // The lines below are executed on page load
    $('select.mat-select').each(function() {
        checkForSelect(this);
    });

    $('select.mat-select').on('change keyup', function() {
        checkForSelect(this);  
    });

    // reset button
    $('body').on('click', 'button[type="reset"]', function() {
        window.setTimeout(function () {
            $('input.mat-input').trigger('change');
            $('select.mat-select').trigger('change');
        }, 100);
    });

// material :: tab
    function tabNavigation(thisTarget){
        $(thisTarget).siblings().removeClass('active');
        $(thisTarget).addClass('active');

        var CurTab = $(thisTarget).attr('data-tabid');
        var TabChild = $(thisTarget).parents('.mat-tab').children('.mat-tab-container').children();

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
    }

// material panel
    // toggle single panel
        $('body').on('click', '.accordionToggle', function (e) {
            var matPanel = $(this).parents('.mat-panel');

            if($(matPanel).attr('data-expand') == 'true'){
                $(matPanel).attr('data-expand', 'false');
            }
            else{
                $(matPanel).attr('data-expand', 'true');
            }
        });

    // toggle all panel
        $('body').on('click', '.expandAllTabs', function (e) {
            if($(this).attr('data-expandAll') == 'true'){
                $('.mat-panel').attr('data-expand', 'false');
                $(this).parents('.mat-panel').attr('data-expand','true');

                $(this).html('settings_ethernet');
                $(this).attr('data-expandAll','false');
            }
            else{
                $('.mat-panel').attr('data-expand','true');
                
                $(this).html('view_list');
                $(this).attr('data-expandAll','true');
            }
        });

// ripple
    //$('[ripple]').on('click', function (e)
    $('body').on('click', '[data-ripple="true"]', function (e) {
        var eleRippleBG = $(this).css('background-color');
        var eleRippleColor = $(this).css('color');
        var rippleColor;
    
        //console.log(eleRipple);
        if(eleRippleBG == 'rgba(0, 0, 0, 0)' || eleRippleBG == 'rgb(255, 255, 255)'){
            rippleColor = eleRippleColor
        }
        else{
            rippleColor = 'rgb(255,255,255)'
        }

        var rippleDiv = $('<div class="ripple" />'),
            rippleOffset = $(this).offset(),
            rippleY = e.pageY - rippleOffset.top,
            rippleX = e.pageX - rippleOffset.left,
            ripple = $('.ripple');

        rippleDiv.css({
            top: rippleY - (ripple.height() / 2),
            left: rippleX - (ripple.width() / 2),
            background: rippleColor
        }).appendTo($(this));

        window.setTimeout(function () {
            rippleDiv.remove();
        }, 1500);
    });