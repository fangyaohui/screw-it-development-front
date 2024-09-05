<template>


  <el-container style="height: 10px; padding-top: 50px;">

    <el-row>
      <el-col>
        <div class="big-box">
          <NavigationBar/>
        </div>
      </el-col>
    </el-row>

    <el-row style="padding: 5%" >
      <el-col :span="24" style="padding-bottom: 10px;">
        <Headlines v-if="dataFetched" :info="headline"/>
      </el-col>

      <el-col :span="18">
        <div class="left-box">
          <h2>左边大盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>



        </div>
      </el-col>

      <el-col :span="6" style="padding-left: 15px;">
        <div class="right-box">
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
          <h2>右边小盒子</h2>
        </div>
      </el-col>

    </el-row>

  </el-container>


</template>

<script setup>

import NavigationBar from '@/components/NavigationBar.vue'
import Headlines from '@/components/Headlines.vue'
import {onMounted, ref, onBeforeMount} from "vue";
import {getHeadlineBriefInfoApi, getImageApi} from "@/api/blog/index";

const headline = ref();
const imageUrl = ref('');
const dataFetched = ref(false); // 用于判断数据是否已加载

// 使用 onMounted 钩子
onMounted(async () => {
  try {
    const res = await getHeadlineBriefInfoApi();
    // alert(JSON.stringify(headline.value))
    if (res.data.code === 0) {
      headline.value = res.data.data;
      console.log(JSON.stringify(headline.value));
      dataFetched.value = true;
      // alert(JSON.stringify(headline.value[0]))
    } else {
      alert('服务器故障，请稍后再试');
    }
  } catch (e) {
    alert('错误请稍后再试: ' + e);
  }
});
</script>

<style scoped>
.background-container {
  background-image: url('src/assets/img/login_background.png');
  background-size: cover;  /* 确保图片覆盖整个容器 */
  background-position: center center;  /* 图片居中显示 */
  background-attachment: fixed;  /* 背景图片在滚动时固定 */
  background-repeat: no-repeat;  /* 背景图片不重复 */
}


/* 左右布局大盒子*/
.left-box, .right-box {
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
  top: 10px;
}

/* 左边大盒子 头条五个盒子*/
.big-box {
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
}

p {
  margin-top: 10px;
  font-size: 18px;
  font-family: 'KaiTi', serif;
}

</style>
