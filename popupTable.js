var elements = document.getElementsByClassName("locationLink");
for(var i=0, l=elements.length; i<l; i++){
	elements[i].addEventListener("click", openPopup, false);
}

function openPopup() {
    document.getElementById('mapPopup').className="openPopup";
}
function closePopup() {
    document.getElementById('mapPopup').className="hiddenPopup";
}