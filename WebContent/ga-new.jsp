<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Google CSE</title>

<style type="text/css">
/*.gsc-tabsArea { display: none; }*/
html {
font-family: Arial;
}

.gsc-result-info {
font-size: 30px;
}

.gsc-control-cse {
     font-family: Arial, san-serif !important;
    
}

.gsc-tabsArea div > div.gsc-tabHeader  { background-color: red !important; }
.gsc-tabsArea div > div.gsc-tabHeader + span + div.gsc-tabHeader  { background-color: green !important;}
.gsc-tabsArea div > div.gsc-tabHeader + span + div.gsc-tabHeader + span + div.gsc-tabHeader  { background-color: yellow !important; }
.gsc-tabsArea div > div.gsc-tabHeader + span + div.gsc-tabHeader + span + div.gsc-tabHeader + span + div.gsc-tabHeader  { background-color: orange !important;}

.gsc-tabsArea div > div:first-child  {

 /*display: none !important; */

}

.gsc-tabsArea div > div:nth-last-child(2)  {

/* display: none !important; */

}
 
</style>
<link rel="stylesheet" href="css/google-cse-default.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
</head>
<body>

<h1>Google CSE Test</h1>

<!-- <div id="google-cse"> -->
<!-- <gcse:search></gcse:search> -->
<!-- </div> -->

<div id="test">hello</div>

<script>

$(function() {
		
		$("body").on("click", ".gsc-control-cse .gsc-search-button", function(){
		   alert("clicked");
		});
});
var myCallback = function() {
  if (document.readyState == 'complete') {
    // Document is ready when CSE element is initialized.
    // Render an element with both search box and search results in div with id 'test'.
    
       	//$(function() {
       		
       		//$("body").on("click", ".gsc-control-cse .gsc-search-button", function(){
       		//   alert("clicked");
       		//});
       		
       		//$(document).find('#test .gsc-result-info').remove();
       		

    		//bind to our custom event for the `.sub-element` elements
    		//$("#test").on('custom-update', '#custom-element', function() {
    		//	$(this).html('<b>yaay!</b>');
    		//});
    		
    		//$("#test").append('<div id="custom-element">No worky!</div>').children().last().trigger('custom-update');
    		
    	 
    
    google.search.cse.element.render(
        {
          div: "test",
          tag: 'search',
          attributes: ({
        	  defaultToRefinement : "Catalog"  
          })
         });   
  } else {
    // Document is not ready yet, when CSE element is initialized.
    google.setOnLoadCallback(function() {
	
    	$(function() {
    		
    		$(document).find('#test .gsc-result-info').remove();
    		
    		$(document).on('click', '#___gcse_0', function() {

    		});
    		
    		//bind to our custom event for the `.sub-element` elements
    		$("#test").on('custom-update', '#custom-element', function() {
    			$(this).html('<b>yaay!</b>');
    		});
    		
    		
    		$("#test").append('<div id="custom-element">No worky!</div>').children().last().trigger('custom-update');
    		
    	  });
    	
       // Render an element with both search box and search results in div with id 'test'.
        google.search.cse.element.render(
            {
              div: "test",
              tag: 'search',
              attributes: ({
            	  defaultToRefinement : "Catalog"  
              })
            });
    }, true);
    
   
  }
};

// Insert it before the CSE code snippet so that cse.js can take the script
// parameters, like parsetags, callbacks.
window.__gcse = {
  parsetags: 'explicit',
  callback: myCallback
};

(function() {
  var cx = '005976631982810751451:tmthppmgbz8'; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script'); gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();
</script>
</body>
</html>