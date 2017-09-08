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
            "id": "tt0111161"
          },
          {
            "title": "The Godfather",
            "rank": "2",
            "id": "tt0068646"
          },
          {
            "title": "The Godfather: Part II",
            "rank": "3",
            "id": "tt0071562"
          },
          {
            "title": "Pulp Fiction",
            "rank": "4",
            "id": "tt0110912"
          },
          {
            "title": "The Good, the Bad and the Ugly",
            "rank": "5",
            "id": "tt0060196"
          },
          {
            "title": "The Dark Knight",
            "rank": "6",
            "id": "tt0468569"
          },
          {
            "title": "12 Angry Men",
            "rank": "7",
            "id": "tt0050083"
          },
          {
            "title": "Schindler's List",
            "rank": "8",
            "id": "tt0108052"
          },
          {
            "title": "The Lord of the Rings: The Return of the King",
            "rank": "9",
            "id": "tt0167260"
          },
          {
            "title": "Fight Club",
            "rank": "10",
            "id": "tt0137523"
          },
        ]
      };
    },
    components: {
      FilmCard,
      ListNavigation
    }
  };
</script>

<style lang="scss">
  $card-height: 320px;
  $card-width: 240px;

  .film-cards-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > * {
      margin-bottom: 4rem;
      margin-right: 3rem;
    }
  }
</style>
