<template>
    <div id="Condition">
        <div  class="conrepair" v-for="item in repairInfo.slice(0,3)"
            :key="item.rid"
            :data="repairList"
            style="width: 100%">
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span>类型:{{item.rtype}}</span><br>
                        <span>时间:{{ item.rdate | dateFormat('yyyy-mm-dd') }}</span> 
                        <div class="img">
                            <img :src="'http://' + item.image" width="150" height="150" class="img-icon">
                        </div> 
                    </div>
                </el-col>
                <el-col :span="12" class="col-ws"><div class="grid-content bg-purple-light"><i>状态:{{  item.wstatic }}</i></div></el-col>
            </el-row>
            
        </div>
        <div class="block">
            <span class="demonstration"></span>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>


<script>


import axios from "axios";
import qs from 'Qs';
export default {
    data(){
        return{      
            currentPage3: 1, 
            repairList:[{
                rtype: '',
                rdata: '',
                wstatic: "待维修", 
                image:'' ,
            }] ,
            repairInfo:[]
        }

    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 3 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: 1`);
      }
    },
    created(){
          axios
      .post("/record/rmess",
      qs.stringify({
        udept: '青岛工学院'
      }))
      .then(res => {
            this.repairInfo= res.data.list
            console.log(this.repairInfo)
            
        })
      },
    // components:{
    //     Repairs
    // }
  }


</script>


<style scoped lang="scss">

.cond-left{
    margin-right: 90%;
}

.demo-image__preview{
    margin-right: 90%;
}

.cond-right{
    margin-left: 80%;
}

#Condition{
    width: 100%;
    height: 715px;
    display: inline-flex;
    flex-direction: column;
    
    .block{
        margin-top: 2%;
    }
}

.conrepair{
    border: 1px solid black;
    height: 40%;
    border-top-width:0px;
    border-left-width:0px;
    border-right-width:0px;
    }
 .el-row {
    margin-bottom: 20px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    display: inline-flex;
    justify-content: flex-start;
  }
  
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .col-ws{
    display: inline-flex;
    justify-content: flex-end;
  }
</style>