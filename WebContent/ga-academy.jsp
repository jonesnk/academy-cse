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

/*--------------Google CSE-----------------------------------------*/
.gsc-tabsArea div > div.gsc-tabHeader /*tab1*/
{
    display: none !important;
}
.gsc-tabsArea div > div.gsc-tabHeader + span + div.gsc-tabHeader  /*tab2*/
{ 
    display: inline-block !important;
    zoom: 1 !important;
    *display: inline !important;
}
.gsc-tabsArea div > div.gsc-tabHeader + span + div.gsc-tabHeader + span + div.gsc-tabHeader /*tab3*/
{  
    display: none !important;
}
.gsc-tabsArea div > div.gsc-tabHeader + span + div.gsc-tabHeader + span + div.gsc-tabHeader + span + div.gsc-tabHeader /*tab4*/
{ 
    display: inline-block !important;
    zoom: 1 !important;
    *display: inline !important;
}

.gs-per-result-labels span {
	display: none !important;
}

[data-refinementlabel="catalog"] {
    display: none !important;
}
 
</style>
<link rel="stylesheet" href="css/google-cse-default.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
</head>
<body>

<h1>Google CSE Academy</h1>

<h1>Help me please</h1>
<div id="academy-search-container"></div>
<script>

var myCallback = function() {
  if (document.readyState == 'complete') {
	google.search.cse.element.render(
        {
          div: "academy-search-container",
          tag: 'search',
          gname: 'academy-search',
          attributes: ({
        	  defaultToRefinement : "Catalog"  
          })
         });   
  } else {
    // Document is not ready yet, when CSE element is initialized.
    google.setOnLoadCallback(function() {   	
       // Render an element with both search box and search results in div with id 'test'.
        google.search.cse.element.render(
            {
              div: "academy-search-container",
              tag: 'search',
              gname: 'academy-search',
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