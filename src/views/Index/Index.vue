<template>

  <el-container style="height: 100vh; padding-top: 50px;">

    <el-row>
      <el-col>
        <div class="big-box">
          <NavigationBar/>
        </div>
      </el-col>
    </el-row>

    <el-row style="padding: 5%">
      <el-col >
        <Test/>
      </el-col>
    </el-row>

  </el-container>


  <el-container style="height: 100vh; padding-top: 10px;">

    <el-row justify="center" align="middle" style="width: 90%; margin: 0 auto;">
      <el-col :span="18" style="padding-right: 15px;">

        <div class="left-box">
          <h2>左边大盒子</h2>


          <el-row justify="center" align="top" style="width: 100%; margin: 0 auto;">

            <el-col :span="12" style="padding: 10px;">
              <div class="big-box">
                <img src="@/assets/img/login_background.png" alt="Big Image" class="image">
                <p>大盒子文字</p>

              </div>
            </el-col>

            <el-col :span="12">

              <el-row>
                <el-col :span="12" style="padding: 10px;">
                  <div class="small-box">
                    <img src="@/assets/img/login_background.png" alt="Small Image 1" class="image">
                    <p>小盒子1文字</p>
                  </div>
                </el-col>

                <el-col :span="12" style="padding: 10px;">
                  <div class="small-box">
                    <img src="@/assets/img/login_background.png" alt="Small Image 2" class="image">
                    <p>小盒子2文字</p>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12" style="padding: 10px;">
                  <div class="small-box">
                    <img src="@/assets/img/login_background.png" alt="Small Image 3" class="image">
                    <p>小盒子3文字</p>
                  </div>
                </el-col>

                <el-col :span="12" style="padding: 10px;">
                  <div class="small-box">
                    <img src="@/assets/img/login_background.png" alt="Small Image 4" class="image">
                    <p>小盒子4文字</p>
                  </div>
                </el-col>

              </el-row>
            </el-col>
          </el-row>

        </div>

      </el-col>

      <el-col :span="6" style="padding-left: 15px;">

        <div class="right-box">
          <h2>右边小盒子</h2>
        </div>

      </el-col>

    </el-row>
  </el-container>




</template>

<script setup>

import NavigationBar from '@/components/NavigationBar.vue'
import Test from '@/components/Test.vue'

</script>

<style scoped>

/* 左右布局大盒子*/
.left-box, .right-box {
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 60px;
  text-align: center;
  box-sizing: border-box;
}

/* 左边大盒子 头条五个盒子*/
.big-box, .small-box {
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
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
