$(function () {
  var winScrollTop;
  var sectionMainVisual = $(".sec_mainvis");
  var header = $(".header_wrap");
  var sectionOverlap = $(".sec_list_overlap");
  var sectionMainTop;
  var sectionMainBottom;
  var sectionIsMoving = false;

  function setProperty() {
    // 스크롤 위치
    winScrollTop = $(window).scrollTop();
    // .sec_mainvis 의 스크롤 값
    sectionMainTop = sectionMainVisual.offset().top;
    sectionMainBottom = sectionMainTop + sectionMainVisual.height();

    if (winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom) {
      if (!sectionIsMoving) {
        sectionIsMoving = true;
        moveStartRender();
      }
    }
  }
  function moveStartRender() {
    if (!header.hasClass("active")) {
      header.addClass("active");
      sectionMainVisual.addClass("active");
      sectionOverlap.addClass("active");
      $("html")
        .stop(true)
        .animate(
          {
            scrollTop: sectionMainBottom,
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
  function acctiveCheck() {
    header.addClass("active");
    sectionMainVisual.addClass("active");
    sectionOverlap.addClass("active");
  }
  function moveSection() {
    setProperty();
    if (winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom) {
      if (!sectionIsMoving) {
        sectionIsMoving = true;
        moveStartRender();
      }
    }
    if (winScrollTop >= sectionMainBottom) {
      acctiveCheck();
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
