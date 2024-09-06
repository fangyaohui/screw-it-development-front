<template>
  <div class="blog-container">
    <!-- 博客内容居中显示 -->
    <div v-html="blogContent" class="markdown-content"></div>

    <!-- 评论区 -->
    <div class="comment-section">
      <el-input
          v-model="userComment"
          type="textarea"
          placeholder="请输入评论..."
          rows="3"
          class="comment-input"
          clearable
      ></el-input>
      <el-button type="primary" class="submit-btn" @click="submitComment">
        提交评论
      </el-button>

      <!-- 显示评论列表 -->
      <div class="comment-list">
        <div
            v-for="(comment, index) in comments"
            :key="index"
            class="comment-item"
        >
          <div class="comment-author">用户{{ index + 1 }}:</div>
          <div class="comment-content">{{ comment }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import {getBlogInfoApi} from "@/api/blog/index";
import 'highlight.js/styles/github.css'  // 使用GitHub风格的代码高亮样式
import { useRoute } from 'vue-router';
import {addBlogCommentApi} from "@/api/blog/index";

// 使用useRoute钩子获取当前路由
const route = useRoute();

// 从URL中获取blogId查询参数
const blogId = route.query.blogId;

const blogContent = ref('');
const mdParser = new MarkdownIt();

const fetchBlog = async () => {
  try {
    const response = await getBlogInfoApi({
      'blogId':blogId
    });
    blogContent.value = mdParser.render(response.data.data.content); // 解析Markdown
  } catch (error) {
    console.error('获取博客内容失败', error);
  }
};

// 用户评论数据
const userComment = ref('')
const comments = ref([])

// 提交评论
const submitComment = async () => {
  if (userComment.value.trim()) {
    comments.value.push(userComment.value)
    alert(userComment.value)
    const data = {
      "comment":userComment.value,
      "blogId": blogId,
      "parentId":-1
    }
    const res = addBlogCommentApi(data);

    userComment.value = ''
    ElMessage.success('评论提交成功！')
  } else {
    ElMessage.warning('请输入评论内容！')
  }
}

onMounted(() => {
  fetchBlog();
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block)
  })
});
</script>

<style scoped>

.blog-container {
  width: 60%;
  margin: 0 auto;
  font-family: 'KaiTi', serif;
  font-size: 20px;
  line-height: 1.8;
}

.markdown-content {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 12px;
  margin-bottom: 40px;
}

.comment-section {
  text-align: center;
  margin-top: 40px;
}

.comment-input {
  width: 100%;
  border-radius: 12px;
  font-family: 'KaiTi', serif;
  font-size: 18px;
}

.submit-btn {
  margin-top: 10px;
  font-family: 'KaiTi', serif;
  font-size: 18px;
  border-radius: 12px;
}

.comment-list {
  margin-top: 30px;
  text-align: left;
}

.comment-item {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 12px;
}

.comment-author {
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
  color: #606266;
}

.comment-content {
  font-size: 16px;
  font-family: 'KaiTi', serif;
}

/* 代码段美化 */
pre {
  padding: 15px;
  background-color: #2d2d2d;
  color: #ffffff;
  border-radius: 8px;
  font-size: 16px;
  overflow: auto;
}

code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
}

</style>
