<script setup lang="ts">
// 导入 jQuery 类型定义
import $ from 'jquery'
$(function () {
  $('.sidebar h3').click(function () {
    $('.manage ul').slideUp()
    const $currentUl = $(this).next('ul')
    $currentUl.is(':hidden') ? $currentUl.slideDown() : $currentUl.slideUp()
  })
})
</script>
<template>
  <div class="Composition">
    <!-- <hr />
    <h2>Composition API</h2>
    <hr /> -->
    <h3>experiment02</h3>
    <ul>
      <li>
        <router-link to="/example02-1">
          example02-1
          <br />
          interface & ref() & computed() & watch() & watchEffect()
        </router-link>
      </li>
      <li>
        <router-link to="/example02-2">example02-2</router-link>
      </li>
      <li>
        <router-link to="/example02-3">example02-3</router-link>
      </li>
      <li>
        <router-link to="/example02-4">experiment-04</router-link>
      </li>
      <li>
        <router-link to="/example02">example02</router-link>
      </li>
      <li>
        <router-link to="/example02-">pptx07-Event&v-model</router-link>
      </li>
    </ul>
    <h3>example03</h3>
    <ul>
      <li>
        <router-link to="/example03-1">example03-1</router-link>
      </li>
    </ul>
    <h3>example04</h3>
    <ul>
      <li>
        <router-link to="/example04-1">example04-1</router-link>
      </li>
    </ul>
    <h3>example05</h3>
    <ul>
      <li>
        <router-link to="/example05-1">example05-1</router-link>
      </li>
      <li>
        <router-link to="/example05-2">example05-2</router-link>
      </li>
      <li>
        <router-link to="/example05-3">example05-3</router-link>
      </li>
    </ul>
    <h3>homeworks</h3>
    <ul>
      <li>
        <router-link to="/homework01">homework01</router-link>
      </li>
      <li>
        <router-link to="/homework02">homework02</router-link>
      </li>
    </ul>
    <h3>experiment08</h3>
    <ul>
      <li>
        <router-link to="/example08-1">example08-1</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.Composition {
  padding: 1rem;
  margin: 0;
  cursor: cell;
  color: #41413d;
}
h3 {
  font-size: 1.2rem;
}
ul {
  margin: 0;
  padding: 0;
  display: none;
}
ul li {
  font-size: 1.2rem;
  list-style: none;
  position: relative;
}
ul li a {
  text-decoration: none;
  display: block;
  color: #4e4e4b;
  padding: 1rem;
  transition: transform 0.4s;
}
ul li a:hover {
  color: #3184bf;
  transform: scale(1.05);
  border-radius: 3px;
}
</style>
