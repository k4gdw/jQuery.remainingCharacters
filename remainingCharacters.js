(function ($) {
    $.fn.remainingCharacters = function (args) {
    	var target = args.target;
    	var maxChars = args.maxChars;
    	var hideTarget = args.hideTarget || false;
    	var fadeTarget;
    	var fadeSpeed;
    	if(args.fadeTarget){
    		fadeTarget = args.fadeTarget.fade || false;
    		fadeSpeed = args.fadeTarget.speed || 'fast';
    	}
    	$(target).html(maxChars + ' characters remaining.');
    	if (hideTarget){
    		$(target).hide();	
    	}
        this.keyup(function() {
            $(target).html((maxChars - this.value.length) + ' characters remaining.');
        }).keydown(function(e) {
        	if (this.value.length > (maxChars - 1)) {
				if (((e.keyCode >= 48) && (e.keyCode <= 111))
						|| ((e.keyCode >= 186) && (e.keyCode <= 222)) 
							|| e.keyCode == 32
								|| e.keyCode == 9
									|| ((e.keyCode == 13) && (this.tagName == 'TEXTAREA'))) {
						return false;
					}
				}
				return true;
        	}).focus(function(){        		
        		if (fadeTarget){
        			$(target).fadeIn(fadeSpeed);
	        	} else {
	        		$(target).show();
	        	}
        	}).blur(function(){
        		if (hideTarget){
        			if (fadeTarget){
        				$(target).fadeOut(fadeSpeed);
	        		} else {
	        			$(target).hide();
	        		}
        		}
        	});	
        return this;
	};
})( jQuery );