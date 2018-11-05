
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

            // var viewportOffset = this.getBoundingClientRect();
            // var top = viewportOffset.top;
            // var left = viewportOffset.left;

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
