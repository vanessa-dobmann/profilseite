<template>
  <div class="footer">
    <b-container fluid="true">
      <b-row class="justify-content-center justify-content-sm-end">
        <b-col cols="2" sm="1" class="m-1">
          <font-awesome-icon :icon="[ 'fab', 'linkedin' ]" class="icon"/>
        </b-col>
        <b-col cols="2" sm="1" class="m-1">
          <font-awesome-icon :icon="[ 'fab', 'instagram' ]" class="icon"/>
        </b-col>
        <b-col cols="2" sm="1" class="m-1">
          <font-awesome-icon icon="envelope" class="icon"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .icon{
    height: 20px;
    width: 20px;
    color: $secondary;
  }
  .footer{
    position: fixed;
    bottom: 3rem;
    left: 0;
    right: 3rem;
    @media (max-width: 576px) {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 5rem;
    }
  }
</style>
