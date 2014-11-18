$(document).ready(function() {
	/* Append each number (or its substitute) to DOM body element*/

	/* global variable declarations */
	var counter = 1

	/* Code to run */
	$('#button').on('click', function() {
		for (counter; counter <= 100; counter++) {
			if (counter % 5 == 0 && counter % 3 == 0) {
				console.log("fizzbuzz");
				$('#body').append('<p>' + 'fizzbuzz' + '</p>');
			} else if (counter % 5 == 0 && counter % 3 != 0) {
				console.log("buzz");
				$('#body').append('<p>' + 'buzz' + '</p>');
			} else if (counter % 3 == 0 && counter % 5 != 0) {
				console.log("fizz");
				$('#body').append('<p>' + 'fizz' + '</p>');
			} else if (counter % 5 != 0 && counter % 3 != 0) {
				console.log(counter);
				$('#body').append('<p>' + counter + '</p>');
			}
		}	
	})
})