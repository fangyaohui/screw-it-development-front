<template>
  <div class="register-container">
    <el-form :model="form" ref="form" label-width="120px" class="register-form">
      <el-form-item label="用户名" prop="username" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
        <el-input v-model="form.username" placeholder="请输入用户名" class="custom-input"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
        <el-input type="password" v-model="form.password" placeholder="请输入密码" class="custom-input"></el-input>
      </el-form-item>
      <el-form-item label="重复密码" prop="confirmPassword" :rules="[{ required: true, message: '请重复输入密码', trigger: 'blur' }]">
        <el-input type="password" v-model="form.confirmPassword" placeholder="请重复输入密码" class="custom-input"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" :rules="[{ required: true, message: '请输入邮箱', trigger: 'blur' }]">
        <el-input v-model="form.email" placeholder="请输入邮箱" class="custom-input"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phone" :rules="[{ required: true, message: '请输入电话号码', trigger: 'blur' }]">
        <el-input v-model="form.phone" placeholder="请输入电话号码" class="custom-input"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captcha" :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' }]">
        <el-input v-model="form.captcha" placeholder="请输入验证码" class="custom-input"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="button-container">
          <el-button type="primary" @click="onSubmit" class="custom-button">注册</el-button>
          <el-button type="primary" @click="onSubmit" class="custom-button">登录</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        captcha: ''
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('表单验证通过');
          // 提交注册信息
        } else {
          console.log('表单验证失败');
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.register-container {
  background-image: url('src/assets/img/register_backword.png'); /* 替换为你的背景图片路径 */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-form {
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
  opacity:0.9;
}

.el-form-item {
  margin-bottom: 30px;
}

.custom-input .el-input__inner {
  border-radius: 30px;
  height: 50px;
  font-size: 18px;
  font-family: 'Cursive', sans-serif; /* 替换为你喜欢的艺术字体 */
}

.custom-button {
  border-radius: 30px;
  height: 50px;
  width: 100px;
  font-size: 16px;
  font-family: 'Cursive', sans-serif; /* 替换为你喜欢的艺术字体 */
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px; /* 按钮间的间距 */
}
</style>
