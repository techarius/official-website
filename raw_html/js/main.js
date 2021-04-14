AOS.init();//Initializing Animate on Scroll Library Function
// $('#afterload').hide();
// function display()
// {
// 	$("#afterload").show();
// }
/* ****** PROGRESS BAR START ******* */
const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
  let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
  progressBar.style.height = `${newProgressHeight}%`;
  progressBar.style.opacity = `${newProgressHeight}%`;
};
/* ****** PROGRESS BAR END ******* */
/* ****** NAVBAR START ******* */
$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 100) 
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});
/* ****** NAVBAR END ******* */
/******** SMOOTH SCROLLING START *********/
$(document).ready(function() {
		$('a[href*=\\#]').bind('click', function(e) {
				e.preventDefault();
				var target = $(this).attr("href");
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top-200
				}, 600, function() {
						location.hash = target;
				});
				return false;
		});
});
/******** SMOOTH SCROLLING END *********/
/******** SCROLL TO TOP START **********/
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
});
/******** SCROLL TO TOP END **********/
var swiper = new Swiper('.blog-slider', {
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	mousewheel: {
	  invert: false,
	},
	// autoHeight: true,
	pagination: {
	  el: '.blog-slider__pagination',
	  clickable: true,
	}
  });

  const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
