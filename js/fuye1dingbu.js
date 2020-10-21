// 回到顶部
$(function () {
  // 1 通过浏览器卷曲的高度来决定按钮的显示和隐藏
  $(window).scroll(function () {
    // 通过浏览器卷曲的高度来决定
    if ($(window).scrollTop() >= 1550) {
      // 让回到顶部按钮显示
      $(".hdb").fadeIn();
    } else {
      // 让回到顶部按钮隐藏
      $(".hdb").fadeOut();
    }
  });
});

$("ul>li").click(function () {
  $(this) //你点击的那一个li
    .addClass("active") //添加类名
    .siblings() //所有兄弟元素(不包括自己)
    .removeClass("active") //移除类名
    .parent() //找到父元素ul
    .next() //下一个兄弟元素ol
    .children() //ol下面的所有li
    .removeClass("active") //移除类名
    .eq($(this).index()) //找到索引和我点击的li对应的那一个
    .addClass("active"); //添加active类名
});
