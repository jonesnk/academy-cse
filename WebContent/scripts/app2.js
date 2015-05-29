  (function() {
	  
	window.__gcse = {
		      callback: myCallback
	};
	
	function myCallback() { 
		alert("loaded!");
		
		$('#google-cse').on("click", ".gsc-tabHeader", function() {
			 console.log('clicked');
		});
	}
	  
    var cx = '005976631982810751451:tmthppmgbz8';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();