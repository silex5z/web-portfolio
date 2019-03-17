$(function () {
  var imgHeight = 0, textHeight = 0, paddTop = 0;
  setPaddingTop();

  $(window).resize(function () {
    setPaddingTop();
  });

  function setPaddingTop() {
    imgHeight = $('.section-content-wrap img').innerHeight();
    textHeight = $('.section-content-wrap ul').innerHeight();

    if($(window).innerWidth() > 767){
      paddTop = (imgHeight - textHeight) / 2 > 0 ? (imgHeight - textHeight) / 2 : 0;
    } else if($(window).innerWidth() > 500){
      paddTop = 60;
    } else {
      paddTop = 30;
    }

    $('.section-content-wrap ul').css({ paddingTop: paddTop });

    // console.log(paddTop);
  }
});