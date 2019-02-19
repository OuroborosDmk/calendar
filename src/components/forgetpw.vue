<template>
  <div>
    <button @click="sendinfo">发送验证码</button>
    <p v-show="issendinfo">已经向预留邮箱发送验证码，请在下方输入验证码</p>
    <input v-model="message"><p v-show="ismessage">{{errorinfo}}</p>
    <button @click="getpw">找回密码</button>
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
      message: '',
      truemessage: '',
      errorinfo: '',
      issendinfo: false,
      ismessage: false
    }
  },
  methods: {
    sendinfo:function(){
      //向邮箱中发送随机生成的验证码
      //获得truemessage(验证码)
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
        
      }
    }
  },
  mounted: function(){
    //从数据库中读取账号预留邮箱
  }
}
</script>