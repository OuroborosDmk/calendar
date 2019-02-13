<template>
<div id="app">
  <header>
    <nav>
      <a href="#">注册/登录</a>
      <a href="#">日历</a>
      <a href="#"></a>
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
