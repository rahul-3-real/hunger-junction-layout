//  Sticky Header
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$('.navBar').addClass('stickyNavBar');
		} else{
			$('.navBar').removeClass('stickyNavBar');
		}
	})
});


//  Search Bar Toggle
$(document).ready(function(){
	$("#search-button").click(function(){
		$(".search-container").slideDown(300);
	});
});
$(document).ready(function(){
	$("#search-close").click(function(){
		$(".search-container").slideUp(300);
	});
});


//  Category Carousel
$('.category-carousel').owlCarousel({
	loop:true,
	margin:15,
	nav:true,
	dots:false,
	responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})