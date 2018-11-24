<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Meetup</v-toolbar-title>
 <v-spacer></v-spacer>
    <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
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
            <span class="grey--text">วันที่ {{course.date}}</span><br>
            <span class="grey--text">เวลา {{course.time}}</span><br>
            <span class="grey--text">สถานที่ {{course.location}}</span><br>
            <span >รายละเอียด {{course.Abstract}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat to="/viewmeetup">view</v-btn>
          <v-btn flat v-if="$store.state.isUserLoggedIn">สนใจ</v-btn>
          <v-btn flat color="purple" v-if="$store.state.isUserLoggedIn">เข้าร่วม</v-btn>
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
        title: 'ชื่องานที่จะจัด meetup2',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        location: 'ศูนย์คอมพิวเตอร์ สจล.ชั้น 1',
        Abstract: 'test in Abstract anything',
        image: 'https://udemy-images.udemy.com/course/750x422/164058_e914_2.jpg'
      },
      {
        title: 'ชื่องานที่จะจัด meetup3',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        location: 'ศูนย์คอมพิวเตอร์ สจล.ชั้น 1',
        Abstract: 'test in Abstract anything',
        image: 'http://shahzaibshafi.com/wp-content/uploads/2016/02/Get-Almost-Every-Udemy-Courses-Free-2.jpg'
      },
      {
        title: 'ชื่องานที่จะจัด meetup4',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        location: 'ศูนย์คอมพิวเตอร์ สจล.ชั้น 1',
        Abstract: 'test in Abstract anything',
        image: 'https://udemy-images.udemy.com/course/750x422/164058_e914_2.jpg'
      },
      {
        title: 'ชื่องานที่จะจัด meetup5',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        location: 'ศูนย์คอมพิวเตอร์ สจล.ชั้น 1',
        Abstract: 'test in Abstract anything',
        image: 'http://shahzaibshafi.com/wp-content/uploads/2016/02/Get-Almost-Every-Udemy-Courses-Free-2.jpg'
      },
      {
        title: 'ชื่องานที่จะจัด meetup6',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        location: 'ศูนย์คอมพิวเตอร์ สจล.ชั้น 1',
        Abstract: 'test in Abstract anything',
        image: 'https://udemy-images.udemy.com/course/750x422/164058_e914_2.jpg'
      },
      {
        title: 'ชื่องานที่จะจัด meetup7',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        location: 'ศูนย์คอมพิวเตอร์ สจล.ชั้น 1',
        Abstract: 'test in Abstract anything',
        image: 'http://shahzaibshafi.com/wp-content/uploads/2016/02/Get-Almost-Every-Udemy-Courses-Free-2.jpg'
      },
      {
        title: 'ชื่องานที่จะจัด meetup8',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        location: 'ศูนย์คอมพิวเตอร์ สจล.ชั้น 1',
        Abstract: 'test in Abstract anything',
        image: 'https://udemy-images.udemy.com/course/750x422/164058_e914_2.jpg'
      }
    ]
  })
}

</script>
