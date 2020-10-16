<template>
  <div>
      <div>
      {{video.title}} ({{capitalizedCategory}} {{video.category}})
      </div>
  <div class="video__link">
  <b-embed
    type="iframe"
    :src="video.link"
  ></b-embed>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'

export default {
  data () {
    return {
      video: {},
      capitalizedCategory: _.capitalize(this.$route.params.categories)
    }
  },
  computed: {
    ...mapState([
      'chess',
      'nba'
    ])
  },
  mounted () {
    const video = this[this.$route.params.categories][this.$route.params.title]// bracket notation, result of this[this.$route.params.categories] will be this.chess or this.nba, and then we get the position on the second part of the expression
    console.log(video)
    this.video = video
  }
}
</script>
