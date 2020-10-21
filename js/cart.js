 // 一打开购物车页面,展示购物车里面的商品
 showTbody();
 function showTbody() {
   $.ajax({
     url: "./server/showlist.php",
     success: function (res) {
       if (res.code) {
         var arr = res.data;
         if (res.data) {
           //如果有商品,table显示,div隐藏
           $(".box").show();
           $(".yt").hide();
           //在table里面展示商品信息
           $(".gv").empty();
           $.each(arr, function (index, item) {
             $(".gv").append(`<ol id="${item.product_id}">
                                     <li class="q1">${item.product_name}</li>
                                     <li class="q2">
                                         <img src="${item.product_img}" alt="" class="yy">
                                     </li>
                                     <li class="q3">${item.product_price}</li>
                                     <li class="q4">
                                         <span class='add'>+</span>
                                         <span class="ee">${item.product_num}</span>
                                         <span class="jian">-</span>
                                     </li>
                                     <li class="del">删除</li>
                                 </ol>`);
           });
         }
       } else {
         //如果没有商品,table隐藏,div显示
         $(".box").hide();
         $(".yt").show();
       }
     },
     dataType: "json",
     cache: false, //不要缓存
   });
 }

 // 点击+增加一个商品数量,点击-减少一个商品数量
 $(".gv").click(function (e) {
   // console.log(e.target);
   var target = e.target;
   // target是一个dom节点
   if (target.className == "add" || target.className == "jian") {
     // 点击+增加一个商品数量,点击-减少一个商品数量
     $.ajax({
       url: "./server/updatewq.php",
       data: {
         type: target.className,
         id: $(target).parents("ol").attr("id"),
       },
       success: function (res) {
         // console.log(res);
         if (res.code) {
           showTbody();
         }
       },
       dataType: "json",
     });
   } else if (target.className == "del") {
     // 点击删除按钮删除一个商品
     $.ajax({
       url: "./server/delwq.php",
       data: {
         id: $(target).parents("ol").attr("id"),
       },
       success: function (res) {
         if (res.code) {
           showTbody();
         }
       },
       dataType: "json",
     });
   }
 });