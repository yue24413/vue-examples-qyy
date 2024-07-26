<script setup lang="ts"></script>
<template>
  <div class="Composition">
    <hr />
    <h2>Composition API</h2>
    <ul>
      <li>
        <router-link to="/example02-1">
          interface & ref() & computed() & watch() & watchEffect()
        </router-link>
      </li>
      <li>
        <router-link to="/example02-2">experiment-02</router-link>
      </li>
      <li>
        <router-link to="/example02-3">pptx07-Event&v-model</router-link>
      </li>
      <li>
        <router-link to="/example02-4">homework-01</router-link>
      </li>
      <li>
        <router-link to="/example02-5">homework-02</router-link>
      </li>
    </ul>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<style>
.Composition {
  padding: 1rem;
  margin: 0;
  cursor: cell;
}
ul {
  margin: 0;
  padding: 0;
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
