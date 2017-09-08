<template>
  <div class="search-bar">
    <i class="fa fa-search search-bar__icon" aria-hidden="true"></i>
    <!-- <input type="text" class="search-bar__input"> -->
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  $border-thick: 2px;
  
  .search-bar {
    width: 240px;
    height: 320px / 2 - $border-thick;
    background: rgba(72, 72, 72, 0.53);
    border: $border-thick solid #ffffff;
    border-bottom: none;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: rgba(8, 8, 8, 0.53);
    }
  }

  .search-bar__icon {
    font-size: 9rem;
    line-height: 16rem;
  }
</style>
