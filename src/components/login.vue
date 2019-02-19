<template>
  <div>
    <input id="username" v-model="userinfo.username"><p v-show="nameerror">{{nameerrorinfo}}</p>
    <input id="password" v-model="userinfo.password"><p v-show="pwerror">{{pwerrorinfo}}</p>
    <!--存放验证码-->
    <button @click="login">登录</button>
    <router-link to="/forgetpw">找回密码</router-link>
    <router-link to="/signup">注册</router-link>
  </div>
</template>
<style>
@import "../assets/css/login.css";
</style>
<script>
import forgetpw from './forgetpw';
import signup from './signup';
export default {
  name: 'login',
  data () {
    return {
      nameerror: false,
      pwerror: false,
      nameerrorinfo: '',
      pwerrorinfo: '',
      userinfo: {
        username: '',
        password: ''
      },
      returninfo: {
        isuserinfo: false,
        ispwinfo: false
      }
    }
  },
  methods: {
    login:function(){
      this.nameerror = false;
      this.pwerror = false;
      this.nameerrorinfo = '';
      this.pwerrorinfo = '';
      if((this.userinfo.username == ' ')||(this.userinfo.username == '')||(this.userinfo.username == null)){
        this.nameerror = true;
        this.nameerrorinfo = "请输入用户名";
      }
      else if((this.userinfo.password == '')||(this.userinfo.password == '')||(this.userinfo.password == null)){
        this.pwerror = true;
        this.pwerrorinfo = "请输入密码";
      }
      //将数据传递至数据库，返回用户名密码是否正确的信息

      //将数据传递至数据库，返回用户名密码是否正确的信息
      if(this.returninfo.isuserinfo == false){
        this.nameerror = true;
        this.nameerrorinfo = "用户名不存在";
      }
      else if(this.returninfo.ispwinfo == false){
        this.pwerror = true;
        this.pwerrorinfo = "密码错误";
      }
      else if((this.returninfo.isuserinfo == true)&&(this.returninfo.ispwinfo == true)){
        alert("登录成功！");
      }
    }
  },
  mounted: function(){
    
  }
}
</script>