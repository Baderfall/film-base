<template>
  <div class="film-card">
    <h3 class="film-card__title">{{title}}</h3>
    <img class="film-card__img" :src="imgUrl" :alt="title">
  </div>
</template>

<script>
  export default {
    props: ['title', 'imgUrl'],
  };
</script>

<style scoped>
  .film-card {
    border: 2px solid #ffffff;
    cursor: pointer;
    width: 24rem;
    height: 32rem;
    overflow: hidden;
  }

  .film-card__title {
    text-align: center;
  }

  .film-card__img {
    height: 100%;
  }
</style>
