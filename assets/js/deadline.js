$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var deadlineText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-times' aria-hidden='true'></i></span>" + deadlineText + "</li>");
  }
});




$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle()
});
