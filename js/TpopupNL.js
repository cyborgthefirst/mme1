
document.getElementById('Tpopup-closebutton').addEventListener("click", closePopup, false);

document.addEventListener('change', startWait, false);

var ival = setTimeout(showHomepage, 45000);

function openPopup() {
    document.getElementById('timeoutPopup').style.display = 'block';

}
function closePopup() {
    document.getElementById('timeoutPopup').style.display = 'none';
}

function showHomepage(){
    location.href = "index.html";
}

function startWait(){
    clearTimeout(ival);
    setTimeout(openPopup, 30000);
    }
