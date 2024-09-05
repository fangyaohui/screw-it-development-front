<template>
  <div class="blog-container">
    <div v-html="blogContent" class="markdown-content"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import {getBlogInfoApi} from "@/api/blog/index";

import { useRoute } from 'vue-router';

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

onMounted(() => {
  fetchBlog();
});
</script>

<style scoped>
.markdown-content {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.markdown-content h1, .markdown-content h2, .markdown-content h3 {
  margin-top: 1.5em;
}

.markdown-content p {
  margin: 1em 0;
}

.markdown-content code {
  background-color: #f4f4f4;
  padding: 2px 4px;
  border-radius: 4px;
}

.markdown-content pre {
  background-color: #282c34;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}
</style>
