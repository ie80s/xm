<template>
    <div id = "app">
        <ttitle></ttitle>
        <div class = 'hhead'>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                </el-option>
            </el-select>
            <div class = 'search'>
                <input v-model="sousuo" placeholder="请输入演出，艺人，专辑信息" class="input">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>         
            </div>
        </div>
        <div class = 'hmain'>
            <div class="main_goods">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect" unique-opened="true">
                    <el-submenu index = '1'>
                         <template slot="title">演唱会</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index = '2'>
                         <template slot="title">音乐会</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index = '3'>
                         <template slot="title">歌剧话剧</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index = '4'>
                         <template slot="title">典苑杂谈</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index = '5'>
                         <template slot="title">体育比赛</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index = '6'>
                         <template slot="title">儿童亲子</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index = '7'>
                         <template slot="title">舞蹈芭蕾</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index = '8'>
                         <template slot="title">0</template>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="main_instructions">
                2
            </div>
        </div>
    </div>
</template>

<script>
import htitle from '@/components/module/htitle'
import ttitle from '@/components/common/ttitle'
export default {
    data(){
        return{
             cities: [{
                value: 'Beijing',
                label: '北京'
            }, 
            {
                value: 'Shanghai',
                label: '上海'
            }, 
            {
                value: 'Nanjing',
                label: '南京'
            }, 
            {
                value: 'Chengdu',
                label: '成都'
            }, 
            {
                value: 'Shenzhen',
                label: '深圳'
            }, 
            {
                value: 'Guangzhou',
                label: '广州'
            }],
            value: '',
            sousuo:'',
            activeIndex: '1',
            activeIndex2: '1'
            }
    },
    methods:{
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
        }
    },
    components: {
        ttitle
  },
}
</script>

<style scoped>
    #app{
        display: flex;
        flex-direction: column;
    }
    .hhead{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2%;
    }
    .search{
        width:800px;
        margin-right:30%;
        margin-left: 30%;
    }
    .input{
        width:500px;
        height:29px;
    }
    .hmain{
        display: flex;
        flex-direction: row;
        width:100%;
        margin-top: 5%;
    }
    .main_goods{
        width: 35%;
    }
    .main_instructions{
        width:65%;
        background-color: lightblue;
    }
    .el-menu-demo{
        background-color: rgba(1, 1, 1, 0.5);
        font-size: 24px;
    }
</style>