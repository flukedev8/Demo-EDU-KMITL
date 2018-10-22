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
        <v-list-tile to="/register">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Register</v-list-tile-title>
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
       <v-btn flat to="/">Home</v-btn>
       <v-btn flat to="/about">About</v-btn>
       <v-btn flat to="/register">Register</v-btn>
        <v-btn flat to="/login">Login</v-btn>
    </v-toolbar-items>
    </v-toolbar>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
      <v-footer color="indigo" app class="orange darken-1">
      <span class="white--text">&copy; 2017</span>
    </v-footer>
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
