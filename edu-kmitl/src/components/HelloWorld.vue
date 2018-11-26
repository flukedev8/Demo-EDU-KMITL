<template>
  <v-carousel hide-controls>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://p-u.popcdn.net/events/covers/000/004/029/cover/EVP_Kilorun_Hanoi_Cover_Banner_851_x_400_px.jpg?1541064399'
        },
        {
          src: 'https://p-u.popcdn.net/events/covers/000/004/538/cover/2.3_cover_photo_copy.001.png?1541049777'
        },
        {
          src: 'https://p-u.popcdn.net/events/covers/000/004/615/cover/English_for_IT-02.jpg?1542091013'
        },
        {
          src: 'https://p-u.popcdn.net/events/covers/000/004/570/cover/add-1.jpg?1541479468'
        }
      ]
    }
  }
}

</script>
