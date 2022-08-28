$.fn.scrollFullSlide = function (func) {
  var el = $(this);
  var winScrollTop;
  var sectionOffsetTop;
  var sectionHeight;
  var sectionOffsetBottom;
  var sectionIsMoving = false;
  var checkInSection = false;
  var header = $(".header_wrap");

  function setProperty() {
    winScrollTop = $(window).scrollTop();
    sectionOffsetTop = el.offset().top;
    sectionHeight = el.height();
    sectionOffsetBottom = sectionOffsetTop + sectionHeight;
  }

  function moveStartRender() {
    if (!el.hasClass("active")) {
      el.addClass("active");
      $("html")
        .stop(true)
        .animate(
          {
            scrollTop: sectionOffsetBottom,
          },
          500,
          function () {
            checkInSection = false;
          }
        );
    } else {
      el.removeClass("active");
      $("html")
        .stop(true)
        .animate(
          {
            scrollTop: sectionOffsetTop,
          },
          500,
          function () {
            checkInSection = false;
          }
        );
    }
  }

  function moveSection() {
    setProperty();
    if (
      winScrollTop - 50 > sectionOffsetTop &&
      winScrollTop + 50 < sectionOffsetBottom
    ) {
      console.log("section in");
      if (!checkInSection) {
        checkInSection = true;
        moveStartRender();
      }
    }
    if (winScrollTop >= sectionOffsetBottom) {
      activeCheck();
    }
  }

  function activeCheck() {
    header.addClass("active");
    el.addClass("active");
  }

  function init() {
    moveSection();
  }

  $(window).scroll(function (e) {
    moveSection();
  });

  init();
};

$(function () {
  $(".sec_mainvis").scrollFullSlide();
  $(".sec_list_overlap").scrollFullSlide();
});
