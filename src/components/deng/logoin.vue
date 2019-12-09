<template>
<div id="a-com">
    <div class="b-com">
        <!-- <img src="" class="b-com-img"> -->
    </div>
    <div class="c-com"></div>
    <div class="d-com">
        <el-row>
            <el-button type="primary" round class="d-com-primary">用户登录</el-button>
            <el-button type="success" round class="d-com-primary">短信快捷登录</el-button>
        </el-row>
    <div id="username">
        <el-input v-model="userLogin.uid" placeholder="用户名" class="d-com-input"></el-input><br>
    </div>
    <div id="pass">
        <el-input v-model="userLogin.upsd" type="password" placeholder="密码" class="d-com-input"></el-input>
    </div>
    <div id="login">
        <el-row>
            <el-button type="login" class="d-com-login" @click="loginbutton">登录</el-button>
        </el-row>
    </div>
    <div id="login-second">
         <el-checkbox class="d-login-second">下次自动登录</el-checkbox>
    <div class="d-login-second">
         <el-link :underline="false">忘记密码？</el-link>
         <router-link :to= "{name:'Logon'}"><el-link :underline="false">立即注册</el-link></router-link>
    </div>
    </div>
    <div id="d-icon">
        <span>其他登录方式:</span>
        <i class="iconfont icon-qq"></i>
        <i class="iconfont icon-weixin"></i>
    </div>
    </div>
    <div class="e-com"></div>
</div>

</template>

<script>
import axios from "axios";
import qs from 'Qs';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://47.94.10.228';
export default {

    data(){
        return{
           userLogin:{
               uid:'',
               upsd:''
               
           } ,
        regUser: {
        // 用户名： 中文、英文、数字，不包括下划线等特殊符号
            ui: /[\u4E00-\u9FA5A-Za-z0-9]+$/,
        // 密码： 字母数字下划线，6-16位
            ups: /\w{6,16}/
      },    
        }
    },

    methods: {
        checkUid() {
      if (this.userLogin.uid == "") {
        alert("请输入账号");
      } else if (
        this.userLogin.uid != "" &&
        !this.regUser.ui.test(this.userLogin.ui)
      ) {
        alert("用户名不符合要求");
      } else {
        return true;
      }
    },

    // 正则检测密码
    checkPwd(){
      if (this.userLogin.upsd == "") {
        alert("请输入密码");
      } else if (
        this.userLogin.upsd != "" &&
        !this.regUser.ups.test(this.userLogin.ups)
      ) {
        alert("密码不符合要求");
      } else {
        return true;
      }
    },

    // loginbutton(){      
    //    if(this.checkUid() == true && this.checkPwd() == true){
    //        if(this.userLogin.uid == "dz992320152" && this.userLogin.upsd == "12345678"){
    //            this.$router.push("/")
    //        }else{
    //            alert("用户名或密码错误！")
    //        }
    //    }       
    // },

    loginbutton(userLogin){
       if (
        this.checkUid() &&
        this.checkPwd()
      ) {
        axios
          .post("/user/login", 
          qs.stringify({           
            uid: this.userLogin.uid, 
            upsd: this.userLogin.upsd,	
            autoLogin: false
            }
          ))
          .then(res => { if (res.data.status == '0') {
              // console.log(res)
              alert(res.data.msg);
              window.localStorage.setItem("uid", this.userLogin.uid);
            //   window.localStorage.setItem("udept", res.data.data.udept);
              window.localStorage.setItem("isLogined",true)
            if (this.userLogin.autoLogin ){
            // window.localStorage.setItem("uid", this.userLogin.uid);
            window.localStorage.setItem("upsd", this.userLogin.upsd);
            window.localStorage.setItem("autoLogin", this.userLogin.autoLogin);
            }
              this.$router.push("/");
              // console.log('登录成功')
            } else {
              alert(res.data.msg);
              // console.log('登录失败')
            }
          })
          .catch();
      }
    }
  }
}

</script>


<style scoped>
#a-com{
    width: 100%;
    height: 100%;
     display:flex;
     flex-wrap: wrap;
     justify-content:space-between;
}
.b-com{
    width: 100%;
    height: 100px;
    /* background-color: cadetblue; */
    display: inline-flex;
}
.c-com{
    width: 60%;
    height: 700px;
    /* background-color: darksalmon; */
}
.e-com{
    width: 100%;
    height: 200px;
    
} 
.d-com{
    width: 40%;
    height: 700px;
    /* background-color: blueviolet */
    
}
.d-com-input{
    height: 20%;
    width: 500px;
}
.d-com-primary{
    margin-top: 10%;
    margin-left: 1%
}
#username{
    margin-top: 5%;
}

.d-com-login{
    width: 500px;
    height: 50px;
    background-color:lightgreen;
    margin-top: 5%;
   
}
.iconfont{
    font-size: 30px;
    color:deepskyblue;
}
#d-icon{
    margin-top: 5%;
    margin-right: 70%;
    width: 50%
}
span{
    font-size: 15px;
}
#login-second{
    margin-top: 5%;
    display: inline-flex;
    width: 80%;
    justify-content:space-between;
}
a{
    text-decoration: none;
}

</style> 