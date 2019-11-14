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
      <order></order>
      <div class="footer">
        <span>【每页显示 x 条，这是第 x 页， 共 x 页】</span>
        <button>首页</button>
        <button>上一页</button>
        <button>下一页</button>
        <button>尾页</button>
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
                margin-left: 5%;
                margin-top: 2%;
                width: 60%;
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
              margin-top: 40%;
              margin-right: 39%;
                button{
                  width: 5%;
                  margin-left: 3%;
                }
            }
    }
    
</style>