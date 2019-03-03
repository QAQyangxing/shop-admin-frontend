<template>
  <div>
    <h4 class="title">登录</h4>
    <div class="box">
      <span class="test">账号</span>
      <el-input placeholder="请输入内容" v-model="input10" clearable name='username'></el-input>
      <span class="pwd">密码</span>
      <el-input placeholder="请输入密码" v-model="input11" show-password ></el-input>
      <div class="btn">
        <el-button type="primary" v-on:click="handleSubmit">提交</el-button>
        <el-button v-on:click="handleReset">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input10: "",
      input11: ""
    };
  },
  computed: {
    handleSubmit: function() {
      var input10 = this.input10;
      var input11 = this.input11;
      if (input10 == "" || input11 == "") {
        this.$message({
          message: "账号或密码不能为空",
          type: "error"
        });
        return;
      }
      if (!/^1[34578]\d{9}$/.test(input10)) {
        this.$message({ message: "账号只能是十一位的数字组合" });
        return;
      }
      if (!/^[\w_-]{6,16}$/.test(input11)) {
        this.$message({ message: "密码位数为6-16位" });
        return;
      }
      alert("name=" + input10 + "&password=" + input11);
      //  alert(name+pwd);这返回的是一个字符串
    },
    handleReset: function() {
      (this.nainput10me = ""), (this.input11 = "");
    }
  }
};
</script>

<style>
.title {
  text-align: center;
  color: #7abbff;
}
.box {
  width: 450px;
  margin: 0 auto;
}
.pwd,
.test {
  float: left;
  display: inline-block;
  line-height: 40px;
  margin-right: 10px;
}
.box .el-input {
  margin-bottom: 30px;
  width: 90%;
}
.btn {
  text-align: center;
}
</style>
