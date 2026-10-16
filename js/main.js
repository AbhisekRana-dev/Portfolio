 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  var goHere = function() {

		$('.mouse-icon').on('click', function(event){
			
			event.preventDefault();

			$('html,body').animate({
				scrollTop: $('.goto-here').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});
	};
	goHere();

	// $("#myScrollspy").scrollspy({ offset: -75 });



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


})(jQuery);







// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function($){
  //variable that will hold the href attr of the links in the menu
  var sections = [];
  //variable that stores the id of the section
  var id = false;
  //variable for the selection of the anchors in the navbar
  var $navbara = $('#navi a');
  
  $navbara.click(function(e){
    //prevent the page from refreshing
    e.preventDefault();
    //set the top offset animation and speed
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 180
},500);
    hash($(this).attr('href'));
  });
  
  
  
  //select all the anchors in the navbar one after another
  $navbara.each(function(){
   // and adds them in the sections variable
    sections.push($($(this).attr('href')));
    
  })
  $(window).scroll(function(e){
    // scrollTop retains the value of the scroll top with the reference at the middle of the page
    var scrollTop = $(this).scrollTop() + ($(window).height()/2);
    //cycle through the values in sections array
    for (var i in sections) {
      var section = sections[i];
      //if scrollTop variable is bigger than the top offset of a section in the sections array then 
      if (scrollTop > section.offset().top){
        var scrolled_id = section.attr('id');
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $($navbara).removeClass('current');
      $('#navi a[href="#' + id + '"]').addClass('current'); 
    }
  })
})(jQuery);

hash = function(h){
  if (history.pushState){
    history.pushState(null, null, h);
  }else{
    location.hash = h;
  }
}


$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});


(function () {
    function openPortfolioGate() {
        const gate = document.getElementById("portfolio-gate");

        if (!gate || gate.dataset.started === "true") return;
        gate.dataset.started = "true";

        // Brief pause, then open both gates
        setTimeout(function () {
            gate.classList.add("gate-opening");
        }, 500);

        // Remove the overlay when the animation finishes
        setTimeout(function () {
            gate.classList.add("gate-finished");
        }, 2200);
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            openPortfolioGate
        );
    } else {
        openPortfolioGate();
    }
})();



document.addEventListener("DOMContentLoaded", function () {
    const name = document.querySelector(".fire-name");
    if (!name || name.dataset.fireReady === "true") return;
    name.dataset.fireReady = "true";

    // Wrap each letter once
    const originalText = name.textContent;
    name.textContent = "";

    [...originalText].forEach((character, index) => {
        const letter = document.createElement("span");
        letter.className = "fire-letter";
        letter.textContent = character === " " ? "\u00A0" : character;
        letter.style.setProperty("--delay", `${index * 0.05}s`);
        name.appendChild(letter);
    });

    let lastSpark = 0;
    let hovering = false;

    name.addEventListener("pointerenter", () => {
        hovering = true;
    });

    name.addEventListener("pointerleave", () => {
        hovering = false;
        name.querySelectorAll(".fire-spark").forEach(spark => spark.remove());
    });

    name.addEventListener("pointermove", event => {
        if (!hovering || Date.now() - lastSpark < 45) return;
        lastSpark = Date.now();

        const rect = name.getBoundingClientRect();
        const spark = document.createElement("span");
        spark.className = "fire-spark";
        spark.style.left = `${event.clientX - rect.left}px`;
        spark.style.top = `${event.clientY - rect.top}px`;
        spark.style.setProperty("--dx", `${Math.random() * 80 - 40}px`);
        spark.style.setProperty("--dy", `${-20 - Math.random() * 65}px`);

        name.appendChild(spark);
        spark.addEventListener("animationend", () => spark.remove());
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const gate = document.getElementById("portfolio-gate");
    const countdown = document.querySelector(".gate-countdown");

    if (!gate || !countdown) {
        console.error("Portfolio gate HTML elements are missing.");
        return;
    }

    let count = 3;

    function updateCountdown() {
        countdown.textContent = count;

        if (count > 1) {
            count--;
            setTimeout(updateCountdown, 1000);
        } else {
            // Show 1, then open the gate
            setTimeout(function () {
                gate.classList.add("gate-opening");
            }, 1000);

            // Remove the gate after the animation
            setTimeout(function () {
                gate.classList.add("gate-finished");
            }, 3000);
        }
    }

    updateCountdown();
});


const bubbleBackground = document.getElementById("bubble-background");

if (bubbleBackground) {
    for (let i = 0; i < 18; i++) {
        const square = document.createElement("span");
        square.className = "bubble-square";

        const size = 8 + Math.random() * 100;

        square.style.setProperty("--size", `${size}px`);
        square.style.setProperty("--rotation", `${Math.random() * 45}deg`);
        square.style.setProperty("--duration", `${5 + Math.random() * 8}s`);
        square.style.setProperty("--move-x", `${Math.random() * 100 - 50}px`);
        square.style.setProperty("--move-y", `${Math.random() * 100 - 50}px`);
        square.style.left = `${Math.random() * 100}%`;
        square.style.top = `${Math.random() * 100}%`;

        bubbleBackground.appendChild(square);
    }

    document.addEventListener("mousemove", (event) => {
        const squares = bubbleBackground.querySelectorAll(".bubble-square");

        squares.forEach((square, index) => {
            const speed = (index % 4 + 1) * 0.008;
            const x = (event.clientX - window.innerWidth / 2) * speed;
            const y = (event.clientY - window.innerHeight / 2) * speed;

            square.style.marginLeft = `${x}px`;
            square.style.marginTop = `${y}px`;
        });
    });
}


const background = document.getElementById("bubble-background");

if (background && !background.dataset.initialized) {
  background.dataset.initialized = "true";

  // Create continuously rising background squares
  for (let i = 0; i < 24; i++) {
    const square = document.createElement("span");
    square.className = "bubble-square";

    square.style.setProperty("--left", `${Math.random() * 100}%`);
    square.style.setProperty("--size", `${15 + Math.random() * 85}px`);
    square.style.setProperty("--duration", `${9 + Math.random() * 13}s`);
    square.style.setProperty("--delay", `${-Math.random() * 20}s`);
    square.style.setProperty("--drift", `${Math.random() * 160 - 80}px`);

    background.appendChild(square);
  }

  // Colorful bubbles burst and scatter around the mouse
  let lastBubbleTime = 0;

  document.addEventListener("mousemove", (event) => {
    const now = performance.now();

    // Limit bubble creation for smoother performance
    if (now - lastBubbleTime < 22) return;
    lastBubbleTime = now;

    for (let i = 0; i < 2; i++) {
      const bubble = document.createElement("span");
      bubble.className = "cursor-bubble";

      const angle = Math.random() * Math.PI * 2;
      const distance = 25 + Math.random() * 100;
      const size = 4 + Math.random() * 7;
      const hue = Math.random() < 0.5
        ? 175 + Math.random() * 90
        : 270 + Math.random() * 70;

      bubble.style.left = `${event.clientX}px`;
      bubble.style.top = `${event.clientY}px`;
      bubble.style.setProperty("--size", `${size}px`);
      bubble.style.setProperty("--hue", hue);
      bubble.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      bubble.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

      document.body.appendChild(bubble);
      bubble.addEventListener("animationend", () => bubble.remove(), {
        once: true
      });
    }
  });
}

(() => {
    let lastTime = 0;

    document.addEventListener("mousemove", (event) => {
        const now = performance.now();

        // Limit particles for better performance
        if (now - lastTime < 18) return;
        lastTime = now;

        const particle = document.createElement("span");
        particle.className = "cursor-particle";

        const hue = Math.random() < 0.5
            ? 300 + Math.random() * 40
            : 245 + Math.random() * 40;

        particle.style.left = `${event.clientX}px`;
        particle.style.top = `${event.clientY}px`;
        particle.style.setProperty("--hue", hue);
        particle.style.setProperty("--dx", `${Math.random() * 70 - 35}px`);
        particle.style.setProperty("--dy", `${Math.random() * 70 - 35}px`);

        document.body.appendChild(particle);

        particle.addEventListener("animationend", () => {
            particle.remove();
        }, { once: true });
    });
})();


