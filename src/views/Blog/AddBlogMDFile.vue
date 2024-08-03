<template>
  <el-container style="padding: 20px; font-family: 楷体,serif; font-size: larger;">
    <el-header>
      <h2>上传博客</h2>
    </el-header>
    <el-main style="top: 20px">
      <h3>请先上传博客内容中的图片，再上传博客</h3>
      <h3>上传图片</h3>
      <el-upload
          drag
          multiple
          directory
          :headers="upload.headers"
          :action="upload.upload_img_url"
          :on-success="handleSuccess"
          :before-upload="beforeUploadImage"
          auto-upload:false
          accept="image/*"
          :show-file-list="true"
          style="border-radius: 15px;"
      >
        <i class="el-icon-upload" style="font-size: 48px;"></i>
        <div class="el-upload__text">将 图片 文件拖到这里，或<em>点击上传</em></div>
      </el-upload>
      <h3>上传博客</h3>
      <el-upload
          drag
          multiple
          :headers="upload.headers"
          :action="upload.upload_blog_url"
          accept=".md"
          :on-success="handleSuccess"
          :before-upload="beforeUploadBlog"
          auto-upload:false
          :show-file-list="true"
          style="border-radius: 15px;"
      >
        <i class="el-icon-upload" style="font-size: 48px;"></i>
        <div class="el-upload__text">将 Markdown 文件拖到这里，或<em>点击上传</em></div>
      </el-upload>
    </el-main>
  </el-container>
</template>

<script setup>

const upload = ({
  headers: {
    Authorization: "Bearer " + localStorage.getItem('token'),
    'Access-Control-Allow-Origin': '*'
  },
  upload_blog_url: '/screw/api/blog/upload/uploadMDFile',
  upload_img_url:'/screw/api/blog/upload/uploadImage'
});

const beforeUploadImage =  (file) => {
  if (!file.type.startsWith('image/')) {
    alert("只能上传图片")
    return false
  }

  return true
}

const beforeUploadBlog = (file) => {

  const isMd = file.type === 'text/markdown' || file.name.endsWith('.md');
  if (!isMd) {
    alert('请上传Markdown文件');
    return false;
  }


  return true; // 如果文件类型正确，返回true以继续上传
}

const handleSuccess = (response, file) => {
  ElMessage.success('文件上传成功!')
}


</script>

<style>
.el-upload {
  background: #f5f5f5;
  border: 2px dashed #d9d9d9;
  border-radius: 15px;
  padding: 40px 20px;
  text-align: center;
  transition: border-color 0.3s;
}

.el-upload:hover {
  border-color: #409eff;
}
</style>
