<template>
  <div>index</div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'default',
  asyncData({ store }) {
    const metric = store.metrics
  }
})
export default class index extends Vue {
  get metrics() {
    return this.$store.metrics
  }
}
</script>
