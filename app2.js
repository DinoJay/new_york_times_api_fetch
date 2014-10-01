var $search;
var $progress;
var nested_data;

$(document).ready(function() {
  $search = $("#search");
  $progress = $("#progress");
  // TODO: fix return value get_nyt_api_data

  $("#searchButton").on("click", function(){
    get_nyt_api_data($("#start_year"), $("#end_year"), function(data){
        alert(data);
        //$progress.text("");
        nested_data = d3.nest().key(function(d){return d.value;})
                               .entries(data, d3.map);
        nested_data.forEach(function(d){
                            d.count = d.values.length;
                           });
        nested_data.sort(function(a, b){
          return b.count - a.count;
        });
    });
  });
});

