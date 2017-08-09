console.log("My First call to another server using AJAX");


var url = "https://api.nytimes.com/svc/topstories/v2/world.json";
url += '?' + $.param({
  'api-key': "0a25350fb21f4a6f988e4140ea4f32b7"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(nytimesResponse) {
  for(var i = 0; i < nytimesResponse.results.length; i++){
  	$("#title").append((i+1)+".<span>Title:</span> " +nytimesResponse.results[i].title+" "+nytimesResponse.results[i].abstract+"<br>"+"<br>");
  }	
  console.log(nytimesResponse);
}).fail(function(err) {
  throw err;
});