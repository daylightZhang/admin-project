<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <Logo></Logo>
            <el-scrollbar class="scroll_bar">
                <el-menu background-color="#001529" text-color="white">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">数据大屏</el-menu-item>
                    <el-menu-item index="3">xxx</el-menu-item>
                    <el-sub-menu index="4">
                        <template #title>
                            <span>折叠菜单</span>
                        </template>
                        <el-menu-item index="4-1">首页</el-menu-item>
                        <el-menu-item index="4-2">数据大屏</el-menu-item>
                        <el-menu-item index="4-3">xxx</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar"></div>
        <!-- 内容展示区 -->
        <div class="layout_main"></div>
        <!-- <h1>一级陆游组件</h1> -->
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'

</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;

        .scroll_bar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);
        }
    }

    .layout_tabbar {
        position: fixed;
        top: 0;
        left: $base-menu-width;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        background-color: red;
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
        background-color: green;
    }
}
</style>