$(document).ready(function () {

 	/*
		Submit search form
	 */

 	$("#app-body").find('form').submit(function (ev) {
 		
 		ev.preventDefault()
 		var query = $(this).find('input[type=text]').val()

 	})

 	var template = '<article class="tv-show">'+
						'<div class="left img-container">'+
							'<img src=":img:" alt=":img alt:"></img>'+
						'</div>'+
						'<div class="right info">'+
							'<h1>:name:</h1>'+
							'<p>:summary:</p>'+
						'</div>'+
					'</article>'

 	$.ajax({
 		url: 'http://api.tvmaze.com/shows',
 		success: function (data, textStatus, xhr) {

 			$tvShowsContainer = $('#app-body').find('.tv-shows')
 			
 			data.forEach(function (show) {

 				var article = template.replace(':name:', show.name)
 										.replace(':summary:', show.summary)
 										.replace(':img:', show.image.medium)
 										.replace(':img alt:', show.name + " cover")
 			
 				$tvShowsContainer.append($(article))
 			})
 		}
 	})


 	
})