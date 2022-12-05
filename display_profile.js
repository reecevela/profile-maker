"use strict";

$(document).ready( () => {
	// display data from session storage
	$('#email').text(sessionStorage.getItem('email'));
	$('#phone').text(sessionStorage.getItem('phone'));
	$('#zip').text(sessionStorage.getItem('zip'));
	$('#dob').text(sessionStorage.getItem('dob'));

	$('#back').click( () => {
			history.back();
	});
	
}); // end of ready()
