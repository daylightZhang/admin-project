<template>
    <el-button size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
    <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
    <el-button size="small" icon="Setting" circle @click=""></el-button>
    <img :src="userStore.avatar" style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%;" alt="">
    <el-dropdown>
        <span class="el-dropdown-link">
            {{ userStore.username }}
            <el-icon class="el-icon--right">
                <arrow-down/>
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
let userStore = useUserStore()
let $router = useRouter()
let $route = useRoute()
let layoutSettingStore = useLayoutSettingStore()
const updateRefresh = () => {
    layoutSettingStore.refresh = !layoutSettingStore.refresh
}
const fullScreen = () => {
    let full = document.fullscreenElement
    if (!full) {
        document.documentElement.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}

const logout = () => {
    userStore.logout()
    $router.push({path: '/login', query: {redirect:$route.path}})
}
</script>

<script lang="ts">
export default {
    name: "Setting"
}
</script>

<style lang="scss" scoped>

</style>