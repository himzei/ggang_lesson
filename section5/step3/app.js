$(function () {
  //패럴럭스 코드를 작성해보세요. :)
  //나머지 코드는 섹션 5-2 코드와 동일합니다.

  var header = $(".header_wrap");
  var sectionMainVisual = $(".sec_mainvis");
  var sectionOverlap = $(".sec_list_overlap");
  var winScrollTop;

  var parallaxBody = $(".sec_list_overlap");

  var sectionMainTop;
  var sectionMainBottom;
  var sectionIsMoving = false;
  var parallaxOffsetTop;
  var parallaxThisTop;
  var parallaxSpeed = 400;
  var parallaxPercent;
  var parallaxStartValue = 1000;
  var parallaxMoveDistance;

  function setProperty() {
    winScrollTop = $(window).scrollTop();
    sectionMainTop = sectionMainVisual.offset().top;
    sectionMainBottom = sectionMainTop + sectionMainVisual.height();
    parallaxOffsetTop = parallaxBody.offset().top;
    parallaxThisTop = winScrollTop - parallaxOffsetTop;
    parallaxPercent = (parallaxThisTop / parallaxSpeed) * 100;

    parallaxMoveDistance = Math.max(
      parallaxStartValue - parallaxStartValue,
      Math.min(
        parallaxStartValue,
        parallaxStartValue - parallaxStartValue * (parallaxPercent / 100)
      )
    ); //패럴럭스 요소가 움직일 거리를 구함

    console.log(parallaxMoveDistance);
  }

  function motionParallax() {}

  function moveStartRender() {
    if (!header.hasClass("active")) {
      header.addClass("active");
      sectionMainVisual.addClass("active");
      sectionOverlap.addClass("active");

      $("html")
        .stop(true)
        .animate(
          {
            scrollTop: sectionMainBottom + 1,
          },
          500,
          function () {
            sectionIsMoving = false;
          }
        );
    } else {
      header.removeClass("active");
      sectionMainVisual.removeClass("active");
      sectionOverlap.removeClass("active");

      $("html")
        .stop(true)
        .animate(
          {
            scrollTop: sectionMainTop,
          },
          500,
          function () {
            sectionIsMoving = false;
          }
        );
    }
  }

  function activeCheck() {
    header.addClass("active");
    sectionMainVisual.addClass("active");
    sectionOverlap.addClass("active");
  }

  function moveSection() {
    setProperty();
    motionParallax();
    if (winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom) {
      if (!sectionIsMoving) {
        sectionIsMoving = true;
        moveStartRender();
      }
    }

    if (winScrollTop >= sectionMainBottom) {
      activeCheck();
    }
  }

  function init() {
    moveSection();
  }

  $(window).scroll(function (e) {
    moveSection();
  });

  init();
});
