/*
	Module Dependencies
*/

import $ from 'jquery'
import page from 'page'
import { getShows, searchShows } from 'src/api-client'
import renderShows from 'src/render'
import $tvShowsContainer from 'src/tv-shows-container'
import 'search-form'
import qs from 'qs'

page('/', function (ctx, next) {
	if(!localStorage.shows) {
		getShows(function (shows) {
			$tvShowsContainer.find('.loader').remove()
			localStorage.shows = JSON.stringify(shows)
			renderShows(shows)
		})
	} else {
		renderShows(JSON.parse(localStorage.shows))
	}
})

page('/search', function (ctx, next) {
	
	$tvShowsContainer.find('.tv-show').remove()
   	var $loader = $('<div class="loader">')
    $loader.appendTo($tvShowsContainer)
    const query = qs.parse(ctx.querystring)

    searchShows(query, function (res) {
      	$loader.remove()
     	var shows = res.map(function (el) {
      		return el.show
    	})

    	renderShows(shows)
    })
})


page()