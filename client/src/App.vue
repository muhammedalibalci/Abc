<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    beforeCreate() { this.$store.commit('initUser');}
}
</script>

<style>

</style>