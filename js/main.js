function showPage(file) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("presentation_content").innerHTML = xmlhttp.responseText;
            
            if (file == "advanced")
            {
                $('#successAlert').hide();
                $('#warningAlert').hide();
                $('#failureAlert').hide();
                $('[data-toggle="popover"]').popover();
            }
        
        }
        else{
            document.getElementById("presentation_content").innerHTML = "<p>There was an error loading the introduction</p>"
        }
    }   
    xmlhttp.open("GET", "./pages/"+file+".html", true);
    xmlhttp.send();
}


$( document ).ready(function() {
    showPage("introduction");
    return false;
});

function showSuccess() {
   $('#successAlert').show();
   $('#warningAlert').hide();
   $('#failureAlert').hide();
}
function showWarning() {
   $('#warningAlert').show();
   $('#successAlert').hide();
   $('#failureAlert').hide();
}
function showError() {
   $('#failureAlert').show();
   $('#successAlert').hide();
   $('#warningAlert').hide();
}
