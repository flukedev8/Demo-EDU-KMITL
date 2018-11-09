<template>
  <div class="home">

    <HelloWorld/>
    <br>
    <Panalcourse/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Panalcourse from '@/components/Panalcourse.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Panalcourse
  }
}
</script>
