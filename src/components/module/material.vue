<template>
  <div class="title">
      <el-container>
          <el-aside width="240px">
              <div>
                <el-row class="tac">
                  <el-col :span="12">
                    <el-menu
                      default-active="2"
                      class="el-menu-vertical-demo"
                      @open="handleOpen"
                      @close="handleClose">
                      <router-link to="/yinsi" style="text-decoration: none;">                     
                      <el-menu-item index="1">
                        <i class="el-icon-document"></i>
                        <span slot="title">隐私</span>
                      </el-menu-item> 
                      </router-link>                 
                      <router-link to="/ziliao" style="text-decoration: none;">
                      <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">个人资料</span>
                      </el-menu-item>
                      </router-link>
                      <router-link to="/shezhi" style="text-decoration: none;">
                      <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">设置</span>
                      </el-menu-item>
                    </router-link>
                    </el-menu>
                    <router-view/>
                  </el-col>
                </el-row>
              </div>
          </el-aside>
      </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          number: '',
          date1: '',
          region: '',
          desc: ''
        },
        rules: {
        }
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .fir{
    float: left;
    font-size: 20px;
  }
  .sec{
    float: right;
    font-size: 20px;
  }
  .fir,.sec{
    line-height: 55px;
  }
  .third{
    float: left;
  }
  /* .el-menu-item.is-active{
    color:#409EFF;
  } */
</style>