<script setup>
import { useUserStore } from './stores';

const userStore = useUserStore()
</script>

<template>
<div>
  <hr />
  <router-view></router-view>


  <hr />
  <hr />
  <hr />
  <hr />


  <h1>hello</h1>
  <p>{{ userStore.token }}</p>
  <el-button @click="userStore.setToken('asdf')">登录</el-button>
  <el-button @click="userStore.removeToken()">退出</el-button>
</div>
</template>

<style scoped>

</style>
