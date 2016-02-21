$(document).ready(function() {
	setup();
	
	$("#reset").click(function() {
		$('div').css('background-color', '');
		$(".highlight").addClass("blank");
		$('.highlight').removeClass('funk');
		$('.highlight').removeClass('highlight');
	});
	
	$('#manual').click(function() {
		var n = prompt("Give new grid dimensions for a square");
		if(n>=1) {
			manual_setup(n);
		} else {
			alert("gimme a natural number, fam");
		};
	});

	$('#funk').click(function() {
		$('div').unbind('mouseenter').unbind('mouseleave');
		enableRandomHighlighting();
	});
});


function setup() {
	var cols = 16;
	var $box = $("<div class='blank'></div>").hide().appendTo("#container");
	var total_width = cols * parseInt($box.css("width")); //PX
	// alert(total_width);
	$("#container").css("width", total_width);
	var num_squares = cols * cols;
	// alert(num_squares);
	for(i=0; i<num_squares; i++) {
		$('#container').append("<div class='blank'></div>");
	}
	enableHighlighting()

}

function manual_setup(n) {
	$("#container").empty();
	var cols = 16;
	var $box = $("<div class='blank'></div>").hide().appendTo("#container");
	// Assign constant width of #container - never changes
	var total_width = cols * parseInt($box.css("width")); //PX
	$("#container").css("width", total_width);
	// determine new width of every box based on n that fits
	// in constant total_width
	cols = n;
	var new_box_width = total_width / cols;
	var num_squares = cols * cols;
	for(i=0; i<num_squares; i++) {
		$('#container').append("<div class='blank'></div>");
	}
	// Change dimensions of every square
	$('.blank').css('width', new_box_width + "px");
	$('.blank').css('height', new_box_width + "px");
	enableHighlighting();
}


function enableHighlighting() {
	$(".blank").mouseenter(function() {
		$(this).addClass('highlight');
		$(this).removeClass('blank');
	});
}

function enableRandomHighlighting() {
	$(".blank").mouseenter(function() {
		var r1 = Math.floor(Math.random() * 255);
		var r2 = Math.floor(Math.random() * 255);
		var r3 = Math.floor(Math.random() * 255);
		$(this).addClass('highlight'); // rgb(0,0,0);
		$(this).addClass('funk');
		if($(this).hasClass('blank')) {
			$(this).css("background-color", 'rgb(' + r1 + ',' + r2 + ',' + r3 + ')');
		} else if($(this).hasClass('funk')) {
			$(this).darken(10);
		}
		$(this).removeClass('blank');
	});

}

jQuery.fn.darken = function(options) {

	var settings = {
		'percent'	: 15
	};
	
	if ( options ) { 
		$.extend( settings, options );
	}

	$(this).each(function() {
		var darkenPercent = settings.percent;
		var rgb = $(this).css('background-color').replace('rgb(', '').replace(')', '').split(',');
		var red = $.trim(rgb[0]);
		var green = $.trim(rgb[1]);
		var blue = $.trim(rgb[2]);
				
		red = parseInt(red * (100 - darkenPercent) / 100);
		green = parseInt(green * (100 - darkenPercent) / 100);
		blue = parseInt(blue * (100 - darkenPercent) / 100);
		
		rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
		$(this).css('background-color', rgb);
	});
	return this;
}