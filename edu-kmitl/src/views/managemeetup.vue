<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Meetup ที่ดูแล</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
     <v-btn fab dark color="indigo"
          to="/createmeetup"
          light
          medium
          absolute
          right
          middle
          >
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-layout row wrap >
    <v-flex d-flex xs12 sm4  v-for="course in courses" :key="course.title"
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
            <span class="grey--text">วันที่ {{course.date}}</span><br>
            <span class="grey--text">เวลา {{course.time}}</span><br>
            <span class="grey--text">สถานที่ {{course.location}}</span><br>
            <span >รายละเอียด {{course.Abstract}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat to="/managemeetup/edit">แก้ไขรายละเอียด meetup</v-btn>
           <v-btn flat color="error" >ลบ Meetup</v-btn>
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
        title: 'ชื่องานที่จะจัด meetup1',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        location: 'ศูนย์คอมพิวเตอร์ สจล.ชั้น 1',
        Abstract: 'test in Abstract ',
        image: 'https://udemy-images.udemy.com/course/750x422/164058_e914_2.jpg'
      },
      {
        title: 'ชื่องานที่จะจัด meetup3',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        location: 'ศูนย์คอมพิวเตอร์ สจล.ชั้น 1',
        Abstract: 'test in Abstract anything',
        image: 'http://shahzaibshafi.com/wp-content/uploads/2016/02/Get-Almost-Every-Udemy-Courses-Free-2.jpg'
      }
    ]
  })
}

</script>
