<template>
  <div>
    <h1>{{ subject }} Videos</h1>
    <div class="video__header">
      <h4 class="video__header-title">Title</h4>
      <h4 class="video__header-category">Category</h4>
      <h4 class="video__header-link">Link</h4>
    </div>
    <div class="video__container" v-for="item in videos" :key="item.id">
      <div class="video__left-container">
        <div class="video__text-container">
        <div class="video__title">
          <router-link :to="`/videos/${subject.toLowerCase()}/${item.id}`">{{
            item.title
          }}</router-link>
        </div>
        <div class="video__category">{{ item.category }}</div>
        </div>
        <div>
        <button class="btn btn-primary" @click="handleSubmit(item.id)">Delete video</button>
        </div>
      </div>
      <div class="video__link">
        <b-embed type="iframe" :src="item.link"></b-embed>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subject: String,
    videos: Array,
    handleSubmit: Function
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

.video__header-title {
    width: 20%;
    border: 1px solid;
}

.video__header-category {
    width: 20%;
    border: 1px solid;
}

.video__title {
    width: 50%;
}

.video__category {
    width: 50%;
}

.video__header-link {
    width: 448px;
    border: 1px solid;
}

.video__link {
    width: 448px;
    height: 252px;
}

.video__left-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 40%;
}

.video__text-container {
    display: flex;
    flex-direction: row;
}
</style>
