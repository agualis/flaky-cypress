<template>
  <div class="main">
    <LanguageSelect></LanguageSelect>
    <sui-form id="user-form" size="medium" v-if="!saved">
      <sui-form-field>
        <label>First Name</label>
        <input id="first-name" placeholder="First Name" v-model="firstName">
      </sui-form-field>
      <sui-form-field>
        <label>Last Name</label>
        <input id="last-name" placeholder="Last Name" v-model="lastName">
      </sui-form-field>
      <sui-form-field>
        <label>Nationality</label>
        <CountrySelect :disabled="saved" v-model="nationality"></CountrySelect>
      </sui-form-field>

      <sui-button id="save"
                  type="button"
                  :loading="loading"
                  @click="save"
                  :disabled="saved">Submit
      </sui-button>
    </sui-form>
    <sui-card id="user-info" v-if="saved">
      <sui-card-content>
        <sui-card-header>
          <sui-icon name="user" color="green"/>
          USER CREATED!
        </sui-card-header>
        <sui-card-description>
          {{ createdUser }}
        </sui-card-description>
      </sui-card-content>
    </sui-card>

  </div>
</template>

<script>
  import { countryLabel } from '../components/countries'
  import CountrySelect from '../components/CountrySelect'
  import LanguageSelect from '../components/LanguageSelect'
  import { sleep } from '../components/utils'

  export default {
    components: {CountrySelect, LanguageSelect},
    data() {
      return {
        firstName: null,
        lastName: null,
        nationality: null,
        saved: false,
        loading: false
      }
    },
    methods: {
      async save() {
        this.loading = true
        await sleep(3000)
        this.saved = true
        this.loading = false
      }
    },
    computed: {
      createdUser() {
        return `${this.firstName} ${this.lastName} from ${countryLabel(this.nationality)}`
      }
    }
  }
</script>
