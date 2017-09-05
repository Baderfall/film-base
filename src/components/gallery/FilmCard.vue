<template>
  <div class="film-card">
    <h3>{{title}}</h3>
    <h3>{{imgUrl}}</h3>
    <img :src="computedImgUrl" :alt="title">
  </div>
</template>

<script>
  export default {
    props: ['title', 'imgUrl'],
    computed: {
      computedImgUrl: function() {
        return require('./tt0111161.jpg');
      }
    }
  };
</script>

<style scoped>
  .film-card {
    border: 2px solid #ffffff;
  }
</style>
