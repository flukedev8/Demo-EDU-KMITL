<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>Create Course</v-toolbar-title>
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
         prepend-icon="face"
        name="title"
        label="หัวข้อเรื่อง"
        type="text"
        v-model="title">
       </v-text-field>
      <v-text-field
       prepend-icon="dialpad"
       name="number"
        label="รหัสวิชา"
        type="text"
        v-model="number"></v-text-field>
        <v-text-field
       prepend-icon="perm_identity"
       name="professor"
        label="อาจารย์ประจำวิชา"
        type="text"
        v-model="professor"></v-text-field>
        <v-text-field
       prepend-icon="location_city"
       name="branch"
        label="สาขา"
        type="text"
        v-model="branch"></v-text-field>
      <v-text-field
       prepend-icon="domain"
       name="sector"
        label="ภาควิชา "
        type="text"
        v-model="sector"></v-text-field>
      <v-text-field
       prepend-icon="school"
       name="faculty"
        label="คณะ "
        type="text"
        v-model="faculty"></v-text-field>
         <v-text-field
       prepend-icon="add_to_photos"
       name="image"
        label="ใส่ลิ้งค์รูปภาพ"
        type="text"
        v-model="img"></v-text-field>
        <v-text-field
       prepend-icon="add_to_photos"
       name="image"
        label="ใส่ลิ้งค์เอกสารประกอบ"
        type="text"
        v-model="img"></v-text-field>
        <br>
          <v-textarea
          solo
          name="Description"
          label="รายละเอียดแบบสั้นๆ 100 ตัวอักษร"
          value=""
          :maxlength="max"
          v-model="Descriptionshort"
      ></v-textarea>
      <br>
      <v-textarea
          solo
          name="Description"
          label="รายละเอียด"
          value="รายละเอียด: "
          v-model="Description"
        ></v-textarea>
    <br>
     <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">ใส่ Link video จาก youtube</label>
    <v-text-field
      prepend-icon="add_to_queue"
      v-model="newTodoText"
      id="new-todo"
      placeholder="Add Link video"
    ></v-text-field>
    <v-btn color="orange darken-1" @click="addNewTodo" >Add Video</v-btn>
  </form>
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    >{{todo.id}} {{todo.title}} <v-btn @click="remove(index)">Remove</v-btn><br></li>
  </ul>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" @click="create">สร้าง course</v-btn>
      </v-card-actions>
      </v-form>
     </v-flex>
     </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      number: '',
      professor: '',
      branch: '',
      sector: '',
      faculty: '',
      Description: '',
      Descriptionshort: '',
      img: '',
      document: '',
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'link test'
        }
      ],
      nextTodoId: 2,
      max: 100
    }
  },
  methods: {
    create () {

    },
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    remove: function (index) {
      this.todos.splice(index, 1)
    }
  }
}

</script>
