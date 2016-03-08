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

/*
var settings = {
	async: true,
	crossDomain: true,
	url: "http://lctva.joel.io/api/online/inkblotty",
	method: "GET",
	success: function() {
		console.log('success!');
	}
};*/

$.ajax({
	async: true,
	contentType: 'application/json',
	crossDomain: true,
	url: "http://lctva.joel.io/api/online/inkblotty/",
	method: "GET",
	success: function() {
		console.log('success!');
	},
	complete: function(xhr, textStatus) {
		console.log(xhr.status);
	}
}).done(function(response) {
	console.log('thingy');
	console.log(response);
});