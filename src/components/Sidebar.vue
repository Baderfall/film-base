<template>
  <aside class="sidebar">
    <div class="sidebar-logo">
      <h1 class="sidebar-logo__heading"><a href="#">FilmBase</a></h1>
    </div>
    <div class="pesonal-info">
      <p class="personal-info__name">Alex Yarmosh</p>
      <div class="personal-info__list">
        <p class="personal-info__item">Rank: Newcomer</p>
        <p class="personal-info__item">Score: 13</p>
      </div>
    </div>
    <nav class="sidebar-menu">
      <sidebar-item class="sidebar-menu__item" href="/">Main page</sidebar-item>
      <sidebar-item class="sidebar-menu__item" href="/my-profile">My profile</sidebar-item>
      <sidebar-item class="sidebar-menu__item" href="/gallery">Gallery</sidebar-item>
      <sidebar-item class="sidebar-menu__item" href="/top-rated">Top rated</sidebar-item>
      <sidebar-item class="sidebar-menu__item" href="/random">Random film</sidebar-item>
    </nav>
  </aside>
</template>

<script>
  import SidebarItem from './Sidebar-menu-item.vue';

  export default {
    components: {
      SidebarItem
    }
  };
</script>

<style scoped>
  /* Sidebar */

  .sidebar {
    position: fixed;
    width: 28rem;
    height: 100%;
    padding-top: 2rem;
    background: rgba(33, 33, 33, 0.84);
    border-right: 5px solid #f73f4e;
    color: #dddddd;
  }

  /* Logo */

  .sidebar-logo__heading {
    font-size: 4rem;
    color: #f73f4e;
    text-align: center;
    font-family: 'Streamster', sans-serif;
  }

  /* Personal info */

  .pesonal-info {
    font-size: 1.3rem;
    text-align: center;
    color: #f73f4e;
  }

  .personal-info__list {
    display: flex;
    justify-content: space-around;
  }

  /* Sidebar item */

  .sidebar-menu__item {
    display: block;
    color: #ffffff;
    font-size: 2rem;
    text-decoration: none;
    text-align: right;
    padding: 2rem 4rem;
  }

  .sidebar-menu__item:hover,
  .sidebar-menu__item.active {
    background: #f73f4e;
  }
</style>
