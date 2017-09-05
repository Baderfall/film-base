<template>
  <div class="wrapper">
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
  import FilmCard from './FilmCard.vue';

  export default {
    data() {
      return {
        films: [
          {
            "title": "The Shawshank Redemption",
            "rank": "1",
            "id": "tt0111161",
            "imgUrl": "tt0111161.jpg"
          }//,
          // {
          //   "title": "The Godfather",
          //   "rank": "2",
          //   "id": "tt0068646",
          //   "imageUrl": "../../globals/images/films/tt0068646.jpg"
          // },
          // {
          //   "title": "The Godfather: Part II",
          //   "rank": "3",
          //   "id": "tt0071562",
          //   "imageUrl": "../../globals/images/films/tt0071562.jpg"
          // },
          // {
          //   "title": "Pulp Fiction",
          //   "rank": "4",
          //   "id": "tt0110912",
          //   "imageUrl": "../../globals/images/films/tt0110912.jpg"
          // },
          // {
          //   "title": "The Good, the Bad and the Ugly",
          //   "rank": "5",
          //   "id": "tt0060196",
          //   "imageUrl": "../../globals/images/films/tt0060196.jpg"
          // }
        ]
      };
    },
    components: {
      FilmCard
    }
  };
</script>
