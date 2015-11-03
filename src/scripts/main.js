// JavaScript stuff

function popOver(element) {
	element.style.display = "block";
}

var resumeLink = document.getElementById('resume-link');
var resumeObj = document.getElementById('resume');

resumeLink.onclick = function(){
	console.log("I'm clicked! fo sho");
    popOver(resumeObj);
};