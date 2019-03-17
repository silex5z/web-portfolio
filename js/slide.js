$(function(){
  var s = [], imgH = 0, setId;
  var n = $('.slide').length; // 전체 슬라이드 개수
  for(var i=0; i <= n-1; i++){
    s[i] = 0
  }
  s[0] = 1;

  slideNavBtFn(0); // 네비게이션 버튼 첫번째
  autoPlayFn();

  /*
  // 슬라이드 이미지 높이 홈페이지 처음 로드시 한번 설정
  $(window).resize(function(){
    imgResizeFn();
  });
  
  function imgResizeFn() { // 화면의 높이나 너비가 변경되면 계산 반응
    // 슬라이드 이미지 높이 
    imgH = $('.section7-slide-wrap img').innerHeight();
    // 슬라이드 박스 높이 자동 설정
    $('.section7-slide-wrap').css({
      height: imgH
    })  
  }
 */

  function autoPlayFn() {
    setId = setInterval(nextSlide, 4000);
  }

  // 슬라이드 섹션영역을 떠나면 leave
  // $('#section7').on('mouseleave', function(e){
  //   console.log(e);
  //   autoPlayFn();
  // })

  $('.section7-slide-arrow-wrap').on({
    mouseleave: function(){
      autoPlayFn();
    },
  })

  // 네비게이션 버튼 그룹 박스 위에 마우스 올리면 자동 실행 일시정지
  $('.section7-slide-nav-wrap').on({
    mouseenter: function(){
      clearInterval(setId);
    },
    mouseleave: function(){
      autoPlayFn();
    }
  })

  // 반응형 텍스트 박스 높이 가장 큰걸 찾아서 텍스박스 높이를 모두 같게 설정
  txtBoxHResize(); // 초기값

  // 반응형
  $(window).resize(function(){
    txtBoxHResize();
  });

  function txtBoxHResize() {
    imgH0=$('.section7-slide-image').eq(0).innerHeight();
    imgH1=$('.section7-slide-image').eq(1).innerHeight();
    imgH2=$('.section7-slide-image').eq(2).innerHeight();

    // txtH0 = $('.section7-slide-content').eq(0).innerHeight();
    // txtH1 = $('.section7-slide-content').eq(1).innerHeight();
    txtH2 = $('.section7-slide-content').eq(2).innerHeight();
    // console.log( txtH2 );
    if($(window).innerWidth() <= 767){
      $('.section7-slide-content').css({
        height: txtH2
      })
      // 텍스트박스 안으로 들어가 있는 상태를 해제
      $('.slide>div').css({transition:'all 0s'}).removeClass();
    } else {
      $('.section7-slide-content').css({
        height: 'auto'
      })
      $('.slide>div').css({transition:'all .3s'})
    }
  }
  

  // 슬라이드 네비게이션 버튼 이벤트
  $('.slideNavBt').each(function(index){
    $(this).on({
      click: function(){
        if (index == 0){
          if(s[0] !=1){
            prevSlide0();
          }
        } else if (index == 1) {
          if(s[0] == 1){
            slide1();
          } else if(s[2] == 1) {
            prevSlide1();
          }
        } else if (index == 2) {
          if(s[2] !=1){
            slide2()
          }
        }
      }
    })

  })
  
  // 터치이벤트(모바일 스와이프 레프트 라이트)
  $('.section7-slide-wrap').on({
    swipeleft: function() {
      clearInterval(setId);
      nextSlide();
    },
    swiperight: function() {
      clearInterval(setId);
      prevSlide();
    }
  })
  
  // 우측 화살 버튼 클릭 이벤트
  $('.arrowNextBt').on({
    click: function(){
      nextSlide();
    },
    mouseenter: function(){
      clearInterval(setId);
    },
    focusin: function(){
      clearInterval(setId);
    },

  })
  
  // 좌측 화살 버튼 클릭 이벤트
  $('.arrowPrevBt').on({
    click: function(){
      prevSlide();
    },
    mouseenter: function(){
      clearInterval(setId);
    },
    focusin: function(){
      clearInterval(setId);
    },
  })

  function nextSlide() {
    // for(i=0; i <= n-1; i++) {
    //   if(s[i] == 1) {
    //     if(i==n-1) {
    //       slide0();
    //     } else {
    //       slide(i+1);
    //     }
    //   }
    // }
    if(s[0] == 1) {
      slide1();
    } else if( s[1] == 1) {
      slide2();
    } else if( s[2] == 1) {
      slide0();
    }
  }

  function prevSlide() {
    if(s[0] == 1) {
      prevSlide2();
    } else if( s[1] == 1) {
      prevSlide0();
    } else if( s[2] == 1) {
      prevSlide1();
    }
  }

  // Next 슬라이드 
  function slide0() { // 우에서 좌로 이동
    for(var i=0; i <= n-1; i++){
      s[i] = 0
    }
    s[0] = 1;
    slideNavBtFn(0);
    $('.slide').eq(2).stop().animate({left:'0%'},0).animate({left:'-100%'},1000)
    $('.slide').eq(0).stop().animate({left:'100%'},0).animate({left:'0%'},1000)
    $('.slide').eq(1).stop().animate({left:'200%'},0).animate({left:'100%'},1000)
  }

  function slide1() {
    for(var i=0; i <= n-1; i++){
      s[i] = 0
    }
    s[1] = 1;
    slideNavBtFn(1);
    $('.slide').eq(0).stop().animate({left:'0%'},0).animate({left:'-100%'},1000)
    $('.slide').eq(1).stop().animate({left:'100%'},0).animate({left:'0%'},1000)
    $('.slide').eq(2).stop().animate({left:'200%'},0).animate({left:'100%'},1000)
  }

  function slide2() {
    for(var i=0; i <= n-1; i++){
      s[i] = 0
    }
    s[2] = 1;
    slideNavBtFn(2);
    $('.slide').eq(1).stop().animate({left:'0%'},0).animate({left:'-100%'},1000)
    $('.slide').eq(2).stop().animate({left:'100%'},0).animate({left:'0%'},1000)
    $('.slide').eq(0).stop().animate({left:'200%'},0).animate({left:'100%'},1000)
  }

  // Previous 슬라이드
  function prevSlide2() { // 포지션 좌에서 우로 이동
    for(var i=0; i <= n-1; i++){
      s[i] = 0
    }
    s[2] = 1;
    slideNavBtFn(2);
    $('.slide').eq(0).stop().
    animate({left:'0%'},0).animate({left:'100%'},1000)
    $('.slide').eq(2).stop().animate({left:'-100%'},0).animate({left:'0%'},1000)
    $('.slide').eq(1).stop().animate({left:'-200%'},0).animate({left:'-100%'},1000)
  }

  function prevSlide1() {
    for(var i=0; i <= n-1; i++){
      s[i] = 0
    }
    s[1] = 1;
    slideNavBtFn(1);
    $('.slide').eq(2).stop().animate({left:'0%'},0).animate({left:'100%'},1000)
    $('.slide').eq(1).stop().animate({left:'-100%'},0).animate({left:'0%'},1000)
    $('.slide').eq(0).stop().animate({left:'-200%'},0).animate({left:'-100%'},1000)
  }

  function prevSlide0() {
    for(var i=0; i <= n-1; i++){
      s[i] = 0
    }
    s[0] = 1;
    slideNavBtFn(0);
    $('.slide').eq(1).stop().animate({left:'0%'},0).animate({left:'100%'},1000)
    $('.slide').eq(0).stop().animate({left:'-100%'},0).animate({left:'0%'},1000)
    $('.slide').eq(2).stop().animate({left:'-200%'},0).animate({left:'-100%'},1000)
  }
  
  // 네비게이션 버튼 함수
  function slideNavBtFn(z) {
    $('.section7-slide-nav-wrap>li').removeClass('addNavCircle');
    $('.section7-slide-nav-wrap>li').eq(z).addClass('addNavCircle');
  }


  // 좌측 텍스트 그룹 박스 이벤트
  $('.openCloseBt').on({
    click: function(){
      $(this).parent().parent().parent().toggleClass('addAniText')
    },
    mouseenter: function(){
      clearInterval(setId);
    },
    mouseleave: function(){
      autoPlayFn();
    },
    focusin: function(){
      clearInterval(setId);
    },
    focusout: function(){
      autoPlayFn();
    },
  })
})