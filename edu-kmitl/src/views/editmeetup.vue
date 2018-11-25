<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Edit Meetup</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
     <v-layout align-center justify-center>
    <v-flex d-flex xs12 sm6>
      <v-form>
        <v-text-field
         prepend-icon="email"
        name="title"
        label="ชื่องาน Meetup"
        type="text"
        v-model="title">
       </v-text-field>
      <v-text-field
       prepend-icon="lock"
       name="date"
        label="วันที่จัดงาน"
        type="date"
        v-model="date"></v-text-field>
        <v-text-field
       prepend-icon="lock"
       name="time"
        label="เวลางาน Meetup ex.09.00-12.00 น."
        type="text"
        v-model="time"></v-text-field>
        <v-text-field
       prepend-icon="lock"
       name="location"
        label="สถานที่จัดงาน"
        type="text"
        v-model="location"></v-text-field>
         <v-text-field
       prepend-icon="lock"
       name="image"
        label="อัพโหลดไฟล์ภาพ"
        type="file"
        @change="onFileChange"
        v-model="image"></v-text-field>
        </v-form>
    </v-flex>
     <v-flex d-flex xs12 sm6 >
        <v-textarea
          solo
          name="Abstract"
          label="รายละเอียดงาน"
          value="รายละเอียด: "
          v-model="Abstract"
        ></v-textarea>
      </v-flex>
     </v-layout>
     <v-layout>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" @click="save">save Meetup</v-btn>
      </v-card-actions>
     </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      title: 'ชื่อ meetup ที่แก้ไข',
      date: '',
      time: '09.00-12.00น.',
      location: 'ตึกพระจอมเกล้า 102',
      Abstract: 'ทดสอบเฉยๆ',
      image: ''
    }
  },
  methods: {
    save () {

    }
  }
}

</script>
