
// ripple
    document.addEventListener('DOMContentLoaded', function() {
        //materialRipple();
    }, false);

    function materialRipple(){
        var rippleEffect = document.querySelectorAll('[data-ripple="true"]');

        for (let i = 0; i < rippleEffect.length; i++) {
            rippleEffect[i].addEventListener('click', function(e) {
                // background color
                    var eleRippleBG = window.getComputedStyle(this).getPropertyValue('background-color'),
                        eleRippleColor = window.getComputedStyle(this).getPropertyValue('color'),
                        rippleColor;

                    if(eleRippleBG == 'rgba(0, 0, 0, 0)' || eleRippleBG == 'rgb(255, 255, 255)'){
                        rippleColor = eleRippleColor;
                    }
                    else{
                        rippleColor = 'rgba(255,255,255)';
                    }

                // create ripple
                    var ripple = document.createElement('div');
                        ripple.className = 'ripple';

                // ripple position
                    var rect = this.getBoundingClientRect(),
                        x = e.clientX - rect.left;
                        y = e.clientY - rect.top;
                    
                    ripple.style.left = x + 'px';
                    ripple.style.top  = y + 'px';
                    ripple.style.backgroundColor = rippleColor;

                // append ripple
                    this.appendChild(ripple);

                // remove ripple
                    setTimeout(function() {
                        ripple.parentNode.removeChild(ripple);
                    }, 1400);
            }, false);
        }
    }

// material :: menu overlay
    function menu(thisTarget){
        // get x, y, height & width values
            var rect = thisTarget.getBoundingClientRect(),
                elx = rect.left,
                ely = rect.top,
                elw = thisTarget.offsetWidth,
                elh = thisTarget.offsetHeight,

                eltar = document.querySelector('[data-menuid=' + thisTarget.getAttribute('data-menu') + ']'),
                menutarget = eltar.children[0],
                tarw = menutarget.offsetWidth,
                tarh = menutarget.offsetHeight,

                wwth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                wht = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),

                ely2 = 'auto';

        // prepend overlay
            var menuOverlayBackdrop = document.createElement('div');
                menuOverlayBackdrop.className = 'hw100 fixed tl overlay-backdrop backdrop-nocolor';
            eltar.insertBefore(menuOverlayBackdrop, menutarget);
            enableOverlayClose();

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
            menutarget.style.transformOrigin = transOrigin;
            menutarget.style.maxHeight = menuHeight + 'px';

        // remove body scroll
            document.body.style.overflow = 'hidden';

        // overlay menu open animation
            eltar.classList.add('opened');
    }

// material :: bottom sheet
    function bottomSheet(thisTarget){
        eltar = document.querySelector('[data-bottomsheetid=' + thisTarget.getAttribute('data-bottomsheet') + ']');
        bstarget = eltar.children[0];

        // prepend overlay
            var bsOverlayBackdrop = document.createElement('div');
                bsOverlayBackdrop.className = 'hw100 fixed tl overlay-backdrop';

            eltar.insertBefore(bsOverlayBackdrop, bstarget);
            enableOverlayClose();
        
        // remove body scroll
            document.body.style.overflow = 'hidden';

        // overlay menu open animation
            eltar.classList.add('opened');
    }

// material :: overlay close
    // on backdrop click
        function enableOverlayClose(){
            document.querySelector('.overlay-backdrop').addEventListener('click', function(e){
                var backdrop = document.querySelector('.overlay-backdrop');

                this.parentNode.classList.remove('opened');
                document.body.style.overflow = '';

                setTimeout(function(){
                    backdrop.nextElementSibling.removeAttribute('style');
                    backdrop.parentNode.removeChild(backdrop);
                }, 300);
            });
        }
    
    // by passed function
        function overlayClose(){
            document.querySelector('.mat-overlay.opened').classList.remove('opened');
            document.body.style.overflow = '';

            setTimeout(function(){
                var backdrop = document.querySelector('.overlay-backdrop');
                
                backdrop.nextElementSibling.removeAttribute('style');
                backdrop.parentNode.removeChild(backdrop);
            }, 300);
        }
        
// material :: tab
    function tabNavigation(thisTarget){
        var tab = thisTarget.parentNode.parentNode.parentNode.parentNode,
            curTab = thisTarget.value,
            tabContainer = tab.children[1],
            tabChild = tabContainer.children;

        // tab change
            for (i = 0; i < tabChild.length; i++) {
                if( tabChild[i].getAttribute('data-tabid') < curTab){
                    tabChild[i].setAttribute('data-tabstatus', 'prev');
                }
                else if( tabChild[i].getAttribute('data-tabid') == curTab ){
                    tabChild[i].setAttribute('data-tabstatus', 'active');
                }
                else if( tabChild[i].getAttribute('data-tabid') > curTab ){
                    tabChild[i].setAttribute('data-tabstatus', 'next');
                }
            }
    }

// material :: expansion panel
    function panelNavigation(thisTarget){
        var panelContainer = thisTarget.parentNode.parentNode.parentNode,
            thisPanel = thisTarget.parentNode.parentNode.getAttribute('data-panelstatus'),
            panelType = panelContainer.getAttribute('data-paneltype'),
            panelList = panelContainer.children,
            panelContent = thisTarget.parentNode.nextElementSibling,
            panelWrapper = panelContent.children[0];

        if( panelType == 'dependent'){
            if(thisPanel == 'expanded'){
                thisTarget.parentNode.parentNode.setAttribute('data-panelstatus', 'condensed');
                panelContent.style.height = 0 + "px";
            }
            else{
                for( var i = 0; i < panelList.length; i++){
                    panelList[i].setAttribute('data-panelstatus', 'condensed');
                    panelList[i].children[1].style.height = 0 + "px";
                    thisTarget.parentNode.parentNode.setAttribute('data-panelstatus', 'expanded');
                    panelContent.style.height = panelWrapper.clientHeight + "px";
                }
            }
        }
        else if( panelType == 'independent'){
            if(thisPanel == 'expanded'){
                thisTarget.parentNode.parentNode.setAttribute('data-panelstatus', 'condensed');
                panelContent.style.height = 0 + "px";
            }
            else{
                thisTarget.parentNode.parentNode.setAttribute('data-panelstatus', 'expanded');
                panelContent.style.height = panelWrapper.clientHeight + "px";
            }
        }

    }


