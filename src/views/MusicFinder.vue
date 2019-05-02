<template>
  <div class="main">

    <div v-if="!showRecommendation">
      <h1 is="sui-header">Music Finder</h1>

      To dance:
      <v-select id="dance-select" v-model="group" :options="['Spice Girls', 'Fatboy Slim', 'La Polla Records']"></v-select>
      To sing:
      <v-select id="sing-select" v-model="singer" :options="['Patti Smith', 'C.Tangana', 'Labordeta']"></v-select>
      To cry:
      <v-select id="cry-select" v-model="instrumental" :options="['Luis Cobos', 'The Cure', 'Toundra']"></v-select>

    </div>

    <Recommendation v-if="showRecommendation"></Recommendation>
  </div>

</template>

<script>
  import vSelect from 'vue-select'
  import Recommendation from '../components/Recommendation'

  export default {
    components: {
      Recommendation,
      vSelect
    },
    data() {
      return {
        group: null,
        singer: null,
        instrumental: null,
        loading: false
      }
    },
    computed: {
      showRecommendation() {
        return this.group && this.singer && this.instrumental
      }
    }
  }
</script>
