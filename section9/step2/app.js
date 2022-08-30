$(function () {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var el = document.querySelector(".canvas_wrap");
  var imgLength = 116;
  var imgSrc = "../images/seq/";
  var imgFormat = ".jpg";
  var imgArray = [];
  var imageIterlator = 0;
  var scrollBody = $(".fix_motion");
  var scrollHeight;
  var scrollRealHeight;
  var winScrollTop;
  var sectionOffsetTop;
  var sectionScrollTop;
  var scrollPercent;
  var percent;
  var imgWidth;
  var imgHeight;

  function setProperty() {
    scrollHeight = scrollBody.height();
    scrollRealHeight = scrollHeight - $(window).height();
    winScrollTop = $(window).scrollTop();
    sectionOffsetTop = scrollBody.offset().top;
    sectionScrollTop = winScrollTop - sectionOffsetTop;
    scrollPercent = sectionScrollTop / scrollRealHeight;
    percent = scrollPercent * 100;
    imgWidth = 1920;
    imgHeight = 1080;
  }
  function setCanvas() {
    canvas.width = imgWidth;
    canvas.height = imgHeight;
  }
  function bindEvent() {
    $(window).scroll(function () {
      setProperty();

      scrollFunc();
    });
  }

  function scrollFunc() {
    var sequence = Math.min(
      imgLength,
      Math.max(0, Number((imgLength * scrollPercent).toFixed(0)))
    );
    renderCanvas(sequence);
    contentIn()
  }

  function renderCanvas(sequence) {
    ctx.clearRect(0, 0, imgWidth, imgHeight);
    ctx.drawImage(imgArray[sequence], 0, 0, imgWidth, imgHeight);
  }

  function contentIn (){
    if 
  }

  function init() {
    el.appendChild(canvas);
    for (var i = 0; i <= imgLength; i++) {
      var img = new Image();
      var path = imgSrc + i + imgFormat;
      img.src = path;
      imgArray.push(img);

      img.onload = function () {
        imageIterlator += 1;

        if (imageIterlator === imgLength) {
          bindEvent();
          setProperty();
          setCanvas();
          scrollFunc();
        }
      };
    }
  }
  init();
});
