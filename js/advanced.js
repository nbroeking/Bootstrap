
alert('lodl');
$('#successAlert').hide();
$('#warningAlert').hide();
$('#failureAlert').hide();
console.log('hi');
// Success Button
function test2() {
   alert('test');
}

// Warning Button
$('#warningButton').on('click', function () {
	alert('lol')
	$('.warningAlert').show();
})

// Failure Button
$('#failureButton').on('click', function () {
	$('.failureAlert').show();
})



//$('#myAlert').on('closed.bs.alert', function () {
  // do something…
//})

