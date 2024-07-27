<script lang="ts" setup>
import { useExample0804Store } from './Example08-4Store'
const store = useExample0804Store()
const countR = store.countS
const userR = store.userS
const doubleCountC = store.doubleCountG
</script>
<template>
  <div>
    <h3>组件2</h3>
    <p>
      countR ：
      {{ countR }}
      <br />
      由于获取的是ref对象，因此即使改变源对象依然是响应式的。
      <br />
      {{ userR.name }} / {{ userR.address }}
      <br />
      doubleCountC ：
      {{ doubleCountC }}
    </p>
  </div>
</template>
