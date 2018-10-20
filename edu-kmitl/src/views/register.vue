<template>
  <div class="register">
    <h1>register</h1>

    <input
     type ="email"
     name="email"
     v-model="email"
     placeholder="email"
    />
    <input
     type ="password"
     name="password"
     v-model="Password"
     placeholder="password"
    />
    <br>
    <div class="error" v-html="error" />
    <br>
    <button
    @click="register">Register</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default{
  data () {
    return {
      email: '',
      Password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          Password: this.Password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<style scoped>
.error{
  color: red;
}
</style>
