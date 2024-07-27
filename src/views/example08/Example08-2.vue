<template>
  <div>
    <h1>Actions</h1>
    <p>
      与pinia不同，从store获取并转为本地变量的对象，仍为Ref的响应式对象。
      <br />
      Store中可声明执行的异步业务函数，以及响应式修改state数据。
    </p>
    <p>
      {{ userR?.name }} / {{ userR?.address }}
      <br />
      <input type="text" v-model="myUserR.name" />
      <br />
      <input type="text" v-model="myUserR.address" />
      <br />
      <button type="button" @click="updateUserF">asyncUpdate</button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { User } from '@/type'
import { ref } from 'vue'
import { useExample08Store } from './Example08store'

const store = useExample08Store()
const userR = store.userS
console.log(userR)
const myUserR = ref<User>({})
const updateUserF = () => {
  setTimeout(() => (store.userS.value = myUserR.value), 1000)
}
</script>
