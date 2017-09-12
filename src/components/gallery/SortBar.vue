<template>
  <div class="sort-bar">
    <button value="rank" v-on:click="updateValue($event.target.value)" class="sort-bar__button">
      Top rated<i class="fa fa-caret-down" aria-hidden="true"></i>
    </button>
    <button value="title" v-on:click="updateValue($event.target.value)" class="sort-bar__button">
      Alphabetic<i class="fa fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['sortBy'],
    methods: {
      updateValue: function(value) {
        var order = this.sortBy.order;
        if (this.sortBy.field === value) {
          if (order === 'asc') {
            order = 'desc';
          } else if (order === 'desc') {
            order = 'asc';
          }
        }
        this.$emit( 'update:sortBy', {field: value, order: order} );
      }
    }
  };
</script>

<style scoped lang="scss">
  .sort-bar {
    border-top: 2px solid #ffffff;
    width: 24.4rem;

    &__button {
      height: 8rem;
      background: rgba(72, 72, 72, 0.53);
      cursor: pointer;
      display: block;
      width: 100%;
      border: none;
      font-family: inherit;
      color: #ffffff;
      font-size: 2.5rem;

      &:hover {
        background: rgba(8, 8, 8, 0.53);
      }

      i {
        font-size: 3rem;
        margin-left: 1rem;
      }
    }
  }
</style>
