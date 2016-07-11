/*
	Module Dependencies
*/

import $ from 'jquery'

 /*
 	Display all TV Shows
 */

export function getShows(fn) {
	$.ajax('http://api.tvmaze.com/shows', {
		success: function (data, textStatus, xhr) {
			fn(shows)
		}
	})
}

export function searchShows(query, fn) {
	$.ajax('http://api.tvmaze.com/search/shows', {
		data: query,
		success: function(res, textStatus, xhr) {
			fn(res)
		}
	})
}
