// Setting Social Media Buttons

window.onload = function (){
    var c = document.getElementById("svg1").contentDocument;

    var fb = c.getElementById("XMLID_420_");
    fb.setAttribute("onclick", "window.open('http://www.facebook.com/SBUHacks', '_blank');");
	fb.setAttribute("style", "cursor: pointer;");
	fb.setAttribute("aria-label", "Facebook");

    var insta = c.getElementById("XMLID_444_");
	insta.setAttribute("onclick", "window.open('https://www.instagram.com/sbuhacks/', '_blank');");
	insta.setAttribute("style", "cursor: pointer;");
	insta.setAttribute("aria-label", "Instagram");

    var twitter = c.getElementById("XMLID_425_");
	twitter.setAttribute("onclick", "window.open('https://twitter.com/SBUHacks', '_blank');");
	twitter.setAttribute("style", "cursor: pointer;");
	twitter.setAttribute("aria-label", "Twitter");

    var twitter2 = c.getElementById("XMLID_421_");
	twitter2.setAttribute("onclick", "window.open('https://twitter.com/SBUHacks', '_blank');");
	twitter2.setAttribute("style", "cursor: pointer;");
	twitter2.setAttribute("aria-label", "Twitter");

    var twitter3 = c.getElementById("XMLID_422_");
	twitter3.setAttribute("onclick", "window.open('https://twitter.com/SBUHacks', '_blank');");
	twitter3.setAttribute("style", "cursor: pointer;");
	twitter3.setAttribute("aria-label", "Twitter");

    var reddit = c.getElementById("XMLID_443_");
	reddit.setAttribute("onclick", "window.open('https://www.reddit.com/user/SBUHacks', '_blank');");
	reddit.setAttribute("style", "cursor: pointer;");
	reddit.setAttribute("aria-label", "Reddit");

    // Lazy Loading Youtube

    var youtube = document.querySelectorAll( ".youtube" );

	for (var i = 0; i < youtube.length; i++) {

		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );

				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );
	};
}
