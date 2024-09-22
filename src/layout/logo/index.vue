<template>
    <div class="logo">
        <img :src="setting.logo" v-if="!setting.logoHidden" alt="">
        <p>{{ setting.title }}</p>
    </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<script lang="ts">
export default {
    name: "Logo"
}
</script>

<style lang="scss" scoped>
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    display: flex;
    align-items: center;
    padding: 10px;
    img {
        width: 40px;
        height: 40px;
    }
    p {
        font-size: $base-logo-title-font-size;
        margin-left: 10px;
        color: white;
    }
}
</style>