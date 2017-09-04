<template>
  <div>
    <sidebar></sidebar>
    <main class="main-content-outer">
      <slot></slot>
    </main>
  </div>
</template>

<script>
  import Sidebar from '../components/Sidebar.vue';

  export default {
    components: {
      Sidebar
    }
  };
</script>

<style>
  .main-content-outer {
    margin-left: 28rem;
    padding: 4rem;
  }
</style>
