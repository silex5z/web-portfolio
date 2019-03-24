$(function () {
  // var marginL = 0, p=0;
    p = 90/1438;
    p1 = 25/1438;
  // marginL = 윈도우창의 너비 * 마진비율
  /* function marginLeftFn(ml) {
    if(ml >= 1100){
      ml = ml * 0.0514
    } else if (ml < 1100) {
      ml = ml * 0.025
    } else {
      ml = ml * 0.015
    }
    $('.header-nav-mainBt-wrap>li').css({
      marginLeft: ml
    })
  }  */
  // 메인메뉴 좌측여백 자동 비율계산으로 반응형 제작 제이쿼리

  // marginLeftFn($(window).innerWidth());

  /* $(window).resize(function(){
    var $ml = $(window).innerWidth();
    marginLeftFn($ml);
  }) */

  $(window).resize(function(){
    marginL = $(window).innerWidth() > 1200 ? $(window).innerWidth() * p : $(window).innerWidth() * p1;
    $('.header-nav-mainBt-wrap>li').css({
      marginLeft: marginL
    });
    $('.header-nav-mainBt-wrap>li:first-child').css({
      marginLeft: '0'
    });
  })

  $('.mobile3LineBt').on({
    click: function(){
      $('.mobile-line').toggleClass('addMobile3line');
    }
  })
  
  // 메인메뉴에 마우스 롤오버하면 모달창뜨고, 해당메뉴 
  $('.mainBt').on({
    mouseenter: function () {
      $('.mainBt').children('span').removeClass('addDeco');
      $(this).children('span').addClass('addDeco');
      $('#header, .headerModal').addClass('addModal');
      $('.subMenu').hide();
      $(this).next().show();
      $('.main1-sub').eq(0).show();
      $('.main1-subBt').children().removeClass('addDeco');
      $('.main1-subBt').eq(0).children().addClass('addDeco');
    },
    focusin: function () {
      $('.mainBt').children('span').removeClass('addDeco');
      $(this).children('span').addClass('addDeco');
      $('#header, .headerModal').addClass('addModal');
      $('.subMenu').hide();
      $(this).next().show();
      $('.main1-sub').eq(0).show();
      $('.main1-subBt').children().removeClass('addDeco');
      $('.main1-subBt').eq(0).children().addClass('addDeco');
    }

  });

  // 서브메뉴버튼 클릭이벤트
  $('.main1-subBt').on({
    click: function () {
      $('.main1-sub').hide();
      $(this).next().show();
      $('.main1-subBt').children().removeClass('addDeco');
      $(this).children('span').addClass('addDeco');
    }
  })

  $('#header').on({
    mouseleave: function () {
      $('#header, .headerModal').removeClass('addModal');
      $('.mainBt').children('span').removeClass('addDeco');
      $('.subMenu').hide();
      // $('.main1-sub').eq(0).hide();
      $('.main1-subBt').children().removeClass('addDeco');
    },
    focusout: function () {
      $('#header, .headerModal').removeClass('addModal');
      $('.mainBt').children('span').removeClass('addDeco');
      // $('.main1-sub').eq(0).hide();
      $('.main1-subBt').children().removeClass('addDeco');
    }
  });

});