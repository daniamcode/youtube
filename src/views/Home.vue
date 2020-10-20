<template>
<div>
  <h1 class="home">
    My {{videoCount}} favourite youtube videos by subject!
  </h1>
  <br>
  <button @click="toggleVideoForm" class="btn btn-primary">Add new video</button>
  <br><br><br>

  <b-form class="form__container" @submit.prevent="handleSubmit" v-if="showVideoForm">

      <b-form-group id="input-group-2" label="Title:" label-for="input-1">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.title"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Subject:" label-for="input-2">
        <b-form-select
          id="input-3"
          v-model="formData.subject"
          :options="['chess', 'nba']"
          required
        ></b-form-select>
      </b-form-group>

          <b-form-group id="input-group-2" label="Category:" label-for="input-3">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.category"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Link:" label-for="input-4">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.link"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showVideoForm: false,
      formData: {
        title: '',
        subject: '',
        category: null,
        link: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'videoCount',
      'videoChessCount',
      'videoNbaCount'

    ])// computed not methods cause we want to listen to changes
  },
  methods: {
    ...mapActions([
      'addVideo'
    ]),
    toggleVideoForm () {
      this.showVideoForm = !this.showVideoForm
    },
    handleSubmit () {
      const { subject, title, category, link } = this.formData
      let id = 0
      if (subject === 'chess') {
        id = this.videoChessCount + 1
      }
      if (subject === 'nba') {
        id = this.videoNbaCount + 1
      }
      const payload = {
        subject,
        video: {
          title,
          category,
          link,
          id
        }
      }
      this.addVideo(payload)

      // reset form after submit
      this.formData = {
        title: '',
        subject: '',
        category: null,
        link: ''
      }
    }
  }
}
</script>

<style scoped>
.form__container {
  width: 30%;
  margin: auto;
}
</style>
