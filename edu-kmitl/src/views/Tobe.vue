<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>To Be Teacher</v-toolbar-title>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      grey
      lighten-4
    >
       <v-flex xs12>
         <center><h1>กรอกข้อมูลเพื่อขอสิทธิ์</h1></center>
       </v-flex>
     <v-layout align-center justify-center>
    <v-flex d-flex xs12 sm6>
      <v-form>
        <v-text-field
         prepend-icon="email"
        name="title"
        label="คติประจำใจ"
        type="text"
        v-model="title">
       </v-text-field>
              <v-text-field
         prepend-icon="account_box"
        name="fristname"
        label="ชื่อจริง"
        type="text"
        v-model="fristname">
       </v-text-field>
              <v-text-field
         prepend-icon="account_box"
        name="lastname"
        label="นามสกุลจริง"
        type="text"
        v-model="lastname">
       </v-text-field>
         <v-text-field
       prepend-icon="add_to_photos"
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
          label="ข้อความแนะนำตัว"
          value="ข้อความแนะนำตัว: "
          v-model="Abstract"
        ></v-textarea>
      </v-flex>
     </v-layout>
     <v-layout>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" @click="create">ส่งแบบฟอร์ม</v-btn>
      </v-card-actions>
     </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      fristname: '',
      lastname: '',
      Abstract: '',
      image: ''
    }
  },
  methods: {
    create () {

    }
  }
}

</script>
