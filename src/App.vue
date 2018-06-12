<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  min-width: 1200px;
  font-family: PingFang-Regular,Helvetica Neue,Helvetica,Arial,PingFang SC,Heiti SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
}
/*清除默认样式*/
*{margin:0; padding:0;}
img{vertical-align:top;border:none;}
a{text-decoration:none;color:#000;}
li{list-style:none;}

/*常用*/
.fl{float:left;}
.fr{float:right;}
.clearfix{zoom: 1;}
.clearfix:after{content:'';display:block;clear:both;}
</style>
