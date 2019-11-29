<template>
    <div class="page1">
        <form >
            <input type="text" v-model = 'name'>
            <input type="file" @change="getFile($event)">
           <button @click="changeinfo">提交</button>
        </form>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            name:'',
        }
    },
    post:[],
    methods:{
        changeinfo(){
            let formData = new FormData()
            formData.append("image", this.file)
            formData.append("name", this.name)
            let config = {
                headers:{
                   "Content-Type": "multipart/form-data"
                }
            }
            axios.post("/record/insertTo", formData, config).then(res => {
                console.log(formData)
            });
        },
        getFile(event){
            this.file = event.target.files[0];
            console.log(this.file)
        }   
    }
}
</script>