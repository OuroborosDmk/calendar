<template>
  <div>
    <div id="blogheader">
      <button @click="createBlog">新建</button>
      <button @click="manage">管理</button>
      <button @click="sort">排序</button>
      <input placeholder="请输入要查找内容标题" v-model="searchContent">
      <button @click="search">查找</button>
    </div>
    <div id="bloglist">
      <table></table>
    </div>
  </div>
</template>
<style>
@import "../assets/css/blog.css";
</style>
<script>
export default {
  name: 'blog',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    createblog:function(){

    },
    manage:function(){

    },
    sort:function(){

    },
    search:function(){

    }
  },
  mounted: function(){
    
  }
}
</script>
