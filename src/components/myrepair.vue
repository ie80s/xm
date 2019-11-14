<template>
    <div id="repair">
        <div class="mine">
            <div class="mine-re-1">
                <i class="el-icon-notebook-2"></i>
                <span>我的</span>
            </div>
            <div class="mine-re-2">
                <i class=" iconfont icon-weixiu"></i>
                <span>我的报修</span>
            </div>
        </div>
        <div class="mine-repair">
            <div class="mi-repair-1">
                <div class="mi-repair-1-1">
                    <span>我的报修</span>
                </div>
                 <div class="mi-repair-1-2">
                     <el-row> 
                        <el-button type="primary">
                            <i class="el-icon-edit"></i>
                            <i>报修</i>
                        </el-button>
                    </el-row>
                </div>
            </div>
            <hr size="2px" noshade="true">
            <div class="dispose">

                <div class="dispose-all">
                    <el-row>
                        <el-button type="primary" plain>全部</el-button>
                    </el-row>
                </div>
                <div class="dispose-uncheck">
                     <el-row>
                        <el-button type="primary" plain>待审核</el-button>
                    </el-row>
                </div>
                <div class="dispose-unaccept">
                     <el-row>
                        <el-button type="primary" plain>待受理</el-button>
                    </el-row>
                </div>
                <div class="dispose-unsuccess">
                     <el-row>
                        <el-button type="primary" plain>待完成</el-button>
                    </el-row>
                </div>
                <div class="dispose-unevaluate">
                     <el-row>
                        <el-button type="primary" plain>待评价</el-button>
                    </el-row>
                </div>
                <div class="dispose-evaluate">
                     <el-row>
                        <el-button type="primary" plain>已评价</el-button>
                    </el-row>
                </div>
                <div class="dispose-reject">
                     <el-row>
                        <el-button type="primary" plain>已受理</el-button>
                    </el-row>
                </div>
                <div class="dispose-success">
                     <el-row>
                        <el-button type="primary" plain>已完成</el-button>
                    </el-row>
                </div>
            </div>
            <hr size="2px" noshade="true"> 
            <condition></condition>
        </div>
        
    </div>
</template>




<script>
import condition from '@/components/module/condition'


export default {
    data(){
        return{
            
        };
    },
    components: {
        condition
    }
}





</script>




<style scoped lang="scss">
.el-button{
    width: 150px;
    height: 63px; 
    margin-left: 25%; 
      
}



span{
    font-size: 20px; 
    line-height:60px;
    
    
}
i{  
    font-size:25px;
}


#repair{
    // border: 1px solid black;
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: row;
        .mine{
            width: 15%;
            height: 100%;
            border: 1px solid black;
            margin-left: 15%;
            display: inline-flex;
            flex-direction: column;
                .mine-re-1{
                    width: 100%;
                    height: 7%;
                    background-color:blanchedalmond;
                }
                .mine-re-2{
                    width: 100%;
                    height: 7%;
                    background-color:mediumslateblue;
                    margin-top: 5%;
                    
                }
        }
        .mine-repair{
            width: 60%;
            height: 100%;
            border: 1px solid black;
            margin-right:15%;
            margin-left: 2%;
            
            .mi-repair-1{
                width: 100%;
                height: 7%;
                background-color:blanchedalmond;
                display: inline-flex;
                justify-content: space-between;
                .mi-repair-1-1{
                    width: 20%;
                    
                }
                .mi-repair-1-2{
                    width: 20%;
                    
                }
            }
        }

}


.dispose{
    width: 100%;
    height: 8%;
    display: inline-flex;
   
    justify-content: space-around;
    // border: 1px solid black;
    .dispose-all{
        width: 10%;
       
        
    }
    .dispose-uncheck{
        width: 10%;
    }
    .dispose-unaccept{
        width: 10%;
    }
    .dispose-unsuccess{
        width: 10%;
    }
     .dispose-unevaluate{
        width: 10%;
    }
     .dispose-evaluate{
        width: 10%;
    }
     .dispose-reject{
        width: 10%;
    }
    .dispose-reject{
        width: 10%;
    }
    .dispose-success{
        width: 10%;
        margin-right: 8%;
    }
}
</style>>

