<template>
    <div id="Condition">
        <div class="Condition-1">

        </div>
        <div class="Condition-2">

        </div>
        <div class="Condition-3">

        </div>
        <div class="Condition-4">

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


</style>