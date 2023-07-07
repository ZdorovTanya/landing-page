// $(document).ready(function () {
  function menu(){
    console.log("kdkdk")
    $(".header__burger").click(function (event) {
      console.log("dkdkd");
      $(".header__burger,.header__menu").toggleClass("active");
      $("body").toggleClass("lock");
    });
  }
//   console.log("kdkdk")
//   $(".header__burger").click(function (event) {
//     console.log("dkdkd");
//     $(".header__burger,.header__menu").toggleClass("active");
//     $("body").toggleClass("lock");
//   });
// });
export default menu;