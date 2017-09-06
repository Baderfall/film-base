<template>
  <div class="film-card">
    <h3>{{title}}</h3>
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
    display: inline-block;
    border: 2px solid #ffffff;
    cursor: pointer;
    margin-right: 4rem;
    margin-bottom: 4rem;
    width: 240px;
    height: 320px;
    overflow: hidden;
    text-align: center;
  }

  .film-card__img {
    object-fit: none; /* Do not scale the image */
    object-position: center; /* Center the image within the element */
    width: 100%;
    height: 100%;
  }
</style>
