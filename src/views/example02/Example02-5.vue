<template>
  <div>
    <label>
      <input type="checkbox" v-model="dayCheckR.wDate" @change="changeShortDateF" />
      工作日 |
    </label>
    <label>
      <input type="checkbox" v-model="dayCheckR.eDate" @change="changeShortDateF" />
      周末
    </label>
    <br />
    <template v-for="n of 7" :key="n">
      <label>
        <input type="checkbox" :value="n" v-model="datesR" @change="changeDateF" />
        星期 {{ n }} |
      </label>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

interface ShortDate {
  wDate: boolean
  eDate: boolean
}
const dayCheckR = ref<ShortDate>({ wDate: false, eDate: false })
const datesR = ref<number[]>([])
const wDates = [1, 2, 3, 4, 5]
const eDates = [6, 7]
const changeShortDateF = () => {
  let dates = []
  dayCheckR.value.wDate && dates.push(...wDates)
  dayCheckR.value.eDate && dates.push(...eDates)
  datesR.value = dates
}
const changeDateF = () => {
  dayCheckR.value.wDate = wDates.every((date) => datesR.value.includes(date))
  dayCheckR.value.eDate = eDates.every((date) => datesR.value.includes(date))
}
</script>
<style scoped></style>
