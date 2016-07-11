/*
	Module Dependencies
*/

import $ from 'jquery'
import $tvShowsContainer from 'src/tv-shows-container'

/*
	Render TV Shows on HTML
*/

var template = `<article class="tv-show">
					<div class="left img-container">
						<img src=":img:" alt=":img alt:"></img>
					</div>
					<div class="right info">
						<h1>:name:</h1>
						<p>:summary:</p>
						<button class="like">⭐</button>
					</div>
				</article>`

export default function renderShows (data) {
    	
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