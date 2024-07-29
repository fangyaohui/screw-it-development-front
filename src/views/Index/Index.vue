<template>
  <div class="login-form">
    <el-form
        :model="form"
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
            v-model="form.username"
            type="text"
            autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
            v-model="form.password"
            type="password"
            autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue';
import { ElMessage, ElForm } from 'element-plus';

// 表单数据
const form = reactive({
  username: '',
  password: '',
});

// 表单验证规则
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
});

// 登录表单的引用
const loginForm = ref(null);

// 提交表单
const submitForm = async () => {
  try {
    await loginForm.value.validate();
    // 假设使用axios发送请求
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    if (response.ok) {
      ElMessage.success('登录成功');
      // 处理登录成功的逻辑，如跳转等
    } else {
      ElMessage.error(data.message || '登录失败');
    }
  } catch (error) {
    ElMessage.error('表单验证失败');
  }
};

// 表单验证
const validateForm = () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      submitForm();
    } else {
      ElMessage.error('表单验证失败');
    }
  });
};
</script>

<style scoped>
.login-form {
  width: 300px;
  margin: 100px auto 0;
}
</style>