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
         prepend-icon="email"
        name="title"
        label="หัวข้อเรื่อง"
        type="text"
        v-model="title">
       </v-text-field>
      <v-text-field
       prepend-icon="lock"
       name="number"
        label="รหัสวิชา"
        type="text"
        v-model="number"></v-text-field>
        <v-text-field
       prepend-icon="lock"
       name="professor"
        label="อาจารย์ประจำวิชา"
        type="text"
        v-model="professor"></v-text-field>
        <v-text-field
       prepend-icon="lock"
       name="branch"
        label="สาขา"
        type="text"
        v-model="branch"></v-text-field>
      <v-text-field
       prepend-icon="lock"
       name="sector"
        label="ภาควิชา "
        type="text"
        v-model="sector"></v-text-field>
      <v-text-field
       prepend-icon="lock"
       name="faculty"
        label="คณะ "
        type="text"
        v-model="faculty"></v-text-field>
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
    >{{todo.title}}<br></li>
  </ul>
     </v-layout>
     <v-layout>
      <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange darken-1" @click="create">สร้าง course</v-btn>
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
      number: '',
      professor: '',
      branch: '',
      sector: '',
      faculty: '',
      Description: '',
      image: '',
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'link test'
        }
      ],
      nextTodoId: 2
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
    }
  }
}

</script>
