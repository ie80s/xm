<template>
<div>
    <el-container>
    <material></material>
    <el-container>
    <el-header>
      <div class="wps">
        <div class="abb"><el-button round>个人设置</el-button></div>
        <div class="cool"><el-button  round>返回首页</el-button></div>
      </div>
    </el-header>
    <el-main>
      <div class="lii">
        <span style="float: left; color: #409EFF; margin-bottom: 10px;">用户</span>
        <el-select v-model="value1" placeholder="用户选择">
            <el-option
              v-for="item in ops"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option> 
        </el-select>
        <span style="float: left; color: #409EFF; margin-bottom: 10px;">外观</span>
        <el-select v-model="value2" placeholder="外观选择">
            <el-option
              v-for="item in dds"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option> 
        </el-select>
        <span style="float: left; color: #409EFF; margin-bottom: 10px;">浏览</span>
        <el-select v-model="value3" placeholder="请选择">
            <el-option
              v-for="item in aks"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option> 
        </el-select>
        <span style="float: left; color: #409EFF; margin-bottom: 10px;">启动</span>
        <div class="dod">
        <el-radio v-model="radio" label="1">开机自动启动</el-radio>
        <el-radio v-model="radio" label="2">关闭开机自启</el-radio>
        </div>
        <span style="float: left; color: #409EFF; margin-bottom: 10px;">动画</span>
        <div class="bbc">
        <el-radio v-model="radio1" label="1">允许动画效果</el-radio>
        <el-radio v-model="radio1" label="2">禁止动画效果</el-radio>
        </div>
        <span style="float: left; color: #409EFF; margin-bottom: 10px;">关闭主面板</span>
        <div class="aac">
        <el-radio v-model="radio2" label="1">最小化</el-radio>
        <el-radio v-model="radio2" label="2">退出应用</el-radio>
        </div>
        <span style="float: left; color: #409EFF; margin-bottom: 10px;">通知显示</span>
        <el-select v-model="value4" placeholder="请选择">
            <el-option
              v-for="item in hhs"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option> 
        </el-select>
      </div>
    </el-main>
    </el-container>
    </el-container>
</div>
</template>
<script>
    import material from '../../components/module/material'
    export default{
        data(){
            return{
              radio: '1',
              radio1:'1',
              radio2:'1',
               ops:[{
                 value:'选择1',
                 label:'同步功能与服务'
               },{
                 value:'选择2',
                 label:'名片和图片'
               },{
                 value:'选择3',
                 label:'导入书签和设置'
               }],
               value1:'',
               dds:[{
                 value:'选择1',
                 label:'主题背景'
               },{
                 value:'选择2',
                 label:'显示主页按钮'
               },{
                 value:'选择3',
                 label:'显示书签栏'
               },{
                 value:'选择4',
                 label:'自定义字体'
               },{
                 value:'选择5',
                 label:'网页缩放'
               }],
               value2:'',
               aks:[{
                 value:'选择1',
                 label:'使用自动滚屏'
               },{
                 value:'选择2',
                 label:'使用平滑滚动'
               },{
                 value:'选择3',
                 label:'推荐扩展'
               },{
                 value:'选择4',
                 label:'推荐新功能'
               }],
               value3:'',
               hhs:[{
                 value:'选择1',
                 label:'报修接收'
               },{
                 value:'选择2',
                 label:'收到消息'
               },{
                 value:'选择3',
                 label:'报修完成'
               }],
               value4:'',
            }
        },
        methods: {
            
        },
        components: {
        material
    }
    }
</script>
<style scoped>
  .wps{
       display: inline-flex;
       align-items: center;
    }
    .el-header{
        display: inline-flex;
    }
    .abb{
      margin-right: auto;
    }
    .cool{
      margin-left: 680%;
    }
    .lii{
      /* border: 1px solid #409EFF;
      border-radius: 30px; */
      height: 800px;
      width:50%;
      flex-direction: column;
      display: flex;
    }
    .dod{
      display: flex;
      justify-content: center;
    }
    .bbc{
      display: flex;
      justify-content: center;
    }
    .aac{
      display: flex;
      justify-content: center;
    }
</style>