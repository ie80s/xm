<template>
    <div class = 'page1'>
        
    </div>
</template>
<script>
import Qs from 'qs'
import axios from 'axios'
import VueAxios from 'vue-axios'
var axios_instance = axios.create({
  baseURL:'106.12.189.19/record/rmess',
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  headers:{'Content-Type':'application/x-www-form-urlencoded'}
})
Vue.use(VueAxios, axios_instance)
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        getData(){
            url = "106.12.189.19/record/rmess"
        }
    }
}
</script>