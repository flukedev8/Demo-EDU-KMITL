<template>
 <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>รายละเอียดคอร์ส {{title}}</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
     <v-layout row wrap>
     <v-flex xs12 sm5 md3>
        <v-card dark >
          <v-card-text>
      <div class="video-container">
    <div class="video-placeholder">
      <div class="video-placeholder-cover">
        <youtube
        :video-id = "youtubeID"
        >
    </youtube>
      </div>
      </div>
      </div>
         <v-btn color="error" to="/login" v-if="!$store.state.isUserLoggedIn">กรุณา login เพื่อลงเรียนคอร์ส</v-btn>
         <v-btn color="error" to="#" v-if="$store.state.isUserLoggedIn" >ลงเรียนคอร์สนี้</v-btn>
    </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs9>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text>
             <h1> {{ title }} </h1>
                <br/>
               <h3> รหัสวิชา: {{ number }} </h3>
                <br/>
                <h3>อาจารย์ประจำวิชา: {{ professor }}</h3>
                <br/>
                 รายละเอียด: {{ Abstract }}
            </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    youtubeID: 'C2zJwxNk1OE',
    title: 'Ai day bangkok',
    number: '501234',
    professor: 'mr.test',
    Abstract: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.'
  })
}
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px; height: 0; overflow: hidden;
}
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
