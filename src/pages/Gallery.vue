<template>
  <main-layout>
    <film-cards-list></film-cards-list>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import SearchBar from '../components/gallery/SearchBar.vue';
  import FilmCardsList from '../components/gallery/FilmCardsList.vue';

  export default {
    components: {
      MainLayout,
      SearchBar,
      FilmCardsList
    }
  };
</script>
