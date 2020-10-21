(function(){
    $.fn.waterfall = function(column=5,padding=10){
        console.log(this);//就是调用这个waterfall方法的jquery元素集合
        // 瀑布流容器总宽度
        var total = this.width();
        // 所有的子div
        var itemArr = this.children();
        // 每个子div的宽度
        var width = itemArr.width();        
        // 横向间距
        var xSpace = (total-width*column)/(column-1)
        // 纵向间距
        var ySpace = 10;
        // 需要记录每一列告诉的数组
        var heightArr = [];

        // 为了我这个插件的可适用范围广,需要this有定位以及他的子div是绝对定位
        this.css({
            position:"relative"
        })
        itemArr.css({
            position:"absolute"
        })

        // 开始给子div进行定位
        itemArr.each(function(index,item){
            // 在jquery的each方法中,item是遍历到的每个dom节点,如果要使用jquery方法,要转成jquery元素
            if(index<column){
                // 如果index<column,说明这些都是第一行
                $(item).css({
                    top:padding,
                    left:(width+xSpace)*index
                })
                // 更新列的高度
                heightArr[index] = padding + $(item).height()
            }else{
                // 如果index>=column,说明这些不是第一行
                // 每个变量到的元素都要放到最短的那一列 
                // 需要计算最短的那一列的告诉和列数
                var minIndex = 0;
                var min = heightArr[minIndex];
                $.each(heightArr,function(i,v){
                    if(v<min){
                        minIndex = i;
                        min = heightArr[minIndex]
                    }
                })
                // 循环完成:可以得到最短的列高和列数
                $(item).css({
                    top:min+ySpace,
                    left:(width+xSpace)*minIndex
                })
                // 更新当前列高度
                heightArr[minIndex] = min+ySpace+$(item).height()

            }
        })

        // 给this一个高度,由于子元素都是绝对定位,撑不开父元素
        var max = Math.max.apply(null,heightArr);
        this.height(max);        
    }
})()



async function getAndRender(){
    // 发送ajax请求,请求data.json(瀑布流的数据接口) 
    var data = await $.get('./data.json');
    // 把请求到的数据追击到items这个div里面
    $.each(data,(index,item)=>{
        $('.re3').append(`<div class="item">
            <img src="${item.path}" alt="" style="height:${item.height}px">
            <p>${item.text}</p>
            <p class="r6">${item.pr}</p>
        </div> `)
    })
    // 调用waterfall方法,把items里面变成瀑布流布局
    $('.re3').waterfall()
    console.log(data);
}
// 1 发送ajax请求,请求data.json(瀑布流的数据接口) 
// 2 把请求到的数据追击到items这个div里面
// 3 调用waterfall方法,把items里面变成瀑布流布局
getAndRender();


var re45 = document.getElementById("re45");
var re3 = document.querySelector(".re3");
re45.onmouseover = function () {
  re3.style.display = "block";
};
re45.onmouseleave = function () {
  re3.style.display = "none";
};
re3.onmouseover = function () {
  re3.style.display = "block";
};
re3.onmouseleave = function () {
  re3.style.display = "none";
};
