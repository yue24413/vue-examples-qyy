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
    <h3>experiment03</h3>
    <ul>
      <li>
        <router-link to="/example03-1">example03-1</router-link>
      </li>
    </ul>
    <h3>experiment04</h3>
    <ul>
      <li>
        <router-link to="/example04-1">example04-1</router-link>
      </li>
    </ul>
    <h3>experiment05</h3>
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
        <router-link to="/homework05">homework05</router-link>
      </li>
      <li>
        <router-link to="/homework02">homework02</router-link>
      </li>
      <li>
        <router-link to="/exp03">exp03</router-link>
      </li>
      <li>
        <router-link to="/homework03">homework03</router-link>
      </li>
      <li>
        <router-link to="/homework04">homework04</router-link>
      </li>
    </ul>
    <h3>experiment08</h3>
    <ul>
      <li>
        <router-link to="/example08-1">example08-1</router-link>
      </li>
      <li>
        <router-link to="/example08-2">example08-2</router-link>
      </li>
      <li>
        <router-link to="/example08-3">example08-3</router-link>
      </li>
      <li>
        <router-link to="/example08-4">example08-4</router-link>
      </li>
    </ul>
    <h3>experiment09</h3>
    <ul>
      <li>
        <router-link to="/example09-1">example09-1</router-link>
      </li>
      <li>
        <router-link to="/example09-2">example09-2</router-link>
      </li>
      <li>
        <router-link to="/example09-3">example09-3</router-link>
      </li>
      <li>
        <router-link to="/example09-4">example09-4</router-link>
      </li>
      <li>
        <router-link to="/example09-5">example09-5</router-link>
      </li>
    </ul>
    <h3>experiment10</h3>
    <ul>
      <li>
        <router-link to="/example10-1">example10-1</router-link>
      </li>
      <li>
        <router-link to="/example10-2">example10-2</router-link>
      </li>
    </ul>
    <h3>experiment11</h3>
    <ul>
      <li>
        <router-link to="/example11-1">example11-1</router-link>
      </li>
      <li>
        <router-link to="/example11-2">example11-2</router-link>
      </li>
      <li>
        <router-link to="/example11-3">example11-3</router-link>
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
