<template>
  <b-container>
    <LayoutHeader/>
    <LayoutFooter/>
  </b-container>
</template>

<script>
import LayoutHeader from './LayoutHeader'
import LayoutFooter from './LayoutFooter'
export default {
  name: 'Layout',
  components: { LayoutFooter, LayoutHeader }
}
</script>

<style scoped lang="scss">
</style>
