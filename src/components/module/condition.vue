<template>
    <div id="Condition">
        <div class="Condition-1">
            <el-row :gutter="24">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="cond-left">时间：{{times}}</span>
                        <span class="cond-left">详情：{{details}}</span>
                        <div class="demo-image__preview">
                            <el-image 
                                style="width: 100px; height: 100px"
                                :src="url" 
                                :preview-src-list="srcList">
                            </el-image>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="cond-right">状态：{{state}}</span>
                    </div>
                </el-col>
            </el-row>           
        </div>
        <div class="Condition-2">
            <el-row :gutter="24">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="cond-left">时间：{{times}}</span>
                        <span class="cond-left">详情：{{details}}</span>
                        <div class="demo-image__preview">
                            <el-image 
                                style="width: 100px; height: 100px"
                                :src="url" 
                                :preview-src-list="srcList">
                            </el-image>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="cond-right">状态：{{state}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="Condition-3">
            <el-row :gutter="24">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="cond-left">时间：{{times}}</span>
                        <span class="cond-left">详情：{{details}}</span>
                        <div class="demo-image__preview">
                            <el-image 
                                style="width: 100px; height: 100px"
                                :src="url" 
                                :preview-src-list="srcList">
                            </el-image>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="cond-right">状态：{{state}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="Condition-4">
            <el-row :gutter="24">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="cond-left">时间：{{times}}</span>
                        <span class="cond-left">详情：{{details}}</span>
                        <div class="demo-image__preview">
                            <el-image 
                                style="width: 100px; height: 100px"
                                :src="url" 
                                :preview-src-list="srcList">
                            </el-image>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="cond-right">状态：{{state}}</span>
                    </div>
                </el-col>
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
export default {
    data(){
        return{      
            currentPage3: 1, 
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        }

    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
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
    .Condition-1{
        width: 100%;
        height: 20%;
        border: 1px solid black;
        border-right: none;
        border-left: none;
       
    }
    .Condition-2{
        width: 100%;
        height: 20%;
        border: 1px solid black;
        margin-top: 2%;
        border-right: none;
        border-left: none;
    }
    .Condition-3{
        width: 100%;
        height: 20%;
        border: 1px solid black;
        margin-top: 2%;
        border-right: none;
        border-left: none;
    }
    .Condition-4{
        width: 100%;
        height: 20%;
        border: 1px solid black;
        margin-top: 2%;
        border-right: none;
        border-left: none;
    }
    .block{
        margin-top: 2%;
    }
}



.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>