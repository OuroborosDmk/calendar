<template>
<div id="app">
  <header>
    <nav>
      <router-link to="/signup"><a>注册/登录</a></router-link>
      <a href="#">日历</a>
      <a href="#">博客</a>
      <a href="#">个人中心</a>
    </nav>
  </header>
  <calendar></calendar>
</div>
</template>

<script>
import calendar from './components/calendar'
export default {
  name: 'App',
  components: {
    calendar: calendar
  }
}
</script>

<style>
@import "./assets/css/main.css";

</style>
