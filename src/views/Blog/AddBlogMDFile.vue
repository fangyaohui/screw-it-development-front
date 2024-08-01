<template>
  <el-container style="padding: 20px; font-family: 楷体,serif; font-size: larger;">
    <el-header>
      <h2>上传博客</h2>
    </el-header>
    <el-main>
      <el-upload
          drag
          :headers="upload.headers"
          :action="upload.url"
          accept=".md"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
          auto-upload:false
          :show-file-list="true"
          style="border-radius: 15px;"
      >
        <i class="el-icon-upload" style="font-size: 48px;"></i>
        <div class="el-upload__text">将 Markdown 文件拖到这里，或<em>点击上传</em></div>
      </el-upload>
      <el-upload
          drag
          :headers="upload.headers"
          :action="upload.url"
          accept=".md"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
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
import {ref} from 'vue'
// import { ElMessage } from 'element-plus'
import axios from 'axios'

const file = ref(null)

const upload = ({
  headers: {
    Authorization: "Bearer ",
    'Access-Control-Allow-Origin': '*'
  },
  url: '/screw/api/blog/addBlogMDFile1',  // 地址,以aaa打头
});

const beforeUpload = (file) => {


  const allowedTypes = ['.md'];
  const fileType = file.name.split('.').pop().toLowerCase();
  if (!allowedTypes.includes('.' + fileType)) {
    ElMessage.error('只能上传.md格式的文件！');
    return false; // 阻止上传
  }
  console.log("格式符合")

  if (!file.name) return
  console.log(file.name)

  const reader = new FileReader()
  reader.readAsText(file)

  reader.onload = async () => {
    let content = reader.result

    // 提取所有图片链接并上传
    const imgRegex = /!\[.*?\]\((.*?)\)/g
    let match
    while ((match = imgRegex.exec(content)) !== null) {
      const imgUrl = match[1]
      console.log(imgUrl)
      // const imgData = await fetch(imgUrl).then(res => res.blob())
      // const formData = new FormData()
      // formData.append('file', imgData, 'image.png')

      // 假设你的后端图片上传接口是 /upload/image
      // const response = await axios.post('/upload/image', formData)
      // const newImgUrl = response.data.url

      // content = content.replace(imgUrl, newImgUrl)
    }

    // 上传最终的 Markdown 文件
    const blogFormData = new FormData()
    const finalBlob = new Blob([content], {type: 'text/markdown'})
    blogFormData.append('file', finalBlob, file.value.name)

    // 假设你的后端博客上传接口是 /upload/blog
    // await axios.post('/upload/blog', blogFormData)

    console.log('博客上传成功!')

    // 可以在这里添加更多的文件检查逻辑
    return true; // 允许上传
  }
}

const handleSuccess = (response, file) => {
  ElMessage.success('文件上传成功!')
}

const handleRemove = () => {
  file.value = null
}

const uploadMdFile = async (file) => {
  file.value = file.raw
}

function readFileFirefox(fileBrowser) {
  try {
    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
  }
  catch (e) {
    alert('无法访问本地文件，由于浏览器安全设置。为了克服这一点，请按照下列步骤操作：(1)在地址栏输入"about:config";(2) 右键点击并选择 New->Boolean; (3) 输入"signed.applets.codebase_principal_support" （不含引号）作为一个新的首选项的名称;(4) 点击OK并试着重新加载文件');
    return;
  }
  var fileName=fileBrowser.value; //这一步就能得到客户端完整路径。下面的是否判断的太复杂，还有下面得到ie的也很复杂。
  var file = Components.classes["@mozilla.org/file/local;1"]
      .createInstance(Components.interfaces.nsILocalFile);
  try {
    // Back slashes for windows
    file.initWithPath( fileName.replace(/\//g, "\\\\") );
  }
  catch(e) {
    if (e.result!=Components.results.NS_ERROR_FILE_UNRECOGNIZED_PATH) throw e;
    alert("File '" + fileName + "' cannot be loaded: relative paths are not allowed. Please provide an absolute path to this file.");
    return;
  }
  if ( file.exists() == false ) {
    alert("File '" + fileName + "' not found.");
    return;
  }


  return file.path;
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
