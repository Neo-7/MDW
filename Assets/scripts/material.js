var isTouchSupported = 'ontouchstart' in document.documentElement;
var startEvent = isTouchSupported ? 'touchstart' : 'mousedown';
var endEvent = isTouchSupported ? 'touchend' : 'mouseup';


// ripple
    document.addEventListener('DOMContentLoaded', function() {
        materialRipple();
    }, false);

    // function materialRipple(){
        // var rippleEffect = document.querySelectorAll('.ripple');

        // for (i = 0; i < rippleEffect.length; i++) {
        //     var ripState = rippleEffect[i].getAttribute('data-rs');
            
        //     if( ripState === null || ripState == 'false'){
        //         rippleEffect[i].setAttribute('data-rs', 'true');

        //         rippleEffect[i].addEventListener(startEvent, function(e) {
        //             // background color
        //                 var eleRippleBG = window.getComputedStyle(this).getPropertyValue('background-color'),
        //                     eleRippleColor = window.getComputedStyle(this).getPropertyValue('color'),
        //                     rippleColor;

        //                 if(eleRippleBG == 'rgba(0, 0, 0, 0)' || eleRippleBG == 'rgb(255, 255, 255)' || eleRippleBG == 'transparent'){
        //                     rippleColor = eleRippleColor;
        //                 }
        //                 else{
        //                     rippleColor = '#fff';
        //                 }

        //             // create ripple
        //                 var ripple = document.createElement('div');
        //                     ripple.className = 'mat-ripple';

        //             // ripple position
        //                 var rect = this.getBoundingClientRect();
        //                 if(isTouchSupported == true ){
        //                     x = e.touches[0].clientX - rect.left;
        //                     y = e.touches[0].clientY - rect.top;
        //                 }
        //                 else{
        //                     x = e.clientX - rect.left;
        //                     y = e.clientY - rect.top;
        //                 }
                        
        //                 ripple.style.left = x + 'px';
        //                 ripple.style.top  = y + 'px';
        //                 ripple.style.backgroundColor = rippleColor;

        //             // append ripple
        //                 this.appendChild(ripple);

        //             // remove ripple
        //                 setTimeout(function() {
        //                     ripple.parentNode.removeChild(ripple);
        //                 }, 1400);
        //         }, { passive: true });

        //         continue;
        //     }
        //     else{
        //         // do nothing
        //     }
        // }
    // }

    // testing
    function materialRipple(){
        Array.prototype.forEach.call(document.querySelectorAll('.ripple'), function(rel) {
            matRipple(rel);
        });
    }

    function matRipple(eleR){
        var ripState = eleR.getAttribute('data-rs'),
            eleWidth = eleR.offsetWidth,
            eleHeight = eleR.offsetHeight,
            rElemHW = 0;

        if( ripState === null || ripState == 'false'){
            // set data attr to ripple parent element
                eleR.setAttribute('data-rs', 'true');
        
            // calculate ripple height & width
                if(eleWidth >= eleHeight){
                    rElemHW = eleWidth * Math.sqrt(2);
                }
                else if( eleWidth <= eleHeight){
                    rElemHW = eleHeight * Math.sqrt(2);
                }

                console.log(eleHeight, rElemHW);
            
            // create ripple
                var ripple = document.createElement('div');
                    ripple.className = 'mat-ripple';   
                eleR.appendChild(ripple);

            // on start
                eleR.addEventListener(startEvent, function(e) {
                    // background color
                        var eleRippleBG = window.getComputedStyle(eleR).getPropertyValue('background-color'),
                            eleRippleColor = window.getComputedStyle(eleR).getPropertyValue('color'),
                            rippleColor;

                        if(eleRippleBG == 'rgba(0, 0, 0, 0)' || eleRippleBG == 'rgb(255, 255, 255)' || eleRippleBG == 'transparent'){
                            rippleColor = eleRippleColor;
                        }
                        else{
                            rippleColor = '#fff';
                        }

                    // ripple position
                        var rect = eleR.getBoundingClientRect();
                        if(isTouchSupported == true ){
                            x = rElemHW / 2 - (e.touches[0].clientX - rect.left);
                            y = rElemHW / 2 - (e.touches[0].clientY - rect.top);
                        }
                        else{
                            x = rElemHW / 2 - (e.clientX - rect.left);
                            y = rElemHW / 2 - (e.clientY - rect.top);
                        }
                        
                        ripple.style.height = rElemHW + 'px';
                        ripple.style.width  = rElemHW + 'px';
                        ripple.style.left = -x + 'px';
                        ripple.style.top  = -y + 'px';
                        ripple.style.backgroundColor = rippleColor;
                        ripple.classList.add('expanded');
                }, { passive: true });

            // on end
                eleR.addEventListener(endEvent, function(e) {
                    setTimeout(function(){
                        ripple.classList.remove('expanded');
                    }, 500);
                }, { passive: true });
        }
        else{
            // do nothing
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
                menutarget = eltar.querySelector('.mat-menu'),
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
            menutarget.style.paddingTop = '8px';
            menutarget.style.paddingBottom = '8px';
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

        if(eltar !== null){
            bstarget = eltar.querySelector('.mat-bottomsheet');

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
        else{
            // do nothing
        }
    }

// material :: dialog
    function dialog(thisTarget){
        var eltar = document.querySelector('[data-dialogid=' + thisTarget.getAttribute('data-dialog') + ']'),
            dialogTarget = eltar.querySelector('.mat-dialog');
            dialogScrollContent = eltar.querySelector('.dialog-content');
            dialogOverlayPref = eltar.getAttribute('data-overlaytype');

        // calculate height
            if(dialogScrollContent.scrollHeight > dialogScrollContent.clientHeight){
                dialogScrollContent.setAttribute('data-dialogscroll', 'true');
            }
            else{
                dialogScrollContent.setAttribute('data-dialogscroll', 'false');
            }
            

        // prepend overlay
            var dialogOverlayBackdrop = document.createElement('div');
                dialogOverlayBackdrop.className = 'hw100 fixed tl overlay-backdrop';
                

            eltar.insertBefore(dialogOverlayBackdrop, dialogTarget);

        // enable | disable overlay
            if( dialogOverlayPref != 'disabled'){
                enableOverlayClose();
            }
            else{
                // do nothing
            }
        
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
            tabContainer = tab.querySelector('.mat-tab-container'),
            tabChild = tabContainer.children;

        // tab change
            var i;
            var l = tabChild.length;
            
            for (i = 0; i < l; i++) {
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
            panelList = panelContainer.querySelectorAll('.mat-panel'),
            panelContent = thisTarget.parentNode.nextElementSibling,
            panelWrapper = panelContent.querySelector('.panel-inner-wrapper');

        if( panelType == 'dependent'){
            if(thisPanel == 'expanded'){
                thisTarget.parentNode.parentNode.setAttribute('data-panelstatus', 'condensed');
                panelContent.style.height = 0 + "px";
            }
            else{
                for( var i = 0; i < panelList.length; i++){
                    panelList[i].setAttribute('data-panelstatus', 'condensed');
                    panelList[i].querySelector('.panel-content').style.height = 0 + "px";
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



