<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider" :class="{fold:layoutSettingStore.fold}">
            <Logo></Logo>
            <el-scrollbar class="scroll_bar">
                <el-menu :collapse="layoutSettingStore.fold" :default-active="$route.path" background-color="#001529" text-color="white">
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{fold:layoutSettingStore.fold?true:false}">
            <Tabbar></Tabbar>
        </div>
        <!-- 内容展示区 -->
        <div class="layout_main" :class="{fold:layoutSettingStore.fold?true:false}">
            <Main></Main>
            <!-- <router-view></router-view> -->
        </div>
        <!-- <h1>一级陆游组件</h1> -->
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user';
import { useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting';

let userStore = useUserStore();
let layoutSettingStore = useLayoutSettingStore()
let $route = useRoute()

</script>

<script lang="ts">
export default {
    name: "Layout"
}
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        transition: all 0.3s;
        .scroll_bar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);
            .el-menu {
                border-right: none;
            }
        }
        &.fold{
            width: 50px;
        }
    }

    .layout_tabbar {
        position: fixed;
        top: 0;
        left: $base-menu-width;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - 50px);
            left: 50px;
        }
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
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - 50px);
            left: 50px;
        }
    }
}
</style>