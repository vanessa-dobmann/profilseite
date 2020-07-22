<template>
  <div id="app">
    <div id="page-container">
      <div id="content-wrap">
        <Header></Header>
        <router-view/>
        <Footer class="footer"></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
export default {
  components: { Footer, Header }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a {
    font-weight: bold;
    color: $secondary;

    &.router-link-exact-active {
      color: $secondary;
    }
  }
}
#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 5rem;    /* Footer height */
}
</style>
