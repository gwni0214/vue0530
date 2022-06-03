<template>
  <HeaderCont />
  <main id="main">
    <TitleCont name1="movie" name2="book" />
    <section class="movie__cont">
      <div class="container">
        <div class="movie__inner container">
          <div class="movie__top">
            <div class="title">Top10 콘텐츠</div>
            <swiper
              :slidesPerView="5"
              :spaceBetween="30"
              :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
              }"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide
                v-for="(movie, index) in topmovies.slice(0, 20)"
                :key="movie.id"
              >
                <span class="num">{{ index + 1 }}</span>
                <img
                  :src="'https://image.tmdb.org/t/p/w154/' + movie.poster_path"
                  :alt="movie.title"
                />
              </swiper-slide>
            </swiper>
          </div>
          <div class="movie__search container">
            <form @submit.prevent="SearchMovies()">
              <label for="" class="ir_so">검색하기</label>
              <input
                type="search"
                id="search"
                placeholder="검색하기"
                v-model="search"
              />
              <button type="submit">검색</button>
            </form>
          </div>
          <div class="movie__list">
            <ul>
              <li v-for="movie in movies" :key="movie.id">
                <a
                  target="_blank"
                  :href="`https://www.themoviedb.org/movie/${movie.id}?language=ko`"
                >
                  <img
                    :src="`https://image.tmdb.org/t/p/w500` + movie.poster_path"
                    :alt="movie.title"
                  />
                </a>
                <p>{{ movie.title }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <ContactCont />
  </main>
  <FooterCont />
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const movies = ref([]);
    const search = ref("Avengers");
    const topmovies = ref([]);
    const SearchMovies = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=9176c3bc2c2c9880b4ee1d76226e2b27&query=${search.value}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          movies.value = data.results;
          search.value = "";
          console.log(movies);
        })
        .catch((error) => console.log("error", error));
    };
    const TopMovies = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=9176c3bc2c2c9880b4ee1d76226e2b27&language=en-US&page=1`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          topmovies.value = data.results;
          console.log(topmovies);
        })
        .catch((error) => console.log("error", error));
    };
    TopMovies();
    SearchMovies();
    return {
      movies,
      search,
      SearchMovies,
      topmovies,
      modules: [Pagination, Navigation, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.movie__top {
  margin-bottom: 5%;
  .num {
    font-size: 8vw;
    line-height: 1;
  }
  .title {
    font-family: var(--subKor_font);
    font-size: 2vw;
  }
}
.swiper-slide {
  padding-top: 2vw;
  img {
    position: relative;
    z-index: 10;
  }
}
.swiper-button-next:after,
.swiper-button-prev:after {
  padding-top: 130px;
}
.movie__cont {
  background-color: var(--dark_bg);
}
.movie__inner {
}
.movie__list {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1%;
    li {
      width: 24%;
      p {
        color: var(--white);
        font-family: var(--subKor_font);
        padding-top: 7px;
      }
    }
  }
}
.movie__search {
  position: relative;
  h2 {
    color: var(--white);
    font-size: 40px;
    font-family: var(--subKor_font);
    text-indent: -9999px;
    width: 0;
    height: 0;
  }
  input {
    border: 2px solid var(--light_border);
    width: 98%;
    background: var(--black);
    border-radius: 50px;
    padding: 1rem 5rem 1rem 2rem;
    color: var(--light_bg);
    font-family: var(--subKor_font);
    margin: 0 1%;
    margin-bottom: 5%;
  }
  button {
    position: absolute;
    right: 20px;
    top: 9px;
    background: transparent;
    border: 0;
    color: var(--black);
    background: var(--white);
    font-family: var(--subKor_font);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 12px;
    transition: opacity 0.3 ease;
    &:active {
      opacity: 0.7;
    }
  }
}
@media (max-width: 1000px) {
  .movie__list ul li {
    flex: 1 1 43%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
@media (max-width: 600px) {
  .movie__list ul li {
    flex: 1 1 96%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
