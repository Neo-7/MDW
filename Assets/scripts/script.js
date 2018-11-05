
// ripple
    var rippleEffect = document.querySelectorAll('[data-ripple="true"]');

    for (var i = 0; i < rippleEffect.length; i++) {
        rippleEffect[i].click = function(e) {

            var x = e.pageX - this.offsetLeft,
                y = e.pageY - this.offsetTop,
                w = this.offsetWidth;
            
            var ripple = document.createElement('span');
            
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top  = y + 'px';
            ripple.style.setProperty('--scale', w);

            this.appendChild(ripple);

            setTimeout(function() {
            ripple.parentNode.removeChild(ripple);
            }, 500);
        }
    }

    //$('[ripple]').on('click', function (e)
    // $('body').on('click', '[data-ripple="true"]', function (e) {
    //     var eleRippleBG = $(this).css('background-color');
    //     var eleRippleColor = $(this).css('color');
    //     var rippleColor;
    
    //     //console.log(eleRipple);
    //     if(eleRippleBG == 'rgba(0, 0, 0, 0)' || eleRippleBG == 'rgb(255, 255, 255)'){
    //         rippleColor = eleRippleColor
    //     }
    //     else{
    //         rippleColor = 'rgb(255,255,255)'
    //     }

    //     var rippleDiv = $('<div class="ripple" />'),
    //         rippleOffset = $(this).offset(),
    //         rippleY = e.pageY - rippleOffset.top,
    //         rippleX = e.pageX - rippleOffset.left,
    //         ripple = $('.ripple');

    //     rippleDiv.css({
    //         top: rippleY - (ripple.height() / 2),
    //         left: rippleX - (ripple.width() / 2),
    //         background: rippleColor
    //     }).appendTo($(this));

    //     window.setTimeout(function () {
    //         rippleDiv.remove();
    //     }, 1500);
    // });