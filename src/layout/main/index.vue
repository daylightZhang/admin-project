<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script setup lang="ts">

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