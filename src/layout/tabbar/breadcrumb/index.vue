<template>
    <el-icon style="margin-right: 10px" @click="changeIcon">
        <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand' "></component>
        <!-- <Expand/> -->
    </el-icon>
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <el-icon style="margin: 0 5px;">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span style="margin: 0 5px;">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import useLayoutSettingStore from '@/store/modules/setting'
import { ArrowRight } from '@element-plus/icons-vue'

let $route = useRoute()

let layoutSettingStore = useLayoutSettingStore()
const changeIcon = () => {
    layoutSettingStore.fold = !layoutSettingStore.fold
}
</script>

<script lang="ts">
export default {
    name: "Breadcrumb"
}
</script>

<style lang="scss" scoped>

</style>