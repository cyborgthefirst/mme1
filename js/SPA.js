function loadableHTMLContent(id, txtResource) {
    var loaded = false;
    return {
        getLoaded: function () {
            return loaded;
        },
        loadHTML: function () {
            loaded = true;
            loadTXT(id, txtResource);
        }
    };
}

function loadTXT(id,txtResource){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById(id).innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", txtResource, true);
    xhttp.send();
    /*setInterval(function(){
        console.log(id + " " +xhttp.readyState + " " + xhttp.status);
    },400);*/
}

$(document).ready(function(){
    var homePage = loadableHTMLContent("homePage","txt/homePage.txt");
    var discoverPage = loadableHTMLContent("discoverPage","txt/discoverPage.txt");
    var contributePage = loadableHTMLContent("contributePage","txt/contributePage.txt");
    var contactPage = loadableHTMLContent("homePage","txt/homePage.txt");
    var impressumPage = loadableHTMLContent("homePage","txt/homePage.txt");
    
    $('#homeLink').click(function(){
        if(!homePage.getLoaded()){
            homePage.loadHTML();
        }
    })
    $('#discoverLink').click(function(){
        if(!discoverPage.getLoaded()){
            discoverPage.loadHTML();
        }
    })
    $('#contributeLink').click(function(){
        if(!contributePage.getLoaded()){
            contributePage.loadHTML();
        }
    })

});