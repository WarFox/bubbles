define([], function() {
	'use strict';
	var Layouts =  {

		/* Layout object */
		layout : function (layout) {
		    this.top_left = layout.top.left;
		    this.top_right = layout.top.right;
		    this.home_left = layout.home.left;
		    this.home_right = layout.home.right;
		    this.bottom_left = layout.bottom.left;
		    this.bottom_right = layout.bottom.right;
		},
		layouts: ['qwerty', 'dvorak'],

		getLayout: function(layout) {
			require(['key-layouts/qwerty'], function(qwerty) {
				console.log('loaded usisg require');
				console.log(qwerty);
				return new _self.layout(qwerty);
			});

		}
	};

	return Layouts;

});