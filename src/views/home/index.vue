<template>
    <div>
        <h1>首页 {{ useStore.username }}</h1>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useUserStore from '@/store/modules/user';
let useStore = useUserStore()
onMounted(()=>{
    useStore.useInfo()
})
</script>

<style scoped>

</style>