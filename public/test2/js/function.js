(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* SmoothScroll */
	const lenis = new Lenis({ autoRaf: true, wheelMultiplier: 1.5, touchMultiplier: 1.5 });
	if (typeof ScrollTrigger !== 'undefined') {
		lenis.on('scroll', ScrollTrigger.update);
	}

	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
		if (typeof ScrollTrigger !== 'undefined') {
			ScrollTrigger.refresh();
		}
	});

	/* Sticky Header */	
	if($('.active-sticky-header').length){
		$window.on('resize', function(){
			setHeaderHeight();
		});

		function setHeaderHeight(){
	 		$("header.active-sticky-header").css("height", $('header.active-sticky-header .header-sticky').outerHeight());
		}	
	
		$window.on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header.active-sticky-header .header-sticky').outerHeight()
			$("header.active-sticky-header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header.active-sticky-header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}
	
	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});

	if($("a[href='#top']").length){
		$(document).on("click", "a[href='#top']", function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}

	/* testimonial Slider JS */
	if ($('.testimonial-slider').length) {
		const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.testimonial-button-next',
				prevEl: '.testimonial-button-prev',
			}
		});
	}
	
	/* Our Awards Slider JS */
	if ($('.our-awards-slider').length) {
		const services_slider = new Swiper('.our-awards-slider .swiper', {
			slidesPerView : 2,
			speed: 1000,
			spaceBetween: 30,
			loop: true,
			allowTouchMove: false,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.services-pagination',
				clickable: true,
			},
			breakpoints: {
				768:{
					slidesPerView: 4,
				},
				991:{
					slidesPerView: 4,
				}
			}
		});
	}

	/* testimonial Slider Silver JS */
	if ($('.testimonial-slider-silver').length) {
		const testimonial_slider_silver = new Swiper('.testimonial-slider-silver .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 60,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				768:{
				  	slidesPerView: 1,
				},
				991:{
				  	slidesPerView: 1,
				}
			}
		});
	}

	/* testimonial Slider Gold JS */
	if ($('.testimonial-slider-gold').length) {
		const testimonial_slider_gold = new Swiper('.testimonial-slider-gold .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				768:{
					slidesPerView: 2,
				},
				991:{
					slidesPerView: 2,
				}
			}
		});
	}

	if ($('.skills-progress-bar').length) {
    $('.skills-progress-bar').waypoint(function () {

        // ─── HORIZONTAL: animate WIDTH ───
        $('.skillbar').each(function () {
            $(this).find('.count-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });

        // ─── VERTICAL: animate HEIGHT ───
        $('.skillbar-vertical').each(function () {
            $(this).find('.count-bar-vertical').animate({
                height: $(this).attr('data-percent')
            }, 2000);
        });

		}, {
			offset: '70%'
		});
	}

	/* Youtube Background Video JS */
	if ($('#youtubevideo').length) {
		var myPlayer = $("#youtubevideo").YTPlayer();
	}

	/* Init Counter */
	if ($('.counter').length) {
		$('.counter').counterUp({ delay: 6, time: 3000 });
	}

	/* Register GSAP Plugins & Disable Lag Smoothing
	 * GSAP's default lagSmoothing(500, 33) clamps throttled rAF ticks (background tabs,
	 * occluded windows, headless/automated browsers) to 33ms per tick, which stalls
	 * staggered SplitText reveals mid-flight. Disabling it ensures tweens advance by
	 * true wall-clock time instead of freezing partially faded. */
	if (typeof gsap !== 'undefined') {
		if (typeof ScrollTrigger !== 'undefined') {
			gsap.registerPlugin(ScrollTrigger);
		}
		if (typeof SplitText !== 'undefined') {
			gsap.registerPlugin(SplitText);
		}
		gsap.ticker.lagSmoothing(0);
	}

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	var headingAnimationsInitialized = false;
	var headingAnimationEntries = [];

	function revealHeadingFinalState(entry) {
		if (!entry || entry.revealed) return;
		entry.revealed = true;

		if (entry.watchdogTimer) {
			clearTimeout(entry.watchdogTimer);
			entry.watchdogTimer = null;
		}
		if (entry.anim) {
			if (entry.anim.scrollTrigger) {
				entry.anim.scrollTrigger.kill(false);
			}
			entry.anim.progress(1).kill();
		}
		if (entry.targets && entry.targets.length && typeof gsap !== 'undefined') {
			gsap.set(entry.targets, {
				opacity: 1,
				visibility: "visible",
				x: 0,
				y: 0,
				rotateX: 0,
				clearProps: "transform,opacity,visibility"
			});
		}
		if (entry.split && typeof entry.split.revert === 'function') {
			entry.split.revert();
		}
		if (entry.element && typeof gsap !== 'undefined') {
			gsap.set(entry.element, {
				opacity: 1,
				visibility: "visible",
				clearProps: "perspective,transform,opacity,visibility"
			});
		}
	}

	function revealAllHeadingsFallback() {
		headingAnimationEntries.forEach(revealHeadingFinalState);
		// Defensive guard in case any heading retains stale inline opacity/transform
		document.querySelectorAll('.text-effect, .text-anime-style-1, .text-anime-style-2, .text-anime-style-3').forEach(function (el) {
			el.style.opacity = '';
			el.style.visibility = '';
			el.style.transform = '';
			el.querySelectorAll('div, span').forEach(function (child) {
				child.style.opacity = '';
				child.style.visibility = '';
				child.style.transform = '';
			});
		});
	}

	function scheduleEntryWatchdog(entry, timeoutMs) {
		if (entry.revealed || entry.watchdogTimer) return;
		entry.watchdogTimer = setTimeout(function () {
			revealHeadingFinalState(entry);
		}, timeoutMs);
	}

	function initHeadingAnimation() {
		if (headingAnimationsInitialized) return;
		headingAnimationsInitialized = true;

		// Respect user reduced-motion preference: leave all headings immediately visible
		if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}
		if (typeof gsap === 'undefined' || typeof SplitText === 'undefined') {
			return;
		}

		if ($('.text-effect').length) {
			var textheading = $(".text-effect");

			textheading.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words,chars",
					linesClass: "split-line"
				});

				if ($(el).hasClass('text-effect')) {
					gsap.set(el.split.chars, {
						opacity: 0.3,
						x: "-7",
					});
				}

				var entry = { element: el, split: el.split, targets: el.split.chars, anim: null, revealed: false, watchdogTimer: null };
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 92%",
						end: "top 60%",
						markers: false,
						scrub: 1,
						onEnter: function () { scheduleEntryWatchdog(entry, 1800); },
					},
					x: "0",
					y: "0",
					opacity: 1,
					duration: 0.7,
					stagger: 0.2,
				});
				entry.anim = el.anim;
				headingAnimationEntries.push(entry);
			});
		}

		if ($('.text-anime-style-1').length) {
			let delayValue = 0.2,
				animatedTextElements = document.querySelectorAll('.text-anime-style-1');

			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
				let wordCount = animationSplitText.words.length;
				let staggerAmount = wordCount > 0 ? Math.min(0.05, 0.4 / wordCount) : 0.05;
				let entry = { element: element, split: animationSplitText, targets: animationSplitText.words, anim: null, revealed: false, watchdogTimer: null };

				entry.anim = gsap.from(animationSplitText.words, {
					duration: 0.75,
					delay: delayValue,
					x: 20,
					autoAlpha: 0,
					stagger: staggerAmount,
					scrollTrigger: {
						trigger: element,
						start: "top 85%",
						once: true,
						onEnter: function () { scheduleEntryWatchdog(entry, 1600); },
					},
					onComplete: function () { revealHeadingFinalState(entry); },
				});
				element.split = animationSplitText;
				element.animation = entry.anim;
				headingAnimationEntries.push(entry);
			});
		}

		if ($('.text-anime-style-2').length) {
			let translateXValue = 20,
				delayValue = 0.1,
				easeType = "power2.out",
				animatedTextElements = document.querySelectorAll('.text-anime-style-2');

			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
				let charCount = animationSplitText.chars.length;
				let staggerAmount = charCount > 0 ? Math.min(0.03, 0.4 / charCount) : 0.03;
				let entry = { element: element, split: animationSplitText, targets: animationSplitText.chars, anim: null, revealed: false, watchdogTimer: null };

				entry.anim = gsap.from(animationSplitText.chars, {
					duration: 0.75,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: {
						trigger: element,
						start: "top 85%",
						once: true,
						onEnter: function () { scheduleEntryWatchdog(entry, 1600); },
					},
					onComplete: function () { revealHeadingFinalState(entry); },
				});
				element.split = animationSplitText;
				element.animation = entry.anim;
				headingAnimationEntries.push(entry);
			});
		}

		if ($('.text-anime-style-3').length) {
			let animatedTextElements = document.querySelectorAll('.text-anime-style-3');

			animatedTextElements.forEach((element) => {
				// Reset if needed
				if (element.animation) {
					element.animation.progress(1).kill();
					element.split.revert();
				}

				element.split = new SplitText(element, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				gsap.set(element, { perspective: 400 });

				gsap.set(element.split.chars, {
					opacity: 0,
					x: "50",
				});

				let charCount = element.split.chars.length;
				let staggerEach = charCount > 0 ? Math.min(0.02, 0.4 / charCount) : 0.02;
				let entry = { element: element, split: element.split, targets: element.split.chars, anim: null, revealed: false, watchdogTimer: null };

				element.animation = gsap.to(element.split.chars, {
					scrollTrigger: {
						trigger: element,
						start: "top 90%",
						once: true,
						onEnter: function () { scheduleEntryWatchdog(entry, 1600); },
					},
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 0.75,
					ease: Back.easeOut,
					stagger: staggerEach,
					onComplete: function () { revealHeadingFinalState(entry); },
				});
				entry.anim = element.animation;
				headingAnimationEntries.push(entry);
			});
		}

		if (typeof ScrollTrigger !== 'undefined') {
			ScrollTrigger.refresh();
		}

		// Bounded safety fallback: force all headings to full visibility regardless of
		// ScrollTrigger status or rAF throttling (e.g. automated screenshots, no scroll).
		setTimeout(revealAllHeadingsFallback, 2000);
	}

	if (document.fonts && document.fonts.ready) {
		document.fonts.ready.then(initHeadingAnimation);
		// Guard against slow/blocked webfont requests delaying heading reveal
		setTimeout(initHeadingAnimation, 800);
	} else {
		window.addEventListener("load", initHeadingAnimation);
		setTimeout(initHeadingAnimation, 800);
	}

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 1024))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* Zoom Gallery screenshot */
	$('.gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Contact form validation */
	var $contactform = $("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Ajax call to submit form */
		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: $contactform.serialize(),
			success : function(text){
				if (text === "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h4 text-success";
		} else {
			var msgClasses = "h4 text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */

	/* Animated Wow Js */	
	new WOW().init();

	/* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}

	/* Progress Bar */
	if ($('.circle').length){	
		$('.circle').each(function() {			
			var el = $(this).circleProgress({value: 0});
			
			var rawValue = $(this).data('value'); 
				var progressValue = rawValue >= 1 ? 1 : rawValue;
				var progressBarOptions = {
					startAngle: -1.6,
					thickness: 4,
					fill: {
						color: window.getComputedStyle($(this)[0]).color 
					}
				};

			new Waypoint({
			  element: el.get(0),
			  handler: function() {
				// Initialize the progress bar
				el.circleProgress($.extend({}, progressBarOptions, {
					value: el.data('value')  
				})).on('circle-animation-progress', function(event, progress, stepValue) {
					
					var displayValue = Math.round(stepValue * 100); 
					$(this).find('.progress_value .pro_data').text(displayValue);
				});
					
				this.destroy();
			  },
			  offset: '80%'
			});			
		});		
	}

})(jQuery);