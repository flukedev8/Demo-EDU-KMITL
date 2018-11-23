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
    v-for="i in 2" :key="i=1"
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
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="350px"
        >
        </v-img>

        <v-card-title >
          <div>
            <div class="headline">{{course.title}}</div><br>
            <span class="grey--text">วันที่ {{course.date}}</span><br>
            <span class="grey--text">เวลา {{course.time}}</span><br>
            <span >รายละเอียด {{course.Abstract}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>สนใจ</v-btn>
          <v-btn flat color="purple">เข้าร่วม</v-btn>
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
        Abstract: 'test in Abstract '
      },
      {
        title: 'ชื่องานที่จะจัด meetup2',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        Abstract: 'test in Abstract anything'
      },
      {
        title: 'ชื่องานที่จะจัด meetup3',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        Abstract: 'test in Abstract anything'
      },
      {
        title: 'ชื่องานที่จะจัด meetup4',
        date: '01/02/2562',
        time: '09.00 น. - 12.00 น.',
        Abstract: 'test in Abstract anything'
      }
    ]
  })
}

</script>
