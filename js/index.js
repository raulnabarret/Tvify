$(document).ready(function () {
	
	var $tvShowsContainer = $('#app-body').find('.tv-shows')


 	var template = '<article class="tv-show">'+
						'<div class="left img-container">'+
							'<img src=":img:" alt=":img alt:"></img>'+
						'</div>'+
						'<div class="right info">'+
							'<h1>:name:</h1>'+
							'<p>:summary:</p>'+
							'<button class="like">⭐</button>'+
						'</div>'+
					'</article>'

	/*
		Render TV Shows on HTML
	*/

	function renderShows (data) {
    	
    	$tvShowsContainer.find('.loader').remove();

 		data.forEach(function (data) {
 			var article = template.replace(':name:', data.name)
 									.replace(':summary:', data.summary)
 									.replace(':img:', data.image ? data.image.medium : '')
 									.replace(':img alt:', data.name + " cover")
 		
			var $article = $(article)
 			$tvShowsContainer.append($article.fadeIn(1500))

		})
	}

 	/*
		Search for TV Show
	 */

 	$("#app-body").find('form').submit(function (ev) {
 		
 		ev.preventDefault()
 		var query = $(this).find('input[type=text]').val()

 		$tvShowsContainer.find('.tv-show').remove()
      	var $loader = $('<div class="loader">');
      	$loader.appendTo($tvShowsContainer);

 		$.ajax({
 			url: 'http://api.tvmaze.com/search/shows',
 			data: { q: query },
 			success: function (res, textStatus, xhr) {

 				$loader.remove();

 				var shows = res.map(function (element) {
 					return element.show
 				})

 				renderShows(shows)

 			}
 		})
 	})

 	/*
 		Display all TV Shows
 	*/

 	if (!localStorage.shows) {
	 	$.ajax('http://api.tvmaze.com/shows').then(function (shows, textStatus, xhr) {
	 		$tvShowsContainer.find('.loader').remove()
	 		localStorage.shows = JSON.stringify(shows)
	 		renderShows(shows)
	 	})
 	} else {
 		renderShows(JSON.parse(localStorage.shows))
 	}


 	/*

 	*/


 	$tvShowsContainer.on('click', 'button.like', function (event) {

 		var $this = $(this);

 		$this.closest('.tv-show').toggleClass('liked')

 	})

 })
