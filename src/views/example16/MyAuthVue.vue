<template>
  <slot v-if="showC"></slot>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useExample16Store } from '../example16/Example16Store'

const props = defineProps<{ role: string }>()
const store = useExample16Store()
const showC = computed(() => props.role === store.roleS.value)
</script>
