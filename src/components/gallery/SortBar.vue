<template>
  <div class="sort-bar">
    <div class="sort-bar__item">
      <p class="sort-bar__text">Top rated<i class="fa fa-caret-down" aria-hidden="true"></i></p>
    </div>
    <div class="sort-bar__item">
      <p class="sort-bar__text">Alphabetic<i class="fa fa-caret-down" aria-hidden="true"></i></p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  .sort-bar {
    border: 2px solid #ffffff;
    width: 24rem;

    .sort-bar__item {
      height: 8rem;
      background: rgba(72, 72, 72, 0.53);
      cursor: pointer;

      &:hover {
        background: rgba(8, 8, 8, 0.53);
      }
    }

    &__text {
      line-height: 8rem;
      font-size: 2rem;
      margin: 0;
      text-align: right;
      padding: 0 3rem;

      i {
        vertical-align: middle;
        font-size: 5rem;
        margin-left: 1.5rem;
      }
    }
  }
</style>
