<template>
  <div>
    <h1>Vue Examples</h1>
    <h3><router-link to="/">Home</router-link></h3>

    <h3>Composition API</h3>
    <ul>
      <li>
        <router-link to="/example02-1">
          interface & ref() & computed() & watch() & watchEffect()
        </router-link>
      </li>
      <li>
        <router-link to="/example02-2">Reactive-02</router-link>
      </li>
      <li>
        <router-link to="/example02-4">shallowRef()</router-link>
      </li>
      <li>
        <router-link to="/example02-3">reactive()</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
* {
  margin: 0;
}
</style>
