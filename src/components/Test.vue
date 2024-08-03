<template>
  <el-container style="height: 100vh; padding-top: 50px;">
    <el-row justify="center" align="top" style="width: 90%; margin: 0 auto;">
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
  </el-container>
</template>

<script setup>
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
