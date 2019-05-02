<template lang="html">
  <sui-dropdown v-if="!$attrs.disabled"
    id="country"
    fluid
    :options="countries"
    placeholder="Select Country"
    search
    selection
    :value="value"
    @input="$emit('input', $event)"
  />
</template>

<script>
import { countries } from './countries'

export default {
  props: {
    value: { required: false },
  },
  data() {
    return {
      countries: countries
    };
  },
};
</script>
