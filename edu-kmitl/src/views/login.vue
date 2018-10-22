<template>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    :href="source"
                    target="_blank"
                    slot="activator"
                  >
                  </v-btn>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                  prepend-icon="email"
                  name="email"
                  label="email"
                  type="text"
                  v-model="email">
                  </v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  v-model="Password"></v-text-field>
                </v-form>
                <div class="error" v-html="error">
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
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
    async login () {
      try {
        await AuthenticationService.login({
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
  color: rgb(255, 255, 255);
}
</style>
