<template>
  <el-container style="height: 80vh; padding-top: 50px;">
    <el-row justify="center" align="top" style="width: 90%; margin: 0 auto;">
      <el-col :span="12" style="padding: 10px;">
        <div class="big-box">
          <img :src="baseURL + info[0].image" alt="Big Image" class="image">
          <p>{{ info[0].title }}</p>
        </div>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="12" style="padding: 10px;">
            <div class="small-box">
              <img :src="baseURL + info[1].image" alt="Small Image 1" class="image">
              <p>{{ info[1].title }}</p>
            </div>
          </el-col>
          <el-col :span="12" style="padding: 10px;">
            <div class="small-box">
              <img :src="baseURL + info[2].image" alt="Small Image 2" class="image">
              <p>{{ info[2].title }}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" style="padding: 10px;">
            <div class="small-box">
              <img :src="baseURL + info[3].image" alt="Small Image 3" class="image">
              <p>{{ info[3].title }}</p>
            </div>
          </el-col>
          <el-col :span="12" style="padding: 10px;">
            <div class="small-box">
              <img :src="baseURL + info[4].image" alt="Small Image 4" class="image">
              <p>{{ info[4].title }}</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>

<script setup>

import {onMounted, ref, onBeforeMount} from "vue";
import {getHeadlineBriefInfoApi, getImageApi} from "@/api/blog/index";

// 定义接收的 props，其中 info 是一个对象
const props = defineProps({
  info: {
    type: Object,
    required: true,
  }
});

const baseURL = 'http://localhost:9000/screw-it-development-blog-buck/';

//
// const headline = ref();
// const imageUrl = ref('');
//
// // onBeforeMount()
//
// // 使用 onMounted 钩子
// onBeforeMount(async () => {
//   try {
//     const res = await getHeadlineBriefInfoApi();
//     // alert(JSON.stringify(headline.value))
//     if (res.data.code === 0) {
//       headline.value = res.data.data;
//       // 使用 Promise.all 确保所有图片 URL 都被获取
//       // headline.value = await Promise.all(
//       //     data.map(async (item) => ({
//       //       ...item,
//       //       image: await fetchImage(item.image), // 获取图片 URL
//       //     }))
//       // );
//       alert(JSON.stringify(headline.value[0]))
//     } else {
//       alert('服务器故障，请稍后再试');
//     }
//   } catch (e) {
//     alert('错误请稍后再试: ' + e);
//   }
// });
//
// onMounted(async () => {
//   try {
//     const res = await getHeadlineBriefInfoApi();
//     // alert(JSON.stringify(headline.value))
//     if (res.data.code === 0) {
//       headline.value = res.data.data;
//       // 使用 Promise.all 确保所有图片 URL 都被获取
//       // headline.value = await Promise.all(
//       //     data.map(async (item) => ({
//       //       ...item,
//       //       image: await fetchImage(item.image), // 获取图片 URL
//       //     }))
//       // );
//       alert("2"+JSON.stringify(headline.value[0]))
//     } else {
//       alert('服务器故障，请稍后再试');
//     }
//   } catch (e) {
//     alert('错误请稍后再试: ' + e);
//   }
// });

// const fetchImage = async (imgName) => {
//   try {
//     // 从后端获取图片 URL
//     const response = await getImageApi({ imageName: imgName });
//     return response.data.data; // 返回图片 URL
//   } catch (error) {
//     console.error('Error fetching image:', error);
//   }
// };

</script>

<style scoped>
.el-container {
  font-family: 'KaiTi', serif;
  font-size: 18px;
}

.big-box, .small-box {
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image {
  width: 100%;
  height: 75%;
  border-radius: 15px;
  object-fit: cover;
}

p {
  margin-top: 10px;
  font-size: 18px;
  font-family: 'KaiTi', serif;
}
</style>
