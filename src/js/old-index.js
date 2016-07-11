import $ from 'jquery'

$(document).ready(function () {
	


 	/*

 	*/

 	$tvShowsContainer.on('click', 'button.like', function (event) {

 		var $this = $(this);

 		$this.closest('.tv-show').toggleClass('liked')

 	})

 })
