jQuery(document).ready(function($) {
	$(function() {
	    //caches a jQuery object containing the header element
	    var header = $(".navbar");
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();

	        if (scroll >= 40) {
	            header.removeClass('clearHeader').addClass("darkHeader");
	        } else {
	            header.removeClass("darkHeader").addClass('clearHeader');
	        }
	    });
	});
});
!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2365495400380089');
		fbq('track', 'PageView');
		


function InitiateCheckout(){
	fbq('track', 'InitiateCheckout');
}

// Set the date we're counting down to
var countDownDate = new Date("Nov 6, 2019 10:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);


	// Display the result in the element with id="demo"
	document.getElementById("counter").innerHTML = "<span><p>Días</p>" + days + "</span>" + "<span><p>Horas</p>" + hours + "</span>"
	  + "<span><p>Minutos</p>" + minutes + "</span>" + "<span><p>Segundos</p>" + seconds + "</span>";
	  document.getElementById("counterEng").innerHTML = "<span><p>Days</p>" + days + "</span>" + "<span><p>Hours</p>" + hours + "</span>"
	  + "<span><p>Minutes</p>" + minutes + "</span>" + "<span><p>Seconds</p>" + seconds + "</span>";
	// If the count down is finished, write some text 
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter").innerHTML = "Expirado";
	}
}, 1000);