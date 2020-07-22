<template>
  <div class="layout__header">
    <b-container fluid="true">
      <b-row align-h="between" align-v="start" class="m-4">
        <b-col cols="2" md="1" class="mt-1 logo-wrapper" align-self="start">
          <img src="../../assets/logo.png" alt="Logo" class="logo"/>
        </b-col>
        <b-col class="nav-wrapper">
          <Navigation/>
        </b-col>
      </b-row>
    </b-container>
   </div>
</template>

<script>
import Navigation from './Navigation'
export default {
  name: 'Header',
  components: { Navigation }
}
</script>

<style scoped lang="scss">
  .layout__header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
  }
  .logo {
    max-height: 100%;
  }
  .logo-wrapper {
    height: 25px;
  }
  .nav-wrapper{
  }
</style>
