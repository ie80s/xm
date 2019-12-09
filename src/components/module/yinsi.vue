<template>
<div class="two">
    <el-container>
    <material></material>
    <el-container>
    <el-header>
        <div class="fi">
            <div class="a"><el-button round>个人隐私</el-button></div>
            <div class="co"><el-button  round>返回首页</el-button></div>
        </div>
    </el-header>   
    <el-main> 
        <div class="c">       
          <span style="float: left; color: #409EFF;">隐私设置及安全</span>
          <el-select v-model="value1" placeholder="隐私设置及安全">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span style="color: #409EFF;">语言</span>
          <el-select v-model="value2" placeholder="语言选择">
            <el-option
              v-for="item in oks"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span style="color: #409EFF;">下载内容</span>
          <el-select v-model="value3" placeholder="下载内容">
            <el-option
              v-for="item in gos"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span style="color: #409EFF;">系统</span>
          <el-select v-model="value4" placeholder="系统选项">
            <el-option
              v-for="item in cos"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option> 
          </el-select>
          <span style="color: #409EFF;">自动填充</span>
          <el-select v-model="value5" placeholder="填充选项">
            <el-option
              v-for="item in abs"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option> 
          </el-select>
          <span style="color: #409EFF;">重置并清理</span>
          <el-select v-model="value6" placeholder="请选择">
            <el-option
              v-for="item in dds"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option> 
          </el-select>       
        </div>
        <div class="b">
           <span style="color: #409EFF;">上传个人头像</span>
            <el-upload
            class="avatar-uploader"
            action="https://47.94.10.228"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
    </el-main>
    </el-container>
    </el-container>
</div>
</template>>
<script>
    import material from '../../components/module/material'
    export default{
        data() {
      return {
        imageUrl: '',
        options: [{
          value: '选项1',
          label: '同步功能及服务'
        }, {
          value: '选项2',
          label: '管理安全秘钥'
        }, {
          value: '选项3',
          label: '网站设置'
        }, {
          value: '选项4',
          label: '清除浏览数据'
        }],
        value1:'',
        oks:[{
          value:'选项1',
          label:'中文(简体)'
        },{
          value:'选项2',
          label:'中文(繁体)'
        },{
          value:'选项3',
          label:'English'
        },{
          value:'选项4',
          label:'русский'
        }],
      value2:'',
      gos:[{
        value:'选项1',
        label:'下载位置选择'
      },{
        value:'选项2',
        label:'查找文件保存位置'
      }],
      value3:'',
      cos:[{
        value:'选项1',
        label:'关闭页面后台继续运行'
      },{
        value:'选项2',
        label:'使用硬件加速模式'
      },{
        value:'选项3',
        label:'打开计算机代理设置'
      }],
      value4:'',
      abs:[{
        value:'选项1',
        label:'密码'
      },{
        value:'选项2',
        label:'付款方式'
      },{
        value:'选项3',
        label:'地址和其他信息'
      }],
      value5:'',
      dds:[{
        value:'选项1',
        label:'还原默认设置'
      },{
        value:'选项2',
        label:'清理计算机'
      }],
      value6:'',
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
        components: {
        material
    }
    }
</script>
<style>
    .two{
        display: flex;
        width: 100%;
        height: 100%;
    }
    .a{
        margin-right: auto;
    }
    .el-header{
        display: inline-flex;
    }
    .fi{
       display: inline-flex;
       align-items: center;
    }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    
  }
  .avatar { 
    display: block;
  }
  .b{
      float: right;
  }
  .c{
    /* border: 1px solid #409EFF;
    border-radius: 30px; */
    /* width: 800px; */
    height: 400px;
    width:50%;
    flex-direction: column;
    display: flex; 
  } 
.el-main{
  display: inline-flex;
  justify-content: space-between;
  height: 100%;
  width:100%;
}
.co{
    margin-left: 680%; 
  }
</style>