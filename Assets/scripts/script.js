
// ripple
  /*
    (function() { var cleanUp, debounce, i, len, ripple, rippleContainer, ripples, showRipple;

      debounce = function(func, delay) {
          var inDebounce;
          inDebounce = undefined;
          return function() {
              var args, context;
              context = this;
              args = arguments;
              clearTimeout(inDebounce);
              return inDebounce = setTimeout(function() {
                  return func.apply(context, args);
              }, delay);
          };
      };
      
      showRipple = function(e) {
          var pos, ripple, rippler, size, style, x, y;
          ripple = this;
          rippler = document.createElement('span');
          size = ripple.offsetWidth;
          pos = ripple.getBoundingClientRect();
          x = e.pageX - pos.left - (size / 2);
          y = e.pageY - pos.top - (size / 2);
          style = 'top:' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';
          ripple.rippleContainer.appendChild(rippler);
          return rippler.setAttribute('style', style);
      };
      
      cleanUp = function() {
          while (this.rippleContainer.firstChild) {
            this.rippleContainer.removeChild(this.rippleContainer.firstChild);
          }
      };
      
      ripples = document.querySelectorAll('[data-ripple="true"]');
      
      for (i = 0, len = ripples.length; i < len; i++) {
          ripple = ripples[i];
          rippleContainer = document.createElement('div');
          rippleContainer.className = 'ripple';
          ripple.addEventListener('mousedown', showRipple);
          ripple.addEventListener('mouseup', debounce(cleanUp, 2000));
          ripple.rippleContainer = rippleContainer;
          ripple.appendChild(rippleContainer);
      }
    }());
    */

// ripple
    var rippleSection = document.querySelectorAll('[data-ripple="true"]');

    for (var i = 0; i < rippleSection.length; i++) {
        rippleSection[i].onclick = function(e){
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
        }

    }

    
    
    /*
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
    */