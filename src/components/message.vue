<template>
    <div id="m-Acom">
    
    <div class="m-Acom-b"></div>

    <div class="m-Acom-c">
        <div class="m-c-1">
            <div class="m-c-1-1">
                <div class="information-1">报修详情</div>
                            <template>
                                    <el-table 
                                        v-for="item in xxb"
                                        :key="item.rid"
                                        :data="repairList"
                                        style="width: 100%"
                                        height="150">
                                            <el-table-column
                                                fixed
                                                prop="date"
                                                label="编号 ID"
                                                width="120">
                                                    {{item.rid}}
                                                </el-table-column>
                                            <el-table-column
                                                prop="name"
                                                label="维修类型"
                                                width="120">
                                                    {{item.rtype}}
                                            </el-table-column>
                                            <el-table-column
                                                prop="addr"
                                                label="地址"
                                                width="120">
                                                    {{item.radr}}
                                            </el-table-column>
                                            <el-table-column
                                                prop="tel"
                                                label="电话"
                                                width="120">
                                                    {{item.utel}}
                                            </el-table-column>
                                            <el-table-column
                                                prop="des"
                                                label="描述"
                                                width="250">
                                                    {{item.rdes}}
                                            </el-table-column>
                                            <el-table-column
                                                prop="data"
                                                label="时间"
                                                width="120">
                                                    {{ item.rdate | dateFormat('yyyy-mm-dd') }}
                                            </el-table-column>
                                            <el-table-column
                                                prop="state"
                                                label="时间"
                                                width="120">
                                                    {{item.wstatic}}
                                            </el-table-column>
                                    </el-table>
                                </template>

            </div>          
        </div>
    </div>
    <div class="m-Acom-d"></div>

    </div>
</template>


<script>

import axios from "axios";
import qs from 'Qs';
 export default {
    data() {
      return {
        repairList: [{
          rid: '',
          rtype: '',
          utel: '',
          rdes: '',
          rdata: '',
          radr:'',
          wstatic: "待维修",
        }],
        repairInfo:[],
        xxb:[],
        id:'',
      }
    },
      created(){
        axios.post("/record/rmess",
        qs.stringify({
        udept: '青岛工学院',
      }))
      .then(res => {
        this.repairList.rid=res.data.list.rid
        this.repairInfo= res.data.list
        console.log(this.repairInfo)
        for(let i = 0; i < this.repairInfo.length;i++){
              let obj = this.repairInfo[i];
              if(obj.rid == this.id){
                  this.xxb.push(obj)
              }
          }
          console.log(this.xxb)
        })
      },
      mounted(){
          this.id = this.$route.params.id
          console.log(this.id)         
      },
  }
</script>
<style scoped lang="scss">
#m-Acom{
    width: 100%;
    height: 100%;
    display: flex;
    // border: 2px solid black;
    flex-direction: row;
        .m-Acom-b{
            width: 25%;
            height: 100%;
            // background-color:cyan;
            
        }
        .m-Acom-c{
            width: 70%;
            height: 100%;
            display: inline-flex;
            flex-direction:row;
            .m-c-1{
                width: 75%; 
                height: 100%;  
                display: flex;
                flex-direction: column;
               
                    .m-c-1-1{
                        width: 100%;
                        height: 100%;
                        border: 1px solid black;  
                        margin-right: 5%;
                        
                       
                        .information-1{
                            width: 100%;
                            height: 20%;
                            background-color: cornflowerblue;
                            font-size: 25px;
                            color: aliceblue;                            
                        }                        
                    }                  
            }
           
        .m-Acom-d{
            width: 15%;
            height: 100%;
            // background-color:darkorange;
        }

}
}

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }



</style>