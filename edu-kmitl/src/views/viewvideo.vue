<template>
 <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>ห้องเรียน {{title}}</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
     <v-layout row wrap>
     <v-flex xs7 >
        <v-card dark >
          <v-card-text>
        <youtube
        :video-id = "youtubeID"
        :player-width="800"
        :player-height="600"
        >
    </youtube>
    </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 >
      <v-card>
        <v-toolbar color="pink" dark>
          <v-toolbar-title>วีดีโอห้อง {{ title }} </v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-tile :key="index" avatar ripple @click="nextvideo">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon color="grey lighten-1">star_border</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
      <v-flex xs12>
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
    Abstract: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
    items: [
      { action: '15 min', headline: 'รหัสวิชา 555555', title: 'วีดีโอต่อไปที่ 1', subtitle: 'รายละเอียดวีดีโอพอเข้าใจ' },
      { action: '2 hr', headline: 'รหัสวิชา 555555', title: 'วีดีโอต่อไปที่ 2', subtitle: 'รายละเอียดวีดีโอพอเข้าใจ' },
      { action: '6 hr', headline: 'รหัสวิชา 555555', title: 'วีดีโอต่อไปที่ 3', subtitle: 'รายละเอียดวีดีโอพอเข้าใจ' },
      { action: '12 hr', headline: 'รหัสวิชา 555555', title: 'วีดีโอต่อไปที่ 4', subtitle: 'รายละเอียดวีดีโอพอเข้าใจ' },
      { action: '18hr', headline: 'รหัสวิชา 555555', title: 'วีดีโอต่อไปที่ 5', subtitle: 'รายละเอียดวีดีโอพอเข้าใจ' }
    ]
  }),
  methods: {
    nextvideo () {
      this.$router.push({
        name: 'viewvideo'
      })
    }
  }
}
</script>

<style>

</style>
