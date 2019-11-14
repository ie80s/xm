<template>
  <div class="order">
    <div class="order-top">
        <div class="image">
            <el-image
            style="width: 80px; height: 80px"
            :src="url"
            :fit="fit"></el-image>
        </div>
          <div class="information">
            <span>{{ title }}</span><br>
            <div class="date">
                <i class="el-icon-date"></i>{{ date }}
                <i class="el-icon-chat-square"></i>{{ status }}
            </div>
          </div>
      </div>
    <div class="description"><p>{{ describe }}</p></div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
        title:'木质家具的维修',
        date:'2019-10-10 18:25',
        status:'已受理',
        describe:'这是一段描述文字。。。。。。',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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

  }
}
</script>

<style lang="scss">
    .order{
        border: 1px solid black;
        display: flex;
        flex-direction:column;
        width: 50%;
            .order-top{
                display: flex;
                flex-direction: row;
                    span{
                        margin-left: -30%;
                        font-size: 20px;
                        font-weight: bold;
                    }
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
</style>