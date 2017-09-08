<template>
  <div class="search-bar">
    <i class="fa fa-search search-bar__icon" aria-hidden="true"></i>
    <!-- <input type="text" class="search-bar__input"> -->
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .search-bar {
    width: 24rem;
    height: 158px;
    background: rgba(72, 72, 72, 0.53);
    border: 2px solid #ffffff;
    border-bottom: none;
    text-align: center;
    cursor: pointer;
  }

  .search-bar:hover {
    background: rgba(8, 8, 8, 0.53);
  }

  .search-bar__icon {
    font-size: 9rem;
    line-height: 16rem;
  }
</style>
