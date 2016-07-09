$(document).ready(function () {

 	/*
		Submit search form
	 */

 	$("#app-body").find('form').submit(function (ev) {
 		
 		ev.preventDefault()
 		var query = $(this).find('input[type=text]').val()

 	})

 	$.ajax({
 		url: 'http://api.tvmaze.com/shows',
 		success: function (data, textStatus, xhr) {
 			console.log(data)
 		}
 	})


 	
})