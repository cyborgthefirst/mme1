function loadableHTMLContent(id, txtResource) {
    var loaded = false;
    function loadTXTasync(id,txtResource){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById(id).innerHTML = xhttp.responseText;
                loaded = true;
            }
        };
        xhttp.open("GET", txtResource, true);
        xhttp.send();
    }

    return {
        getLoaded: function () {
            return loaded;
        },
        loadHTML: function () {
            if(!loaded){    
                loadTXTasync(id, txtResource);
            }
        }
    };
}


$(document).ready(function(){
    var homePage = loadableHTMLContent("homePage","txt/homePage.txt");
    var discoverPage = loadableHTMLContent("discoverPage","txt/discoverPage.txt");
    var contributePage = loadableHTMLContent("contributePage","txt/contributePage.txt");
    var contactPage = loadableHTMLContent("contactPage","txt/contactPage.txt");
    var impressumPage = loadableHTMLContent("impressumPage","txt/impressumPage.txt");
    
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
    $('#contactLink').click(function(){
        if(!contactPage.getLoaded()){
            contactPage.loadHTML();
            if(contactPage.getLoaded()){
               window.dispatchEvent(new Event('customCFVStart'));
            }
        }
    })    
    $('#impressumLink').click(function(){
        if(!impressumPage.getLoaded()){
            impressumPage.loadHTML();
        }
    })
});