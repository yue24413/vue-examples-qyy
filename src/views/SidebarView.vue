<script setup lang="ts">
import compositionView from '@/views/composition/CompositionView.vue'
</script>
<template>
  <div class="sidebar">
    <!-- 侧边栏做成手风车式 -->
    <div class="manage">
      <h2>云技术管理</h2>
      <ul>
        <li><router-link to="/CloudServer">云服务器</router-link></li>
        <li><router-link to="/CloudDatabase">云数据库</router-link></li>
        <li><router-link to="/LoadBalancing">负载均衡</router-link></li>
      </ul>
    </div>
    <div class="manage">
      <h2 class="an">安全管理</h2>
      <ul>
        <li><router-link to="/CloudShieldConsole">云盾控制台</router-link></li>
        <li><router-link to="/DDoSHighlyImitatesIPAddresses">DDoS高仿IP</router-link></li>
        <li><router-link to="/WebApplicationFirewall">Web应用防火墙</router-link></li>
        <li><router-link to="/CACertificateService">CA证书服务</router-link></li>
      </ul>
    </div>
    <compositionView></compositionView>
  </div>
</template>
<style>
.sidebar {
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-style: #efbb49 solid 1px;
}
.manage {
  background-color: #f1f1f1;
}
.manage > h2 {
  color: #ffffff;
  background-color: #3184bf;
  padding: 1rem;
  margin: 0;
  cursor: cell;
}

.sidebar .manage ul {
  margin: 0;
  padding: 0;
}
.sidebar .manage ul li {
  font-size: 1.2rem;
  list-style: none;
  position: relative;
}
.sidebar .manage ul li a {
  text-decoration: none;
  display: block;
  color: #4e4e4b;
  padding: 1rem;
  transition: transform 0.4s;
}
.sidebar .manage ul li a:hover {
  background-color: #3184bf;
  transform: scale(1.05);
  border-radius: 3px;
}
</style>
