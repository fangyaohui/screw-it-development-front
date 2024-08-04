<template>

  <el-container style="height: 10px; padding-top: 50px;">

    <el-row>
      <el-col>
        <div class="big-box">
          <NavigationBar/>
        </div>
      </el-col>
    </el-row>

    <el-row style="padding: 5%">
      <el-col :span="24" style="padding-bottom: 10px;">
        <Headlines/>
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

</script>

<style scoped>

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
