// scroll effect on anchor tag to id
function scroll() {
	$('a[href^="#"]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('html, body').stop().animate({ scrollTop: position }, 500, 'swing');
		return false;
	});
}

function navToggle() {
	$('.nav__btn').on('click', function() {
		$(this).toggleClass('js-nav');
		$(this).next().slideToggle();
		$(this).parent('.header__container').toggleClass('js-headercont');
	});
}

function btnReadmore() {
	$('.btn--readmore').on('click', function () {
		$(this).hide();
		$('.home__container01').find('p > span').slideToggle();
		$('.home__container01').find('.content').children('span').slideToggle();
		// $('.home__container01').find('p:nth-of-type(n+2)').slideToggle();
		$('.home__container01').find('.sp_content img:nth-of-type(2)').slideToggle();
		$('.btn--hidetext').css('display','block');
	});

	$('.btn--hidetext').on('click', function () {
		$(this).hide();
		$('.home__container01').find('p > span').slideToggle();
		$('.home__container01').find('.content').children('span').slideToggle();
		// $('.home__container01').find('p:nth-of-type(n+2)').slideToggle();
		$('.home__container01').find('.sp_content img:nth-of-type(2)').slideToggle();
		$('.btn--readmore').show();
	});
}

function checkView() {
	$('.home .container .container__header').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).find('h2').addClass('animated fadeInUp');
			$(this).addClass('js-header');
		}
	});

	$('.interview__container').bind('inview', function (event, visible) {
		if (visible == true) {
			setTimeout(function() {
				$('.interview__item:nth-of-type(1)').fadeTo();
				$('.interview__item:nth-of-type(1)').addClass('animated fadeInUp');
			}, 0);
			setTimeout(function() {
				$('.interview__item:nth-of-type(2)').fadeTo();
				$('.interview__item:nth-of-type(2)').addClass('animated fadeInUp');
			}, 200);
			setTimeout(function() {
				$('.interview__item:nth-of-type(3)').fadeTo();
				$('.interview__item:nth-of-type(3)').addClass('animated fadeInUp');
			}, 400);
			setTimeout(function() {
				$('.interview__item:nth-of-type(4)').fadeTo();
				$('.interview__item:nth-of-type(4)').addClass('animated fadeInUp');
			}, 600);
		}
	});

	$('.educ__container').bind('inview', function (event, visible) {
		if (visible == true) {
			setTimeout(function() {
				$('.educ__item:nth-of-type(1)').fadeTo();
				$('.educ__item:nth-of-type(1)').addClass('animated fadeInUp');
			}, 0);
			setTimeout(function() {
				$('.educ__item:nth-of-type(2)').fadeTo();
				$('.educ__item:nth-of-type(2)').addClass('animated fadeInUp');
			}, 200);
			setTimeout(function() {
				$('.educ__item:nth-of-type(3)').fadeTo();
				$('.educ__item:nth-of-type(3)').addClass('animated fadeInUp');
			}, 400);
			setTimeout(function() {
				$('.educ__item:nth-of-type(4)').fadeTo();
				$('.educ__item:nth-of-type(4)').addClass('animated fadeInUp');
			}, 600);
		}
	});
}


function parallax() {
	var par = $('.parallax--template');
	var position = par.position();

	if(position.top > 0){
		var parallax = document.querySelectorAll(".parallax--template");

		window.onscroll = function(){
		[].slice.call(parallax).forEach(function(el,i){

			if($(el).hasClass('home__container02') ) {
				speed = .2;
				fixpos = 100;
			}else if($(el).hasClass('home__container04') ) {
				speed = .1;
				fixpos = 800;
			}else if($(el).hasClass('home__container06') ) {
				speed = .1;
				fixpos = 1600;
			}

			var imgpos = position.top - window.pageYOffset;
				var windowYOffset = imgpos,
					elBackgrounPos = "50% -" + ((windowYOffset * speed) + fixpos) + "px";
					console.log("50% -" + ((windowYOffset * speed) + fixpos) + "px");
				el.style.backgroundPosition = elBackgrounPos;
			});
		};
	}
}

function educScroll() {

	if ($('.development__nav').length) {
		var nav = $('.development__nav');
			ctr 				= 0;
			x 					= 0;
			st 	= $(this).scrollTop();

		if (st >= $('.development__container').offset().top && st <= $('.development__container').offset().top + $('.development__container').outerHeight()) {
	  		nav.addClass('visible');
			
			$('.development__item').each(function(){

				thisHeight 	= parseInt($(this).outerHeight());
				thisOffset  = $(this).offset().top;
				end 		= thisHeight + thisOffset;
				ctr++;

			  	if (st >= thisOffset && st <= end) {
			  		$('.development__nav ul li').removeClass('active');
			  		$('.development__nav ul li:nth-of-type(' + ctr + ')').addClass('active');
			  	} else {
			  	}

			});
		}else {
			nav.removeClass('visible');

		}
		
	}
}

function educNav() {
	$('.development__nav a[href^="#"], .recruit__selection_flow a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var scroll;

        if($(window).scrollTop()==0){
            scroll =  ($target.offset().top) - 160
        }else{
            scroll =  ($target.offset().top) - 60
        }
        $('html, body').stop().animate({
            'scrollTop': scroll
        }, 1000, 'swing', function () {
            //window.location.hash = target;
        });
    });
}

var $animation_elements = $('.animated');
var $window = $(window);

function check_if_in_view() {
  	var window_height 			= $window.height();
  		window_top_position 	= $window.scrollTop();
  		window_bottom_position 	= (window_top_position + window_height);
 
  	$.each($animation_elements, function() {
	    var $element 				= $(this);
	    	element_height 			= $element.outerHeight();
	    	element_top_position 	= $element.offset().top;
	    	element_bottom_position = (element_top_position + element_height);

	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
	    	if ($element.hasClass('fadeDelay')) {
	    		setTimeout(function() {
	      			$element.removeClass('hide');
	      			$element.addClass('fadeInUp');
	      		}, 400)
	    	}else {
	      		setTimeout(function() {
	      			$element.removeClass('hide');
	      			$element.addClass('fadeInUp');
	      		}, 300)
	    	}
	    } else {
      		$element.css({opacity: '0'});
	    }
  	});
}

$window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');

$(function(){

	navToggle();
	btnReadmore();
	educNav();

	if( $('.parallax--template').length ) {
		parallax();
	}

	scroll();
});
	
$(window).scroll(function(){
	educScroll();
	check_if_in_view();
})

$(function(){
    $('.gnav-ourbusiness').hover(function(){
        $('.floating-menu-bg').slideDown(100);
    },function(){
        $('.floating-menu-bg').slideUp(100);
    })
    $('#menubtn').click(function(){
        $('.gnav').slideToggle(100);
    });

//    $('.gnav-aboutus').hover(function(){
//        $('.floating-menu-bg').slideDown(100);
//    },function(){
//        $('.floating-menu-bg:not(:animated)').slideUp(100);
//    })
})