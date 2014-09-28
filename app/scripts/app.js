define(['jquery','key-layouts/layouts'], function($, Layouts) {
	'use strict';
console.log(Layouts);
var App = {

	/* bubble object */
	bubble: function (c) {
	    this.y = 0;
	    this.x = Math.random();
	    this.id = c + Math.floor(Math.random() * 10000);

	    var div = document.createElement("div");
	    div.className = 'circle bubble';

	    var letter = document.createElement("span");
	    letter.className = 'letter';

	    var char = document.createTextNode(c);
	    letter.appendChild(char);

	    div.appendChild(letter);
	    div.id = this.id;

	    this.div = div;

	    this.moveUp = function (timeToGoUp) {
	        $('#'+this.id).animate({top:"+=-300px"}, timeToGoUp);
	    };

	    return this;
	},

	start : function() {
	    var layout = Layouts.getLayout('qwerty');
	    console.log(layout);
	    var row = layout.top_left;
	    var prev_left = 10;
	    for (var l in row) {
	        var bubble = new this.bubble(row[l]);
	        console.log(bubble.id);
	        $('#bubbles').append(bubble.div);
	        var jQBubble = $('#' + bubble.id);
	        var left = jQBubble.offset().left;
	        var top = jQBubble.offset().top;
	        console.log(top+":"+left+":"+prev_left);
	        //jQBubble.offset( {top: top, left : left + prev_left + 30 });
	        //jQBubble.animate({top:"+=-300px"}, 5000);
	        bubble.moveUp(5000);
	        prev_left = left;
	    }
	}
}

return App;

});