<template>
  <div class="one">
      <el-container>
          <material></material>
          <el-container>
          <el-header class="wu">
            <div class="first">
              <div class="fir"><el-button round>个人资料</el-button></div>
              <div class="sen"><el-button round>返回首页</el-button></div>
            </div>
          </el-header>
          <hr>
          <el-main>
            
            <div class="second">
                <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="姓名" prop="uname">
                      <el-input v-model="ruleForm2.uname" ></el-input>
                    </el-form-item>
                    <el-form-item label="学号" prop="uid">
                      <el-input v-model="ruleForm2.uid" ></el-input>
                    </el-form-item>
                    <el-form-item label="出生日期" required>
                      <el-col :span="11">
                        <el-form-item prop="date1">
                          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm2.date1" style="width: 140%;"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col class="line" :span="2">-</el-col>
                    </el-form-item>
                    <el-form-item label="学校专业" prop="udept">
                        <el-select v-model="ruleForm2.udept" class="third" placeholder="请选择学校专业">
                          <el-option label="软件工程" value="shanghai"></el-option>
                          <el-option label="计算机科学与技术" value="beijing"></el-option>
                          <el-option label="英语" value="english"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="个人简介" prop="desc">
                      <el-input type="textarea" v-model="ruleForm2.desc" style="float:left;"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm2')" >确认更改</el-button>
                      <el-button @click="resetForm('ruleForm2')" >重置</el-button>
                    </el-form-item>
                  </el-form>
            </div>
          </el-main>
          </el-container>
      </el-container>
  </div>
</template>

<script>
import axios from "axios";
import qs from 'Qs';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://47.94.10.228';
import material from '../../components/module/material'
  export default {
    data() {
      return {
        ruleForm2: {
          uname: '',
          uid: '',
          date1: '',
          udept: '',
          desc: '',
          upsd:'nichaoge',
          uemail:'465445097@qq.com',
          utel:'15621153978',
        },
        rules: {
          uname: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          uid: [
            { required: true, message: '请输入学号', trigger: 'blur' },
            { min: 12, max: 12, message: '请输入正确学号', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          udept: [
            { required: true, message: '请选择专业', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写简介', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功');
          } else {
            console.log('注册失败');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(ruleForm2) {
      console.log(this.ruleForm2)
      axios
      .post("/user/register",
      qs.stringify({
      uname:this.ruleForm2.uname,
      uid:this.ruleForm2.uid,
      date1:this.ruleForm2.date1,
      udept:this.ruleForm2.udept,
      desc:this.ruleForm2.udesc,
      upsd:this.ruleForm2.upsd,
      uemail:this.ruleForm2.uemail,
      utel:this.ruleForm2.utel,
    },
    ))
    },
    },
    components: {
        material
    }
}
</script>
<style scoped>
.one{
  display: flex;
  width: 100%;
  height: 100%;
}
  .third{
    float: left;
  }
  .el-input{
      float: left;
  }
  .wu{
    display: inline-flex;
  }
  .first{
    display: inline-flex;
    flex-direction: row;
    align-items: center; 
  }
  .fir,.sen,.sec{
    font-size: 55px;
  }
  .sen{
    margin-left: 680%; 
  }
  /* .sec{
    margin-left: 235%;
  } */
</style>