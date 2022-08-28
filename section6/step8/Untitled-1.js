<script type="text/javascript">
  $.fn.GgangSectionIn = function (fuc) {
    var el = $(this);
    var winScrollTop;
    var sectionOfffsetTop;
    var sectionHeight;
    var sectionOffsetBottom;
    var checkInSection = false;
    var fastIn;
    var startFunction = fuc;
    var isFunction = typeof startFunction === "function" ? true : false;

    function setProperty() {
      fastIn = $(window).height() / 2;
      winScrollTop = $(window).scrollTop();
      sectionOfffsetTop = el.offset().top - fastIn;
      sectionHeight = el.height();
      sectionOffsetBottom = sectionOfffsetTop + sectionHeight + fastIn;
    }

    function inSection() {
      setProperty();

      if (
        winScrollTop >= sectionOfffsetTop &&
        winScrollTop <= sectionOffsetBottom
      ) {
        if (isFunction && !checkInSection) {
          checkInSection = true;
          startFunction();
        }
      }
    }

    function init() {
      inSection();
    }

    $(window).scroll(function (e) {
      inSection();
    });

    $(window).resize(function () {
      inSection();
    });

    init();
  };

  $(function () {
    $(".sec01").GgangSectionIn(function () {
      $(".sec01").addClass("active");
    });

    $(".section_today").GgangSectionIn(function () {
      $(".section_today").addClass("active");
      countDate();
    });

    $(".section_product .prd_mask").GgangSectionIn(function () {
      $(".section_product .prd_mask").addClass("active");
    });

    $(".section_product .text_img").GgangSectionIn(function () {
      $(".section_product .text_img").addClass("active");
    });

    $(".section_textmask").GgangSectionIn(function () {
      $(".section_textmask").addClass("active");
    });

    $(".section_overlap").GgangSectionIn(function () {
      $(".section_overlap").addClass("active");
    });

    /* 날짜 카운트*/
    function countDate() {
      var el = $(".date_count");
      var date = new Date();
      var todayDate =
        String(date.getFullYear()) +
        String(date.getMonth() + 1) +
        String(date.getDate());
      var rolling = 24;
      var resultArray = [];
      resultArray = todayDate.split("");

      $.each(resultArray, function (idx, val) {
        var conuntBox = $('<div class="count_box" />');
        var numberArray = [];
        var number = Number(val);

        for (var i = 0; i <= rolling; i++) {
          var sum = number + i;
          var num = sum >= 10 ? Number(String(sum).split("")[1]) : sum;
          numberArray[i] = num;
        }

        numberArray.reverse();

        numberArray.forEach(function (val) {
          var countValue = $("<span/>", {
            text: val,
          });

          countValue.appendTo(conuntBox);
        });

        conuntBox
          .appendTo(el)
          .delay(idx * 300)
          .queue(function () {
            $(this).addClass("active");
          });
      });
    }

    /* 네비 리모컨*/
    $(".nav_list .list li a").click(function (e) {
      if ($(this.hash).offset()) {
        $("html").animate(
          {
            scrollTop: $(this.hash).offset().top,
          },
          500
        );
      }
    });
  });
</script>