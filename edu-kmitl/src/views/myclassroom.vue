<template>
<div class="my classroom">
   <course/>
   <br/>
   <meetup/>
</div>
</template>

<script>
import course from '@/components/course.vue'
import meetup from '@/components/meetup.vue'

export default {
  components: {
    course,
    meetup
  }
}
</script>

<style>

</style>
