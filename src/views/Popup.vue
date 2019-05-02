<template>
  <div class="main">
    <sui-button id="first-step" v-if="!showSecondStep"
            :class="{ loading }"
            @click="showConfirmationPopup">
      FIRST STEP
    </sui-button>

    <sui-button id="second-step" v-if="showSecondStep"
            :class="{ loading }"
            @click="showCongrats">
      SECOND STEP
    </sui-button>
  </div>
</template>

<script>
  import { sleep } from '../components/utils'

  export default {
    data() {
      return {
        showSecondStep: false,
        loading: false
      }
    },
    methods: {
      async showConfirmationPopup() {
        await this.loadStep()
        await this.$swal('Are you sure??')
        this.showSecondStep = true
      },
      async showCongrats() {
        await this.loadStep()
        await this.$swal('Congrats!!')
        this.showSecondStep = false
      },
      async loadStep() {
        this.loading = true
        await sleep(1000)
        this.loading = false
      }
    }
  }
</script>
