var elements = document.getElementsByClassName("locationLink");
for(var i=0, l=elements.length; i<l; i++){
	elements[i].addEventListener("click", openPopup, false);
}

document.getElementById('closeMap').addEventListener("click", closePopup, false);

function openPopup() {
    document.getElementById('mapPopup').className="openPopup";
    lat = 41.390205;
    lng = 2.154007;
    initialize(lat,lng);
}
function closePopup() {
    document.getElementById('mapPopup').className="hiddenPopup";
}

function initialize(var1, var2) {
  var mapProp = {
    center:new google.maps.LatLng(var1,var2),
    zoom:11,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("maps"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
