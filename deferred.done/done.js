console.log("Hello deferred method .done()");

// 3 functions to call when the Deferred object is resolved
function fn1(n) {
  $( "p" ).append( "I'm called first,  " + n  );
}
function fn2() {
  $( "p" ).append( " I'm second. " );
}
function fn3(n) {
  $( "p" ).append(" I'm called third  " + n);
}
function fn4() {
  $( "p" ).append( " I'm fourth " );
}
 
// Create a deferred object
var dfd = $.Deferred();
 
// Add handlers to be called when dfd is resolved
dfd
// .done() can take any number of functions or arrays of functions.
  .done( [ fn1, fn2 ], fn3, fn4) //we callback all this functions 
// We can chain done methods, too. Now we resolve this one.
  .done(function( n ) {
    $( "p" ).append( n + " we're done." );
  });
 
// Resolve the Deferred object when the button is clicked
$( "button" ).on( "click", function() {
  dfd.resolve( "and" ); //notice here we pass the argument "and" to all functions above from the resolve
});