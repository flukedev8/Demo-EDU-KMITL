<template>
  <v-timeline align-top>
    <v-timeline-item
      v-for="(item, i) in items"
      :color="item.color"
      :icon="item.icon"
      :key="i"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title">{{item.title}}</v-card-title>
        <v-card-text class="white text--primary">
          <p>{{item.text}}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
        title: 'EDU คืออะไร ?',
        text: 'Education Community KMITL หรือ EDU KMITL เพื่อเป็นแหล่งสำหรับการเรียนรู้และแบ่งปันองค์ ความรู้ของนักศึกษาภายในสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง อีกทั้งยังเป็นจุด นัดหมายสำหรับการทำกิจกรรมทางวิชาการให้กับผู้ที่มีความประสงค์์ในการจัดกิจกรรม '
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
        title: 'Funtion 1 To be Teacher',
        text: 'เป็น Funtion ที่ใช้ในการขอสิทธิ์ สำหรับบุคคลทั่วไปที่ต้องการจะเป็นผู้ให้แก่สังคมภายในสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เพื่อทำให้สังคมของการเรียนรู้เอื้อยอำนวยต่อแบ่งปันความรู้สู่ผู้อื่น'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
        title: 'Funtion 2 Course',
        text: 'เป็น Funtion ที่ใช้ในการบริหารจัดการ Course ไม่ว่าจะเป็นการลงเรียนคอร์ส การขอสิทธิ์เพื่อสร้างคอร์ส การแก้ไขและแชร์คอร์สที่ดีสู่สังคมต่อไป'
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
        title: 'Funtion 3 Meetup',
        text: 'เป็น Funtion ที่ใช้การสร้างกิจกรรมดีๆร่วมกันเพื่อนัดเจอสำหรับการแลกเปลี่ยนความรู้ การช่วยเหลือกัน การแลกเปลี่ยนความคิดต่างๆภายในสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง และช่วยให้การเรียนรู้ของนักศึกษาดีขึ้น'
      }
    ]
  })
}
</script>

<style>

</style>
