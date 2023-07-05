$(document).ready(function () {
  $(".header__burger").click(function (event) {
    console.log("dkdkd");
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
