<template>
  <div>
    <!--    导航栏-->
    <el-header class="navbar">
      <div class="navbar-content-left">
        <img src="@/assets/img/logo.jpg" alt="SIDN Logo">
        <el-link href="#" class="navbar-item">博客</el-link>
        <el-link href="#" class="navbar-item">下载</el-link>
        <el-link href="#" class="navbar-item">视频</el-link>
        <el-link href="#" class="navbar-item">社区</el-link>
      </div>

      <div class="navbar-content-right">

        <div class="avatar-button-container">
          <!-- 根据用户登录状态显示登录按钮或用户头像 -->
          <router-link
              v-if="!isLoggedIn"
              to="/login"
              class="login-button"
          >
            登录
          </router-link>
          <router-link
              v-else
              :to="`/user/${userId}`"
              class="user-avatar"
          >
            <img :src="userAvatar" alt="用户头像" />
          </router-link>
        </div>

<!--        <el-link href="#" class="navbar-item">登录</el-link>-->
        <el-link href="#" class="navbar-item">消息</el-link>
        <el-link href="#" class="navbar-item">历史</el-link>

      </div>
    </el-header>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// 假设的用户数据
const isLoggedIn = ref(false); // 用户登录状态


</script>

<style scoped>
/* 通用样式 */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'KaiTi', serif; /* 楷体 */
}

.navbar {
  display: flex;
  justify-content: space-between;
  /*align-items: center;*/
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  z-index: 1000;
  padding: 10px 0;
  background-color: #f8f9fa; /* 白灰色背景 */
}

.navbar-content-left {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 30px;
  margin-left: 10%;
}

.navbar-content-right {
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 40px;
  margin-right: 10%;
}

.navbar-item {
  font-size: 17px;
  color: black; /* 链接颜色 */
  text-decoration: none; /* 去掉下划线 */
}

.navbar-item:hover {
  color: #ff0000; /* 悬停时颜色 */
}

.avatar-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button,
.user-avatar {
  width: 50px; /* 按钮/头像的宽度 */
  height: 50px; /* 按钮/头像的高度 */
  border-radius: 50%; /* 圆形 */
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none; /* 去除链接下划线 */
  color: #fff; /* 文字颜色 */
  background-color: #ccc; /* 背景颜色 */
  font-size: 16px; /* 字体大小 */
  font-weight: bold; /* 字体加粗 */
}

.user-avatar {
  background: none; /* 用户头像不需要背景色 */
}

.user-avatar img {
  width: 100%; /* 头像宽度填满容器 */
  height: auto; /* 头像高度自适应 */
  border-radius: 50%; /* 圆形 */
}

</style>
