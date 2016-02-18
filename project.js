$(document).ready(function() {
	setup();
	$(".blank").hover(function() {
		$(this).addClass('highlight');
		$(this).removeClass('blank');
	})
	
	$("#reset").click(function() {
		$(".highlight").addClass("blank");
		$('.highlight').removeClass('highlight');
	});
	
	$('#manual').click(function() {
		$('#container').empty();
		var n = prompt("Give new grid dimensions for a square");
		manual_setup(n);
		$(".blank").hover(function() {
			$(this).addClass('highlight');
			$(this).removeClass('blank');
		})
	})
	
})



/*
jQuery.fn.extend({
	setup: function() {
		alert("hello!");
	}
})
*/
function setup() {
	/*add invisible box to doc*/
	var $box = $("<div class='blank'></div>").hide().appendTo("#container");
	/*retrieve width value from said box*/
	var box_width = $box.css("width");
	box_width = parseInt(box_width);
	/*$('<div class="content" />').css('color') is a valid alternative; see if it works in ff and ie*/
	/*initialize default grid width*/
	var cols = 16;
	var total_width = box_width * cols; 
	$("#container").css("width", total_width);
	/*determine number of squares to throw into container*/
	var num_squares = cols * cols;
	for(i=0; i<num_squares; i++) {
		$("#container").append("<div class='blank'></div>");
	}
}

function manual_setup(n) {
	/*add invisible box to doc*/
	var $box = $("<div class='blank'></div>").hide().appendTo("#container");
	/*retrieve width value from said box*/
	var box_width = $box.css("width");
	box_width = parseInt(box_width);
	/*$('<div class="content" />').css('color') is a valid alternative; see if it works in ff and ie*/
	/*initialize default grid width*/
	var cols = n;
	var total_width = box_width * cols; 
	$("#container").css("width", total_width);
	/*determine number of squares to throw into container*/
	var num_squares = n * n;
	for(i=0; i<num_squares; i++) {
		$("#container").append("<div class='blank'></div>");
	}
}