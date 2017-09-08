<template>
  <main-layout>
    <film-cards-list></film-cards-list>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import FilmCardsList from '../components/gallery/FilmCardsList.vue';

  export default {
    components: {
      MainLayout,
      FilmCardsList
    }
  };
</script>
