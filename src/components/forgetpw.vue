<template>
  <div>
    <div v-show="isgetpw">
      <input type="password" v-model="password" @mouseup="ispwsame"><p v-show="error">两次输入的密码不一致</p>
      <input type="password" v-model="repassword" @mouseup="isrepwsame"><p v-show="reerror">两次输入的密码不一致</p>
      <button @click="changepw">更改密码</button>
    </div>
    <div v-show="nogetpw">
      <input v-model="username"><p v-show="isusername">{{usernameErrorinfo}}</p>
      <button @click="sendinfo">发送验证码</button>
      <p v-show="issendinfo">已经向预留邮箱发送验证码，请在下方输入验证码</p>
      <input v-model="message"><p v-show="ismessage">{{errorinfo}}</p>
      <button @click="getpw">下一步</button>
    </div>
  </div>
</template>
<style>
@import "../assets/css/forgetpw.css";
</style>
<script>
export default {
  name: 'forgetpw',
  data () {
    return {
      error: false,
      reerror: false,
      password: '',
      repassword: '',
      isgetpw: false,
      nogetpw: true,
      username: '',
      isusername: false,
      usernameErrorinfo: '',
      message: '',
      truemessage: '',
      errorinfo: '',
      issendinfo: false,
      ismessage: false
    }
  },
  methods: {
    sendinfo:function(){
      this.isusername = false;
      if((this.username == ' ')||(this.username == '')||(this.username == null)){
        this.isusername = true;
        this.usernameErrorinfo = '请输入用户名';
      }
      //从数据库中读取账号预留邮箱
      //向邮箱中发送随机生成的验证码
      //获得truemessage(验证码)
      if(0){
        this.isusername = true;
        this.usernameErrorinfo = '用户名不存在';
      }
    },
    getpw:function(){
      this.issendinfo = false,
      this.ismessage = false
      if(this.truemessage == ''){
        this.issendinfo = false;
        this.ismessage = true;
        this.errorinfo = "未发送验证码";
      }
      else if(this.message != this.truemessage){
        this.issendinfo = true;
        this.ismessage = true;
        this.errorinfo = "验证码错误";
      }
      else if(this.message === this.truemessage){
        this.nogetpw = false;
        this.isgetpw = true;
      }
    },
    changepw:function(){
      alert("修改成功!");
      //将密码传入数据库，修改该账号密码
      
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
    }
  },
  mounted: function(){
    //console.log(this.$route.params.test);
  }
}
</script>