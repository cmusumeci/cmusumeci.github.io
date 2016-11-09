$(function(){$(".page-scroll").bind("click",function(a){var b=$(this);$("html, body").stop().animate({scrollTop:$(b.attr("href")).offset().top-340},1200,"easeInOutExpo"),a.preventDefault()})});
$(function () {
    $(".custom-close").on('click', function() {
        $('#myModal').modal('hide');
    });
});
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
