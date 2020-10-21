//放大镜
//获取相关元素
var small = $id("small"); //小图片所在的盒子
var mask = $id("mask"); //遮罩层
var big = $id("big"); //大图片所在的盒子
var box = small.parentNode; //box盒子
var bigImg = $id("bigImg"); //大图
//鼠标移入small中,mask显示,big也显示
small.onmouseenter = function () {
  //mask显示,big也显示
  mask.style.display = "block";
  big.style.display = "block";
};

//鼠标移出small,mask隐藏,big隐藏
small.onmouseleave = function () {
  //mask隐藏,big隐藏
  mask.style.display = "none";
  big.style.display = "none";
};

//mask可以移动
small.onmousemove = function (e) {
  //为了便于mask跟随鼠标定位,需要计算鼠标在small中的坐标
  var event = e || window.event;
  // var x = 鼠标距离页面左侧的距离(看的见的+看不见的) - small(box)距离页面左侧的距离

  //为了鼠标在mask中居中所以x,y都要减去mask的一半
  var x =
    event.clientX + getScroll().left - box.offsetLeft - mask.offsetWidth / 2;
  var y =
    event.clientY + getScroll().top - box.offsetTop - mask.offsetHeight / 2;

  //边界检测
  if (x < 0) {
    x = 0;
  }
  if (x > small.offsetWidth - mask.offsetWidth) {
    x = small.offsetWidth - mask.offsetWidth;
  }
  if (y < 0) {
    y = 0;
  }
  if (y > small.offsetHeight - mask.offsetHeight) {
    y = small.offsetHeight - mask.offsetHeight;
  }
  //定位mask
  mask.style.left = x + "px";
  mask.style.top = y + "px";

  // 当mask在small中移动,大图显示相应位置
  //x/small.offsetWidth = 大图片要偏移的距离/大图的宽度
  var left = (x / small.offsetWidth) * bigImg.offsetWidth;
  //y/small.offsetHeight = 大图片要偏移的距离/大图的高度
  var top = (y / small.offsetHeight) * bigImg.offsetHeight;
  bigImg.style.left = -left + "px";
  bigImg.style.top = -top + "px";
};

var fb = document.getElementById("fb");
var fbBox = document.getElementById("fbbox");
var fe = document.getElementById("fe");
var one = document.getElementById("one");
fb.onclick = function () {
  fbBox.style.display = "block";
  one.style.display = "block";
};
fe.onclick = function () {
  fbBox.style.display = "none";
  one.style.display = "none";
};

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
