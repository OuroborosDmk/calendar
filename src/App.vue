<template>
<div id="app">
  <header>
    <nav>
      <router-link to="/login">登录</router-link>
      <router-link to="/calendar">日历</router-link>
      <router-link to="">博客</router-link>
      <router-link to="">个人中心</router-link>
    </nav>
  </header>
  <router-view></router-view>
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
