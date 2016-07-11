import $ from 'jquery'
import page from 'page'

 	/*
		Search for TV Show
	 */

 	$("#app-body").find('form').submit(function (ev) {
 		
 		ev.preventDefault()
 		var query = $(this).find('input[type=text]').val()
 		page(`/search?q=${query}`)
 		
 	})