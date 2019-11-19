<template>
  <div class="htitle">
    
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <div class="left">
          <el-menu-item index="1" disabled>在线报修系统</el-menu-item>
        </div>
        <div class = 'middle'>
           <el-menu-item index="2"><router-link to="index1">首页</router-link></el-menu-item>
           <el-menu-item index="3"><router-link to="baoxiu">我要报修</router-link></el-menu-item>
           <el-menu-item index="4"><router-link to="index1">我的报修</router-link></el-menu-item>
        </div>
        <div class="right">
            <el-menu-item index="5"><router-link to="logoin.vue">登录</router-link></el-menu-item>
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
    display: flex;
    flex-direction: row;
    justify-content: space-between
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
  .middle{
    display: inline-flex;
    flex-direction: row;
  }
  /* .left, .right{
    width:30%;
    margin: 0;
  }
  .middle a{
      width:11%;
  } */
</style>
