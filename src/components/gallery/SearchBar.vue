<template>
  <div class="search-bar">
    <!-- <div class="search-bar__button"><i class="fa fa-search search-bar__icon" aria-hidden="true"></i></div> -->
    <input
      v-bind:value="searchQuery"
      v-on:input="updateValue($event.target.value)"
      type="text"
      class="search-bar__input"
    >
  </div>
</template>

<script>
  export default {
    props: ['searchQuery'],
    methods: {
      updateValue: function(value) {
        this.$emit('input', value);
      }
    }
  };
</script>

<style scoped lang="scss">
  $nav-background: rgba(72, 72, 72, 0.53);
  $nav-background-hov: rgba(8, 8, 8, 0.53);

  .search-bar {
    width: 24.4rem;
    height: 16rem;
    background: $nav-background;
    border-bottom: none;
    text-align: center;
    cursor: pointer;
    display: table;

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
      border: none;
    }
  }
</style>
