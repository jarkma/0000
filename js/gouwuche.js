    //增加商品
   var momo=$('#shop').html();
   var mama=$('#xaioma').html();
   var pr=$('#pr').html();
   var tu=$('#tupian').attr('src');
   var nini=$("#nini");
    $('.addToCart').click(function(){
        $.ajax({ 
            url:'./server/addwq.php',
            dataType:'json', 
            data:{
                id:momo,
                name:mama,
                img:tu,
                num:nini.val(),
                price:pr,
            },  
            success:function(res){
                if(res.code){
                    alert('商品加入成功')
                }else{
                    alert('商品加入失败')
                }   
                
            }
        })
    })

$.ajax({
    url:'./server/showlist.php',
    dataType:'json',
    success:function(res){
        console.log(res);
    }
})


//6.商品数量的增加和减少
function changeNumber() {
    //获取商品数量
    var value = $('#nini').val();
    if (this.id == 'del') {
        value--;
        if (value <= 0) {
            value = 1;
            alert("宝贝数量必须大于0");
        }
    } else {
        value++;
    }
    $('#jia').parent().find($("#nini")).val(value);
    return false;
}
$('#jia').on('click', changeNumber)
$('#del').on('click', changeNumber)