<template>
  <div>
    <b-table striped hover :items="chess"></b-table>
<div v-for="item in chess" :key="item">
  {{item.title}}
  <b-embed class="video"
    type="iframe"
    width="560"
    height="315"
    :src="item.link"
  ></b-embed>
</div>
</div>
</template>

<script>
import chess from '@/data/chess'
export default {
  data () {
    return {
      chess
    }
  }
}
</script>
