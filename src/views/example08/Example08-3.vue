<template>
  <div>
    <h1>Getters</h1>
    <p>
      count+1,但是声明的doubleCount属性计算count * 2。| const dCount = store.doubleCountG
      <br />
      <button @click="store.countS.value++">count++</button>
      <br />
      dCount / store.doubleCountG / store.countS / dCount1
      <br />
      {{ dCount }} / {{ store.doubleCountG }} / {{ store.countS }} / {{ dCount1 }}
    </p>
    <p>
      getter绑定。声明组件所需权限，与state中保存的用户权限比较，确定是否显式。
      <br />
      <button @click="changePre">changePre</button>
      <br />
      <span v-if="premissionG(1)">权限为1的普通用户可见</span>
      <span v-if="store.premissionG.value(2)">权限为2的VIP用户可见</span>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useExample08Store } from './Example08store'
const store = useExample08Store()
const dCount = store.doubleCountG
const dCount1 = store.countS.value
console.log(dCount)

const premissionG = store.premissionG
console.log(premissionG)
const changePre = () => (store.userS.value.level = store.userS.value.level == 1 ? 2 : 1)
</script>
