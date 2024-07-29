<template>
  <div class="login-container">
    <div class="login-form-wrapper">
      <h2 class="login-title">SIDN用户登录</h2>
      <el-form :model="form" ref="form" label-width="90px" class="login-form">
        <el-form-item label="用户名" prop="username" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
          <el-input v-model="form.username" placeholder="请输入用户名" class="custom-input"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <el-input type="password" v-model="form.password" placeholder="请输入密码" class="custom-input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="custom-button">登录</el-button>
        </el-form-item>
        <el-form-item>
          <div class="button-container">
            <el-button type="text" @click="onRegister" class="link-button">用户注册</el-button>
            <el-button type="text" @click="onForgotPassword" class="link-button">忘记密码</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('表单验证通过');
          // 提交登录信息
        } else {
          console.log('表单验证失败');
          return false;
        }
      });
    },
    onRegister() {
      // 跳转到注册页面
      console.log('跳转到注册页面');
    },
    onForgotPassword() {
      // 跳转到忘记密码页面
      console.log('跳转到忘记密码页面');
    }
  }
};
</script>

<style scoped>
.login-container {
  background-image: url('src/assets/img/login_backword.png'); /* 替换为你的背景图片路径 */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form-wrapper {
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
}

.login-title {
  font-size: 24px;
  font-family: '楷体', sans-serif; /* 使用楷体 */
  margin-bottom: 20px;
  text-align: center;
}

.login-form {
  font-size: 24px;
  font-family: '楷体', sans-serif; /* 使用楷体 */
  margin-bottom: 20px;
  text-align: center;
}
.el-form-item {
  margin-bottom: 30px;
}

.custom-input .el-input__inner {
  border-radius: 30px;
  height: 50px;
  font-size: 18px;
  font-family: '楷体', sans-serif; /* 使用楷体 */
}

.custom-button {
  border-radius: 30px;
  height: 50px;
  font-size: 18px;
  font-family: '楷体', sans-serif; /* 使用楷体 */
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px; /* 按钮间的间距 */
}

.link-button {
  font-size: 20px;
  font-family: '楷体', sans-serif; /* 使用楷体 */
}
</style>
