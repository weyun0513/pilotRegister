(function($){
	$(function(){
	  
	  var menu_head = $('ul.side-menu h2.title').height();
	  var item_height = $('ul.side-menu li a').height();
	  // Untoggle menu on click outside of it
    $(document).mouseup(function (e) {
      var container = $('ul.side-menu');
      if ((!container.is(e.target) && container.has(e.target).length === 0) && 
         (!($('a.menu-icon').is(e.target)) && $('a.menu-icon').has(e.target).length === 0)) {
        container.removeClass("in");
        $('a.menu-icon, ul.side-menu').removeClass("open");
      	$('ul.side-menu li').css("top", "100%");
	      $('ul.side-menu h2').css("top", "0px");
      }
    });
    
    $("a.menu-icon").click(function(e) {
      e.preventDefault();
//      hasclass拿掉 body 頁面就不會跑掉
      if ($('ul.side-menu, a.menu-icon').hasClass('open')) {
      	$('ul.side-menu').removeClass('open');
      	$('a.menu-icon').removeClass('open');

      	// Reset menu on close
      	$('ul.side-menu li').css("top", "100%");
	      $('ul.side-menu h2').css("top", "-60px");
      }
      else {
	      $('ul.side-menu').addClass('open');
	      $('a.menu-icon').addClass('open');
//-30調小 menu會下來
	      $('ul.side-menu h2').css("top", "-50px");
	      $('ul.side-menu li').each(function() {
	      	// Traditional Effect
	      	if ($(this).hasClass('link')) {
	      		var i = ($(this).index() - 1)
		      	var fromTop = menu_head + (i * item_height);
		      	var delayTime = 100 * i;
		      	$(this).delay(delayTime).queue(function(){
			        $(this).css("top", fromTop);
			        $(this).dequeue();
			    	});
	      	}
	      	// Metro Effect
	      	else if ($(this).hasClass('metro')) {
	      		var row_i = ($(this).parent().parent().index() - 1); // Vertical Index
	      		var col_i = $(this).index(); // Horizontal Index
	      		var fromTop = menu_head + (row_i * 85);
						var fromLeft = col_i * 125;
						var delayTime = (row_i * 200) + Math.floor((Math.random() * 200) + 1);
						console.log(delayTime);
			      $(this).css("left", fromLeft);
						$(this).delay(delayTime).queue(function(){
			      	$(this).css("top", fromTop);
			        $(this).dequeue();
			    	});
	      	}
	      });
      }

    })
	
	}); // end of document ready
})(jQuery); // end of jQuery name space