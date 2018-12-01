<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Course</v-toolbar-title>

    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
    <v-layout row wrap >
    <v-flex d-flex xs12 sm4  v-for="course in courses" :key="course.title"
    >
      <v-card>
        <v-img
          :src="course.img"
          height="350px"
        >
        </v-img>

        <v-card-title >
          <div>
            <div class="headline">{{course.title}}</div><br>
            <span class="grey--text">รหัสวิชา {{course.number}}</span><br>
            <span class="grey--text">ชื่ออาจารย์ประจำวิชา {{course.professor}}</span><br>
            <span >รายละเอียด {{course.Descriptionshort}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat to="/viewcourse">view</v-btn>
          <v-btn flat color="purple" v-if="$store.state.isUserLoggedIn">ลงทะเบียนเรียน</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import courseservice from '@/services/courseservice'
export default {
  data: () => ({
    courses: null
  }),
  async mounted () {
    this.courses = (await courseservice.index()).data
  }
}

</script>
