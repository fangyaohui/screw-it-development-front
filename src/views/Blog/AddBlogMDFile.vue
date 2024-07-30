<template>
  <div class="upload-container">
    <el-upload
        class="upload-demo"
        action="http://localhost:8080/api/upload"
        :http-request="handleUpload"
        :show-file-list="false"
        accept=".md"
    >
      <el-button type="primary" class="upload-button">上传 Markdown 文件</el-button>
    </el-upload>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const handleUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file.file);

  try {
    const response = await axios.post('http://localhost:8080/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    ElMessage.success('文件上传成功');
  } catch (error) {
    ElMessage.error('文件上传失败');
  }
};
</script>

<style scoped>
.upload-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.upload-button {
  border-radius: 25px;
  font-size: 18px;
  font-family: 'KaiTi', serif;
}
</style>
