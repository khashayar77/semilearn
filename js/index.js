$('document').ready(function() {
	//Navigation bar responsive button
	var height = window.innerHeight;
	var width = window.innerWidth;
	$('.nav-menu').on('click', function() {
		$('nav').toggle();
	});
	$('.close-nav').on('click', function() {
		$('nav').toggle();
	});

	//responsive scripts
	if (width <= 1300) {
		$('nav').css('height', height);
		//var hhd_width = $('.hd-home-box').css('width');
		//$('.hd-home-box').css('left',(width/2)-(hhd_width/2));
	}
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace('active', '');
	}

	slides[slidesIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += 'active';
}
