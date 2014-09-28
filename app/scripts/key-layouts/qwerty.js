
	/* The QWERTY layout */
define([], function() {

	var qwerty = {
	    top: {
	        left: ['q', 'w', 'e', 'r', 't'],
	        right: ['y', 'u', 'i', 'o', 'p', '[', ']']
	    },
	    home: {
	        left: ['a', 's', 'd', 'f', 'g'],
	        right: ['h', 'j', 'k', 'l', ';', "'"]
	    },
	    bottom: {
	        left: ['z', 'x', 'c', 'v', 'b'],
	        right: ['n', 'm', ',', '.', '/']
	    }
	};

	return qwerty;

});
