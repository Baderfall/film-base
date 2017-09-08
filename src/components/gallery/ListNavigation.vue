<template>
  <div class="list-navigation">
    <search-bar></search-bar>
    <sort-bar></sort-bar>
  </div>
</template>

<script>
  import SearchBar from './SearchBar.vue';
  import SortBar from './SortBar.vue';

  export default {
    components: {
      SearchBar,
      SortBar
    }
  };
</script>

<style scoped>
  .list-navigation {
    float: left;
  }
</style>
