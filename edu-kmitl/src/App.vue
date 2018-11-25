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
        <v-list-tile to="/myclassroom" v-if="$store.state.isUserLoggedIn">
          <v-list-tile-action>
          <v-icon>videocam</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>My Classroom</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
         <v-list-tile to="/meetup" v-if="!$store.state.isUserLoggedIn">
          <v-list-tile-action>
          <v-icon>people_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>Meetup</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
           <v-list-group v-if="$store.state.isUserLoggedIn"
          >
            <v-list-tile slot="activator" to="/meetup">
             <v-list-tile-action>
               <v-icon>people_outline</v-icon>
               </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  meetup
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
        <v-list-tile to="/managemeetup" v-if="$store.state.isUserLoggedIn">
          <v-list-tile-action>
          <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>My meetup</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
         <v-list-tile to="/createmeetup" v-if="$store.state.isUserLoggedIn">
          <v-list-tile-action>
          <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>Create Meetup</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          </v-list-group>
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
        <v-list-group v-if="$store.state.isUserLoggedIn"
          >
          <v-list-tile slot="activator" to="/Tobe" v-if="$store.state.isUserLoggedIn">
          <v-list-tile-action>
          <v-icon>school</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>To Be Teacher</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
         <v-list-tile to="/managecourse" v-if="$store.state.isUserLoggedIn">
          <v-list-tile-action>
          <v-icon>videocam</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>My Course</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/createcourse" v-if="$store.state.isUserLoggedIn">
          <v-list-tile-action>
          <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>Create Course</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          </v-list-group>
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
     <v-toolbar-title style="width: 350px" class="ml-0 pl-3" >
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
       <v-btn flat to="/myclassroom"
         v-if="$store.state.isUserLoggedIn">My Classroom</v-btn>
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
  color: #2c3e50;
}
</style>
