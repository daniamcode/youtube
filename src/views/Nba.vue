<template>
  <VideoTable subject="NBA" :videos="nba" :handleSubmit="handleSubmit" />
</template>

<script>
import VideoTable from '../components/VideoTable.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    VideoTable
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['removeVideo']),
    handleSubmit (id) {
      const subject = 'nba'
      const payload = {
        subject,
        id
      }
      this.removeVideo(payload)
    }
  },
  computed: {
    ...mapState([
      'nba'
    ])
  }
}
</script>
