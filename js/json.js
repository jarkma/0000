//人工自能翻译
var nna = document.getElementById("nna");
var navaa = document.getElementById("navaa");
navaa.onmouseover = function () {
  nna.style.display = "block";
};
navaa.onmouseleave = function () {
  nna.style.display = "none";
};
nna.onmouseover = function () {
  nna.style.display = "block";
};
nna.onmouseleave = function () {
  nna.style.display = "none";
};

//登录;
var button = document.getElementById("button"); //点击登录文字
var btn = document.getElementById("btn"); //弹出框
var sc = document.getElementById("sc"); //X按钮
var brr = document.querySelectorAll("input")[2]; //点击登录按钮
var nameInp = document.querySelectorAll("input")[0]; //用户输入框
var pwInp = document.querySelectorAll("input")[1]; //密码按钮
var p = document.querySelector("#wrong");
button.onclick = function () {
  btn.style.display = "block";
};
sc.onclick = function () {
  btn.style.display = "none";
};
// 点击登陆按钮
brr.onclick = function () {
  // 1 获取用户名和密码
  var uname = nameInp.value; //用户名
  var pw = pwInp.value; //密码
  // 2 通过ajax请求login.php,进行登录验证
  postSend(
    "./server/login.php",
    function (data) {
      // 3 获取login.php返回的结果,来进行下一步
      console.log(data);
      data = JSON.parse(data);
      // 4 如果登陆成功,跳转购物车页面
      if (data.code == 1) {
        location.href = "./sougou.html";
        // 方法一:在登录成功以后,设置cookie
        setCookie("name", data.un);
        // 方法二:在登录成功以后,设置本地存储
        // localStorage.setItem("name", data.un);
      } else {
        p.innerHTML = data.msg;
      }
    },
    `username=${uname}&password=${pw}`
  );
};
//大轮播
var swiper = new Swiper('.box1 ', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});





var swiper = new Swiper('.zz_con ', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

    //倒计时
    
  var timeText = document.getElementById("timeText");
  var hNum = document.getElementById("hNum");
  var mNum = document.getElementById("mNum");
  var sNum = document.getElementById("sNum");
  getTime();

  setInterval(getTime, 1000);
  function getTime() {
    var odate = new Date();
    var hours = odate.getHours();
    var mintes = odate.getMinutes();
    var seconds = odate.getSeconds();

    if (hours % 2 == 0) {
      timeText.innerHTML = hours + ":00";
      hNum.innerHTML = "01";
    } else {
      timeText.innerHTML = hours - 1 + ":00";
      hNum.innerHTML = "00";
    }
    if (59 - mintes < 10) {
      mNum.innerHTML = "0" + (59 - mintes);
    } else {
      mNum.innerHTML = 59 - mintes;
    }

    if (59 - seconds < 10) {
      sNum.innerHTML = "0" + (59 - seconds);
    } else {
      sNum.innerHTML = 59 - seconds;
    }
  }