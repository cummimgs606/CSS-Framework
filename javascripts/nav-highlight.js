$(document).ready( function(){
	$('body').each(function(){
		

		// ********************************************************************************************
		// Highlights the menu item in the main navigation depending on the page being viewed
		// *********************************** HOW TO USE *********************************************
		// Give each li tag in the main nav a unique class.
		// For example <li>Jobs & Careers</li> would become <li class="mainJobs">Jobs & Careers</li>
		// Give the body tag on each page the same class that corresponds to the li tag
		// you want to highlight. For example <body class="mainJobs">
		// ********************************************************************************************


		// ********************************************************************************************
		// For global navigation
		// ********************************************************************************************

		var selectedGobalNavigation = $(this).attr('class');
		
		if( typeof selectedGobalNavigation !== "undefined"){
		
			$('.global-navigation-highlight > li').each(function(){
				var currentMainMenuItem = $(this).attr('class');
				if (selectedGobalNavigation.indexOf(currentMainMenuItem) !== -1)
				{
					$(this).addClass('active');
				}
			});
			
		}
		
		// ********************************************************************************************
		// For site navigation
		// ********************************************************************************************				
		
		var selectedSiteNavigation = $(this).attr('class');
		
		if( typeof selectedSiteNavigation !== "undefined"){
			
			$('.site-navigation-highlight > li').each(function(){
				var currentMainMenuItem = $(this).attr('class');
				if (selectedSiteNavigation.indexOf(currentMainMenuItem) !== -1)
				{
					$(this).addClass('active');
				}
			});
			
		}
		
		// ********************************************************************************************
		// For side navigation
		// ********************************************************************************************	

		var selectedSideNavigation = $(this).attr('class');
		
		if( typeof selectedSiteNavigation !== "undefined"){
			
			$('.side-navigation-highlight > li').each(function(){
				var currentMenu = $(this).attr('class');
				if (selectedSideNavigation.indexOf(currentMenu) !== -1)
				{
					$(this).addClass('active');
				}
			});
		}
	});
});