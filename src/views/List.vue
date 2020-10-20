<template>
  <VideoTable :key="this.$route.params.categories" :subject="subject" :videos="videos" :handleSubmit="handleSubmit" />
  <!-- //first chess is a string, second one is a variable from computed -->
</template>

<script>
import VideoTable from '../components/VideoTable.vue'
import { mapState, mapActions } from 'vuex'
import _ from 'lodash'
export default {
  components: {
    VideoTable
  },
  data () {
    return {
      subject: '',
      videos: []
    }
  },
  methods: {
    ...mapActions(['removeVideo']),
    handleSubmit (id) {
      const subject = this.$route.params.categories
      const payload = {
        subject,
        id
      }
      this.removeVideo(payload)
    },
    personalizeList () {
      const subject = _.capitalize(this.$route.params.categories)
      const videos = this[this.$route.params.categories]
      this.subject = subject
      this.videos = videos
    }
  },
  computed: {
    ...mapState(['barça', 'chess', 'nba'])
  },
  mounted () {
    this.personalizeList()
  },
  updated () {
    this.personalizeList()
  }
}
</script>
