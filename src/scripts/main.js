// JavaScript stuff
/*
var resumeLink = document.getElementById('resume-link');
var resumeObj = document.getElementById('resume');

function popOver(element) {
	element.style.display = "block";
}

resumeLink.onclick = function(){
    popOver(resumeObj);
};
*/

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var dest = $(this).attr('href');
	//console.log(dest);
	$('html,body').animate({
		scrollTop: $(dest).offset().top-100}, 'slow');
});

$.ajax({
	method: 'GET',
	contentType: "application/json; charset=utf-8",
	url: "http://lctva.joel.io/api/online/inkblotty"
})
	.done(function(data) {
		console.log('retrieved data');
		if (data) {
			$('#stream').html('online');
		}
		else {
			$('#stream').html('offline');
		}
	});