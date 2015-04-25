 (function() {
 	var saveButton = document.getElementById("save");
 	saveButton.addEventListener("click", function(){
 		saveSvgAsPng(document.getElementById("Layer_1"), "diagram.png");

 	});

})();