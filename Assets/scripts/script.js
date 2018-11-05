
// ripple
    var rippleEffect = document.querySelectorAll('[data-ripple="true"]');

    for (var i = 0; i < rippleEffect.length; i++) {
        rippleEffect[i].addEventListener('click', function(e) {
            var eleRippleBG = window.getComputedStyle(this).getPropertyValue('background-color'),
                eleRippleColor = window.getComputedStyle(this).getPropertyValue('color'),
                rippleColor;

            if(eleRippleBG == 'rgba(0, 0, 0, 0)' || eleRippleBG == 'rgb(255, 255, 255)'){
                rippleColor = eleRippleColor
            }
            else{
                rippleColor = 'rgb(255,255,255)'
            }

            var ripple = document.createElement('div');
            ripple.className = 'ripple';

            var rect = this.getBoundingClientRect(),
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;

            //console.log(e.clientX, rect.left);
            
            ripple.style.left = x + 'px';
            ripple.style.top  = y + 'px';
            ripple.style.background = rippleColor;

            this.appendChild(ripple);

            setTimeout(function() {
                ripple.parentNode.removeChild(ripple);
            }, 900);
        });
    }

// material :: menu overlay
    var menuOverlay = document.querySelectorAll('[data-menu]');

    for (var i = 0; i < menuOverlay.length; i++){
        menuOverlay[i].addEventListener('click', function(e) {
            // get x, y, height & width values
                var rect = this.getBoundingClientRect(),
                    elx = rect.left,
                    ely = rect.top,
                    elw = this.offsetWidth,
                    elh = this.offsetHeight,

                    eltar = document.querySelector('[data-menuid=' + this.getAttribute('data-menu') + ']'),
                    menutarget = eltar.childNodes[1],
                    tarw = menutarget.offsetWidth,
                    tarh = menutarget.offsetHeight,

                    wwth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                    wht = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),

                    ely2 = 'auto';

                    // console.log(elx, ely, elw, elh);
                    // console.log(eltar, menutarget);
                    // console.log(tarw, tarh, wwth, wht);

            // prepend overlay
                var menuOverlayBackdrop = document.createElement('div');
                    menuOverlayBackdrop.className = 'ripple';
                eltar.insertBefore(menuOverlayBackdrop, menutarget);

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

            // assign target width height to overlay wrapper
                menutarget.style.top = ely + 'px';
                menutarget.style.left = elx + 'px';
                menutarget.style.bottom = ely2 + 'px';
                menutarget.style.transformOrigin = transOrigin,
                menutarget.style.maxHeight = menuHeight + 'px';

            // remove body scroll
                document.body.style.overflow = 'hidden';

            // overlay menu open animation
                eltar.classList.add('opened');
        });
    }









/*

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
            parent.insertBefore(el, parent.firstChild);
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
    */
