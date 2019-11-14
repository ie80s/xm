<template>
    <div id="m-Acom">
    
    <div class="m-Acom-b"></div>

    <div class="m-Acom-c">
        <div class="m-c-1">
            <div class="m-c-1-1">
                <div class="information-1">报修详情</div>     
                    <el-row :gutter="20">
                        <el-col :span="15">
                            <div class="grid-content bg-purple">
                                <div class="grid-input">
                                <i>报修编号：</i>
                                <input type="text" placeholder="xxxx" disabled="true"><br>
                                <i>报修地点：</i>
                                <input type="text" placeholder="xxxx" disabled="true"><br>
                                 <i>报修事项：</i>
                                <input type="text" placeholder="xxxx" disabled="true"><br>
                                 <i class="input-title">标题：</i>
                                <input type="text" placeholder="xxxx" disabled="true" class="grid-title"><br>
                                 <i class="input-title">内容：</i>
                                <input type="text" placeholder="xxxx" disabled="true" class="grid-title"><br>
                                <i>提交时间：</i>
                                <input type="text" placeholder="xxxx" disabled="true"><br>
                                <i>当前状态：</i>
                                <input type="text" placeholder="xxxx" disabled="true"><br>
                                <i class="input-people">提交人：</i>
                                <input type="text" placeholder="xxxx" disabled="true" class="grid-people">
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content bg-purple">
                               
                                </div>
                        </el-col>
                    </el-row>
                    
                    
            </div>
            <div class="m-c-1-2">
                <div class="information-2">派工信息</div>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <div class="grid-inf">
                                    <i>派工时间：</i>
                                    <input type="text" placeholder="xxxx" disabled="true"><br>
                                </div>
                            </div>
                         </el-col>
                         <el-col :span="12">
                             <div class="grid-content bg-purple">
                                 <div class="grid-inf">
                                    <i>维修员：</i>
                                    <input type="text" placeholder="xxxx" disabled="true"><br>
                                </div>
                             </div>
                         </el-col>
                    </el-row>
            </div>
        </div>
        <div class="m-c-2">
            <div class="m-c-2-1">
                <div class="G-m">公告</div>
            </div>
            <div class="m-c-2-2">
                <div class="Tel-m">报修电话</div>
            </div>
            <div class="m-c-2-3">
                <div class="Me-m">报修须知</div>
            </div>
        </div>
    </div>
    <div class="m-Acom-d"></div>

    </div>
</template>


<script>
export default {
    data() {
      return {
         input: '',
    }
}
}
</script>





<style scoped lang="scss">
#m-Acom{
    width: 100%;
    height: 750px;
    display: flex;
    // border: 2px solid black;
    flex-direction: row;
        .m-Acom-b{
            width: 15%;
            height: 100%;
            // background-color:cyan;
            
        }
        .m-Acom-c{
            width: 70%;
            height: 100%;
            display: inline-flex;
           
            .m-c-1{
                width: 70%; 
                height: 100%;
                
                display: flex;
                flex-direction: column;
               
                    .m-c-1-1{
                        width: 100%;
                        height: 60%;
                        border: 1px solid black;  
                        
                       
                        .information-1{
                            width: 100%;
                            height: 20%;
                            background-color: cornflowerblue;
                            font-size: 25px;
                            color: aliceblue;
                            
                        } 
                        
                    }
                    .m-c-1-2{
                        width: 100%;
                        height: 45%;
                        border: 1px solid black;
                        margin-top: 3%;  
                        .information-2{
                            width: 100%;
                            height: 20%;
                            background-color: cornflowerblue;
                             font-size: 25px;
                             color: aliceblue;
                        }   
                    }
            }

            .m-c-2{
                width: 25%; 
                height: 100%;
               
                display: flex;
                flex-direction: column;
                margin-left: 5%;
                    .m-c-2-1{
                        width: 100%;
                        height: 35%;
                        border: 1px solid black; 
                        .G-m{
                          width: 100%;
                          height: 30%;
                          background-color:cornflowerblue;  
                        } 
                    }
                    .m-c-2-2{
                        width: 100%;
                        height: 35%;
                        border: 1px solid black;
                        margin-top: 10%;
                        .Tel-m{
                          width: 100%;
                          height: 30%;
                          background-color:darkkhaki;  
                        } 
                    }
                    .m-c-2-3{
                        width: 100%;
                        height: 35%;
                        border: 1px solid black;
                        margin-top: 10%;
                        .Me-m{
                          width: 100%;
                          height: 30%;
                          background-color:fuchsia;  
                        } 
                    }
            }
        }  
        .m-Acom-d{
            width: 15%;
            height: 100%;
            // background-color:darkorange;
        }

}

.title{
    margin-left: 3%;
}


.submitter{
    margin-left: 1%;  
}


.el-row {
    margin-bottom: 20px;
    margin-top: 2%;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
//   .bg-purple-dark {
//     background: #99a9bf;
//   }
//   .bg-purple {
//     background: #d3dce6;
//   }
//   .bg-purple-light {
//     background: #e5e9f2;
//   }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  i{
     
      font-size: 15px;
  }
  input{
      border: 0px;
      background-color: white;
      width: 150px;
      height: 35px;
  }
  .grid-input{
      margin-right: 50%;
  }

.grid-title{
    margin-left: 0%;
}

.grid-people{
    margin-left: 0%;
}

.input-title{
    margin-left: 10%;
}

.input-people{
    margin-left: 5%
}


.grid-inf{
    margin-right: 30%;
}
</style>