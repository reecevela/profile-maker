"use strict";

$(document).ready( () => {
	// display data from session storage
	$('.email').text(localStorage.getItem('email'));
	$('.phone').text(localStorage.getItem('phone'));
	$('.zip').text(localStorage.getItem('zip'));
	$('.dob').text(localStorage.getItem('dob'));

	$('#back').click( () => {
			history.back();
	});
	
}); // end of ready()