<template>
  <div>
    <el-upload
        accept=".md"
        :headers="upload.headers"
        :action="upload.url"
    >
      <el-icon class="el-icon--upload">
        <upload-filled />
      </el-icon>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip text-center">
          <span>仅允许导入pdf格式文件。</span>
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script setup>

const upload = ({
  headers: {
    Authorization: "Bearer ",
    'Access-Control-Allow-Origin':'*'
  },
  url: '/screw/api/blog/addBlogMDFile',  // 地址,以aaa打头
});

</script>

<style scoped>

</style>
