
// ripple
    var rippleSection = document.querySelectorAll('[data-ripple="true"]');

    for (var i = 0; i < rippleSection.length; i++) {
        rippleSection[i].addEventListener('click', function(e){
            var eleRippleBG = window.getComputedStyle(this).getPropertyValue("background-color");
            var eleRippleColor = window.getComputedStyle(this).getPropertyValue("color");
            var rippleColor;

            if(eleRippleBG == 'rgba(0, 0, 0, 0)' || eleRippleBG == 'rgb(255, 255, 255)'){
                rippleColor = eleRippleColor
            }
            else{
                rippleColor = 'rgb(255,255,255)'
            }

            let rippleY = e.pageY - this.offsetTop;
            let rippleX = e.pageX - this.offsetLeft;
            let rippleDiv = document.createElement("div");
            rippleDiv.className = 'ripple';

            rippleDiv.setAttribute(
                "style",
                "top:"
                +rippleY - (rippleDiv.offsetHeight / 2)+"px; left:"
                +rippleX - (rippleDiv.offsetWidth / 2)+"px; background:"+rippleColor+";"
            );

            this.appendChild(rippleDiv);

            setTimeout(function () {
                rippleDiv.parentElement.removeChild(rippleDiv);
            }, 1500);
        });
    }
