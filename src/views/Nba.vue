<template>
  <VideoTable subject="nba" :videos="nba"/>
</template>

<script>
import VideoTable from '../components/VideoTable.vue'
import { mapState } from 'vuex'
export default {
  components: {
    VideoTable
  },
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
