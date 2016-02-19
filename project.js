$(document).ready(function() {
	setup();
	
	$("#reset").click(function() {
		$(".highlight").addClass("blank");
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
	enableHighlighting();

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
	$(".blank").hover(function() {
		$(this).addClass('highlight');
		$(this).removeClass('blank');
	})
}