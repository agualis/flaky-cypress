<template>
  <div>
    <span v-if="loading">
      <h2>Looking for recommendations...</h2>
      <Loader/>
    </span>
    <sui-card id="recommendation" v-else>
        <sui-card-content>
          <sui-card-header>
            <sui-icon name="heart" color="red"/>
            NO RECOMMENDATION FOUND :(
          </sui-card-header>
          <sui-card-description>
            Please try again!
          </sui-card-description>
        </sui-card-content>
      </sui-card>
  </div>
</template>

<script>
  import Loader from './Loader'
  import { sleep } from './utils'

  export default {
    components: {
      Loader
    },
    data() {
      return {
        loading: true
      }
    },
    async created(){
      await sleep(1000)
      this.loading=false
    }
  }
</script>
