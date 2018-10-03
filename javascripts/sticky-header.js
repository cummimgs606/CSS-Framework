// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 1;
var scrollHeight = $('.sticky-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
	
});

$( window ).load(function() {
  console.log('ON LOAD')
    hideOrbitButtons();
});

setInterval(function() {
	
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);



function hideOrbitButtons(){
	$('ul.orbit-bullets').css("display", "none");
}

function showOrbitButtons(){
	$('ul.orbit-bullets').css("display", "inline");
}

function hasScrolled() {
    var st = $(this).scrollTop();
	
	if (st >scrollHeight/4){
		hideOrbitButtons();
	}else{
		showOrbitButtons();
	}	
	
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
	
	
	
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > scrollHeight){
        // Scroll Down
        $('.sticky-header').removeClass('sticky-nav-down').addClass('sticky-header-up');
		$('.sticky-menu').removeClass('sticky-nav-down').addClass('sticky-menu-up');
		$('.sticky-show-hide-title').css("display", "inline");
		hideOrbitButtons();
		
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.sticky-header').removeClass('sticky-header-up').addClass('sticky-nav-down');
			$('.sticky-menu').removeClass('sticky-menu-up').addClass('sticky-nav-down');
			$('.sticky-show-hide-title').css("display", "none");
        }
    }

    lastScrollTop = st;
}

