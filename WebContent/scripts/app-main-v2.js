
var _prevIndex = 0;
var _nextIndex = 0;
var _resultsPerPage = 10;
var _pageNumber = 1;
var href1 = ""; //default to catalog results

$(function (){	
	$('#refinement-list li:first').addClass('active');
	//var searchTerm = document.getElementById("txtSearchTerm").value;
	
	var searchTerm = getParameterByName('search-text');
	{ Search(searchTerm,0,href1);}
	var xxx = window.location.href;
	
	
	$('#txtSearchTerm').val(searchTerm);
    $('#btnSearch').show().click(function () { Search(searchTerm,0,href1);});
    
    $('#txtSearchTerm').keypress(function (e) {
    	  if (e.which == 13) {
    		  $('#btnSearch').click();
    	  }
    });
    
    
    $("#container").on("click", "#txtDidYouMean", function(e){
    	$('#correctedQuery').hide();
    	$('#notFound').hide();
    	var $thisText = $(this).text();
		$(searchTerm).val($thisText);
		{ Search($thisText,0,href1);}
		$('#refinements').hide();	
	    e.preventDefault();
	 });

    $("#refinements").on("click", "#refinement-list li a", function(e){
    	$('#refinement-list li').removeClass('active');
        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
		href1 = $(this).attr("href");
		Search(searchTerm,0,href1);
	    e.preventDefault();
	 });
    $('#prev').click(function () { Search(searchTerm,-1,href1); });
    $('#next').click(function () { Search(searchTerm,1,href1);  });
//    $(document).on('submit','form', function(){
//    	{Search($("#txtSearchTerm").val(),0,href1);}
//    });
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function Search(term, direction, facet)
{
	
    var startIndex = 1;

    if (direction === -1)
    {
        startIndex = _prevIndex; 
        _pageNumber--;
    }
    if (direction === 1)
    {
        startIndex = _nextIndex; 
        _pageNumber++;
    }
    if (direction === 0)
    {
        startIndex = 1; 
        _pageNumber = 1;
    }

    var url = "https://www.googleapis.com/customsearch/v1?key="
    + mGoogleApiKey + "&num=10&cx=" + mGoogleCustomSearchKey + "&start=" + startIndex + "&q=" + escape(term) + "+" + facet +"&callback=?";

    $.getJSON(url, '', SearchCompleted);
}

function SearchCompleted(response)
{
    var html = "";
    $("#searchResult").html("");
    $("#output").html("");
    var notFound = "<div id='notFound'>No matching pages found</div>";
//    $('#refinement-list').empty(); 
    $("#output, .pagination").show();

    if (response.items == null)
    {
    	 if (response["spelling"]){
    		 var tspelling= response.spelling.correctedQuery;
    		 
    		// var str = '#this #is__ __#a test###__';
    		 console.log(tspelling.replace(/ more:catalog/g, " ").replace(/ more:articles/g, " ").replace(/ more:leadership_development_catalog/g, " "));
    			 
    			 
    		 var cspelling= tspelling.replace(" more:catalog", "").replace(" more:articles", "").replace(" more:leadership_development_catalog", "");
    		$('#refinements').hide();
    		$('#correctedQuery').show();
    		$('#correctedQuery').html("<em>Did you mean</em>: "+"<a href='#' id='txtDidYouMean'>"+ escape(cspelling) +"</a><em>?</em>"); 
    	}
    	
        $("#output, .pagination").hide();
    	$("#searchResult").html(notFound);
    	$('#searchResult').show();
        return;
    }

    if (response.items.length === 0)
    {
       
        $("#output, .pagination").hide();
        $('#refinements').show();
        $("#searchResult").html(notFound);
        $('#searchResult').show();

        return;
    }

    $("#searchResult").html("About "+ response.queries.request[0].totalResults +" results ("+response.searchInformation.formattedSearchTime+" seconds)");

    if (response.queries.nextPage != null)
    {
        _nextIndex = response.queries.nextPage[0].startIndex;
        $("#next").show();
    }
    else
    {
        $("#next").hide();
    }

    if (response.queries.previousPage != null)
    {
        _prevIndex = response.queries.previousPage[0].startIndex;
        $("#prev").show();
    }
    else
    {
        $("#prev").hide();
    }

    if (response.queries.request[0].totalResults > _resultsPerPage)
    {
        $("#lblPageNumber").show().html(_pageNumber);
    }
    else
    {
        $("#lblPageNumber").hide();
    }
    
   /* var refinements = [];
    $.each(response.context.refinements, function(i, item) {    	  
  	  if(item[0].anchor != 'Leadership Development Catalog'){
    	refinements.push('<li><a href="'+item[0].label_with_op+'">'+item[0].anchor+"</a></li>");
  	  }
    });
    
    refinements.sort();
    
    $('#refinement-list').append( refinements.join('') );*/

    html += "<hr />";
    
    for (var i = 0; i < response.items.length; i++)
    {
        var item = response.items[i];
        var title = item.htmlTitle;
        var snippet = item.htmlSnippet;      
        var csnippet = snippet.replace("<br>", "");       
        var icon = icon = "class='cmisc' title='Other page'";

        title = title.replace("- Peter Hahndorf", "");
        title = title.replace("- Forever Breathes The Lonely Word", "");
        title = title.replace("Forever Breathes The Lonely Word - ", "");
        title = title.replace(" - Browse", "");

        if (item.link.indexOf("/tech/") > -1)
        {
            icon = "class='ctech' title='Tech Stuff'";
        }

        if (item.link.indexOf("/trip/") > -1)
        {
            icon = "class='ctravel' title='Travel'";
        }

        if (item.link.indexOf("/blog/") > -1)
        {
            icon = "class='cblog' title='Technical blog'";
        }
        
        //var pagemap = typeof(item.pagemap) != "undefined" ? "<div class='img'><img src="+item.pagemap.cse_thumbnail[0].src+" width="+item.pagemap.cse_thumbnail[0].width+" height="+item.pagemap.cse_thumbnail[0].height+" /></div>" : "hello";
        // var pagemap = item.hasOwnProperty('pagemap');
        
        html += "<div class='result'>";
        html += "<div class='hcHead2'><a target='_blank' title='"+title+"' href='" + item.link + "'> " + title + "</a></div>";
        html += "<div class='link'>"+item.link+ "</div>";       	
     
        if (item["pagemap"] && item["pagemap"].cse_thumbnail){
        	html += "<div style='float:left;width:100%'><div class='img' style='width:10%;float:left;'><img src="+item.pagemap.cse_thumbnail[0].src+" width='70' /></div>";
        	html += "<div class='snippet' style='width:90%;float:right;'>"+csnippet+ "</div>";
        	html += "</div>";
        //html += "<div class='img'><img src="+item.pagemap.cse_thumbnail[0].src+" width="+item.pagemap.cse_thumbnail[0].width+" height="+item.pagemap.cse_thumbnail[0].height+" />";
        }
        
        else {
        	html += "<div class='snippet'>"+csnippet+ "</div>";
        }
       
        
        html += "</div>";
        
//        if (item["labels"]){
//            html += "<div class='category'>Category: "+item.labels[0].displayName+"</div>";
//         }
        html += "</div>";
    }
   
	$('#refinements').show();
    $("#output").html(html);
    $('#searchResult').show();
}
