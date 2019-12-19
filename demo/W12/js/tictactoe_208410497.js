$(document).ready(function () {
  const O = "O";
  const X = "X";
  let turn = 0;

  const x1 = $("#x1");
  const x2 = $("#x2");
  const x3 = $("#x3");
  const x4 = $("#x4");
  const x5 = $("#x5");
  const x6 = $("#x6");
  const x7 = $("#x7");
  const x8 = $("#x8");
  const x9 = $("#x9");

  $.fn.check = function (player) {
    if (
      (x1.hasClass(player) && x2.hasClass(player) && x3.hasClass(player)) ||
      (x4.hasClass(player) && x5.hasClass(player) && x6.hasClass(player)) ||
      (x7.hasClass(player) && x8.hasClass(player) && x9.hasClass(player)) ||
      (x1.hasClass(player) && x4.hasClass(player) && x7.hasClass(player)) ||
      (x2.hasClass(player) && x5.hasClass(player) && x8.hasClass(player)) ||
      (x3.hasClass(player) && x6.hasClass(player) && x9.hasClass(player)) ||
      (x1.hasClass(player) && x5.hasClass(player) && x9.hasClass(player)) ||
      (x3.hasClass(player) && x5.hasClass(player) && x7.hasClass(player))
    ) {
      return true;
    } else {
      return false;
    }
  };

  $("#board li").on("click", function () {
    if ($(this).hasClass("disable")) {
      alert("點過了 不要一直點");
    } else if (turn % 2 == 0) {
      $(this).text("O");
      $(this).addClass("O disable");
      if ($.fn.check(O)) {
        alert("圈圈贏惹");
        $.fn.reset();
      } else {
        turn++;
      }
    } else if (turn % 2 == 1) {
      $(this).text("X");
      $(this).addClass("X disable");
      if ($.fn.check(X)) {
        alert("叉叉贏惹");
        $.fn.reset();
      } else {
        turn++;
      }
    }

    if (turn == 9) {
      alert("別再點了 平手了");
      $.fn.reset();
    }
  });

  $.fn.reset = function () {
    $("#board li").text("-");
    $("#board li").removeClass();
    turn = 0;
  };

  $("#reset").on("click", function () {
    $.fn.reset();
  });
});
