<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Course ของฉัน </v-toolbar-title>

    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
    <v-layout row wrap >
    <v-flex d-flex xs12 sm3  v-for="course in courses" :key="course.title"
    >
      <v-card>
        <v-img
          :src="course.image"
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
          <v-btn flat >เข้าห้องเรียน</v-btn>
          <v-btn flat color="error" >ลบคอร์ส</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    courses: [
      {
        title: 'test',
        number: '501234',
        professor: 'mr.test',
        Abstract: 'test in Abstract ',
        image: 'https://udemy-images.udemy.com/course/750x422/164058_e914_2.jpg'
      },
      {
        title: 'test2',
        number: '501234/2',
        professor: 'mr.test2',
        Abstract: 'test in Abstract anything',
        image: 'http://shahzaibshafi.com/wp-content/uploads/2016/02/Get-Almost-Every-Udemy-Courses-Free-2.jpg'
      }
    ]
  })
}

</script>
