<template>
  <div>
    <!-- <div class="top-banner clearfix">
      <div class="l-side fl">
          <ul>
              <li><a class="nav-item-text" href="">WORK首页</a></li>
              <li><a class="nav-item-text" href="">HR</a></li>
              <li><a class="nav-item-text" href="">行政</a></li>
              <li><a class="nav-item-text" href="">财务</a></li>
              <li :class="{hideborder:showGlobalNavigator}"><a class="nav-item-text" href="">IT技术</a></li>
              <li :class="[{'show-global-nav':showGlobalNavigator}]" @mousemove="allMousemoveHandler" @mouseleave="allMouseleaveHandler" @mouseenter="allMouseenterHandler"><span class="nav-item-text" > 全部 &nbsp;<i :class="showGlobalNavigator?'dj-icon-arrow-up':'dj-icon-arrow-down'"></i> </span> </li>
          </ul>
      </div>
       <div class="r-side fr">
         <ul>
           <li><a class="nav-item-text" href="">反馈</a></li>
           <li><a class="nav-item-text" href="">消息</a></li>
           <li><a class="nav-item-text" href="">头像</a></li>
         </ul>
       </div>
       <div :class="['d-menu-container',{active:showGlobalNavigator}]" @click="linkClickHandler" @mouseleave="menuMouseleaveHandler" @mouseenter="menuMouseenterHandler">
         <div class="d-menu-list caiwu">
            <div class="caiwu-container">
                <div class="d-menu-list-title ">财务应用</div>
                <ul>
                  <li><a href="#" class="hot-fapiao">发票申请单</a></li>
                  <li><a href="#">印证申请单</a> </li>
                  <li><a href="">日常费用报销单</a></li>
                  <li><a href="">差旅申请单</a></li>
                  <li><a href="">个人借贷款</a></li>
                  <li><a href="">预算增补单</a></li>
                </ul>
            </div>
         </div>
         <div class="d-menu-list xingzheng" >
           <div class="xingzheng-container">
               <div class="d-menu-list-title ">行政应用</div>
                <div>
                    <ul>
                        <li><a href="#">常用品借用</a></li>
                        <li><a href="#">我的借用</a></li>
                        <li><a href="#" class="hot-xingzheng">会议室预定</a></li>
                        <li><a href="#">办公用品申请</a></li>
                        <li><a href="#">工单卡申请</a></li>
                        <li><a href="#">名片申请</a></li>
                        <li><a href="#">高值用品申请</a></li>
                        <li><a href="#">邮件组申请</a></li>
                    </ul>
                </div>
           </div>
         </div>
         <div class="d-menu-list infomation" >
           <div class="d-menu-list-title " >IT应用</div>
            <div class="infomation-container">
              <ul>
                <li><a href="#">阿里云外网权限申请</a></li>
                <li><a href="#">堡垒机权限申请</a></li>
                <li><a href="#">新DBA工单</a></li>
                <li><a href="#">USP初始化申请</a></li>
                <li><a href="#">集群下线申请</a></li>
                <li><a class="hot-infomation" href="">服务器申请</a></li>
                <li><a href="#">域名申请</a></li>
                <li><a href="#">安全配置检查</a></li>
              </ul>
              <ul class="info-adjust">
                <li><a href="#">工单系统</a></li>
                <li><a href="#">流程代理</a></li>
                <li><a href="#">安全监测</a></li>
                <li><a href="#">BDP</a></li>
                <li><a href="#">大数据平台</a></li>
                <li><a href="#">Djoy</a></li>
                <li><a href="#">Confluence</a></li>
              </ul>
            </div>
         </div>
         <div class="d-menu-list humanr">
             <div class="humanr-container">
                <div class="d-menu-list-title ">HR应用</div>
                <div>
                    <ul>
                        <li><a href="" class="hot-humanr">内部推荐</a></li>
                        <li><a href="#">证明申请</a></li>
                        <li><a href="#">季度绩效系统</a></li>
                        <li><a href="#">我的假期</a></li>
                        <li><a href="#">假期管理</a></li>
                        <li><a href="#">背调系统</a></li>
                        <li><a href="#">薪人薪事</a></li>
                        <li><a href="#">招聘系统</a></li>
                    </ul>
                </div>
             </div>
         </div>
         <div class="d-menu-list other">
            <div class="d-menu-list-title">其他</div>
            <div>
              <ul>
                <li><a href="#">帮助中心</a></li>
                <li><a href="" class="hot-other">到家邮箱</a></li>
                <li><a href="#">到家LIVE</a></li>
                <li><a href="#">到家BBS</a></li>
                <li><a href="#">服务贴士发布</a></li>
              </ul>
            </div>
         </div>
       </div>
    </div>
    <div class="header-container">
        <div class="parallax-con" ref='parallax' >
              <div :class="['layer']"  data-depth="0.4">
                <div :class="['spance','h3']" ></div>
              </div>
              <div :class="['layer']"  data-depth="0.5">
                <div :class="['spance','h2']" ></div>
              </div>
              <div :class="['layer']"  data-depth="0.6">
                <div :class="['spance','h1']" ></div>
              </div>
            </div>
            <div class="menu-container" @mousemove.stop @mouseover.stop>
              <span class="logo-img logo-img-pic"></span>
            </div>
    </div> -->
    <dj-vue-topbar name='sinba'></dj-vue-topbar>
  </div>
</template>
<script>
import djVueTopbar from 'dj-vue-topbar'
export default {
  components: {
    djVueTopbar
  }
}
</script>
