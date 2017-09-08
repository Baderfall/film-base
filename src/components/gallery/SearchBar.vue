<template>
  <div class="search-bar">
    <!-- <div class="search-bar__button"><i class="fa fa-search search-bar__icon" aria-hidden="true"></i></div> -->
    <input type="text" class="search-bar__input">
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  $border-thick: 2px;
  $nav-background: rgba(72, 72, 72, 0.53);
  $nav-background-hov: rgba(8, 8, 8, 0.53);

  .search-bar {
    width: 240px;
    height: 320px / 2 - $border-thick;
    background: $nav-background;
    border: $border-thick solid #ffffff;
    border-bottom: none;
    text-align: center;
    cursor: pointer;
    display: table;

    &:hover {
      /*background: $nav-background-hov;*/
    }

    &__icon {
      font-size: 9rem;
      line-height: 16rem;
    }

    &__input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background: $nav-background;
      color: #ffffff;
      font-size: 4rem;
      display: table-cell;
      vertical-align: top;
    }
  }
</style>
