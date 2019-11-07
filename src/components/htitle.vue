<template>
  <div class="htitle">
    
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <div class="left">
       <el-menu-item index="1">Hi 欢迎来到大觅 | <router-link :to="{ name: 'logoin' }">登录</router-link>
        | <router-link :to="{ name: 'Logon' }">注册</router-link>
       </el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的大觅</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        </div>
         <div class="right">
        <el-menu-item index = "3">123</el-menu-item>
        <el-menu-item index = "4">手机版</el-menu-item>
         <el-submenu index="5">
           <template slot="title">客户服务</template>
           <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
         </el-submenu>
         <el-submenu index="6">
           <template slot="title">网址导航</template>
           <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
         </el-submenu> 
         <el-menu-item index = "7">English</el-menu-item>
          </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
        activeIndex: '1',
        activeIndex2: '1'
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style scoped>
  .el-menu{
    width: 100%;
    /* display: flex;
    flex-direction: row;
    justify-content: space-between */
  }
  .el-menu-title{
    margin-top: 0;
  }
  .el-menu-item{
    font-size: 18px;
  }
  a{
    text-decoration: none;
  }
  .left, .right{
    display: inline-flex;
    flex-direction: row;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
</style>
