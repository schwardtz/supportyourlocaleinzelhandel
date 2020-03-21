<template>
  <div class="location" :style="{ 'background-image': 'url(./../assets/cats/' + data.image + ')' }">
    <LocationContent :data="data"/>
  </div>
</template>

<script>
const LocationContent = () => import('./LocationContent.vue')

export default {
  name: "Location",
  props: {
    data: Object
  },
  components: {
    LocationContent
  },
  data() {
   return {
     backgroundImages: [
      './../assets/background/blob-shape_one.svg',
      './../assets/background/blob-shape_two.svg',
      './../assets/background/blob-shape_three.svg',
      './../assets/background/blob-shape_four.svg',
      './../assets/background/blob-shape_five.svg',
      './../assets/background/blob-shape_six.svg',
      './../assets/background/blob-shape_seven.svg',
      './../assets/background/blob-shape_eight.svg',
      './../assets/background/blob-shape_nine.svg'
    ],
    selectedImage: '',
    verticalPosition: '',
    horizontalPosition: '',
   } 
  },
  created () {
    const idx = Math.floor(Math.random() * this.backgroundImages.length);
    this.selectedImage = this.backgroundImages[idx]
    this.verticalPosition = Math.floor(Math.random() * (60 - 30 + 1)) + 30
    this.horizontalPosition = Math.round(Math.random() * 100)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.location {
  background-size: cover;
  transition: all 1s;
  position: relative;
  transition: all 0.3s ease-in;
  transform: scale(1);
  outline: none;
  height: 100%;
  box-shadow: 0 0 5px 0 rgba(80, 80, 80, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>