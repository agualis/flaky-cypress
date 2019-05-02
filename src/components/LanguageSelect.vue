<template lang="html">
  <div class="lang">
    <label>Language</label>
    <sui-form-field>

      <sui-dropdown
          fluid
          :options="languages"
          placeholder="Select Language"
          search
          selection
          v-model="current"
      />
    </sui-form-field>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: 'gb',
        languages: [
          {key: 'gb', value: 'gb', flag: 'gb' },
          {key: 'es', value: 'es', flag: 'es' }
        ]
      };
    }
  };
</script>
