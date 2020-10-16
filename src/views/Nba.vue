<template>
  <div>
<h1>NBA Videos</h1>
      <div class="video__header">
          <h4 class="video__header-title">Title</h4>
          <h4 class="video__header-category">Category</h4>
          <h4 class="video__header-link">Link</h4>
          </div>
<div class="video__container" v-for="item in nba" :key="item">
  <div class="video__title">
      <router-link :to="`/videos/nba/${item.id}`">{{item.title}}</router-link>
      </div>
  <div class="video__category">{{item.category}}</div>
  <div class="video__link">
  <b-embed
    type="iframe"
    :src="item.link"
  ></b-embed>
  </div>
</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'nba'
    ])
  }
}
</script>

<style scoped>
.video__header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    width: 800px;
    height: 47px;
    margin: auto;
    background-color: lemonchiffon;
    border-bottom: 1px solid;
}
.video__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 800px;
    height: 278px;
    margin: auto;
    background-color: #fffff0;
    border-bottom: 1px solid;
}

.video__title, .video__header-title {
    width: 20%;
    border: 1px solid;
}

.video__category, .video__header-category {
    width: 20%;
    border: 1px solid;
}

.video__header-link {
    width: 448px;
    border: 1px solid;
}

.video__link {
    width: 448px;
    height: 252px;
}
</style>
