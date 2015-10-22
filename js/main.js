function showPage(file) {
    $.get("./pages/" + file + ".html", function(data) {
        $("#presentation_content").html(data)
    });
}


$( document ).ready(function() {
    showPage("introduction");
    return false;
});

