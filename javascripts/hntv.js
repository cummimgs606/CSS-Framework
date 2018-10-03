$(document).ready( function(){
	
	function clipString(str, chars) {
		
		if(str.length > chars) {
			
			var spaceIndex = str.indexOf(" ", chars);
				str = str.slice(0, spaceIndex);
				
				return str + '...';
			
		} else {
			
			return str;
		}
	}
	
	
	function createRequestString(id){
		
		var baseUrl			= 'https://www.googleapis.com/youtube/v3/videos?';
		var part	 		= 'snippet';
		var key				= 'AIzaSyAy8oc-7fQqnnZpEt2pTg6O_xtny8Dgmxg';
		var callback		= '&callback=?';
		var requestUrl 		= baseUrl + 'part=' + part + '&id=' + id + '&key=' + key + callback;	
	
		return requestUrl;
	}
	
	
	function createVideoObject(data){
		
		var video = {	id:				data.items[0].id,
						title:			data.items[0].snippet.title, 
						description:	data.items[0].snippet.description,
						thumbnail:		data.items[0].snippet.thumbnails.default.url	
					};
					
		return video;
	}
	
	
	function embedVideo(video){
		
		$('.video-player-featured > iframe').attr('src', 'http://www.youtube.com/embed/'+video.id+'?autohide=1&wmode=opaque'); 
		$('.video-player-details >  h3').html(video.title);
		$('.video-player-details >  p').html(video.description);
		
		$('html, body').animate({ scrollTop: $('#player').offset().top}, 0);
	}


	// ---------------------------------------------------------------------------------------------------------------
	

	$('.video-player-featured').each(function(){

		
		var selector = $(this);
		var requestUrl = createRequestString( $(selector).attr('rel') );
		
		$.getJSON(requestUrl, function(data){
			
			var video = createVideoObject(data);
			embedVideo(video);
		});
	});
	

	// ---------------------------------------------------------------------------------------------------------------
	

	$('.video-player-details').each(function(){

		
		var selector = $(this);
		var requestUrl = createRequestString( $(this).attr('rel') );
		var htmlString = "<h3></h3></br><p></p>";

		$( htmlString).prependTo($(this));
		
		$.getJSON(requestUrl, function(data){
			
			var video = createVideoObject(data)
			
			$(selector).find('h3').html(clipString(video.title, 150)); 
			$(selector).find('p').html(clipString(video.description, 700)); 
		});
	});
	
	
	// ---------------------------------------------------------------------------------------------------------------
		
	
	$('.video-list').each(function(i){
		
		var selector = $(this);
		var requestUrl = createRequestString( selector.attr('rel') );
		var htmlString = "<div class='panel theme-white'><div class='image-small'><img src=''/></div><div class='thumbnail-text'><h4><a></a><p></p></div></div>";

		$( htmlString).prependTo($(this));
	

		$.getJSON(requestUrl,function(data){
			
			var video = createVideoObject(data);

			$(selector).find('.panel .image-small > img ').attr('src', video.thumbnail);
			$(selector).find('.thumbnail-text > h4 > p').html(clipString(video.description, 125)); 
			$(selector).find('.thumbnail-text > h4 > a').html(clipString(video.title, 50)); 
			$(selector).find('.thumbnail-text > h4 > a').attr('rel', video.id); 
			
			
			$(selector).find('.panel .image-small > img ').on('click', function(event) { 
			
				embedVideo(video);
			});
			
			$(selector).find('.thumbnail-text > h4 > a').on('click', function(event) { 	
			
				embedVideo(video)
			});
		});
	});
});