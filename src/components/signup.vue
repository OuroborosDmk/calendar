<template>
  <div id="signupBox">
    <input id="username" placeholder="请输入用户名" @mouseup="isusernameTrue" v-model="signMessage.username"><p>{{usernameRole}}</p>
    <input id="password" type="password" placeholder="请输入密码" @mouseup="ispwsame" v-model="signMessage.password"><p v-show="error">两次输入的密码不一致</p>
    <input id="repassword" type="password" placeholder="请重新输入密码" @mouseup="isrepwsame" v-model="repassword"><p v-show="reerror">两次输入的密码不一致</p>
    <input id="name" placeholder="请输入昵称" v-model="signMessage.name">
    <input id="email" type="email" placeholder="请输入邮箱用于找回密码" v-model="signMessage.email">
    <button @click="signup">注册</button>
  </div>
</template>
<style>
@import "../assets/css/signup.css";
</style>
<script>
export default {
  name: 'signup',
  data () {
    return {
      error: false,
      reerror: false,
      repassword: '',
      usernameRole: '用户名注册规则111111',
      signMessage: {
        username: '',
        password: '',
        name: '',
        email: ''
      }
    }
  },
  methods: {
    isusernameTrue:function(){
      this.usernameRole = '用户名注册规则111111';
    },
    ispwsame:function(){
      if(this.signMessage.password != this.repassword){
        this.error=true;
      }
      else if(this.signMessage.password === this.repassword){
        this.error=false;
        this.reerror=false;
      }
    },
    isrepwsame:function(){
      if(this.signMessage.password != this.repassword){
        this.reerror=true;
      }
      else if(this.signMessage.password === this.repassword){
        this.error=false;
        this.reerror=false;
      }
    },
    signup:function(){
      var username;
      //将注册数据传递给数据库
      //返回用户名是否已经存在
      if(this.signMessage.username === username){
        this.usernameRole = '该用户名已经存在，请重新注册';
      }
      console.log();
    }
  },
  mounted: function(){
    
  }
}
</script>
