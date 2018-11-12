<template>
<div id="app">
      <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/about"   v-if="!$store.state.isUserLoggedIn">
          <v-list-tile-action>
            <v-icon>help</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/meetup">
          <v-list-tile-action>
            <v-icon>people_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>meetup</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/register"   v-if="!$store.state.isUserLoggedIn">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Register</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/login" v-if="!$store.state.isUserLoggedIn">
          <v-list-tile-action>
          <v-icon>lock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/Tobe" v-if="$store.state.isUserLoggedIn">
          <v-list-tile-action>
          <v-icon>school</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>To Be Teacher</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout" v-if="$store.state.isUserLoggedIn">
          <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="indigo" dark fixed app class="orange darken-1">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
     <v-toolbar-title style="width: 300px" class="ml-0 pl-3" >
       Education Community KMITL
       </v-toolbar-title>
     <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
     <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-sm-and-down">
       <v-btn flat to="/"
       v-if="!$store.state.isUserLoggedIn"
       >Home</v-btn>
       <v-btn flat to="/about"
         v-if="!$store.state.isUserLoggedIn" >About</v-btn>
       <v-btn flat to="/meetup" >meet up</v-btn>
       <v-btn flat to="/Tobe"
         v-if="$store.state.isUserLoggedIn">To Be Teacher</v-btn>
       <v-btn flat to="/register"
       v-if="!$store.state.isUserLoggedIn"
       >Register</v-btn>
        <v-btn flat to="/login"
        v-if="!$store.state.isUserLoggedIn"
        >Login</v-btn>
        <v-btn flat
        v-if="$store.state.isUserLoggedIn"
        @click="logout">Log Out</v-btn>
    </v-toolbar-items>
    </v-toolbar>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
</div>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
