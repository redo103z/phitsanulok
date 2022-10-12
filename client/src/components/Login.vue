<template>
  <div class="center">
    <h1>เข้าสู่ระบบ </h1>
    <form v-on:submit.prevent="onLogin">
      <p>ชื่อผู้ใช้ : <input type="text" v-model="email" /></p>
      <p>รหัสผ่าน : <input type="password" v-model="password" /></p>
      <p><button type="submit">ยืนยัน</button></p>
      <div class="error" v-if="error">{{error}}</div>
    </form>
  </div>
</template>
<script>
import AuthenService from "@/services/AuthenService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async onLogin() {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password,
        });

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

        this.$router.push({
          name: 'users'
        })

      } catch (error) {
        console.log(error);
        this.error = error.response.data.error
        this.email = ''
        this.password = ''
      }
    },
  }
};
</script>
<style scoped>
  .error{
    color:red;
  }
  .center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
</style>
