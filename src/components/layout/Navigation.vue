<template>
  <b-container>
    <b-row align-h="end" >
      <b-col cols="4" sm="2" md="1">
        <router-link to="/"><p>HOME</p></router-link>
      </b-col>
      <b-col cols="4" sm="2" md="1">
        <router-link to="/about"><p>ABOUT</p></router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped lang="scss">
  p{
    font-family: Lato, sans-serif;
    font-weight: 400;
    line-height: 20px;
    font-size: 15px;
  }
</style>
