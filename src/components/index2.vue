<template>
  <div class="page">
      <ttitle></ttitle>
      <div class="top">
          <div class = "search">
            <el-input v-model="keywords" placeholder="请输入关键字"></el-input>
            <el-button type="primary">搜索</el-button>
          </div>
          <div class="type1">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
           </div>
           <div class="type2">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
           </div>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <order></order>
          <order></order>
          <order></order>
          <order></order>
          <order></order>
        </div>
        <div class="bottom-right">
          <div class="gonggao1">
            <h2>公告</h2>
            <p>asdasdaafasfasfasafafsaf</p>
          </div>
          <br>
          <div class="gonggao2">
            <h2>公告</h2>
            <p>asdasdaafasfasfasafafsaf</p>
          </div>
          <br>
          <div class="gonggao3">
            <h2>公告</h2>
            <p>asdasdaafasfasfasafafsaf</p>
          </div>
          <br>
        </div>
      </div>
      <div class="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="40">
        </el-pagination>
      </div>
  </div>
</template>

<script>
import ttitle from '@/components/common/ttitle'
import order from '@/components/common/order'
export default {
  components: {
      ttitle,order
  },
  props: {

  },
  data() {
    return {
        keywords:'',
        currentPage:4,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value:''
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
      handleClick() {
        alert('button click');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
}
</script>

<style lang="scss">
    .page{
        width: 100%;
        height: 100%;
            .top{
                display: flex;
                flex-direction: row;
                margin-left: 10%;
                margin-top: 2%;
                width: 50%;                
                    .search{
                        width: 40%;
                        float: left;
                            .el-input{
                                width: 44%;
                            }
                    }
                    .type1,.type2{
                        width: 25%;
                    }
            }
            .footer{              
              margin-top: 4%;
              margin-left: 8%;
              width: 50%;
                .el-pagination{
                  margin-left: -18%;
                }
            }
            .bottom{              
              width: 100%;
              margin-top: 1%;
              display: flex;
              flex-direction:row;
              margin-left: 14%;
                .bottom-left{
                  width: 45%;
                  display: flex;
                  flex-direction: column;
                }
                .bottom-right{
                  width: 45%;
                  display: flex;
                  flex-direction: column;
                    .gonggao1, .gonggao2, .gonggao3{
                      width: 40%;
                      height: 33%;
                      border: 1px solid black;
                      margin-top: 2%;
                    }
                    .gonggao1{
                      background-color: lightskyblue;
                    }
                    .gonggao2{
                      background-color:lime;
                    }
                    .gonggao3{
                      background-color: rgb(245, 118, 213);
                    }
                }
            }
    }
    
</style>