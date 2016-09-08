$(function(){

	$('#myButton').click(function () {
	    
	    console.log("button pressed");

	    if($('.overlay').hasClass('active-overlay')){

	    	$('.overlay').removeClass('active-overlay');

	    	$('#nav-item-container').removeClass('active-nav');

	    	setTimeout(function(){
	    		$('#nav-item-container').css({display: 'none'});
	    		$('.overlay').css({height: '10vh'});
	    	}, 3000);

	    }else{

	    	$('.overlay').addClass('active-overlay');

	    	$('#nav-item-container').fadeIn().css({display: 'block'});

	    	$('#nav-item-container').addClass('active-nav');

	    	setTimeout(function(){
	    		$('.overlay').css({height: '100vh'});
	    	}, 10);

	    }

   });

})