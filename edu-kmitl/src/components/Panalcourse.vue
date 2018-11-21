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
    <v-layout row>
    <v-flex xs12 sm3
    v-for="course in courses" :key="course.title"
    >
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="350px"
        >
        </v-img>

        <v-card-title >
          <div>
            <div class="headline">{{course.title}}</div><br>
            <span class="grey--text">รหัสวิชา {{course.number}}</span><br>
            <span class="grey--text">ชื่ออาจารย์ประจำวิชา {{course.professor}}</span><br>
            <span >รายละเอียด {{course.Abstract}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import Courseservice from '@/services/courseservice'
export default {
  data: () => ({
    courses: [
      {
        title: 'test',
        number: '501234',
        professor: 'mr.test',
        Abstract: 'test in Abstract '
      },
      {
        title: 'test2',
        number: '501234/2',
        professor: 'mr.test2',
        Abstract: 'test in Abstract anything'
      },
      {
        title: 'test2',
        number: '501234/2',
        professor: 'mr.test2',
        Abstract: 'test in Abstract anything'
      },
      {
        title: 'test2',
        number: '501234/2',
        professor: 'mr.test2',
        Abstract: 'test in Abstract anything'
      }
    ]
  }),
  mounted () {
    this.course = await Courseservice.index()
  }
}

</script>
