<template>
   <v-card
    flat
    tile
  >
    <v-toolbar
      color="orange darken-1"
      dark
    >

      <v-toolbar-title>edit Course</v-toolbar-title>
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
        label="อัพโหลดไฟล์ภาพ"
        type="file"
        @change="onFileChange"
        v-model="image"></v-text-field>
        </v-form>
    </v-flex>
     <v-flex d-flex xs12 sm6 >
        <v-textarea
          solo
          name="Description"
          label="รายละเอียด"
          value="รายละเอียด: "
          v-model="Description"
        ></v-textarea>
      </v-flex>
     </v-layout>
     <v-layout>
       <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">ใส่ Link video จาก youtube</label>
    <v-text-field
    prepend-icon="add_to_queue"
      v-model="newTodoText"
      id="new-todo"
      placeholder="Add Link video"
    ></v-text-field>
    <v-btn color="orange darken-1" @click="addNewTodo" >Add Video เพิ่ม</v-btn>
  </form>
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    >{{todo.title}}<br></li>
  </ul>
     </v-layout>
     <v-layout>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" @click="save">save course</v-btn>
      </v-card-actions>
     </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      title: 'หัวข้อคอร์ส',
      number: '6515',
      professor: 'test',
      branch: 'วิทยาคอม',
      sector: 'วิทยาคอม',
      faculty: 'วิทยาศาสตร์',
      Description: 'รายละเอียดพอคราวๆเกี่ยวกับคอร์ส',
      image: '',
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'link test 1'
        },
        {
          id: 2,
          title: 'link test 2'
        }
      ],
      nextTodoId: 3
    }
  },
  methods: {
    save () {

    },
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}

</script>
