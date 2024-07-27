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
/***
store.countS 是一个 ref:
store.countS 是一个 ref 对象，它包装了一个基本数据类型，并使这个数据类型成为响应式的。

store.countS.value 是基本数据类型:
当你访问 store.countS.value 时，你获取的是一个基本数据类型，而不是一个响应式引用。
这个值不是响应式的，因此不能自动更新。
dCount1 是普通变量:
当你使用 const dCount1 = store.countS.value 时，你创建了一个普通变量 dCount1，它被初始化为 store.countS.value 的当前值。
由于 dCount1 是一个普通变量，它不会自动更新，即使 store.countS.value 发生变化。 */
</script>
