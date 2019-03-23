$(function () {
  $('.mainBt').on({
    mouseenter: function(){
      $('#header, .headerModal, .subMenu1').addClass('addModal');
    }
  });

  $('#header').on({
    mouseleave: function(){
      $('#header, .headerModal, .subMenu1').removeClass('addModal');
    }
  })

});