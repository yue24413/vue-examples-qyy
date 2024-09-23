<template>
  <div>
    <p>
      基本HTTP get请求可以通过restful风格的url传参。
      但是例如，传递多种不定/可选查询数据时，将其封装为对象处理较好。
      <br />
      但HTTP
      get请求不支持请求体传递数据。因此，最简单的方法是将get请求转为post请求，从而方便的传递对象对象。
      <br />
      如果，预通过get向后端传递一个封装数据的json字符串，可通过传统`?`地址栏传参方式。
      <br />
      等效url: /search?address={"detail": "12", "postcode": "010"}
    </p>
    <div>
      detail:
      <input v-model="address.detail" />
      <br />
      post code:
      <input v-model="address.postcode" />
      <br />
      <button @click="passParams">passParams</button>
    </div>
    {{ address.detail }} / {{ address.postcode }}
    <p>mock中的search方法。控制台打印接收到的参数，返回查询结果id。</p>
    <ul>
      <li v-for="(a, index) of addresses" :key="index">{{ a.id }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'
import { useGet, usePost } from '@/fetch'
interface Address {
  id?: number
  detail?: string
  postcode?: string
}
const address = ref<Address>({})
const addresses = ref<Address[]>([])
const passParams = async () => {
  //对象转json字符串
  const s = JSON.stringify(address.value)
  console.log(s) /** {"detail":"12","postcode":"010"} */
  // useFetch(`search?address=${s}`)
  //   .get()
  //   .json()
  //   .then((resp) => (addresses.value = resp.data.value?.data))
  /******************* */
  await useGet<[]>(`api/search?address=${s}`).then(
    (resp) => (addresses.value = resp.data.value?.data ?? [])
  )
  // console.log(data.value?.data)
  // addresses.value = data.value?.data ?? []
}
</script>
