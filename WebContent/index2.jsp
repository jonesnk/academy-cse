<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Google CSE</title>

<style type="text/css">
html 
{
	font-family: Arial;
}
.gsc-result-info
{
	font-size: 30px;
}
.gsc-control-cse
{
     font-family: Arial, san-serif !important;
}
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
</style>
<script>
(function() {
  var cx = '005976631982810751451:tmthppmgbz8'; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script'); gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();
</script>
</head>
<body>

<h1>Google CSE Test</h1>


<gcse:search defaultToRefinement="catalog"></gcse:search>




</body>
</html>