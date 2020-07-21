<template>
  <div class="layout__header">
    <b-container fluid="true" class="mt-4 ml-2 mr-2">
      <b-row align-h="between" align-v="start">
        <b-col cols="2" class="m-1 logo-wrapper">
          <img src="../../assets/logo.png" alt="Logo" class="logo"/>
        </b-col>
        <b-col cols="4" class="m-1">
          Navigation
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

<style scoped lang="scss">
  .layout__header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .logo {
    max-height: 100%;
  }

  .logo-wrapper {
    height: 30px;
  }
</style>
