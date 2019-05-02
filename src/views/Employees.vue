<template>
  <div class="main">
    <div class="ui toggle checkbox">
      <input type="checkbox"
             id="millennial-filter"
             @input="filterMillennials"
             v-model="filterApplied"
             :checked="false"
             name="public">
      <label>Filter millennials</label>
    </div>
    <table class="ui celled table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Job</th>
      </tr>
      </thead>
      <tbody>
      <Loader v-if="loading"></Loader>
      <tr class="employee" v-for="employee in filteredEmployees" :key="employee.id">
        <td data-label="Name">{{ employee.name }}</td>
        <td data-label="Age">{{ employee.age }}</td>
        <td data-label="Job">{{ employee.job }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Loader from '../components/Loader'
import { sleep } from '../components/utils'
import { loadEmployees } from './employee-loader'

export default {
  components: {
    Loader
  },
  async created() {
    this.allEmployees = await loadEmployees()
    this.filteredEmployees = this.allEmployees
    this.loading = false
  },
  data() {
    return {
      allEmployees: [],
      filteredEmployees: [],
      filterApplied: false,
      loading: true,
    }
  },
  methods: {
    async filterMillennials() {
      this.loading = true
      await sleep(300)
      if (this.filterApplied) this.filteredEmployees = this.allEmployees.filter(employee => employee.age > 26 && employee.age < 38)
      else this.filteredEmployees = this.allEmployees
      this.loading = false
    }
  }
}
</script>
