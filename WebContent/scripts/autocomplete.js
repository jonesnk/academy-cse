$(function() {
 
    $("#txtSearchTerm").autocomplete({
    	source: function (request, response) {
            $.ajax({
              url: "http://clients1.google.com/complete/search?q="  + escape(request.term) +  "&hl=en&client=partner&source=gcsc&partnerid="+ mGoogleCustomSearchKey +"&ds=cse&nocache=" + Math.random().toString(),
              dataType: "jsonp",
              success: function (data) {
                response($.map(data[1], function (item) {
                  return {
                    label: item[0],
                    value: item[0]
                  };
                }));
              }
            });
          },
        minLength: 2,
        autoFill: true,
        minChars: 0,
        select: function (event, ui) {
        	console.log(ui.item.value);
         // $(this).closest('input').val(ui.item.value);
         // $(this).closest('form').trigger('submit');
        },
        html: true, // optional (jquery.ui.autocomplete.html.js required)
      // optional (if other layers overlap autocomplete list)
        open: function(event, ui) {
            $(".ui-autocomplete").css("z-index", 1000);
        }
    });
 
});




/*$(function () {
  $('input#txtSearchTerm')
    .focus(function () { this.select(); })
    .mouseup(function (e) { e.preventDefault(); })
    .autocomplete({
      position: {
        my: "left top",
        at: "left bottom",
        offset: "0, 5",
        collision: "none"
      },
      source: function (request, response) {
        $.ajax({
          url: "http://clients1.google.com/complete/search?q="  + request.term +  "&hl=en&client=partner&source=gcsc&partnerid="+ mGoogleCustomSearchKey +"&ds=cse&nocache=" + Math.random().toString(),
          dataType: "jsonp",
          success: function (data) {
            response($.map(data[1], function (item) {
              return {
                label: item[0],
                value: item[0]
              };
            }));
          }
        });
      },
      autoFill: true,
      minChars: 0,
      select: function (event, ui) {
        $(this).closest('input').val(ui.item.value);
        $(this).closest('form').trigger('submit');
      }
    });
});*/