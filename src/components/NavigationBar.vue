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

        <el-link href="#" class="navbar-item">消息</el-link>
        <el-link href="#" class="navbar-item">历史</el-link>
        <div class="publish-button-container">
          <!-- 根据用户登录状态显示发布按钮 -->
          <router-link
              :to="isLoggedIn ? 'publish' : 'login'"
              class="publish-button"
          >
            发布
          </router-link>

          <router-link
              :to= " '/front/blog/addBlogMDFile' "
              class="publish-button"
          >
            上传文件
          </router-link>
        </div>

      </div>
    </el-header>

    <!--  搜索框  -->
    <div class="floating-search-bar">
      <el-input
          v-model="searchQuery"
          class="search-input"
          placeholder="输入搜索内容"
          suffix-icon="search"
          @keyup.enter="handleSearch"
      >
        <template #append>
          <el-button
              class="search-button"
              icon="search"
              @click="handleSearch"
          >
            <p>搜索</p>
          </el-button>
        </template>
      </el-input>
    </div>

  </div>
</template>

<script setup>
import {onMounted, ref, onBeforeMount} from "vue";

// 假设的用户数据
const isLoggedIn = ref(false); // 用户登录状态
const searchQuery = ref('');

const checkLoginStatus = () => {
  const token = localStorage.getItem('token');
  isLoggedIn.value = !!token;  // 如果 token 存在则为 true，否则为 false
};


const handleSearch = () => {
  console.log('搜索内容:', searchQuery.value);
  // 这里可以添加搜索逻辑
};

onBeforeMount(() => {
  checkLoginStatus();
});

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

.publish-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.publish-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 46px;
  border-radius: 15%;
  background-color: #90EE90; /* 浅绿色背景 */
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none; /* 去除链接下划线 */
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease; /* 平滑过渡效果 */

}

.publish-button:hover {
  transform: scale(1.1); /* 鼠标悬浮时放大 */
}

/* 搜索框 */
.floating-search-bar {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 450px; /* 可根据需要调整宽度 */
  height: 50px; /* 可根据需要调整高度 */
  background-color: #f8f9fa; /* 白灰色背景 */
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  height: 100%; /* 使输入框高度为容器高度 */
  border-radius: 25px 0 0 25px; /* 左侧圆角 */
}

.search-button {
  width: 100px; /* 按钮宽度 */
  height: 50px; /* 按钮高度 */
  border: none;
  outline: none;
  background-color: red;
  color: white;
  font-size: 18px;
  font-family: 'KaiTi', serif; /* 楷体 */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 25px 25px 0; /* 右侧圆角 */
}

.search-button:hover {
  background-color: darkred; /* 悬停时按钮背景色 */
}

</style>
