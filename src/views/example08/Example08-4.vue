<template>
  <div>
    <h1>Define Store</h1>
    <p>
      得益于vue响应式数据与组件的解耦，可以在vue组件外声明响应式数据，从而实现全局的响应式数据源
    </p>
    <p>
      <button @click="changeCountF">changeCountF</button>
      <br />
      store.countS :
      {{ store.countS }}
      <br />
      <button @click="changeUserF">change user</button>
      <br />
      store.userS : {{ store.userS }}

      <br />
    </p>
    <hr />
    <Ex42 />
    <Ex41 />
  </div>
</template>
<script lang="ts" setup>
import { useExample0804Store } from './Example08-4Store'
import Ex41 from './Ex4-1.vue'
import Ex42 from './Ex4-2.vue'

const store = useExample0804Store()
const changeCountF = () => {
  store.countS.value++
}
const changeUserF = () => {
  store.userS.value = { name: 'SUN', address: '1001' }
}
</script>
