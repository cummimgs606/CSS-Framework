	var menuList = new Array();
	

	function offCanvasStart(array){
		
		/*console.log("Function : offCanvasStart")*/
		
		var menuWidth = calculateMenuWidth();

		for(var i=0; i <array.length;i++){
			
			this.menuList[i] = $.offCanvasMenu({
							direction	: "right",
							coverage	: menuWidth  + 'px',
							use3D		: false,
							menu		: '#push-menu-'+i,
							menuID		: 'menu-id-'+i,
							container : '.push-menu',
							duration  : 450,
							classes   : {
								inner    : 'inner-wrapper-'+i,
								outer    : 'outer-wrapper-'+i,
								container: 'off-canvas-menu-'+i,
								open     : 'menu-open-'+i}
							});
							
			this.menuList[i].on()				
		}
	}
	
	var state = "closed";
	
	function menuControll(newID){

		if(state == "open"){
			return;	
		}else{
			state = "open"
		}
		
		this.menuList[newID].show();
		
		setTimeout(function() {

		$('.push-background').bind('click',function() {   
		
			menuList[newID].hide();
			state = "closed";

			$(".push-background").unbind( "click" );
			$('.close-side-bar').unbind( "click" );
		});
		
		// FUNCTION ADDED TO CLOSE MENU WHEN SLECTED 19/01/2016
	
		$('#push-menu-'+newID ).bind( "mouseup", function() {
			
			console.log('Mouse-up function '+'#push-menu-'+newID)
	
			$('.push-background').unbind( "click" );
			$('.close-side-bar').unbind( "click" );
			$('#push-menu-'+newID).unbind( "mouseup" );
			
			menuList[newID].hide();
			state = "closed";
		});
		
		// FUNCTION ADDED END
		
		$('.close-side-bar').bind('click',function() {   
		
			menuList[newID].hide();
			state = "closed";
			
			$(".push-background").unbind( "click" );
			$('.close-side-bar').unbind( "click" );
		});


		}, 500);
	}
	
	function calculateMenuWidth(){

		var sideWidth = (((window.innerWidth-0) - 960) / 2);
		var minWidth = 300
		
		var menuWidthSmall = 170;
		var menuWidthMedium = 227;
		var menuWidth = 0;
		
		
		if(sideWidth > menuWidthMedium){
			menuWidth = sideWidth;	
		}else{
			menuWidth = menuWidthMedium;		
		}
		
		if(window.innerWidth < minWidth){
			menuWidth = menuWidthSmall;
		};
		
		return menuWidth;
	}
	