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
  @font-face {
    font-family: "Streamster";
    src: url("./fonts/Streamster.ttf");
  }

  @font-face {
    font-family: "Lazer84";
    src: url("./fonts/Lazer84.ttf");
  }

  body, html {
    height: 100%;
    background-image: url(./images/background.png);
    font-family: 'Lazer84', sans-serif;
    font-size: 10px;
    color: #ffffff;
  }

  .main-content-outer {
    margin-left: 28rem;
    padding: 4rem;
  }
</style>
