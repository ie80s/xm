<template>
    <div>
        <h2>我是第一个页面</h2>
        <button @click="discountPrice">点我价格减半</button>
        <ul class="ul_list">
            <li v-for="item in list" :key = 'item.price'>
                <p class="name">商品：{{item.name}}</p>
                <p class="price">价格：￥{{item.price}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    list() { 
          return this.$store.state.goodsList;
        }
  },
  methods: {
    discountPrice(){
      this.$store.commit('goodsjian')
    }
  }
}
</script>

<style scoped>
li{
  width: 20%;
  height: 20%;
  background-color: aqua;
}
p{
  margin-right: 65%;
}
h2{
  margin-right: 90%;
}
button{
  margin-right: 90%;
}
</style>
