<template>
<div class="login">
   <el-form  status-icon :model="user"  ref="ruleForm" class="login-form">
     <h1>用户登录</h1>
  <el-form-item  prop="userName" :rules="[
    { required: true, message: '请输入用户名', trigger: 'blur' }
    ]">
    <el-input type="text"  autocomplete="off" placeholder="请输入用户名"
    prefix-icon="el-icon-user-solid"  v-model="user.userName" clearable></el-input>
  </el-form-item>
  <el-form-item prop="userPassword"  :rules="[
    { required: true, message: '请输入密码', trigger: 'blur' }
    ]">
    <el-input type="password"  autocomplete="off" placeholder="请输入密码"
    prefix-icon="el-icon-lock"  v-model="user.userPassword" show-password clearable></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" class="login-btn">登录</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
     user:{
        userName:'',
      userPassword:''
     }
    }
  },methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$message({
          message: '提交成功',
          type: 'success'
        })
          } else {
            this.$message.error('提交失败')
            return false;
          }
        });
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login{
  width: 100%;
  height: 100vh;
  background:url(../assets/background.jpg) no-repeat;
  background-size: 100%;
  background-position: center;
  .login-form{
   position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    width: 300px;
    text-align: center;
    .password{
      margin: 12px 0;
    }
    .login-btn{
      width: 100%;
    }
  }
}
</style>
