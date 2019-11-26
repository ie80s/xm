<template>
    <div id="page">
        <ttitle></ttitle>
        <div class="application">
            <el-form ref="form" :model="form" label-width="13%" label-position="left">
            <el-form-item label="故障区域">
                <el-select v-model="form.region" placeholder="请选择故障区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <br><br>
            <el-form-item label="故障地址">
                <el-input v-model="form.radr" placeholder="请输入详细的故障地址，如门牌号等"></el-input>
            </el-form-item>
            <br><br>
            <el-form-item label="维修项目">
                 <el-cascader
                    v-model="form.rtype"
                    :options="options"
                    :props="{ expandTrigger: 'hover' }"
                    @change="handleChange"
                    placeholder="请选择维修项目"></el-cascader>
            </el-form-item>
            <br><br>
            <el-form-item label="故障描述">
                <el-input type="textarea" v-model="form.rdes" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请详细填写故障描述，字数控制在6~300字之间"></el-input>
            </el-form-item>
            <br><br>
            <el-form-item label="故障图片">
                <el-upload
                    accept="image/jpg,image/png"
                    action="106.12.189.19/record/insertTo"
                    list-type="picture-card"
                    :on-success="imgSucess"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="imgRemove"
                    :headers="headerMsg"
                    :data="upData">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <br><br>
            <el-form-item label="联系电话">
                <el-input v-model="form.tel" placeholder="请输入电话号码"></el-input>
            </el-form-item>
            <br><br>
            <el-form-item label="无人维修">
                <el-radio-group v-model="form.noman">
                <el-radio label="同意"></el-radio>
                <el-radio label="不同意"></el-radio>
                </el-radio-group>
            </el-form-item>
            <br><br>
            <div class="sub">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit(form)">立即提交</el-button>
                </el-form-item>
            </div>           
        </el-form>
        </div>
        
    </div>
</template>

<script>
import ttitle from '@/components/common/ttitle'
import { async } from 'q';
export default {
    data(){
        return{
            headerMsg:{Token:'post'},
            upLoadUrl:'106.12.189.19/record/insertTo',
            form:{
                ruid:'012702505248',
                region:'',
                radr:'asd',
                rtype:'asd',
                rdes:'asd',
                tel:'11111111111',
                rdate:'',
                wstatic:'待维修',
            },
             options: [{
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                    value: 'yizhi',
                    label: '一致'
                    }, {
                    value: 'fankui',
                    label: '反馈'
                    }, {
                    value: 'xiaolv',
                    label: '效率'
                    }, {
                    value: 'kekong',
                    label: '可控'
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                    }, {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                    }]
                }]
                }, {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                    value: 'layout',
                    label: 'Layout 布局'
                    }, {
                    value: 'color',
                    label: 'Color 色彩'
                    }, {
                    value: 'typography',
                    label: 'Typography 字体'
                    }, {
                    value: 'icon',
                    label: 'Icon 图标'
                    }, {
                    value: 'button',
                    label: 'Button 按钮'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                    value: 'radio',
                    label: 'Radio 单选框'
                    }, {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                    }, {
                    value: 'input',
                    label: 'Input 输入框'
                    }, {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                    }, {
                    value: 'select',
                    label: 'Select 选择器'
                    }, {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                    }, {
                    value: 'switch',
                    label: 'Switch 开关'
                    }, {
                    value: 'slider',
                    label: 'Slider 滑块'
                    }, {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                    }, {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                    }, {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                    }, {
                    value: 'upload',
                    label: 'Upload 上传'
                    }, {
                    value: 'rate',
                    label: 'Rate 评分'
                    }, {
                    value: 'form',
                    label: 'Form 表单'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                    value: 'table',
                    label: 'Table 表格'
                    }, {
                    value: 'tag',
                    label: 'Tag 标签'
                    }, {
                    value: 'progress',
                    label: 'Progress 进度条'
                    }, {
                    value: 'tree',
                    label: 'Tree 树形控件'
                    }, {
                    value: 'pagination',
                    label: 'Pagination 分页'
                    }, {
                    value: 'badge',
                    label: 'Badge 标记'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                    value: 'alert',
                    label: 'Alert 警告'
                    }, {
                    value: 'loading',
                    label: 'Loading 加载'
                    }, {
                    value: 'message',
                    label: 'Message 消息提示'
                    }, {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                    }, {
                    value: 'notification',
                    label: 'Notification 通知'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                    }, {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                    }, {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                    }, {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                    }, {
                    value: 'steps',
                    label: 'Steps 步骤条'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                    value: 'dialog',
                    label: 'Dialog 对话框'
                    }, {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                    }, {
                    value: 'popover',
                    label: 'Popover 弹出框'
                    }, {
                    value: 'card',
                    label: 'Card 卡片'
                    }, {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                    }, {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                    }]
                }]
                }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }]
            }],           
            dialogImageUrl: '',
            dialogVisible: false
        };
    },
     methods: {
      handleChange(value) {
        console.log(value);
      },
      imgRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        },
        onSubmit(form) {
        // this.$refs[form].validate(async valid => {
        //     if(valid){
        //         this.$refs.upload.submit()
        //     }else{
        //         return false
        //     }
        // })
        console.log(this.form)
        console.log(fileList)
      },
      getTime(){
          var _this = this;
          let year = new Date().getFullYear();
          let month = new Date().getMonth() + 1;
          let day = new Date().getDate();
          let hour = new Date().getHours();
          let min = new Date().getMinutes() < 10? '0'+new Date().getMinutes() : new Date().getMinutes();
          _this.form.rdate = year + '-' + month + '-' + day + '  ' + hour + ':' + min;
      },
      currentTime(){
            setInterval(this.getTime,500)
      },
      imgSucess(res, file, fileList){
        console.log(res)
        console.log(file)
        console.log(fileList)
      }
    },
    components: {
        ttitle
    },
    created(){
        this.currentTime();
    },
    computed:{
        upData(){
            return{
                body: this.form 
            }
        }
    }
}
</script>

<style>
    #page{
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1)
    }
    form{
        margin-left: 20%;
        width:60%;
        border: 1px solid black;
        background-color: white
    }
    .el-input, .el-select, .el-cascader{
        width:57%;
        float: left;
    }
     .el-upload{
         float: left;
     }
    .el-radio-group{
        margin-top: 1%;
        float: left;
    }
    .el-textarea{
        width: 50%;
        float: left;
    }
    /* .el-form-item__label{
        width: 15%;
    } */
    /* .application{
        margin-top: 2%;
    } */
    .el-form-item{
        margin-left: 20%;
    }
    .sub{
        position: relative;
        left: -25%;
    }
</style>