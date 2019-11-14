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
  </div>
</template>

<script>
import ttitle from '@/components/common/ttitle'
export default {
  components: {
      ttitle
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
    }
    
</style>