	 $("#gsc-i-id1").keyup(function(){
			 $("h1").css("background-color", "pink");
	});
	

var myCallback = function() {
  if (document.readyState == 'complete') {
    // Document is ready when CSE element is initialized.
    // Render an element with both search box and search results in div with id 'test'.
    google.search.cse.element.render(
        {
          div: "test",
          tag: 'search',
          attributes : {
        	  newWindow: true,
        	  defaultToRefinement: "Catalog"
          }
         });
	
  } else {
    // Document is not ready yet, when CSE element is initialized.
    google.setOnLoadCallback(function() {
       // Render an element with both search box and search results in div with id 'test'.       
        google.search.cse.element.render(
            {
              div: "test",
              tag: 'search',
              attributes : {
            	  newWindow: true,
            	  defaultToRefinement : "Catalog"
              }
            });
    }, true);
  }
};