<template>
  <div>
      <h1>{{subject}} Videos</h1>
      <div class="video__header">
          <h4 class="video__header-title">Title</h4>
          <h4 class="video__header-category">Category</h4>
          <h4 class="video__header-link">Link</h4>
          </div>
<div class="video__container" v-for="item in videos" :key="item">
  <div class="video__title">
      <router-link :to="`/videos/${videos}/${item.id}`">{{item.title}}</router-link>
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
export default {
  props: {
    subject: String,
    videos: Array
  }
}
</script>
