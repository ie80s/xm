<template>
  <div class="order" >
    <div class="order-top" v-for="item in xianshi.slice((currentPage-1)*pageSize,currentPage*pageSize)" 
    :key = "item.rid" :data = "xianshi" style = "width:100%">
    <div class="aaa">
      <div class="image">
           <img :src="'http://' + item.image" width="150" height="150">
        </div>
          <div class="information">
            <a href="#" @click = "move(item.rid)">{{ item.rtype }}</a>
            <span>{{ item.rdate | dateFormat('yyyy-mm-dd') }}</span>
            <span>{{ item.wstatic }}</span>
            </div>
      </div>
      <div class="description"><p>{{ item.rdes }}</p></div>
    </div>   
    <div class="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout=" prev, pager, next, jumper ,total"
          :total="xianshi.length">
        </el-pagination>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'Qs'
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      currentPage:1,
      pageSize:5,
       info:[{
         rdate:'',
         wstatic:'',
         rdes:'',
         image:''
       }
       ],
       xianshi:[]
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    axios.post("http://47.94.10.228/record/rmess",
    qs.stringify({udept:'青岛工学院'}))
    .then(res=>{
      this.xianshi = res.data.list
      console.log(this.xianshi)
    })

  },
  mounted() {

  },
  methods: {
    handleSizeChange(val) {
        this.currentPage = 1;
        this.pageSize = val
      },
      handleCurrentChange(val) {
        this.currentPage = val;
      },
      move(e){
        console.log(e)
      }
  }
}
</script>

<style lang="scss">
    .order-top{
        border: 1px solid rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction:column;
        width: 84%;
        margin-top: 2%;
            .aaa{
                display: flex;
                flex-direction: row;
                    p{
                      text-align: left;
                      font-size: 24px;
                      margin: 0;
                      margin-bottom: 5%;
                    }
                    // span{
                    //     margin-left: -30%;
                    //     font-size: 20px;
                    //     font-weight: bold;
                    // }
            }
            .description{
                background-color: rgba(0, 0, 0, 0.2);
                color: white;
                text-align: left;
                    p{
                        margin: 0;
                    }
            }
            .information{
                .date{
                    margin-top: 5%;
                }
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
</style>