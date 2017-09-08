<template>
  <div class="film-cards-list">
    <list-navigation></list-navigation>
    <film-card
      v-for="film in films"
      :key="film.id"
      :title="film.title"
      :imgUrl="film.imgUrl"
    >
    </film-card>
  </div>
</template>

<script>
  import ListNavigation from './ListNavigation.vue';
  import FilmCard from './FilmCard.vue';

  export default {
    data() {
      return {
        films: [
          {
            "title": "The Shawshank Redemption",
            "rank": "1",
            "id": "tt0111161",
            "imgUrl": "https://placeimg.com/240/320/any"
          },
          {
            "title": "The Godfather",
            "rank": "2",
            "id": "tt0068646",
            "imgUrl": "https://placeimg.com/240/320/any"
          },
          {
            "title": "The Godfather: Part II",
            "rank": "3",
            "id": "tt0071562",
            "imgUrl": "https://placeimg.com/240/320/any"
          },
          {
            "title": "Pulp Fiction",
            "rank": "4",
            "id": "tt0110912",
            "imgUrl": "https://placeimg.com/240/320/any"
          },
          {
            "title": "The Good, the Bad and the Ugly",
            "rank": "5",
            "id": "tt0060196",
            "imgUrl": "https://placeimg.com/240/320/any"
          },
          {
            "title": "The Shawshank Redemption",
            "rank": "1",
            "id": "tt0111161",
            "imgUrl": "https://placeimg.com/240/320/any"
          },
          {
            "title": "The Godfather",
            "rank": "2",
            "id": "tt0068646",
            "imgUrl": "https://placeimg.com/240/320/any"
          },
          {
            "title": "The Godfather: Part II",
            "rank": "3",
            "id": "tt0071562",
            "imgUrl": "https://placeimg.com/240/320/any"
          },
          {
            "title": "Pulp Fiction",
            "rank": "4",
            "id": "tt0110912",
            "imgUrl": "https://placeimg.com/240/320/any"
          },
          {
            "title": "The Good, the Bad and the Ugly",
            "rank": "5",
            "id": "tt0060196",
            "imgUrl": "https://placeimg.com/240/320/any"
          }
        ]
      };
    },
    components: {
      FilmCard,
      ListNavigation
    }
  };
</script>

<style scoped>
  .film-cards-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .film-cards-list > * {
    margin-bottom: 4rem;
    margin-right: 3rem;
  }
</style>
