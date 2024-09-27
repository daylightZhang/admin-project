<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" v-if="flag"></component>
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from 'vue';
import useLayoutSettingStore from '@/store/modules/setting';
let layoutSettingStore = useLayoutSettingStore()
let flag = ref(true)

watch(()=>layoutSettingStore.refresh, ()=>{
    flag.value = false
    nextTick(()=>{
        flag.value = true
    })
})
</script>

<script lang="ts">
export default {
    name: "Main"
}
</script>

<style lang="scss" scoped>
.fade-enter-from {
    opacity: 0;
}
.fade-enter-active {
    transition: all 1s;
}
.fade-enter-to {

}
</style>