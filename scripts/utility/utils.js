$(document).ready(function () {
  loadMenu();
});

function loadMenu() {
  $.ajax({
    url: "menu.html",
    type: "GET",
    dataType: "text",
    processData: false,
    success: function (res) {
      $(".menu").html(res);
      const pageName = window.location.pathname.split("/").pop();
      $(`.menu a[href="${pageName}"]`).addClass("active");
    },
  });
}
