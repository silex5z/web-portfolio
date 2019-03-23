$(function () {
  // 서브메뉴
  // $('.footer-sub').slideUp(0);
  $('.footMainBt').on({
    click: function(){
      $(this).parent().parent().siblings().find('.footer-sub').removeClass('on');
      if($(this).parent().next().hasClass('on')){
        $(this).parent().next().removeClass('on')
      } else {
        $(this).parent().next().addClass('on');
      }
    }
  })
});