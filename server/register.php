<?php
/* 
    如果要用register.php处理登陆
    传入用户名必须使用username这个键
    传入密码必须使用password这个键
*/
include './base.php';

$uname = $_POST['username'];//获取前端传递的用户名
$upass = $_POST['password'];//获取前端传递的密码
$conn = mysqli_connect('localhost','root','root','user');
$sql = "INSERT INTO `info` VALUES (null,'$uname','$upass')";
$res = mysqli_query($conn,$sql);
mysqli_close($conn);

if($res){
  header('location:../sougou.html');
}else{
    echo "服务器错误";
}

?>